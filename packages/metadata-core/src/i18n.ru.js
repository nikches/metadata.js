/**
 * Строковые константы интернационализации
 *
 * &copy; Evgeniy Malyarov http://www.oknosoft.ru 2014-2016
 *
 * @module common
 * @submodule i18n
 */


const msg = {

	fias: {
		types: ["владение", "здание", "помещение"],
		// Код, Наименование, Тип, Порядок, КодФИАС
		"1010": {name: "дом",            type: 1, order: 1, fid: 2, syn: [" д.", " д ", " дом"]},
		"1020": {name: "владение",        type: 1, order: 2, fid: 1, syn: [" вл.", " вл ", " влад.", " влад ", " владен.", " владен ", " владение"]},
		"1030": {name: "домовладение",    type: 1, order: 3, fid: 3},

		"1050": {name: "корпус",        type: 2, order: 1, syn: [" к.", " к ", " корп.", " корп ", "корпус"]},
		"1060": {name: "строение",    type: 2, order: 2, fid: 1, syn: [" стр.", " стр ", " строен.", " строен ", "строение"]},
		"1080": {name: "литера",        type: 2, order: 3, fid: 3, syn: [" л.", " л ", " лит.", " лит ", "литера"]},
		"1070": {name: "сооружение",    type: 2, order: 4, fid: 2, syn: [" соор.", " соор ", " сооруж.", " сооруж ", "сооружение"]},
		"1040": {name: "участок",    type: 2, order: 5, syn: [" уч.", " уч ", "участок"]},

		"2010": {name: "квартира",    type: 3, order: 1, syn: ["кв.", "кв ", "кварт.", "кварт ", "квартира", "-"]},
		"2030": {name: "офис",        type: 3, order: 2, syn: ["оф.", "оф ", "офис", "-"]},
		"2040": {name: "бокс",        type: 3, order: 3},
		"2020": {name: "помещение",    type: 3, order: 4},
		"2050": {name: "комната",    type: 3, order: 5, syn: ["комн.", "комн ", "комната"]},

		//	//  сокращения 1C для поддержки обратной совместимости при парсинге
		//	this["2010"]:{name: "кв.",	type: 3, order: 6},
		// 	this["2030"]:{name: "оф.",	type: 3, order: 7},
		// Уточняющие объекты
		"10100000": {name: "Почтовый индекс"},
		"10200000": {name: "Адресная точка"},
		"10300000": {name: "Садовое товарищество"},
		"10400000": {name: "Элемент улично-дорожной сети, планировочной структуры дополнительного адресного элемента"},
		"10500000": {name: "Промышленная зона"},
		"10600000": {name: "Гаражно-строительный кооператив"},
		"10700000": {name: "Территория"}
	},

	// публичные методы, экспортируемые, как свойства $p.msg
	store_url_od:"https://chrome.google.com/webstore/detail/hcncallbdlondnoadgjomnhifopfaage",

	argument_is_not_ref:"Аргумент не является ссылкой",
	addr_title:"Ввод адреса",

	cache_update_title:"Обновление кеша браузера",
	cache_update:"Выполняется загрузка измененных файлов<br/>и их кеширование в хранилище браузера",
	cancel:"Отмена",

	delivery_area_empty:"Укажите район доставки",

	empty_login_password:"Не указаны имя пользователя или пароль",
	empty_response:"Пустой ответ сервера",
	empty_geocoding:"Пустой ответ геокодера. Вероятно, отслеживание адреса запрещено в настройках браузера",
	error_geocoding:"Ошибка геокодера",

	error_auth: "Авторизация пользователя не выполнена",
	error_critical: "Критическая ошибка",
	error_metadata: "Ошибка загрузки метаданных конфигурации",
	error_network: "Ошибка сети или сервера - запрос отклонен",
	error_rights: "Ограничение доступа",
	error_low_acl: "Недостаточно прав для выполнения операции",

	file_size: "Запрещена загрузка файлов<br/>размером более ",
	file_confirm_delete: "Подтвердите удаление файла ",
	file_new_date: "Файлы на сервере обновлены<br /> Рекомендуется закрыть браузер и войти<br />повторно для применения обновления",
	file_new_date_title: "Версия файлов",

	init_catalogues: "Загрузка справочников с сервера",
	init_catalogues_meta: ": Метаданные объектов",
	init_catalogues_tables: ": Реструктуризация таблиц",
	init_catalogues_nom: ": Базовые типы + номенклатура",
	init_catalogues_sys: ": Технологические справочники",
	init_login: "Укажите имя пользователя и пароль",

	requery: "Повторите попытку через 1-2 минуты",

	get limit_query(){return "Превышено число обращений к серверу<br/>Запросов за минуту:%1<br/>Лимит запросов:%2<br/>" + this.requery},

	long_operation: "Длительная операция",
	logged_in: "Авторизован под именем: ",
	log_out_title: "Отключиться от сервера?",
	log_out_break: "<br/>Завершить синхронизацию?",
	sync_title: "Обмен с сервером",
	sync_complite: "Синхронизация завершена",

	main_title: "Окнософт: заказ дилера ",
	mark_delete_confirm: "Пометить объект %1 на удаление?",
	mark_undelete_confirm: "Снять пометку удаления с объекта %1?",
	meta: {
		enm: "Перечисление",
		cat: "Справочник",
		doc: "Документ",
		cch: "План видов характеристик",
		cacc: "План счетов",
		tsk : "Задача",
		ireg: "Регистр сведений",
		areg: "Регистр накопления",
		accreg: "Регистр бухгалтерии",
		bp: "Бизнес процесс",
		ts_row: "Строка табличной части",
		dp: "Обработка",
		rep: "Отчет"
	},
	meta_classes: {
		enm: "Перечисления",
		cat: "Справочники",
		doc: "Документы",
		cch: "Планы видов характеристик",
		cacc: "Планы счетов",
		tsk: "Задачи",
		ireg: "Регистры сведений",
		areg: "Регистры накопления",
		accreg: "Регистры бухгалтерии",
		bp: "Бизнес процессы",
		dp: "Обработки",
		rep: "Отчеты"
	},
	meta_mgrs: {
		mgr: "Менеджер",
		get enm(){ return this.mgr + " перечислений"},
		get cat(){ return this.mgr + " справочников"},
		get doc(){ return this.mgr + " документов"},
		get cch(){ return this.mgr + " планов видов характеристик"},
		get cacc(){ return this.mgr + " планов счетов"},
		get tsk(){ return this.mgr + " задач"},
		get ireg(){ return this.mgr + " регистров сведений"},
		get areg(){ return this.mgr + " регистров накопления"},
		get accreg(){ return this.mgr + " регистров бухгалтерии"},
		get bp(){ return this.mgr + " бизнес-процессов"},
		get dp(){ return this.mgr + " обработок"},
		get rep(){ return this.mgr + " отчетов"}
	},
	meta_cat_mgr: "Менеджер справочников",
	meta_doc_mgr: "Менеджер документов",
	meta_enn_mgr: "Менеджер перечислений",
	meta_ireg_mgr: "Менеджер регистров сведений",
	meta_areg_mgr: "Менеджер регистров накопления",
	meta_accreg_mgr: "Менеджер регистров бухгалтерии",
	meta_dp_mgr: "Менеджер обработок",
	meta_task_mgr: "Менеджер задач",
	meta_bp_mgr: "Менеджер бизнес-процессов",
	meta_reports_mgr: "Менеджер отчетов",
	meta_charts_of_accounts_mgr: "Менеджер планов счетов",
	meta_charts_of_characteristic_mgr: "Менеджер планов видов характеристик",
	meta_extender: "Модификаторы объектов и менеджеров",

	modified_close: "Объект изменен<br/>Закрыть без сохранения?",
	mandatory_title: "Обязательный реквизит",
	mandatory_field: "Укажите значение реквизита '%1'",

	no_metadata: "Не найдены метаданные объекта '%1'",
	no_selected_row: "Не выбрана строка табличной части '%1'",
	no_dhtmlx: "Библиотека dhtmlx не загружена",
	not_implemented: "Не реализовано в текущей версии",

	offline_request: "Запрос к серверу в автономном режиме",
	onbeforeunload: "Окнософт: легкий клиент. Закрыть программу?",
	order_sent_title: "Подтвердите отправку заказа",
	order_sent_message: "Отправленный заказ нельзя изменить.<br/>После проверки менеджером<br/>он будет запущен в работу",

	report_error: "<i class='fa fa-exclamation-circle fa-2x fa-fw'></i> Ошибка",
	report_prepare: "<i class='fa fa-spinner fa-spin fa-2x fa-fw'></i> Подготовка отчета",
	report_need_prepare: "<i class='fa fa-info fa-2x fa-fw'></i> Нажмите 'Сформировать' для получения отчета",
	report_need_online: "<i class='fa fa-plug fa-2x fa-fw'></i> Нет подключения. Отчет недоступен в автономном режиме",

	request_title: "Запрос регистрации",
	request_message: "Заявка зарегистрирована. После обработки менеджером будет сформировано ответное письмо",

	select_from_list: "Выбор из списка",
	select_grp: "Укажите группу, а не элемент",
	select_elm: "Укажите элемент, а не группу",
	select_file_import: "Укажите файл для импорта",

	srv_overload: "Сервер перегружен",
	sub_row_change_disabled: "Текущая строка подчинена продукции.<br/>Строку нельзя изменить-удалить в документе<br/>только через построитель",
	sync_script: "Обновление скриптов приложения:",
	sync_data: "Синхронизация с сервером выполняется:<br />* при первом старте программы<br /> * при обновлении метаданных<br /> * при изменении цен или технологических справочников",
	sync_break: "Прервать синхронизацию",
	sync_no_data: "Файл не содержит подходящих элементов для загрузки",

	tabular_will_cleared: "Табличная часть '%1' будет очищена. Продолжить?",

	unsupported_browser_title: "Браузер не поддерживается",
	unsupported_browser: "Несовместимая версия браузера<br/>Рекомендуется Google Chrome",
	supported_browsers: "Рекомендуется Chrome, Safari или Opera",
	unsupported_mode_title: "Режим не поддерживается",
	get unsupported_mode(){return "Программа не установлена<br/> в <a href='" + this.store_url_od + "'>приложениях Google Chrome</a>"},
	unknown_error: "Неизвестная ошибка в функции '%1'",

	value: "Значение",

}
