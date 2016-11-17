"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Tabs = require("material-ui/Tabs");

var _TextField = require("material-ui/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require("material-ui/RaisedButton");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Subheader = require("material-ui/Subheader");

var _Subheader2 = _interopRequireDefault(_Subheader);

var _colors = require("material-ui/styles/colors");

var _icons = require("./assets/icons");

var _client = require("./client");

var _client2 = _interopRequireDefault(_client);

var _FrmSuperLogin = {
	"paper": "FrmSuperLogin__paper___3ueBx",
	"sub_paper": "FrmSuperLogin__sub_paper___3D2WC",
	"padding18": "FrmSuperLogin__padding18___3fVoX",
	"button": "FrmSuperLogin__button___1wqWa",
	"social_button": "FrmSuperLogin__social_button___1_JGN",
	"subheader": "FrmSuperLogin__subheader___1OoWd"
};

var _FrmSuperLogin2 = _interopRequireDefault(_FrmSuperLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/micky2be/superlogin-client


var TabsLogin = function (_React$Component) {
	(0, _inherits3.default)(TabsLogin, _React$Component);

	function TabsLogin(props) {
		(0, _classCallCheck3.default)(this, TabsLogin);

		var _this = (0, _possibleConstructorReturn3.default)(this, (TabsLogin.__proto__ || (0, _getPrototypeOf2.default)(TabsLogin)).call(this, props));

		_this.tabChange = function (value) {
			if (value === 'a' || value === 'b') {
				_this.setState({
					value: value
				});
			}
		};

		_this.state = {
			value: 'a'
		};
		return _this;
	}

	(0, _createClass3.default)(TabsLogin, [{
		key: "buttonTouchTap",
		value: function buttonTouchTap(provider) {
			return function () {
				_client2.default.socialAuth(provider);
			};
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: _FrmSuperLogin2.default.paper },
				_react2.default.createElement(
					"div",
					{ zDepth: 3, rounded: false },
					_react2.default.createElement(
						_Tabs.Tabs,
						{
							value: this.state.value,
							onChange: this.tabChange
						},
						_react2.default.createElement(
							_Tabs.Tab,
							{ label: "\u0412\u0445\u043E\u0434", value: "a" },
							_react2.default.createElement(
								"div",
								{ className: _FrmSuperLogin2.default.sub_paper },
								_react2.default.createElement(_TextField2.default, {
									hintText: "login",
									floatingLabelText: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_TextField2.default, {
									hintText: "password",
									floatingLabelText: "\u041F\u0430\u0440\u043E\u043B\u044C",
									type: "password"
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_RaisedButton2.default, { label: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?", className: _FrmSuperLogin2.default.button }),
								_react2.default.createElement(_RaisedButton2.default, { label: "\u0412\u043E\u0439\u0442\u0438", disabled: true, className: _FrmSuperLogin2.default.button })
							),
							_react2.default.createElement(
								"div",
								{ className: _FrmSuperLogin2.default.sub_paper },
								_react2.default.createElement(
									_Subheader2.default,
									{ className: _FrmSuperLogin2.default.subheader },
									"\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0443\u0447\u0435\u0442\u043D\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439:"
								),
								_react2.default.createElement(_RaisedButton2.default, {
									label: "Google",
									className: _FrmSuperLogin2.default.social_button,
									labelStyle: { width: 110, textAlign: 'left', display: 'inline-block' },
									icon: _react2.default.createElement(_icons.GoogleIcon, { viewBox: "0 0 256 262", style: { width: 18, height: 18 },
										color: _colors.blue500 }),
									onTouchTap: this.buttonTouchTap("google")
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_RaisedButton2.default, {
									label: "Yandex",
									className: _FrmSuperLogin2.default.social_button,
									labelStyle: { width: 110, textAlign: 'left', display: 'inline-block' },
									icon: _react2.default.createElement(_icons.YandexIcon, { viewBox: "0 0 180 190", style: { width: 18, height: 18 },
										color: _colors.red500 }),
									onTouchTap: this.buttonTouchTap("yandex")
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_RaisedButton2.default, {
									label: "Facebook",
									className: _FrmSuperLogin2.default.social_button,
									labelStyle: { width: 110, textAlign: 'left', display: 'inline-block' },
									icon: _react2.default.createElement(_icons.FacebookIcon, { viewBox: "0 0 420 420", style: { width: 18, height: 18 },
										color: _colors.blue500 }),
									onTouchTap: this.buttonTouchTap("facebook")
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_RaisedButton2.default, {
									label: "\u0412 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435",
									className: _FrmSuperLogin2.default.social_button,
									labelStyle: { width: 110, textAlign: 'left', display: 'inline-block' },
									icon: _react2.default.createElement(_icons.GitHubIcon, { viewBox: "0 0 256 250", style: { width: 18, height: 18 } }),
									onTouchTap: this.buttonTouchTap("vkontakte")
								})
							)
						),
						_react2.default.createElement(
							_Tabs.Tab,
							{ label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", value: "b" },
							_react2.default.createElement(
								"div",
								{ style: { padding: 18 } },
								_react2.default.createElement(_TextField2.default, {
									hintText: "name",
									fullWidth: true,
									floatingLabelText: "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F"
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_TextField2.default, {
									hintText: "login",
									fullWidth: true,
									floatingLabelText: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_TextField2.default, {
									hintText: "email",
									fullWidth: true,
									floatingLabelText: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_TextField2.default, {
									hintText: "password",
									fullWidth: true,
									floatingLabelText: "\u041F\u0430\u0440\u043E\u043B\u044C",
									type: "password"
								}),
								_react2.default.createElement("br", null),
								_react2.default.createElement(_TextField2.default, {
									hintText: "confirm_password",
									fullWidth: true,
									floatingLabelText: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
									type: "password"
								})
							)
						)
					)
				)
			);
		}
	}]);
	return TabsLogin;
}(_react2.default.Component);

exports.default = TabsLogin;