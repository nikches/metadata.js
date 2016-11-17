'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = plugin;

var _superloginClient = require('superlogin-client');

var _superloginClient2 = _interopRequireDefault(_superloginClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_config = {
	// The base URL for the SuperLogin routes with leading and trailing slashes (defaults to '/auth/')
	baseUrl: 'http://localhost:3000/auth/',
	// A list of API endpoints to automatically add the Authorization header to
	// By default the host the browser is pointed to will be added automatically
	endpoints: ['api.example.com'],
	// Set this to true if you do not want the URL bar host automatically added to the list
	noDefaultEndpoint: false,
	// Where to save your session token: localStorage ('local') or sessionStorage ('session'), default: 'local'
	storage: 'local',
	// The authentication providers that are supported by your SuperLogin host
	providers: ['google', 'yandex', 'github', 'facebook'],
	// Sets when to check if the session is expired during the setup.
	// false by default.
	checkExpired: false,
	// A float that determines the percentage of a session duration, after which SuperLogin will automatically refresh the
	// token. For example if a token was issued at 1pm and expires at 2pm, and the threshold is 0.5, the token will
	// automatically refresh after 1:30pm. When authenticated, the token expiration is automatically checked on every
	// request. You can do this manually by calling superlogin.checkRefresh(). Default: 0.5
	refreshThreshold: 0.5
}; /**
    * Содержит методы и подписки на события superlogin-client
    * https://github.com/micky2be/superlogin-client
    *
    * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
    */

var default_getDbUrl = _superloginClient2.default.getDbUrl.bind(_superloginClient2.default);
_superloginClient2.default.getDbUrl = function (name) {
	return default_getDbUrl(name).replace('http://', 'https://').replace('cou206:5984', 'kint.oknosoft.ru/couchdb');
};

function attach($p) {

	// Session is an object that contains all the session information returned by SuperLogin, along with serverTimeDiff, the difference between the server clock and the local clock.
	_superloginClient2.default.on('login', function (event, session) {});

	// Message is a message that explains why the user was logged out: 'Logged out' or 'Session expired'.
	_superloginClient2.default.on('logout', function (event, message) {});

	// Broadcast when the token is refreshed.
	_superloginClient2.default.on('refresh', function (event, newSession) {});

	//
	_superloginClient2.default.on('link', function (event, provider) {});

	/**
  * Подмена обработчиков событий PouchDB
  */

	/**
  * ### После загрузки локальных данных
  * если разрешено сохранение пароля или демо-режим, выполняем попытку авторизации
  * @param page
  * @return {{type: string, payload: *}}
  */
	function pouch_data_loaded(page) {

		return function (dispatch, getState) {

			// First dispatch: the app state is updated to inform
			// that the API call is starting.

			dispatch({
				type: $p.rx_action_types.POUCH_DATA_LOADED,
				payload: page
			});

			var _getState = getState();

			var meta = _getState.meta;

			// если вход еще не выполнен...

			if (!meta.user.logged_in && _superloginClient2.default.authenticated()) {

				setTimeout(function () {

					var session = _superloginClient2.default.getSession();

					// устанавливаем текущего пользователя и пытаемся авторизоваться
					if (session) {

						dispatch($p.rx_actions.USER_DEFINED(session.user_id));

						dispatch({
							type: $p.rx_action_types.USER_TRY_LOG_IN,
							payload: { name: session.token, password: session.password, provider: session.provider }
						});

						return $p.adapters.pouch.log_in(session.token, session.password);
					}
				}, 10);
			}
		};
	}

	/**
  * Actions
  */

	function handleSocialAuth(provider) {

		// Thunk middleware знает, как обращаться с функциями.
		// Он передает метод действия в качестве аргумента функции,
		// т.о, это позволяет отправить действие самостоятельно.

		return function (dispatch, getState) {

			// First dispatch: the app state is updated to inform
			// that the API call is starting.

			dispatch({
				type: $p.rx_action_types.USER_TRY_LOG_IN,
				payload: { name: 'oauth', provider: provider }
			});

			// The function called by the thunk middleware can return a value,
			// that is passed on as the return value of the dispatch method.

			// In this case, we return a promise to wait for.
			// This is not required by thunk middleware, but it is convenient for us.

			return _superloginClient2.default.socialAuth(provider).then(function (session) {
				$p.adapters.pouch.log_in(session.token, session.password);
			});

			// In a real world app, you also want to
			// catch any error in the network call.
		};
	}

	// запускает авторизацию - обычную или SuperLogin
	function handleLogin(login, password) {
		return $p.rx_actions.USER_TRY_LOG_IN($p.adapters.pouch, login, password);
	}

	// завершает сессию
	function handleLogOut() {

		return function (dispatch, getState) {

			$p.adapters.pouch.log_out().then(function () {
				return _superloginClient2.default.logout();
			}).then(function () {
				dispatch({
					type: $p.rx_action_types.USER_LOG_OUT,
					payload: { name: getState().meta.user.name }
				});
			});
		};
	}

	// регистрация нового пользователя
	function handleRegister(registration) {

		return function (dispatch, getState) {

			_superloginClient2.default.register(registration).then(function () {
				if (_superloginClient2.default.authenticated()) {
					//flashy.set('Registration successful, welcome!');
					//$state.go('navbar.todos');

					var session = _superloginClient2.default.getSession();
					dispatch({
						type: USER_LOG_IN,
						payload: { name: session.name, password: session.password, provider: 'local' }
					});
				} else {
					//toasty('Registration successful.');
				}
			});
		};
	}

	function handleLink(provider) {

		return function (dispatch, getState) {

			_superloginClient2.default.link(provider).then(function () {
				// toasty(provider.toUpperCase() + ' link successful!');
				// refresh();
			});
		};
	}

	// генерирует письмо восстановления пароля
	function handleForgotPassword() {

		return _superloginClient2.default.forgotPassword(email).then(function () {
			toasty('Check your email!');
		}, function (err) {
			if (err) {
				console.error(err);
			}
		});
	}

	function handleCheckUsername(name) {}

	function handlecheckEmail(email) {}

	function handleSetPrm(attr) {
		for (var key in attr) {
			$p.wsql.set_user_param(key, attr[key]);
		}
		return $p.rx_actions.PRM_CHANGE(attr);
	}

	// экспортируем superlogin в MetaEngine
	Object.defineProperties($p, {

		superlogin: {
			get: function get() {
				return _superloginClient2.default;
			}
		},

		sl_actions: {
			value: {
				handleSocialAuth: handleSocialAuth,
				handleLogin: handleLogin,
				handleLogOut: handleLogOut,
				handleRegister: handleRegister,
				handleForgotPassword: handleForgotPassword,
				handleCheckUsername: handleCheckUsername,
				handlecheckEmail: handlecheckEmail,
				handleSetPrm: handleSetPrm
			}
		}
	});

	// меняем подписки на события pouchdb
	var old_rx_events = $p.rx_events;
	$p.rx_events = function (store) {

		old_rx_events.call($p, store);

		$p.adapters.pouch.removeAllListeners('pouch_data_loaded');
		$p.adapters.pouch.on('pouch_data_loaded', function (page) {
			store.dispatch(pouch_data_loaded(page));
		});

		$p.adapters.pouch.removeAllListeners('user_log_in');
		$p.adapters.pouch.on('user_log_in', function () {

			var user_name = _superloginClient2.default.getSession().user_id;

			if ($p.cat && $p.cat.users) {

				$p.cat.users.find_rows_remote({
					_view: 'doc/number_doc',
					_key: {
						startkey: ['cat.users', 0, user_name],
						endkey: ['cat.users', 0, user_name]
					}
				}).then(function (res) {
					if (res.length) {
						return res[0];
					} else {
						var user = $p.cat.users.create({
							ref: $p.utils.generate_guid(),
							id: user_name
						});
						return user.save();
					}
				}).then(function () {
					store.dispatch($p.rx_actions.USER_LOG_IN(user_name));
				});
			} else {
				store.dispatch($p.rx_actions.USER_LOG_IN(user_name));
			}
		});
	};
}

function plugin(config) {

	_superloginClient2.default.configure(config || default_config);

	return {
		constructor: function constructor() {

			attach(this);
		}
	};
};
