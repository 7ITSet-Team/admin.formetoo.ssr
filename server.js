/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

var _localStorage = __webpack_require__(28);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _config = __webpack_require__(29);

var _config2 = _interopRequireDefault(_config);

var _auth = __webpack_require__(17);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axiosConfig = {
	headers: {
		'Authorization': _localStorage2.default.getItem('token')
	}
};

var Data = function () {
	function Data() {
		_classCallCheck(this, Data);
	}

	_createClass(Data, null, [{
		key: 'getAllowedResources',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var response;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _axios2.default.get(_config2.default.uri.allowed, axiosConfig);

							case 2:
								response = _context.sent;
								return _context.abrupt('return', {
									success: response.data.success,
									allowed: response.data.allowed
								});

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getAllowedResources() {
				return _ref.apply(this, arguments);
			}

			return getAllowedResources;
		}()
	}, {
		key: 'getProfile',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var response;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _axios2.default.get(_config2.default.uri.admin + '/profile', axiosConfig);

							case 2:
								response = _context2.sent;

								if (!response.data.success) {
									_context2.next = 7;
									break;
								}

								return _context2.abrupt('return', {
									success: true,
									profile: response.data.user
								});

							case 7:
								return _context2.abrupt('return', {
									success: false,
									msg: response.data.msg
								});

							case 8:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getProfile() {
				return _ref2.apply(this, arguments);
			}

			return getProfile;
		}()
	}, {
		key: 'getData',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(uri) {
				var resource, response;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								resource = uri.slice(1);
								_context3.next = 3;
								return _axios2.default.get(_config2.default.uri.admin + uri, axiosConfig);

							case 3:
								response = _context3.sent;

								if (!response.data.success) {
									_context3.next = 8;
									break;
								}

								return _context3.abrupt('return', {
									success: true,
									data: response.data[resource],
									total: response.data.total
								});

							case 8:
								return _context3.abrupt('return', {
									success: false,
									data: [],
									total: 0,
									msg: response.data.msg
								});

							case 9:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getData(_x) {
				return _ref3.apply(this, arguments);
			}

			return getData;
		}()
	}, {
		key: 'getResource',
		value: function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(uri) {
				var response;
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return _axios2.default.get(_config2.default.uri.admin + uri, axiosConfig);

							case 2:
								response = _context4.sent;
								return _context4.abrupt('return', response.data);

							case 4:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function getResource(_x2) {
				return _ref4.apply(this, arguments);
			}

			return getResource;
		}()
	}, {
		key: 'uploadImage',
		value: function () {
			var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(uri, data) {
				var formData, result;
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								formData = new FormData();

								formData.append('file', data);
								_context5.next = 4;
								return _axios2.default.post(_config2.default.uri.admin + uri, formData, axiosConfig);

							case 4:
								result = _context5.sent;
								return _context5.abrupt('return', result.data.url);

							case 6:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function uploadImage(_x3, _x4) {
				return _ref5.apply(this, arguments);
			}

			return uploadImage;
		}()
	}, {
		key: 'uploadXls',
		value: function () {
			var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(uri, data) {
				var formData, response;
				return regeneratorRuntime.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								formData = new FormData();

								formData.append('file', data);
								_context6.next = 4;
								return _axios2.default.post(_config2.default.uri.admin + '/export' + uri, formData, axiosConfig);

							case 4:
								response = _context6.sent;

								if (!response.data.success) {
									_context6.next = 9;
									break;
								}

								return _context6.abrupt('return', {
									success: true
								});

							case 9:
								return _context6.abrupt('return', {
									success: false
								});

							case 10:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function uploadXls(_x5, _x6) {
				return _ref6.apply(this, arguments);
			}

			return uploadXls;
		}()
	}, {
		key: 'importXls',
		value: function () {
			var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(uri) {
				var response;
				return regeneratorRuntime.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								_context7.next = 2;
								return _axios2.default.get(_config2.default.uri.admin + '/import' + uri, axiosConfig);

							case 2:
								response = _context7.sent;

								console.log(response);

								if (!response.data.success) {
									_context7.next = 8;
									break;
								}

								return _context7.abrupt('return', {
									success: true
								});

							case 8:
								return _context7.abrupt('return', {
									success: false
								});

							case 9:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function importXls(_x7) {
				return _ref7.apply(this, arguments);
			}

			return importXls;
		}()
	}, {
		key: 'create',
		value: function create(uri, data) {
			_axios2.default.post(_config2.default.uri.admin + uri, data, axiosConfig);
		}
	}, {
		key: 'edit',
		value: function () {
			var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(uri, data) {
				var response, url;
				return regeneratorRuntime.wrap(function _callee8$(_context8) {
					while (1) {
						switch (_context8.prev = _context8.next) {
							case 0:
								if (!(uri === '/profile')) {
									_context8.next = 6;
									break;
								}

								_context8.next = 3;
								return _axios2.default.post(_config2.default.uri.admin + uri + '/', data, axiosConfig);

							case 3:
								response = _context8.sent;

								_auth2.default._token = response.data.token;
								return _context8.abrupt('return', {
									success: true,
									email: response.data.profile.email
								});

							case 6:
								url = _config2.default.uri.admin + uri + '/' + data._id;

								_axios2.default.post(url, data, axiosConfig);

							case 8:
							case 'end':
								return _context8.stop();
						}
					}
				}, _callee8, this);
			}));

			function edit(_x8, _x9) {
				return _ref8.apply(this, arguments);
			}

			return edit;
		}()
	}, {
		key: 'remove',
		value: function remove(uri) {
			_axios2.default.post(_config2.default.uri.admin + uri, null, axiosConfig);
		}
	}]);

	return Data;
}();

exports.default = Data;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Toolbar = __webpack_require__(80);

var _RaisedButton = __webpack_require__(16);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactRouterDom = __webpack_require__(1);

var _data4 = __webpack_require__(3);

var _data5 = _interopRequireDefault(_data4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolBar = function (_React$Component) {
	_inherits(ToolBar, _React$Component);

	function ToolBar(props) {
		_classCallCheck(this, ToolBar);

		var _this = _possibleConstructorReturn(this, (ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call(this, props));

		_this.state = {
			created: false,
			edited: false,
			deleted: false,
			canceled: false,
			add: false
		};
		_this.handleRemoveButton = _this.handleRemoveButton.bind(_this);
		_this.handleCancelButton = _this.handleCancelButton.bind(_this);
		return _this;
	}

	_createClass(ToolBar, [{
		key: 'handleSaveButton',
		value: function handleSaveButton(action) {
			if (this.props.action === 'create') {
				if (this.props.resources === 'categories') {
					var _data = {
						url: this.props.photo,
						creationDate: new Date().toLocaleString(),
						modificationDate: new Date().toLocaleString()
					};
					_data5.default.create('/photos', _data);
				}
				var data = this.props.data;
				data.creationDate = new Date().toLocaleString();
				data.modificationDate = new Date().toLocaleString();
				_data5.default.create('/' + this.props.resources, data);
				if (action === 'saveAndExit') this.setState({
					created: true
				});
				if (action === 'saveAndAdd') this.setState({
					add: true
				});
			}
			if (this.props.action === 'edit') {
				if (this.props.resources === 'categories') {
					var _data3 = {
						url: this.props.photo,
						creationDate: new Date().toLocaleString(),
						modificationDate: new Date().toLocaleString()
					};
					_data5.default.create('/photos', _data3);
				}
				var _data2 = this.props.data;
				_data2.modificationDate = new Date().toLocaleString();
				_data5.default.edit('/' + this.props.resources, _data2);
				if (action === 'saveAndExit') this.setState({
					edited: true
				});
			}
		}
	}, {
		key: 'handleRemoveButton',
		value: function handleRemoveButton() {
			_data5.default.remove(this.props.resource);
			this.setState({
				deleted: true
			});
		}
	}, {
		key: 'handleCancelButton',
		value: function handleCancelButton() {
			this.setState({
				canceled: true
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (this.state.created || this.state.edited || this.state.deleted || this.state.canceled) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' + this.props.resources });
			if (this.state.add) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' + this.props.resources + '/create' });
			if (this.props.action === 'delete') return _react2.default.createElement(
				_Toolbar.Toolbar,
				{
					style: {
						display: 'flex',
						justifyContent: 'flex-start'
					}
				},
				_react2.default.createElement(_RaisedButton2.default, {
					style: {
						margin: '10px'
					},
					label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
					onClick: this.handleRemoveButton,
					primary: true
				}),
				_react2.default.createElement(_RaisedButton2.default, {
					style: {
						margin: '10px'
					},
					label: '\u041E\u0442\u043C\u0435\u043D\u0430',
					primary: false,
					onClick: this.handleCancelButton
				})
			);
			if (this.props.action === 'create') return _react2.default.createElement(
				_Toolbar.Toolbar,
				{
					style: {
						display: 'flex',
						justifyContent: 'flex-start'
					}
				},
				_react2.default.createElement(_RaisedButton2.default, {
					style: {
						margin: '10px'
					},
					label: '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C',
					primary: true,
					onClick: function onClick() {
						return _this2.handleSaveButton('apply');
					}
				}),
				_react2.default.createElement(_RaisedButton2.default, {
					style: {
						margin: '10px'
					},
					label: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
					primary: true,
					onClick: function onClick() {
						return _this2.handleSaveButton('saveAndExit');
					}
				}),
				_react2.default.createElement(_RaisedButton2.default, {
					style: {
						margin: '10px'
					},
					label: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C',
					primary: true,
					onClick: function onClick() {
						return _this2.handleSaveButton('saveAndAdd');
					}
				})
			);
			if (this.props.action === 'edit') return _react2.default.createElement(
				_Toolbar.Toolbar,
				{
					style: {
						display: 'flex',
						justifyContent: 'flex-start'
					}
				},
				_react2.default.createElement(_RaisedButton2.default, {
					style: {
						margin: '10px'
					},
					label: '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C',
					primary: true,
					onClick: function onClick() {
						return _this2.handleSaveButton('apply');
					}
				}),
				_react2.default.createElement(_RaisedButton2.default, {
					style: {
						margin: '10px'
					},
					label: '\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C',
					primary: true,
					onClick: function onClick() {
						return _this2.handleSaveButton('saveAndExit');
					}
				})
			);
		}
	}]);

	return ToolBar;
}(_react2.default.Component);

exports.default = ToolBar;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/list");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Tabs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/SelectField");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/MenuItem");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/delete");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FlatButton");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("uid");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/DatePicker");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Table");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toggle");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(29);

var _config2 = _interopRequireDefault(_config);

var _jsSha = __webpack_require__(30);

var _jsSha2 = _interopRequireDefault(_jsSha);

var _localStorage = __webpack_require__(28);

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth = function () {
	function Auth() {
		_classCallCheck(this, Auth);
	}

	_createClass(Auth, null, [{
		key: '_clearToken',
		value: function _clearToken() {
			_localStorage2.default.removeItem('token');
			return true;
		}
	}, {
		key: 'init',
		value: function init(onLoginAction, onLogoutAction) {
			Auth.onLoginAction = onLoginAction || function () {
				return undefined;
			};
			Auth.onLogoutAction = onLogoutAction || function () {
				return undefined;
			};
			return true;
		}
	}, {
		key: 'isAuthorizedSession',
		value: function isAuthorizedSession() {
			return !!Auth._token;
		}
	}, {
		key: 'logout',
		value: function logout() {
			Auth._clearToken();
			Auth.onLogoutAction();
			return true;
		}
	}, {
		key: 'login',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password) {
				var salt, hashedPassword, response;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								salt = '#!f$55723e.12d68,,b36fdcCC0ba7cf^%^d8f8e1c1793453_32';

								console.log((0, _jsSha2.default)(salt + '1'));
								hashedPassword = (0, _jsSha2.default)(salt + password);
								_context.next = 5;
								return _axios2.default.post(_config2.default.uri.login, { email: email, password: hashedPassword });

							case 5:
								response = _context.sent;

								if (!response.data.success) {
									_context.next = 10;
									break;
								}

								Auth._token = response.data.token;
								Auth.onLoginAction();
								return _context.abrupt('return', true);

							case 10:
								return _context.abrupt('return', {
									success: 'false',
									msg: response.msg
								});

							case 11:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function login(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return login;
		}()
	}, {
		key: '_token',
		get: function get() {
			return _localStorage2.default.getItem('token');
		},
		set: function set(token) {
			_localStorage2.default.setItem('token', token);
			return true;
		}
	}]);

	return Auth;
}();

exports.default = Auth;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("draftjs-to-html");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-draft-wysiwyg");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("html-to-draftjs");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dashboard = __webpack_require__(50);

var _dashboard2 = _interopRequireDefault(_dashboard);

var _resourcesLayout = __webpack_require__(61);

var _resourcesLayout2 = _interopRequireDefault(_resourcesLayout);

var _removeLayout = __webpack_require__(79);

var _removeLayout2 = _interopRequireDefault(_removeLayout);

var _profile = __webpack_require__(81);

var _profile2 = _interopRequireDefault(_profile);

var _components = __webpack_require__(32);

var _components2 = _interopRequireDefault(_components);

var _list = __webpack_require__(105);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (location, root) {
	var resources = ['categories', 'products', 'orders', 'users', 'clients', 'attributes', 'attribute-sets', 'tabs', 'tab-sets', 'statuses', 'roles', 'photos'];
	var routes = [{
		path: root,
		exact: true,
		component: _dashboard2.default
	}, {
		path: root + 'profile',
		exact: true,
		component: function component() {
			return _react2.default.createElement(_profile2.default, {
				location: location,
				resources: 'photos'
			});
		}
	}];
	_list2.default.forEach(function (route) {
		routes.push({
			path: root + route.resource,
			exact: true,
			component: function component() {
				return _react2.default.createElement(_resourcesLayout2.default, {
					path: location,
					title: route.title,
					columns: route.columns,
					filters: route.filters
				});
			}
		});
	});
	resources.forEach(function (resource) {
		routes.push({
			path: root + resource + '/create',
			exact: true,
			component: function component() {
				return _react2.default.createElement(_components2.default[resource.charAt(0).toUpperCase() + resource.slice(1) + 'Create']);
			}
		});
		routes.push({
			path: root + resource + '/:id',
			exact: true,
			component: function component() {
				return _react2.default.createElement(_components2.default[resource.charAt(0).toUpperCase() + resource.slice(1) + 'Edit'], { location: location });
			}
		});
		routes.push({
			path: root + resource + '/:id/delete',
			exact: true,
			component: function component() {
				return _react2.default.createElement(_removeLayout2.default, {
					location: location,
					resources: resource
				});
			}
		});
	});
	return routes;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bookmark = __webpack_require__(51);

var _bookmark2 = _interopRequireDefault(_bookmark);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _people = __webpack_require__(26);

var _people2 = _interopRequireDefault(_people);

var _controlPoint = __webpack_require__(52);

var _controlPoint2 = _interopRequireDefault(_controlPoint);

var _verifiedUser = __webpack_require__(53);

var _verifiedUser2 = _interopRequireDefault(_verifiedUser);

var _attachMoney = __webpack_require__(54);

var _attachMoney2 = _interopRequireDefault(_attachMoney);

var _viewList = __webpack_require__(55);

var _viewList2 = _interopRequireDefault(_viewList);

var _stars = __webpack_require__(56);

var _stars2 = _interopRequireDefault(_stars);

var _tab = __webpack_require__(57);

var _tab2 = _interopRequireDefault(_tab);

var _viewAgenda = __webpack_require__(58);

var _viewAgenda2 = _interopRequireDefault(_viewAgenda);

var _stayCurrentPortrait = __webpack_require__(59);

var _stayCurrentPortrait2 = _interopRequireDefault(_stayCurrentPortrait);

var _collections = __webpack_require__(60);

var _collections2 = _interopRequireDefault(_collections);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resources = {
	categories: {
		name: 'Категории',
		icon: _react2.default.createElement(_bookmark2.default, null),
		dashboardIcon: _react2.default.createElement(_bookmark2.default, { color: 'rgb(0, 188, 212)', style: { width: 50, height: 50 } })
	},
	products: {
		name: 'Продукты',
		icon: _react2.default.createElement(_list2.default, null),
		dashboardIcon: _react2.default.createElement(_list2.default, { color: 'rgb(0, 188, 212)', style: { width: 50, height: 50 } })
	},
	orders: {
		name: 'Заказы',
		icon: _react2.default.createElement(_attachMoney2.default, null),
		dashboardIcon: _react2.default.createElement(_attachMoney2.default, { color: 'rgb(0, 188, 212)', style: { width: 50, height: 50 } })
	},
	users: {
		name: 'Пользователи',
		icon: _react2.default.createElement(_people2.default, null),
		dashboardIcon: _react2.default.createElement(_people2.default, { color: 'rgb(0, 188, 212)', style: { width: 50, height: 50 } })
	},
	clients: {
		name: 'Клиенты',
		icon: _react2.default.createElement(_verifiedUser2.default, null),
		dashboardIcon: _react2.default.createElement(_verifiedUser2.default, { color: 'rgb(0, 188, 212)', style: { width: 50, height: 50 } })
	},
	attributes: {
		name: 'Атрибуты',
		icon: _react2.default.createElement(_viewList2.default, null)
	},
	'attribute-sets': {
		name: 'Набор атрибутов',
		icon: _react2.default.createElement(_stars2.default, null)
	},
	tabs: {
		name: 'Табы',
		icon: _react2.default.createElement(_tab2.default, null)
	},
	'tab-sets': {
		name: 'Набор табов',
		icon: _react2.default.createElement(_viewAgenda2.default, null)
	},
	statuses: {
		name: 'Статусы',
		icon: _react2.default.createElement(_stayCurrentPortrait2.default, null)
	},
	roles: {
		name: 'Роли',
		icon: _react2.default.createElement(_controlPoint2.default, null),
		dashboardIcon: _react2.default.createElement(_controlPoint2.default, { color: 'rgb(0, 188, 212)', style: { width: 50, height: 50 } })
	},
	photos: {
		name: 'Медиа',
		icon: _react2.default.createElement(_collections2.default, null)
	}
};

exports.default = resources;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/social/people");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("localStorage");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    uri: {
        admin: 'http://admin.formetoo.ru/api',
        login: 'http://admin.formetoo.ru/api/login',
        allowed: 'http://admin.formetoo.ru/api/allowed'
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _categories = __webpack_require__(82);

var _categories2 = _interopRequireDefault(_categories);

var _products = __webpack_require__(83);

var _products2 = _interopRequireDefault(_products);

var _orders = __webpack_require__(84);

var _orders2 = _interopRequireDefault(_orders);

var _users = __webpack_require__(85);

var _users2 = _interopRequireDefault(_users);

var _clients = __webpack_require__(86);

var _clients2 = _interopRequireDefault(_clients);

var _attributes = __webpack_require__(87);

var _attributes2 = _interopRequireDefault(_attributes);

var _attributeSets = __webpack_require__(88);

var _attributeSets2 = _interopRequireDefault(_attributeSets);

var _tabs = __webpack_require__(89);

var _tabs2 = _interopRequireDefault(_tabs);

var _tabSets = __webpack_require__(90);

var _tabSets2 = _interopRequireDefault(_tabSets);

var _roles = __webpack_require__(91);

var _roles2 = _interopRequireDefault(_roles);

var _statuses = __webpack_require__(92);

var _statuses2 = _interopRequireDefault(_statuses);

var _categories3 = __webpack_require__(93);

var _categories4 = _interopRequireDefault(_categories3);

var _products3 = __webpack_require__(94);

var _products4 = _interopRequireDefault(_products3);

var _users3 = __webpack_require__(96);

var _users4 = _interopRequireDefault(_users3);

var _roles3 = __webpack_require__(97);

var _roles4 = _interopRequireDefault(_roles3);

var _clients3 = __webpack_require__(98);

var _clients4 = _interopRequireDefault(_clients3);

var _orders3 = __webpack_require__(99);

var _orders4 = _interopRequireDefault(_orders3);

var _attributes3 = __webpack_require__(100);

var _attributes4 = _interopRequireDefault(_attributes3);

var _attributeSets3 = __webpack_require__(101);

var _attributeSets4 = _interopRequireDefault(_attributeSets3);

var _tabs3 = __webpack_require__(102);

var _tabs4 = _interopRequireDefault(_tabs3);

var _tabSets3 = __webpack_require__(103);

var _tabSets4 = _interopRequireDefault(_tabSets3);

var _statuses3 = __webpack_require__(104);

var _statuses4 = _interopRequireDefault(_statuses3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    CategoriesCreate: _categories2.default,
    ProductsCreate: _products2.default,
    OrdersCreate: _orders2.default,
    UsersCreate: _users2.default,
    ClientsCreate: _clients2.default,
    AttributesCreate: _attributes2.default,
    'Attribute-setsCreate': _attributeSets2.default,
    TabsCreate: _tabs2.default,
    'Tab-setsCreate': _tabSets2.default,
    RolesCreate: _roles2.default,
    StatusesCreate: _statuses2.default,
    CategoriesEdit: _categories4.default,
    ProductsEdit: _products4.default,
    UsersEdit: _users4.default,
    RolesEdit: _roles4.default,
    ClientsEdit: _clients4.default,
    OrdersEdit: _orders4.default,
    AttributesEdit: _attributes4.default,
    'Attribute-setsEdit': _attributeSets4.default,
    TabsEdit: _tabs4.default,
    'Tab-setsEdit': _tabSets4.default,
    StatusesEdit: _statuses4.default
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsSha = __webpack_require__(30);

var _jsSha2 = _interopRequireDefault(_jsSha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hash = function () {
  function Hash() {
    _classCallCheck(this, Hash);
  }

  _createClass(Hash, null, [{
    key: 'getHash',
    value: function getHash(text) {
      var salt = '#!f$55723e.12d68,,b36fdcCC0ba7cf^%^d8f8e1c1793453_32';
      return (0, _jsSha2.default)(salt + text);
    }
  }]);

  return Hash;
}();

exports.default = Hash;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
module.exports = __webpack_require__(36);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(37);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(38);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(39);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bodyParser = __webpack_require__(40);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _reactRouterDom = __webpack_require__(1);

var _MuiThemeProvider = __webpack_require__(41);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Launcher = __webpack_require__(42);

var _Launcher2 = _interopRequireDefault(_Launcher);

var _index = __webpack_require__(24);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /* eslint-disable indent */


app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
	extended: true
}));
app.use(_express2.default.static('public'));

var context = {};

app.get('*', function (req, res) {
	var match = (0, _index2.default)(req.url, '/').reduce(function (acc, route) {
		return (0, _reactRouterDom.matchPath)(req.url, { path: route, exact: true }) || acc;
	}, null);
	if (!match) {
		res.status(404).send('Page not found');
		return;
	}

	var markup = (0, _server.renderToString)(_react2.default.createElement(
		_MuiThemeProvider2.default,
		null,
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{
				context: context,
				location: req.url
			},
			_react2.default.createElement(_Launcher2.default, null)
		)
	));

	res.status(200).send('\n\t\t    <!DOCTYPE html>\n\t\t    <html>\n\t\t\t\t<head>\n\t\t\t\t\t<title>formetoo</title>\n\t\t            <script src="/bundle.js" defer></script>\n\t\t            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">\n\t\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t\t<div id="app">' + markup + '</div>\n\t\t\t\t</body>\n\t\t    </html>\n  \t\t');
});

app.listen(3000, function () {
	console.log('Server listening on port 3000!');
});

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _renderRoutes = __webpack_require__(43);

var _renderRoutes2 = _interopRequireDefault(_renderRoutes);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(44);

var _routes = __webpack_require__(46);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
	_inherits(Layout, _React$Component);

	function Layout(props) {
		_classCallCheck(this, Layout);

		return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
	}

	_createClass(Layout, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactRouterDom.Switch,
				null,
				(0, _renderRoutes2.default)(_routes2.default)
			);
		}
	}]);

	return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-router-config/renderRoutes");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(false);
// imports


// module
exports.push([module.i, "html, body, .layout, #root, .body {\n    height: 100%;\n}\n\nbody {\n    margin: 0;\n}\n\n#root {\n    height: 100%;\n}\n\na, a:link, a:visited, a:active {\n    text-decoration: none;\n}\n\n/*--------------САЙДБАР---------------*/\n\n.list, .list_moved {\n    background-color: white;\n    min-width: 280px;\n    transition: 0.2s linear;\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    height: 98%;\n}\n\n.list_moved {\n    margin-left: -280px;\n}\n\n.list__item {\n    text-align: start;\n    height: 50px;\n}\n\n/*--------------СТРАНИЦА ЛОГИНА---------------*/\n\n.login-layout {\n    background-color: rgb(0, 188, 212);\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.login-layout__window {\n    width: 300px;\n    height: 320px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.login-layout__window__avatar {\n    margin-top: 15px;\n}\n\n.login-layout__window__button {\n    margin-top: 10px;\n    width: 90%;\n}\n\n/*--------------КОНТЕНТНАЯ ОБЛАСТЬ---------------*/\n\n.body {\n    display: flex;\n    background-color: rgb(237, 236, 236);\n}\n\n.content {\n    width: 82%;\n}\n\n.content, .content_moved {\n    display: flex;\n    flex-flow: column;\n    transition: all 200ms linear;\n    margin-left: 40px;\n    margin-top: 40px;\n    background-color: rgb(237, 236, 236);\n}\n\n.content_moved {\n    width: 96.57%;\n}\n\n.resource-page {\n    background-color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    max-height: 780px;\n}\n\n.media-resource {\n    background-color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    max-height: 780px;\n    overflow-y: scroll;\n}\n\n.big-resource {\n    background-color: white;\n    padding: 20px;\n    max-height: 730px;\n    overflow-y: scroll;\n}\n\n.pagination {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgb(232, 232, 232);\n}\n\n.total {\n    font-size: 18px\n}\n\n/*--------------ФОТОГРАФИИ---------------*/\n\n.photos__gridlist {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 40px;\n}\n\n/*--------------ГЛАВНАЯ СТРАНИЦА---------------*/\n\n.dashboard {\n    width: 100%;\n    height: 600px;\n}\n\n.dashboard__item {\n    width: 350px;\n    height: 120px;\n    margin-left: 60px;\n    margin-right: 60px;\n    margin-top: 100px;\n    box-shadow: 0 4px 8px gray;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.dashboard__title {\n    font-size: 24px;\n    margin-top: 20px;\n    margin-left: 15px;\n}\n\n.dashboard__refs {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.dashboard__item__title {\n    color: black;\n}\n\n/*--------------ТАБЛИЦЫ---------------*/\n\n.table {\n    margin-top: 80px;\n}\n\n.table__header__column {\n    color: black !important;\n    font-size: 14px !important;\n    font-weight: 500;\n}\n\n.table__row {\n    border-color: black !important;\n}\n\n.inputfile {\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n\n.inputfile + .inputfile__label {\n    font-size: 1.25em;\n    height: 70px;\n    width: 98%;\n    margin-left: 15px;\n    font-weight: 700;\n    color: gray;\n    background-color: #edecec;\n    display: inline-block;\n    text-align: center;\n    padding-top: 55px;\n    margin-top: 40px;\n}\n\n.inputfile:focus + .inputfile__label,\n.inputfile + .inputfile__label:hover {\n    cursor: pointer;\n}\n\n.inputfile__images {\n    display: flex;\n    justify-content: flex-start;\n    margin-left: 15px;\n    margin-top: 20px;\n}\n\n.inputfile__image {\n    width: 100px;\n    height: 100px;\n    margin-left: 5px;\n}\n\n.warning-msg {\n    margin: 20px;\n    font-weight: bold;\n    font-size: large;\n}\n\n.profile__label {\n    text-align: center;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.resource-filters {\n    margin-left: 15px;\n    display: flex;\n    flex-flow: column;\n}\n\n.resource-headline {\n    display: flex;\n    justify-content: space-between;\n}\n\n.resource-buttons {\n    margin-top: 15px;\n}\n\n.resource-actions {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.filter {\n    display: flex;\n}", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(47);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
	path: '/',
	exact: false,
	component: _layout2.default
}];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(48);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(49);

var _routes = __webpack_require__(24);

var _routes2 = _interopRequireDefault(_routes);

var _resources = __webpack_require__(106);

var _resources2 = _interopRequireDefault(_resources);

var _login = __webpack_require__(110);

var _login2 = _interopRequireDefault(_login);

var _auth = __webpack_require__(17);

var _auth2 = _interopRequireDefault(_auth);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _components = __webpack_require__(32);

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
	_inherits(Layout, _React$Component);

	function Layout(props) {
		_classCallCheck(this, Layout);

		var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

		_this.state = {
			isMenuOpened: true,
			authorised: _auth2.default.isAuthorizedSession(),
			allowedResources: []
		};
		_this.getAllowedResources().catch(function (error) {
			return console.error('\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043D\u043D\u044B\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432! ' + error);
		});
		_this.openMenu = _this.openMenu.bind(_this);
		return _this;
	}

	_createClass(Layout, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			_auth2.default.init(function () {
				return _this2.setState({
					authorised: true
				});
			}, function () {
				return _this2.setState({
					authorised: false
				});
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_auth2.default.init();
		}
	}, {
		key: 'openMenu',
		value: function openMenu() {
			var isMenuOpened = this.state.isMenuOpened;

			return this.setState({
				isMenuOpened: !isMenuOpened
			});
		}
	}, {
		key: 'getAllowedResources',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var resources;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _data2.default.getAllowedResources();

							case 2:
								resources = _context.sent;

								if (!resources.success) {
									_context.next = 7;
									break;
								}

								return _context.abrupt('return', this.setState({
									allowedResources: resources.allowed
								}));

							case 7:
								return _context.abrupt('return', console.error('Ошибка получения разрешённых ресурсов: ', resources.msg));

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getAllowedResources() {
				return _ref.apply(this, arguments);
			}

			return getAllowedResources;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    authorised = _state.authorised,
			    allowedResources = _state.allowedResources,
			    isMenuOpened = _state.isMenuOpened;

			var location = this.props.location.pathname;
			var route = this.props.route.path;
			if (true) {
				return null;
			}
			if (false) {
				return _react2.default.createElement(_login2.default, null);
			}
			return _react2.default.createElement(
				'div',
				{
					className: 'layout'
				},
				_react2.default.createElement(_AppBar2.default, {
					title: 'ForMeToo',
					onLeftIconButtonClick: this.openMenu,
					style: {
						height: 60
					}
				}),
				_react2.default.createElement(
					'div',
					{
						className: 'body'
					},
					_react2.default.createElement(_resources2.default, {
						allowedResources: allowedResources,
						isMenuOpened: isMenuOpened,
						basePath: route
					}),
					_react2.default.createElement(
						'div',
						{
							className: isMenuOpened ? 'content' : 'content_moved'
						},
						(0, _reactRouterConfig.renderRoutes)((0, _routes2.default)(location, route)),
						_react2.default.createElement(_reactRouterDom.Route, {
							path: route + 'products/:id/copy',
							component: _components2.default.ProductsCreate
						})
					)
				)
			);
		}
	}]);

	return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Card = __webpack_require__(22);

var _resources = __webpack_require__(25);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
	_inherits(Dashboard, _React$Component);

	function Dashboard(props) {
		_classCallCheck(this, Dashboard);

		var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

		_this.state = {
			refs: ['products', 'categories', 'orders', 'clients', 'users', 'roles']
		};
		return _this;
	}

	_createClass(Dashboard, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Card.Card,
				{
					className: 'dashboard'
				},
				_react2.default.createElement(_Card.CardTitle, {
					title: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430'
				}),
				_react2.default.createElement(
					'div',
					{
						className: 'dashboard__refs'
					},
					this.state.refs.map(function (item, key) {
						return _react2.default.createElement(
							_reactRouterDom.Link,
							{
								key: key,
								className: 'dashboard__item',
								to: item
							},
							_resources2.default[item].dashboardIcon,
							_react2.default.createElement(
								'div',
								{
									className: 'dashboard__item__title'
								},
								_resources2.default[item].name
							)
						);
					})
				)
			);
		}
	}]);

	return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/bookmark");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/image/control-point");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/verified-user");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/editor/attach-money");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/view-list");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/stars");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/tab");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/view-agenda");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/communication/stay-current-portrait");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/image/collections");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(22);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _resources = __webpack_require__(62);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesLayout = function (_React$Component) {
  _inherits(ResourcesLayout, _React$Component);

  function ResourcesLayout(props) {
    _classCallCheck(this, ResourcesLayout);

    var _this = _possibleConstructorReturn(this, (ResourcesLayout.__proto__ || Object.getPrototypeOf(ResourcesLayout)).call(this, props));

    _this.state = {
      resources: [],
      total: 0,
      statuses: []
    };
    _this.getData(_this.props.path).catch(function (error) {
      return console.error('\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0440\u0435\u0441\u043E\u0440\u0441\u043E\u0432: ', error);
    });
    return _this;
  }

  _createClass(ResourcesLayout, [{
    key: 'getData',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uri) {
        var response, resStatuses, resClients, statuses;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _data2.default.getData(uri);

              case 2:
                response = _context.sent;

                if (!(uri === '/orders')) {
                  _context.next = 13;
                  break;
                }

                _context.next = 6;
                return _data2.default.getResource('/statuses');

              case 6:
                resStatuses = _context.sent;
                _context.next = 9;
                return _data2.default.getResource('/clients');

              case 9:
                resClients = _context.sent;
                statuses = response.data.map(function (data) {
                  var arr = {};
                  resStatuses.statuses.forEach(function (item) {
                    if (item.slug === data.status) {
                      arr = _extends({}, data, arr, {
                        status: item.title
                      });
                    }
                  });
                  resClients.clients.forEach(function (item) {
                    if (item.slug === data.client) {
                      arr = _extends({}, data, arr, {
                        client: item.name
                      });
                    }
                  });
                  return arr;
                });

                this.setState({
                  resources: statuses,
                  total: response.total
                });
                return _context.abrupt('return', {
                  resources: statuses,
                  total: response.total
                });

              case 13:
                this.setState({
                  resources: response.data,
                  total: response.total
                });
                return _context.abrupt('return', {
                  resources: response.data,
                  total: response.total
                });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData(_x) {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: 'refresh',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getData(this.props.path);

              case 2:
                response = _context2.sent;

                console.log(response);
                this.setState({
                  resources: response.resources,
                  total: response.total
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function refresh() {
        return _ref2.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          resources = _state.resources,
          total = _state.total,
          statuses = _state.statuses;
      var _props = this.props,
          title = _props.title,
          path = _props.path;

      if (this.props.location === '/photos') {
        return _react2.default.createElement(
          _Card.Card,
          null,
          _react2.default.createElement(_resources2.default, {
            title: title,
            resources: resources,
            path: path,
            total: total
          })
        );
      }
      var _props2 = this.props,
          columns = _props2.columns,
          filters = _props2.filters;

      return _react2.default.createElement(_resources2.default, {
        columns: columns,
        title: title,
        statuses: statuses,
        resources: resources,
        path: path,
        total: total,
        refresh: function refresh() {
          return _this2.refresh();
        },
        filters: filters
      });
    }
  }]);

  return ResourcesLayout;
}(_react2.default.Component);

exports.default = ResourcesLayout;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _resourcesContent = __webpack_require__(63);

var _resourcesContent2 = _interopRequireDefault(_resourcesContent);

var _resourcesHeader = __webpack_require__(69);

var _resourcesHeader2 = _interopRequireDefault(_resourcesHeader);

var _Card = __webpack_require__(22);

var _mapObj = __webpack_require__(74);

var _mapObj2 = _interopRequireDefault(_mapObj);

var _pagination = __webpack_require__(75);

var _pagination2 = _interopRequireDefault(_pagination);

var _photos = __webpack_require__(77);

var _photos2 = _interopRequireDefault(_photos);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesList = function (_React$Component) {
  _inherits(ResourcesList, _React$Component);

  function ResourcesList(props) {
    _classCallCheck(this, ResourcesList);

    var _this = _possibleConstructorReturn(this, (ResourcesList.__proto__ || Object.getPrototypeOf(ResourcesList)).call(this, props));

    _this.state = {
      page: 1,
      resources: [],
      filteredResources: [],
      filtration: {}
    };
    _this.changePage = _this.changePage.bind(_this);
    _this.exportFile = _this.exportFile.bind(_this);
    return _this;
  }

  _createClass(ResourcesList, [{
    key: 'changePage',
    value: function changePage(newPage) {
      this.setState({
        page: newPage
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        resources: nextProps.resources,
        filteredResources: nextProps.resources
      });
    }
  }, {
    key: 'onChangeState',
    value: function onChangeState(key, value) {
      var newState = this.state;
      newState[key] = value;
      this.setState(_extends({}, newState));
    }
  }, {
    key: 'addFiltration',
    value: function addFiltration(type, value) {
      var _this2 = this;

      var filtration = this.state.filtration;
      filtration[type] = value;
      this.setState({
        filtration: filtration
      });
      var resources = this.state.resources;
      (0, _mapObj2.default)(this.state.filtration, function (key, value) {
        var newResources = resources.filter(function (resource) {
          if (key === 'title' || key === 'sku') return resource[key].indexOf(value) !== -1;
          if (key === 'showInFilter' || key === 'isActive' || key === 'isRequire' || key === 'attrType' || key === 'role') return resource[key] === value;
          if (key === 'client') return resource[key] === value;
          if (key === 'attribute-sets' || key === 'categories' || key === 'name' || key === 'email') return resource[key].indexOf(value) !== -1;
          if (key === 'priceStart') return Number(resource.price) >= Number(value);
          if (key === 'priceEnd') return Number(resource.price) <= Number(value);
          if (key === 'creationDateStart') return new Date(resource.creationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) >= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')));
          if (key === 'creationDateEnd') return new Date(resource.creationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) <= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')));
          if (key === 'modificationDateStart') return new Date(resource.modificationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) >= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')));
          if (key === 'modificationDateEnd') return new Date(resource.modificationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) <= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')));
        });
        _this2.setState({
          filteredResources: newResources
        });
        return true;
      });
    }
  }, {
    key: 'exportFile',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _data2.default.uploadXls(this.props.path, file.target.files[0]);

              case 2:
                this.props.refresh();

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function exportFile(_x) {
        return _ref.apply(this, arguments);
      }

      return exportFile;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          title = _props.title,
          statuses = _props.statuses,
          columns = _props.columns,
          path = _props.path,
          total = _props.total,
          filters = _props.filters;
      var _state = this.state,
          page = _state.page,
          filteredResources = _state.filteredResources;

      return _react2.default.createElement(
        'div',
        {
          className: path === '/photos' ? 'media-resource' : 'resource-page'
        },
        path === '/photos' ? _react2.default.createElement(_photos2.default, {
          data: filteredResources,
          total: total,
          page: page
        }) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_resourcesHeader2.default, {
            path: path,
            refresh: function refresh() {
              return _this3.props.refresh();
            },
            filters: filters,
            addFiltration: function addFiltration(type, value) {
              return _this3.addFiltration(type, value);
            },
            exportFile: this.exportFile,
            title: _react2.default.createElement(_Card.CardTitle, {
              title: title
            })
          }),
          _react2.default.createElement(_resourcesContent2.default, {
            columns: columns,
            data: filteredResources,
            statuses: statuses,
            addFiltration: function addFiltration(type, value) {
              return _this3.addFiltration(type, value);
            },
            onChangeState: function onChangeState(key, value) {
              return _this3.onChangeState(key, value);
            },
            path: path,
            page: page,
            total: total
          }),
          _react2.default.createElement(_pagination2.default, {
            total: total,
            changePage: this.changePage,
            page: page
          })
        )
      );
    }
  }]);

  return ResourcesList;
}(_react2.default.Component);

exports.default = ResourcesList;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(13);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _create = __webpack_require__(64);

var _create2 = _interopRequireDefault(_create);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _reactRouterDom = __webpack_require__(1);

var _clear = __webpack_require__(65);

var _clear2 = _interopRequireDefault(_clear);

var _done = __webpack_require__(66);

var _done2 = _interopRequireDefault(_done);

var _save = __webpack_require__(67);

var _save2 = _interopRequireDefault(_save);

var _Chip = __webpack_require__(68);

var _Chip2 = _interopRequireDefault(_Chip);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesContent = function (_React$Component) {
	_inherits(ResourcesContent, _React$Component);

	function ResourcesContent(props) {
		_classCallCheck(this, ResourcesContent);

		var _this = _possibleConstructorReturn(this, (ResourcesContent.__proto__ || Object.getPrototypeOf(ResourcesContent)).call(this, props));

		_this.state = {
			ascendingSort: true,
			sortedData: [],
			categories: [],
			roles: [],
			products: [],
			data: {}
		};
		if (_this.props.path === '/users') _this.getRoles();
		if (_this.props.path === '/products') {
			_this.getProductsPrice();
			_this.getCategories();
		}
		return _this;
	}

	_createClass(ResourcesContent, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				sortedData: nextProps.data
			});
		}
	}, {
		key: 'getProductsPrice',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var _this2 = this;

				var response;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _data2.default.getResource('/products');

							case 2:
								response = _context.sent;

								response.products.forEach(function (product) {
									_this2.setState({
										data: _extends({}, _this2.state.data, _defineProperty({}, product.slug, product.price))
									});
								});

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getProductsPrice() {
				return _ref.apply(this, arguments);
			}

			return getProductsPrice;
		}()
	}, {
		key: 'getCategories',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var response;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _data2.default.getResource('/categories');

							case 2:
								response = _context2.sent;

								this.setState({
									categories: response.categories
								});

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getCategories() {
				return _ref2.apply(this, arguments);
			}

			return getCategories;
		}()
	}, {
		key: 'getRoles',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
				var response;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _data2.default.getResource('/roles');

							case 2:
								response = _context3.sent;


								this.setState({
									roles: response.roles
								});

							case 4:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getRoles() {
				return _ref3.apply(this, arguments);
			}

			return getRoles;
		}()
	}, {
		key: 'sort',
		value: function sort(resource) {
			if (this.state.ascendingSort) {
				var newData = this.state.sortedData.slice().sort(ResourcesContent.ascendingSort.bind(null, resource.key));

				this.setState({
					sortedData: newData
				});
			} else {
				var _newData = this.state.sortedData.slice().sort(ResourcesContent.descendingSort.bind(null, resource.key));

				this.setState({
					sortedData: _newData
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    columns = _props.columns,
			    path = _props.path,
			    page = _props.page,
			    total = _props.total;
			var sortedData = this.state.sortedData;

			return _react2.default.createElement(
				'div',
				{
					className: 'table'
				},
				_react2.default.createElement(
					_Table.Table,
					{
						selectable: false
					},
					_react2.default.createElement(
						_Table.TableHeader,
						{
							displaySelectAll: false,
							adjustForCheckbox: false
						},
						_react2.default.createElement(
							_Table.TableRow,
							{
								className: 'table__row'
							},
							columns.map(function (column, key) {
								return _react2.default.createElement(
									_Table.TableHeaderColumn,
									{
										key: key,
										className: 'table__header__column'
									},
									_react2.default.createElement(
										'div',
										{
											onClick: function onClick() {
												_this3.sort(column);
												_this3.setState({
													ascendingSort: !_this3.state.ascendingSort
												});
											},
											style: {
												cursor: 'pointer'
											}
										},
										column.name
									)
								);
							}),
							_react2.default.createElement(_Table.TableHeaderColumn, null),
							_react2.default.createElement(_Table.TableHeaderColumn, null)
						)
					),
					_react2.default.createElement(
						_Table.TableBody,
						{
							displayRowCheckbox: false
						},
						sortedData.map(function (data, key) {
							if (key + 1 >= page * 10 - 9 && (total > page % 10 * 10 && key + 1 <= page % 10 * 10 || total <= page % 10 * 10 && key + 1 <= total)) {
								return _react2.default.createElement(
									_Table.TableRow,
									{
										key: key,
										className: 'table__row'
									},
									columns.map(function (column, i) {
										if (typeof data[column.key] === 'boolean') {
											if (data[column.key]) {
												return _react2.default.createElement(
													_Table.TableRowColumn,
													{ key: i },
													_react2.default.createElement(_done2.default, null)
												);
											}
											return _react2.default.createElement(
												_Table.TableRowColumn,
												{ key: i },
												_react2.default.createElement(_clear2.default, null)
											);
										}
										if (column.key instanceof Array && !!data[column.key[0]]) {
											return _react2.default.createElement(
												_Table.TableRowColumn,
												{
													key: i
												},
												data[column.key[0]][column.key[1]]
											);
										}
										if (column.key === 'role') {
											return _this3.state.roles.map(function (role) {
												if (data.role === role.slug) {
													return _react2.default.createElement(
														_Table.TableRowColumn,
														{ key: i },
														role.name
													);
												}
											});
										}
										if (column.key === 'price') {
											return _react2.default.createElement(
												_Table.TableRowColumn,
												{ key: i },
												_react2.default.createElement(_TextField2.default, {
													style: {
														width: 60
													},
													value: !!_this3.state.data[data.slug] ? _this3.state.data[data.slug] : '',
													onChange: function onChange(event, value) {
														_this3.setState({
															data: _extends({}, _this3.state.data, _defineProperty({}, data.slug, value))
														});
													}
												}),
												_react2.default.createElement(_save2.default, {
													color: 'rgb(0, 188, 212)',
													style: {
														marginLeft: 10,
														cursor: 'pointer'
													},
													onClick: function onClick() {
														var url = _this3.props.path;
														_data2.default.edit(url, _extends({}, data, {
															price: _this3.state.data[data.slug]
														}));
													}
												})
											);
										}
										if (column.key === 'categories') {
											return _react2.default.createElement(
												_Table.TableRowColumn,
												{
													key: i
												},
												_react2.default.createElement(
													'div',
													{
														style: {
															display: 'flex',
															flexWrap: 'wrap'
														}
													},
													_this3.state.categories.map(function (category, i) {
														return data.categories.map(function (productCategory) {
															if (category.slug === productCategory) {
																return _react2.default.createElement(
																	_Chip2.default,
																	{
																		style: {
																			margin: '4px'
																		},
																		key: i
																	},
																	category.title
																);
															}
														});
													})
												)
											);
										}
										return _react2.default.createElement(
											_Table.TableRowColumn,
											{ key: i },
											data[column.key]
										);
									}),
									_react2.default.createElement(
										_Table.TableRowColumn,
										null,
										_react2.default.createElement(
											_reactRouterDom.Link,
											{
												to: path + '/' + data._id
											},
											_react2.default.createElement(_create2.default, {
												color: 'rgb(0, 188, 212)'
											})
										)
									),
									_react2.default.createElement(
										_Table.TableRowColumn,
										null,
										_react2.default.createElement(
											_reactRouterDom.Link,
											{
												to: path + '/' + data._id + '/delete'
											},
											_react2.default.createElement(_delete2.default, {
												color: 'rgb(255, 64, 129)'
											})
										)
									)
								);
							}
						})
					)
				)
			);
		}
	}], [{
		key: 'ascendingSort',
		value: function ascendingSort(key, first, last) {
			if (key !== 'price') {
				return first[key] > last[key];
			}
			return first[key] - last[key];
		}
	}, {
		key: 'descendingSort',
		value: function descendingSort(key, first, last) {
			if (key !== 'price') {
				return last[key] > first[key];
			}
			return last[key] - first[key];
		}
	}]);

	return ResourcesContent;
}(_react2.default.Component);

exports.default = ResourcesContent;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/create");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/clear");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/done");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/save");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Chip");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(31);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _add = __webpack_require__(70);

var _add2 = _interopRequireDefault(_add);

var _refresh = __webpack_require__(71);

var _refresh2 = _interopRequireDefault(_refresh);

var _close = __webpack_require__(72);

var _close2 = _interopRequireDefault(_close);

var _importExport = __webpack_require__(73);

var _importExport2 = _interopRequireDefault(_importExport);

var _reactRouterDom = __webpack_require__(1);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesHeader = function (_React$Component) {
    _inherits(ResourcesHeader, _React$Component);

    function ResourcesHeader(props) {
        _classCallCheck(this, ResourcesHeader);

        var _this = _possibleConstructorReturn(this, (ResourcesHeader.__proto__ || Object.getPrototypeOf(ResourcesHeader)).call(this, props));

        _this.state = {
            filters: [],
            title: false,
            type: false,
            isRequired: false,
            showInFilter: false,
            creationDateStart: false,
            creationDateEnd: false,
            modificationDateStart: false,
            modificationDateEnd: false,
            sku: false,
            category: false,
            'attribute-sets': false,
            priceStart: false,
            priceEnd: false,
            filtration: {
                type: ''
            }
        };
        _this.addFilter = _this.addFilter.bind(_this);
        return _this;
    }

    _createClass(ResourcesHeader, [{
        key: 'addFilter',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event, index, value) {
                var _this2 = this;

                var search, _search, variants, _search2, _search3, _search4, _search5, _search6, _search7, _search8, _search9, result, _search10, _result, _search11, _search12, _search13, _search14, _search15, _result2, _search16, _result3, _search17;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.t0 = value;
                                _context.next = _context.t0 === 'title' ? 3 : _context.t0 === 'sku' ? 5 : _context.t0 === 'type' ? 7 : _context.t0 === 'isRequired' ? 10 : _context.t0 === 'isActive' ? 12 : _context.t0 === 'showInFilter' ? 14 : _context.t0 === 'creationDateStart' ? 16 : _context.t0 === 'creationDateEnd' ? 18 : _context.t0 === 'modificationDateStart' ? 20 : _context.t0 === 'modificationDateEnd' ? 22 : _context.t0 === 'attribute-sets' ? 24 : _context.t0 === 'category' ? 31 : _context.t0 === 'priceStart' ? 38 : _context.t0 === 'priceEnd' ? 40 : _context.t0 === 'name' ? 42 : _context.t0 === 'email' ? 44 : _context.t0 === 'role' ? 46 : _context.t0 === 'client' ? 53 : 60;
                                break;

                            case 3:
                                if (!this.state.title) {
                                    search = _react2.default.createElement(_TextField2.default, {
                                        hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                        floatingLabelText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('title', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [search]),
                                        title: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 5:
                                if (!this.state.sku) {
                                    _search = _react2.default.createElement(_TextField2.default, {
                                        hintText: '\u0410\u0440\u0442\u0438\u043A\u0443\u043B',
                                        floatingLabelText: '\u0410\u0440\u0442\u0438\u043A\u0443\u043B',
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('sku', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search]),
                                        sku: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 7:
                                variants = [{
                                    id: 'multipleSelect',
                                    title: 'Множественный список'
                                }, {
                                    id: 'textInput',
                                    title: 'Текстовое поле'
                                }, {
                                    id: 'select',
                                    title: 'Список'
                                }, {
                                    id: 'numberInput',
                                    title: 'Числовое поле'
                                }, {
                                    id: 'textBlock',
                                    title: 'Текстовый блок'
                                }, {
                                    id: 'boolean',
                                    title: 'Да/Нет'
                                }];

                                if (!this.state.type) {
                                    _search2 = _react2.default.createElement(
                                        _SelectField2.default,
                                        {
                                            floatingLabelText: '\u0422\u0438\u043F',
                                            onChange: function onChange(event, index, value) {
                                                return _this2.props.addFiltration('attrType', value);
                                            }
                                        },
                                        variants.map(function (variant, index) {
                                            return _react2.default.createElement(_MenuItem2.default, {
                                                value: variant.id,
                                                primaryText: variant.title,
                                                key: index
                                            });
                                        })
                                    );

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search2]),
                                        type: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 10:
                                if (!this.state.isRequired) {
                                    _search3 = _react2.default.createElement(_Toggle2.default, {
                                        label: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439',
                                        style: {
                                            maxWidth: 250,
                                            marginTop: 40
                                        },
                                        onToggle: function onToggle(event, value) {
                                            return _this2.props.addFiltration('isRequired', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search3]),
                                        isRequired: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 12:
                                if (!this.state.isActive) {
                                    _search4 = _react2.default.createElement(_Toggle2.default, {
                                        label: '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439',
                                        style: {
                                            maxWidth: 250,
                                            marginTop: 40
                                        },
                                        onToggle: function onToggle(event, value) {
                                            return _this2.props.addFiltration('isActive', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search4]),
                                        isActive: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 14:
                                if (!this.state.showInFilter) {
                                    console.log(1);
                                    _search5 = _react2.default.createElement(_Toggle2.default, {
                                        label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u0444\u0438\u043B\u044C\u0442\u0440\u0435',
                                        style: {
                                            maxWidth: 250,
                                            marginTop: 40
                                        },
                                        onToggle: function onToggle(event, value) {
                                            return _this2.props.addFiltration('showInFilter', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search5]),
                                        showInFilter: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 16:
                                if (!this.state.creationDateStart) {
                                    _search6 = _react2.default.createElement(_DatePicker2.default, {
                                        hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043E\u0442',
                                        style: {
                                            marginTop: 40
                                        },
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('creationDateStart', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search6]),
                                        creationDateUp: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 18:
                                if (!this.state.creationDateEnd) {
                                    _search7 = _react2.default.createElement(_DatePicker2.default, {
                                        hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0434\u043E',
                                        style: {
                                            marginTop: 40
                                        },
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('creationDateEnd', value.toLocaleString());
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search7]),
                                        creationDateEnd: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 20:
                                if (!this.state.modificationDateStart) {
                                    _search8 = _react2.default.createElement(_DatePicker2.default, {
                                        hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043E\u0442',
                                        style: {
                                            marginTop: 40
                                        },
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('modificationDateStart', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search8]),
                                        modificationDateStart: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 22:
                                if (!this.state.modificationDateEnd) {
                                    _search9 = _react2.default.createElement(_DatePicker2.default, {
                                        hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043E\u0442',
                                        style: {
                                            marginTop: 40
                                        },
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('modificationDateEnd', value.toLocaleString());
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search9]),
                                        modificationDateEnd: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 24:
                                if (this.state['attribute-sets']) {
                                    _context.next = 30;
                                    break;
                                }

                                _context.next = 27;
                                return _data2.default.getResource('/attribute-sets');

                            case 27:
                                result = _context.sent;
                                _search10 = _react2.default.createElement(
                                    _SelectField2.default,
                                    {
                                        floatingLabelText: '\u041D\u0430\u0431\u043E\u0440 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432',
                                        value: this.state.filtration.type,
                                        onChange: function onChange(event, index, value) {
                                            return _this2.props.addFiltration('attribute-sets', value);
                                        }
                                    },
                                    result['attribute-sets'].map(function (set, index) {
                                        return _react2.default.createElement(_MenuItem2.default, {
                                            value: set._id,
                                            primaryText: set.title,
                                            key: index
                                        });
                                    })
                                );

                                this.setState({
                                    filters: [].concat(_toConsumableArray(this.state.filters), [_search10]),
                                    'attribute-sets': true
                                });

                            case 30:
                                return _context.abrupt('break', 60);

                            case 31:
                                if (this.state.category) {
                                    _context.next = 37;
                                    break;
                                }

                                _context.next = 34;
                                return _data2.default.getResource('/categories');

                            case 34:
                                _result = _context.sent;
                                _search11 = _react2.default.createElement(
                                    _SelectField2.default,
                                    {
                                        floatingLabelText: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F',
                                        onChange: function onChange(event, index, value) {
                                            return _this2.props.addFiltration('categories', value);
                                        }
                                    },
                                    _result.categories.map(function (category, index) {
                                        return _react2.default.createElement(_MenuItem2.default, {
                                            value: category._id,
                                            primaryText: category.title,
                                            key: index
                                        });
                                    })
                                );

                                this.setState({
                                    filters: [].concat(_toConsumableArray(this.state.filters), [_search11]),
                                    category: true
                                });

                            case 37:
                                return _context.abrupt('break', 60);

                            case 38:
                                if (!this.state.priceStart) {
                                    _search12 = _react2.default.createElement(_TextField2.default, {
                                        hintText: '\u0426\u0435\u043D\u0430 \u043E\u0442',
                                        floatingLabelText: '\u0426\u0435\u043D\u0430 \u043E\u0442',
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('priceStart', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search12]),
                                        priceStart: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 40:
                                if (!this.state.priceEnd) {
                                    _search13 = _react2.default.createElement(_TextField2.default, {
                                        hintText: '\u0426\u0435\u043D\u0430 \u0434\u043E',
                                        floatingLabelText: '\u0426\u0435\u043D\u0430 \u0434\u043E',
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('priceEnd', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search13]),
                                        priceEnd: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 42:
                                if (!this.state.name) {
                                    _search14 = _react2.default.createElement(_TextField2.default, {
                                        hintText: '\u0418\u043C\u044F',
                                        floatingLabelText: '\u0418\u043C\u044F',
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('name', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search14]),
                                        name: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 44:
                                if (!this.state.email) {
                                    _search15 = _react2.default.createElement(_TextField2.default, {
                                        hintText: '\u041F\u043E\u0447\u0442\u0430',
                                        floatingLabelText: '\u041F\u043E\u0447\u0442\u0430',
                                        onChange: function onChange(event, value) {
                                            return _this2.props.addFiltration('email', value);
                                        }
                                    });

                                    this.setState({
                                        filters: [].concat(_toConsumableArray(this.state.filters), [_search15]),
                                        email: true
                                    });
                                }
                                return _context.abrupt('break', 60);

                            case 46:
                                if (this.state.role) {
                                    _context.next = 52;
                                    break;
                                }

                                _context.next = 49;
                                return _data2.default.getResource('/roles');

                            case 49:
                                _result2 = _context.sent;
                                _search16 = _react2.default.createElement(
                                    _SelectField2.default,
                                    {
                                        floatingLabelText: '\u0420\u043E\u043B\u044C',
                                        onChange: function onChange(event, index, value) {
                                            return _this2.props.addFiltration('role', value);
                                        }
                                    },
                                    _result2.roles.map(function (role, index) {
                                        return _react2.default.createElement(_MenuItem2.default, {
                                            value: role.slug,
                                            primaryText: role.name,
                                            key: index
                                        });
                                    })
                                );

                                this.setState({
                                    filters: [].concat(_toConsumableArray(this.state.filters), [_search16]),
                                    role: true
                                });

                            case 52:
                                return _context.abrupt('break', 60);

                            case 53:
                                if (this.state.client) {
                                    _context.next = 59;
                                    break;
                                }

                                _context.next = 56;
                                return _data2.default.getResource('/clients');

                            case 56:
                                _result3 = _context.sent;
                                _search17 = _react2.default.createElement(
                                    _SelectField2.default,
                                    {
                                        floatingLabelText: '\u041A\u043B\u0438\u0435\u043D\u0442',
                                        onChange: function onChange(event, index, value) {
                                            return _this2.props.addFiltration('client', value);
                                        }
                                    },
                                    _result3.clients.map(function (client, index) {
                                        return _react2.default.createElement(_MenuItem2.default, {
                                            value: client.name,
                                            primaryText: client.name,
                                            key: index
                                        });
                                    })
                                );

                                this.setState({
                                    filters: [].concat(_toConsumableArray(this.state.filters), [_search17]),
                                    client: true
                                });

                            case 59:
                                return _context.abrupt('break', 60);

                            case 60:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function addFilter(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return addFilter;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var path = this.props.path;

            var styles = {
                uploadButton: {
                    verticalAlign: 'middle'
                },
                uploadInput: {
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    opacity: 0
                }
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    {
                        className: 'resource-headline'
                    },
                    this.props.title,
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'resource-buttons'
                        },
                        path === '/products' ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_FlatButton2.default, {
                                label: '\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u0430\u0439\u043B',
                                primary: true,
                                icon: _react2.default.createElement(_importExport2.default, { color: _colors.cyan500 }),
                                href: 'http://localhost:3000/import/products'
                            }),
                            _react2.default.createElement(
                                _FlatButton2.default,
                                {
                                    label: '\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u0430\u0439\u043B',
                                    primary: true,
                                    containerElement: 'label',
                                    icon: _react2.default.createElement(_importExport2.default, { color: _colors.cyan500 }),
                                    style: styles.uploadButton
                                },
                                _react2.default.createElement('input', {
                                    type: 'file',
                                    style: styles.uploadInput,
                                    onChange: this.props.exportFile
                                })
                            )
                        ) : null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                to: path + '/create' },
                            _react2.default.createElement(_FlatButton2.default, {
                                label: '\u0421\u043E\u0437\u0434\u0430\u0442\u044C',
                                primary: true,
                                icon: _react2.default.createElement(_add2.default, { color: _colors.cyan500 })
                            })
                        ),
                        _react2.default.createElement(_FlatButton2.default, {
                            label: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C',
                            primary: true,
                            icon: _react2.default.createElement(_refresh2.default, { color: _colors.cyan500 }),
                            onClick: function onClick() {
                                return _this3.props.refresh();
                            }
                        })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'resource-filters'
                    },
                    _react2.default.createElement(
                        _SelectField2.default,
                        {
                            floatingLabelText: '\u0424\u0438\u043B\u044C\u0442\u0440\u044B',
                            onChange: this.addFilter
                        },
                        this.props.filters.map(function (filter, index) {
                            return _react2.default.createElement(_MenuItem2.default, {
                                value: filter.type,
                                primaryText: filter.title,
                                key: index
                            });
                        })
                    ),
                    this.state.filters.map(function (filter, index) {
                        return _react2.default.createElement(
                            'div',
                            {
                                className: 'filter',
                                key: index
                            },
                            filter,
                            _react2.default.createElement(_close2.default, {
                                style: {
                                    cursor: 'pointer',
                                    marginTop: 40
                                }
                            })
                        );
                    })
                )
            );
        }
    }]);

    return ResourcesHeader;
}(_react2.default.Component);

exports.default = ResourcesHeader;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/add");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/refresh");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/close");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/communication/import-export");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("map-obj");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUiPagination = __webpack_require__(76);

var _materialUiPagination2 = _interopRequireDefault(_materialUiPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaginationContainer = function (_React$Component) {
    _inherits(PaginationContainer, _React$Component);

    function PaginationContainer(props) {
        _classCallCheck(this, PaginationContainer);

        return _possibleConstructorReturn(this, (PaginationContainer.__proto__ || Object.getPrototypeOf(PaginationContainer)).call(this, props));
    }

    _createClass(PaginationContainer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                total = _props.total,
                changePage = _props.changePage,
                page = _props.page;

            return _react2.default.createElement(
                'div',
                {
                    className: 'pagination' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'total' },
                    page * 10 - 9,
                    ' - ',
                    total > page % 10 * 10 ? page % 10 * 10 : total,
                    ' \u0438\u0437 ',
                    total
                ),
                _react2.default.createElement(_materialUiPagination2.default, {
                    total: total % 10 === 0 ? Math.floor(total / 10) : Math.floor(total / 10 + 1),
                    display: total % 10 === 0 ? Math.floor(total / 10) : Math.floor(total / 10 + 1),
                    current: page,
                    onChange: changePage
                })
            );
        }
    }]);

    return PaginationContainer;
}(_react2.default.Component);

exports.default = PaginationContainer;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pagination");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GridList = __webpack_require__(78);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photos = function (_React$Component) {
    _inherits(Photos, _React$Component);

    function Photos(props) {
        _classCallCheck(this, Photos);

        return _possibleConstructorReturn(this, (Photos.__proto__ || Object.getPrototypeOf(Photos)).call(this, props));
    }

    _createClass(Photos, [{
        key: 'render',
        value: function render() {
            var data = this.props.data;

            return _react2.default.createElement(
                _GridList.GridList,
                {
                    cellHeight: 180,
                    cols: 4,
                    className: 'photos__gridlist'
                },
                data.map(function (item, key) {
                    return _react2.default.createElement(
                        _GridList.GridTile,
                        {
                            key: key,
                            title: ' ',
                            actionIcon: _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    to: 'photos/' + item._id + '/delete'
                                },
                                _react2.default.createElement(_delete2.default, {
                                    color: 'rgb(255, 64, 129)',
                                    style: {
                                        cursor: 'pointer'
                                    }
                                })
                            )
                        },
                        _react2.default.createElement('img', {
                            src: item.url
                        })
                    );
                })
            );
        }
    }]);

    return Photos;
}(_react2.default.Component);

exports.default = Photos;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("material-ui/GridList");

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RemoveLayout = function (_React$Component) {
    _inherits(RemoveLayout, _React$Component);

    function RemoveLayout() {
        _classCallCheck(this, RemoveLayout);

        return _possibleConstructorReturn(this, (RemoveLayout.__proto__ || Object.getPrototypeOf(RemoveLayout)).apply(this, arguments));
    }

    _createClass(RemoveLayout, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                location = _props.location,
                resources = _props.resources;

            return _react2.default.createElement(
                'div',
                {
                    className: 'resource-page' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'warning-msg'
                    },
                    '\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?'
                ),
                _react2.default.createElement(_toolBar2.default, {
                    action: 'delete',
                    resource: location,
                    resources: resources
                })
            );
        }
    }]);

    return RemoveLayout;
}(_react2.default.Component);

exports.default = RemoveLayout;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
    _inherits(Profile, _React$Component);

    function Profile(props) {
        _classCallCheck(this, Profile);

        var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

        _this.state = {
            user: '',
            password: ''
        };
        _this.getUser().catch(function (error) {
            return console.error('\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0444\u0438\u043B\u044F: ', error);
        });
        return _this;
    }

    _createClass(Profile, [{
        key: 'getUser',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getProfile();

                            case 2:
                                result = _context.sent;

                                this.setState({
                                    user: result.profile
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUser() {
                return _ref.apply(this, arguments);
            }

            return getUser;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                {
                    className: 'resource-page' },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'profile__label'
                    },
                    '\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F'
                ),
                _react2.default.createElement(_TextField2.default, {
                    fullWidth: true,
                    hintText: '\u041F\u043E\u0447\u0442\u0430',
                    floatingLabelText: '\u041F\u043E\u0447\u0442\u0430',
                    value: this.state.user,
                    onChange: function onChange(event, value) {
                        return _this2.setState({
                            user: value
                        });
                    }
                }),
                _react2.default.createElement(_TextField2.default, {
                    fullWidth: true,
                    hintText: '\u041F\u0430\u0440\u043E\u043B\u044C',
                    floatingLabelText: '\u041F\u0430\u0440\u043E\u043B\u044C',
                    onChange: function onChange(event, value) {
                        return _this2.setState({
                            password: value
                        });
                    }
                }),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'profile',
                    data: this.state,
                    action: 'edit'
                })
            );
        }
    }]);

    return Profile;
}(_react2.default.Component);

exports.default = Profile;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _reactRouterDom = __webpack_require__(1);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _draftjsToHtml = __webpack_require__(18);

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _reactDraftWysiwyg = __webpack_require__(19);

var _draftJs = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoriesCreate = function (_React$Component) {
    _inherits(CategoriesCreate, _React$Component);

    function CategoriesCreate(props) {
        _classCallCheck(this, CategoriesCreate);

        var _this = _possibleConstructorReturn(this, (CategoriesCreate.__proto__ || Object.getPrototypeOf(CategoriesCreate)).call(this, props));

        _this.state = {
            categories: [],
            data: {
                image: '',
                slug: (0, _uid2.default)(16)
            },
            descState: _draftJs.EditorState.createEmpty(),
            image: undefined
        };
        _this.getData();
        _this.uploadFile = _this.uploadFile.bind(_this);
        _this.onEditorDescChange = _this.onEditorDescChange.bind(_this);
        _this.changeParentCategory = _this.changeParentCategory.bind(_this);
        return _this;
    }

    _createClass(CategoriesCreate, [{
        key: 'uploadFile',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
                var result;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.uploadImage('/upload/categories', file.target.files[0]);

                            case 2:
                                result = _context.sent;

                                this.setState({
                                    data: _extends({}, this.state.data, {
                                        image: result
                                    }),
                                    image: result
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function uploadFile(_x) {
                return _ref.apply(this, arguments);
            }

            return uploadFile;
        }()
    }, {
        key: 'changeParentCategory',
        value: function changeParentCategory(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    parentCategory: value
                })
            });
        }
    }, {
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'getData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _data2.default.getData('/categories');

                            case 2:
                                response = _context2.sent;

                                this.setState({
                                    categories: response.data
                                });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getData() {
                return _ref2.apply(this, arguments);
            }

            return getData;
        }()
    }, {
        key: 'onEditorDescChange',
        value: function onEditorDescChange(descState) {
            this.setState({
                descState: descState
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/categories'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '150px'
                                },
                                label: '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'isActive');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                floatingLabelText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'title');
                                }
                            }),
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
                                        color: 'rgba(0, 0, 0, 0.3)'
                                    }
                                },
                                '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
                            ),
                            _react2.default.createElement(_reactDraftWysiwyg.Editor, {
                                editorState: this.state.descState,
                                wrapperClassName: 'demo-wrapper',
                                editorClassName: 'demo-editor',
                                onEditorStateChange: this.onEditorDescChange,
                                onChange: function onChange() {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            description: (0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(_this2.state.descState.getCurrentContent()))
                                        })
                                    });
                                }
                            }),
                            _react2.default.createElement('input', {
                                type: 'file',
                                className: 'inputfile',
                                id: 'file',
                                onChange: this.uploadFile
                            }),
                            _react2.default.createElement(
                                'label',
                                {
                                    htmlFor: 'file',
                                    className: 'inputfile__label'
                                },
                                '\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435'
                            ),
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'inputfile__images'
                                },
                                _react2.default.createElement('img', {
                                    className: 'inputfile__image',
                                    src: this.state.data.image
                                })
                            ),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    value: this.state.data.parentCategory,
                                    floatingLabelText: '\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F',
                                    onChange: this.changeParentCategory
                                },
                                this.state.categories.map(function (category, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: category.slug,
                                        primaryText: category.title,
                                        key: index
                                    });
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: 'SEO' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: 'SEO \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                floatingLabelText: 'SEO \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.seo, {
                                        title: value
                                    }), 'seo');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: 'SEO \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435',
                                floatingLabelText: 'SEO \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.seo, {
                                        description: value
                                    }), 'seo');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: 'SEO \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430',
                                floatingLabelText: 'SEO \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.seo, {
                                        keywords: value
                                    }), 'seo');
                                }
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'categories',
                    data: this.state.data,
                    action: 'create',
                    photo: this.state.image
                })
            );
        }
    }]);

    return CategoriesCreate;
}(_react2.default.Component);

exports.default = CategoriesCreate;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _Table = __webpack_require__(13);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _reactRouterDom = __webpack_require__(1);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _reactDraftWysiwyg = __webpack_require__(19);

var _draftJs = __webpack_require__(20);

var _draftjsToHtml = __webpack_require__(18);

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _htmlToDraftjs = __webpack_require__(23);

var _htmlToDraftjs2 = _interopRequireDefault(_htmlToDraftjs);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductsCreate = function (_React$Component) {
	_inherits(ProductsCreate, _React$Component);

	function ProductsCreate(props) {
		_classCallCheck(this, ProductsCreate);

		var _this = _possibleConstructorReturn(this, (ProductsCreate.__proto__ || Object.getPrototypeOf(ProductsCreate)).call(this, props));

		_this.state = {
			data: {
				isActive: false,
				relatedProducts: [],
				fromSet: [],
				images: [],
				categories: [],
				seo: {
					title: '',
					description: '',
					keywords: ''
				},
				'attribute-sets': [],
				attributes: [],
				'tab-sets': [],
				tabs: [],
				slug: (0, _uid2.default)(16)
			},
			descState: _draftJs.EditorState.createEmpty(),
			shortDescState: _draftJs.EditorState.createEmpty(),
			products: []
		};
		if (!!_this.props.match) {
			_this.getProduct();
		}
		_this.getResource('/products');
		_this.getResource('/categories');
		_this.getResource('/attribute-sets');
		_this.getResource('/tab-sets');
		_this.changeRelatedProducts = _this.changeRelatedProducts.bind(_this);
		_this.uploadFile = _this.uploadFile.bind(_this);
		_this.changeCategories = _this.changeCategories.bind(_this);
		_this.changeAttributeSets = _this.changeAttributeSets.bind(_this);
		_this.changeTabSets = _this.changeTabSets.bind(_this);
		_this.onEditorDescChange = _this.onEditorDescChange.bind(_this);
		_this.onEditorShortDescChange = _this.onEditorShortDescChange.bind(_this);
		return _this;
	}

	_createClass(ProductsCreate, [{
		key: 'getProduct',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var id, response, description, contentBlockDesc, contentStateDesc, editorStateDesc, shortDescription, contentBlockShortDesc, contentStateShortDesc, editorStateShortDesc;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								id = this.props.match.params.id;
								_context.next = 3;
								return _data2.default.getResource('/products/' + id);

							case 3:
								response = _context.sent;

								delete response._id;
								description = response.description;
								contentBlockDesc = (0, _htmlToDraftjs2.default)(description);
								contentStateDesc = _draftJs.ContentState.createFromBlockArray(contentBlockDesc.contentBlocks);
								editorStateDesc = _draftJs.EditorState.createWithContent(contentStateDesc);
								shortDescription = response.shortDescription;
								contentBlockShortDesc = (0, _htmlToDraftjs2.default)(shortDescription);
								contentStateShortDesc = _draftJs.ContentState.createFromBlockArray(contentBlockShortDesc.contentBlocks);
								editorStateShortDesc = _draftJs.EditorState.createWithContent(contentStateShortDesc);

								this.setState({
									data: _extends({}, this.state.data, response, {
										sku: response.sku + '-COPY'
									}),
									descState: editorStateDesc,
									shortDescState: editorStateShortDesc
								});

							case 14:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getProduct() {
				return _ref.apply(this, arguments);
			}

			return getProduct;
		}()
	}, {
		key: 'changeState',
		value: function changeState(value, key) {
			var newState = this.state;
			newState.data[key] = value;
			this.setState(newState);
		}
	}, {
		key: 'changeRelatedProducts',
		value: function changeRelatedProducts(event, index, value) {
			var _this2 = this;

			this.state.products.forEach(function (product) {
				if (product.slug === value) {
					_this2.changeState([].concat(_toConsumableArray(_this2.state.data.relatedProducts), [product]), 'relatedProducts');
				}
			});
		}
	}, {
		key: 'deleteRelatedProduct',
		value: function deleteRelatedProduct(id) {
			var relatedProducts = [];
			this.state.data.relatedProducts.map(function (relatedProduct) {
				if (relatedProduct.slug !== id) {
					relatedProducts.push(relatedProduct);
				}
			});
			this.changeState(relatedProducts, 'relatedProducts');
		}
	}, {
		key: 'uploadFile',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
				var result;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _data2.default.uploadImage('/upload/products', file.target.files[0]);

							case 2:
								result = _context2.sent;

								this.setState({
									data: _extends({}, this.state.data, {
										images: [].concat(_toConsumableArray(this.state.data.images), [result])
									})
								});

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function uploadFile(_x) {
				return _ref2.apply(this, arguments);
			}

			return uploadFile;
		}()
	}, {
		key: 'getResource',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(uri) {
				var resource, response, newState;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								resource = uri.slice(1);
								_context3.next = 3;
								return _data2.default.getData(uri);

							case 3:
								response = _context3.sent;
								newState = {};

								newState[resource] = response.data;
								this.setState(newState);

							case 7:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getResource(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getResource;
		}()
	}, {
		key: 'changeCategories',
		value: function changeCategories(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					categories: [].concat(_toConsumableArray(this.state.data.categories), _toConsumableArray(value))
				})
			});
		}
	}, {
		key: 'changeAttributeSets',
		value: function changeAttributeSets(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					'attribute-sets': [].concat(_toConsumableArray(this.state.data['attribute-sets']), _toConsumableArray(value))
				})
			});
		}
	}, {
		key: 'changeTabSets',
		value: function changeTabSets(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					'tab-sets': [].concat(_toConsumableArray(this.state.data['tab-sets']), _toConsumableArray(value))
				})
			});
		}
	}, {
		key: 'onEditorDescChange',
		value: function onEditorDescChange(descState) {
			this.setState({
				descState: descState
			});
		}
	}, {
		key: 'onEditorShortDescChange',
		value: function onEditorShortDescChange(shortDescState) {
			this.setState({
				shortDescState: shortDescState
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			if (!this.state.categories || !this.state.products || !this.state['attribute-sets'] || !this.state['tab-sets']) return false;
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Tabs.Tabs,
					null,
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
						_react2.default.createElement(
							'div',
							{
								className: 'big-resource' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{
									className: 'resource-actions',
									to: '/products'
								},
								_react2.default.createElement(_FlatButton2.default, {
									label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
									primary: true,
									icon: _react2.default.createElement(_list2.default, null)
								})
							),
							_react2.default.createElement(_Toggle2.default, {
								style: {
									width: '150px',
									marginLeft: '20px'
								},
								label: '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439',
								toggled: this.state.data.isActive,
								onToggle: function onToggle(event, value) {
									return _this3.changeState(value, 'isActive');
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								floatingLabelText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
								value: this.state.data.title,
								onChange: function onChange(event, value) {
									return _this3.changeState(value, 'title');
								}
							}),
							_react2.default.createElement(
								'div',
								{
									style: {
										color: 'rgba(0, 0, 0, 0.3)'
									}
								},
								'\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
							),
							_react2.default.createElement(_reactDraftWysiwyg.Editor, {
								editorState: this.state.descState,
								wrapperClassName: 'demo-wrapper',
								editorClassName: 'demo-editor',
								onEditorStateChange: this.onEditorDescChange,
								onChange: function onChange() {
									return _this3.setState({
										data: _extends({}, _this3.state.data, {
											description: (0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(_this3.state.descState.getCurrentContent()))
										})
									});
								}
							}),
							_react2.default.createElement(
								'div',
								{
									style: {
										color: 'rgba(0, 0, 0, 0.3)'
									}
								},
								'\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
							),
							_react2.default.createElement(_reactDraftWysiwyg.Editor, {
								editorState: this.state.shortDescState,
								wrapperClassName: 'demo-wrapper',
								editorClassName: 'demo-editor',
								onEditorStateChange: this.onEditorShortDescChange,
								onChange: function onChange() {
									return _this3.setState({
										data: _extends({}, _this3.state.data, {
											shortDescription: (0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(_this3.state.shortDescState.getCurrentContent()))
										})
									});
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: '\u0410\u0440\u0442\u0438\u043A\u0443\u043B',
								floatingLabelText: '\u0410\u0440\u0442\u0438\u043A\u0443\u043B',
								errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
								value: this.state.data.sku,
								onChange: function onChange(event, value) {
									return _this3.changeState(value, 'sku');
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: '\u0426\u0435\u043D\u0430',
								floatingLabelText: '\u0426\u0435\u043D\u0430',
								errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
								value: this.state.data.price,
								onChange: function onChange(event, value) {
									return _this3.changeState(value, 'price');
								}
							}),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									multiple: true,
									value: this.state.data.categories,
									floatingLabelText: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438',
									onChange: function onChange(event, index, value) {
										_this3.setState({
											data: _extends({}, _this3.state.data, {
												categories: value
											})
										});
									}
								},
								this.state.categories.map(function (category, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: category.slug,
										primaryText: category.title,
										key: index
									});
								})
							),
							_react2.default.createElement('input', {
								type: 'file',
								className: 'inputfile',
								id: 'file',
								onChange: this.uploadFile
							}),
							_react2.default.createElement(
								'label',
								{
									htmlFor: 'file',
									className: 'inputfile__label'
								},
								'\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435'
							),
							_react2.default.createElement(
								'div',
								{
									className: 'inputfile__images'
								},
								this.state.data.images.map(function (image, index) {
									return _react2.default.createElement('img', {
										className: 'inputfile__image',
										src: image,
										key: index
									});
								})
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									multiple: true,
									value: this.state.data['attribute-sets'],
									floatingLabelText: '\u041D\u0430\u0431\u043E\u0440\u044B \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432',
									onChange: function onChange(event, index, value) {
										return _this3.setState({
											data: _extends({}, _this3.state.data, {
												'attribute-sets': value
											})
										});
									}
								},
								this.state['attribute-sets'].map(function (attribute, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: attribute.slug,
										primaryText: attribute.title,
										key: index
									});
								})
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									multiple: true,
									value: this.state.data['tab-sets'],
									floatingLabelText: '\u041D\u0430\u0431\u043E\u0440\u044B \u0442\u0430\u0431\u043E\u0432',
									onChange: function onChange(event, index, value) {
										return _this3.setState({
											data: _extends({}, _this3.state.data, {
												'tab-sets': value
											})
										});
									}
								},
								this.state['tab-sets'].map(function (set, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: set.slug,
										primaryText: set.title,
										key: index
									});
								})
							)
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: 'SEO' },
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								floatingLabelText: 'SEO \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								value: this.state.data.seo.title,
								onChange: function onChange(event, value) {
									return _this3.changeState(_extends({}, _this3.state.data.seo, {
										title: value
									}), 'seo');
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435',
								floatingLabelText: 'SEO \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435',
								value: this.state.data.seo.description,
								onChange: function onChange(event, value) {
									return _this3.changeState(_extends({}, _this3.state.data.seo, {
										description: value
									}), 'seo');
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430',
								floatingLabelText: 'SEO \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430',
								value: this.state.data.seo.keywords,
								onChange: function onChange(event, value) {
									return _this3.changeState(_extends({}, _this3.state.data.seo, {
										keywords: value
									}), 'seo');
								}
							})
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: '\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B' },
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							_react2.default.createElement(
								_Table.Table,
								{
									selectable: false
								},
								_react2.default.createElement(
									_Table.TableHeader,
									{
										displaySelectAll: false,
										adjustForCheckbox: false
									},
									_react2.default.createElement(
										_Table.TableRow,
										null,
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u0410\u0440\u0442\u0438\u043A\u0443\u043B'
										),
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435'
										),
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u0426\u0435\u043D\u0430'
										),
										_react2.default.createElement(_Table.TableHeaderColumn, null)
									)
								),
								_react2.default.createElement(
									_Table.TableBody,
									{
										displayRowCheckbox: false
									},
									this.state.data.relatedProducts.map(function (relatedProduct, index) {
										return _this3.state.products.map(function (product) {
											if (product.slug === relatedProduct) {
												return _react2.default.createElement(
													_Table.TableRow,
													{
														key: index
													},
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.sku
													),
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.title
													),
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.price
													),
													_react2.default.createElement(
														_Table.TableHeaderColumn,
														null,
														_react2.default.createElement(_delete2.default, {
															color: 'rgb(255, 64, 129)',
															onClick: function onClick() {
																var relatedProducts = _this3.state.data.relatedProducts;
																relatedProducts.splice(index, 1);
																_this3.setState({
																	data: _extends({}, _this3.state.data, {
																		relatedProducts: relatedProducts
																	})
																});
															},
															style: { cursor: 'pointer' }
														})
													)
												);
											}
										});
									})
								)
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									value: this.state.data.relatedProducts,
									floatingLabelText: '\u041F\u043E\u0445\u043E\u0436\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442',
									onChange: function onChange(event, index, value) {
										return _this3.setState({
											data: _extends({}, _this3.state.data, {
												relatedProducts: [].concat(_toConsumableArray(_this3.state.data.relatedProducts), [value])
											})
										});
									}
								},
								this.state.products.map(function (product, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: product.slug,
										primaryText: product.title,
										key: index
									});
								})
							)
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: '\u0422\u043E\u0432\u0430\u0440\u044B \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430' },
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							_react2.default.createElement(
								_Table.Table,
								{
									selectable: false
								},
								_react2.default.createElement(
									_Table.TableHeader,
									{
										displaySelectAll: false,
										adjustForCheckbox: false
									},
									_react2.default.createElement(
										_Table.TableRow,
										null,
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u0410\u0440\u0442\u0438\u043A\u0443\u043B'
										),
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435'
										),
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u0426\u0435\u043D\u0430'
										),
										_react2.default.createElement(_Table.TableHeaderColumn, null)
									)
								),
								_react2.default.createElement(
									_Table.TableBody,
									{
										displayRowCheckbox: false
									},
									this.state.data.fromSet.map(function (fromSet, index) {
										return _this3.state.products.map(function (product) {
											if (product.slug === fromSet) {
												return _react2.default.createElement(
													_Table.TableRow,
													{
														key: index
													},
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.sku
													),
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.title
													),
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.price
													),
													_react2.default.createElement(
														_Table.TableHeaderColumn,
														null,
														_react2.default.createElement(_delete2.default, {
															color: 'rgb(255, 64, 129)',
															onClick: function onClick() {
																var fromSet = _this3.state.data.fromSet;
																fromSet.splice(index, 1);
																_this3.setState({
																	data: _extends({}, _this3.state.data, {
																		fromSet: fromSet
																	})
																});
															},
															style: { cursor: 'pointer' }
														})
													)
												);
											}
										});
									})
								)
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									value: this.state.data.fromSet,
									floatingLabelText: '\u0422\u043E\u0432\u0430\u0440 \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430',
									onChange: function onChange(event, index, value) {
										return _this3.setState({
											data: _extends({}, _this3.state.data, {
												fromSet: [].concat(_toConsumableArray(_this3.state.data.fromSet), [value])
											})
										});
									}
								},
								this.state.products.map(function (product, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: product.slug,
										primaryText: product.title,
										key: index
									});
								})
							)
						)
					)
				),
				_react2.default.createElement(_toolBar2.default, {
					resources: 'products',
					data: this.state.data,
					action: 'create'
				})
			);
		}
	}]);

	return ProductsCreate;
}(_react2.default.Component);

exports.default = ProductsCreate;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Table = __webpack_require__(13);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _reactRouterDom = __webpack_require__(1);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrdersCreate = function (_React$Component) {
    _inherits(OrdersCreate, _React$Component);

    function OrdersCreate(props) {
        _classCallCheck(this, OrdersCreate);

        var _this = _possibleConstructorReturn(this, (OrdersCreate.__proto__ || Object.getPrototypeOf(OrdersCreate)).call(this, props));

        _this.state = {
            statuses: [],
            clients: [],
            data: {
                products: [],
                slug: (0, _uid2.default)(16)
            },
            products: []
        };
        _this.getData('/statuses');
        _this.getData('/clients');
        _this.getData('/products');
        _this.changeProducts = _this.changeProducts.bind(_this);
        return _this;
    }

    _createClass(OrdersCreate, [{
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'changeProducts',
        value: function changeProducts(event, index, value) {
            var _this2 = this;

            this.state.products.forEach(function (product) {
                if (product._id === value) {
                    _this2.changeState([].concat(_toConsumableArray(_this2.state.data.products), [product]), 'products');
                }
            });
        }
    }, {
        key: 'deleteProduct',
        value: function deleteProduct(id) {
            var products = [];
            this.state.data.products.map(function (product) {
                if (product._id !== id) {
                    products.push(product);
                }
            });
            this.changeState(products, 'products');
        }
    }, {
        key: 'changeStatus',
        value: function changeStatus(value) {
            var _this3 = this;

            this.setState({
                currentStatus: value
            });
            this.state.statuses.forEach(function (status) {
                if (status._id === value) {
                    _this3.setState({
                        data: _extends({}, _this3.state.data, {
                            status: {
                                id: value,
                                name: status.title
                            }
                        })
                    });
                }
            });
        }
    }, {
        key: 'getData',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uri) {
                var response, newState;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getData(uri);

                            case 2:
                                response = _context.sent;
                                newState = {};

                                newState[uri.slice(1)] = response.data;
                                this.setState(newState);

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getData(_x) {
                return _ref.apply(this, arguments);
            }

            return getData;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/orders'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    floatingLabelText: '\u0421\u0442\u0430\u0442\u0443\u0441',
                                    value: this.state.data.status,
                                    onChange: function onChange(event, index, value) {
                                        return _this4.setState({
                                            data: _extends({}, _this4.state.data, {
                                                status: value
                                            })
                                        });
                                    }
                                },
                                this.state.statuses.map(function (status, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: status.slug,
                                        primaryText: status.title,
                                        key: index
                                    });
                                })
                            ),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    floatingLabelText: '\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A',
                                    value: this.state.data.client,
                                    onChange: function onChange(event, index, value) {
                                        return _this4.setState({
                                            data: _extends({}, _this4.state.data, {
                                                client: value
                                            })
                                        });
                                    }
                                },
                                this.state.clients.map(function (client, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: client.slug,
                                        primaryText: client.name,
                                        key: index
                                    });
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _Table.Table,
                                {
                                    selectable: false
                                },
                                _react2.default.createElement(
                                    _Table.TableHeader,
                                    {
                                        displaySelectAll: false,
                                        adjustForCheckbox: false
                                    },
                                    _react2.default.createElement(
                                        _Table.TableRow,
                                        null,
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0410\u0440\u0442\u0438\u043A\u0443\u043B'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0426\u0435\u043D\u0430'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0418\u0442\u043E\u0433\u043E'
                                        ),
                                        _react2.default.createElement(_Table.TableHeaderColumn, null)
                                    )
                                ),
                                _react2.default.createElement(
                                    _Table.TableBody,
                                    {
                                        displayRowCheckbox: false
                                    },
                                    this.state.data.products.map(function (product, index) {
                                        return _react2.default.createElement(
                                            _Table.TableRow,
                                            {
                                                key: index
                                            },
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                product.sku
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                product.title
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                product.price
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                product.count
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                '\u0418\u0422\u041E\u0413\u041E'
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableHeaderColumn,
                                                null,
                                                _react2.default.createElement(_delete2.default, {
                                                    color: 'rgb(255, 64, 129)',
                                                    onClick: function onClick() {
                                                        return _this4.deleteProduct(product._id);
                                                    },
                                                    style: { cursor: 'pointer' }
                                                })
                                            )
                                        );
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    floatingLabelText: '\u041F\u043E\u0445\u043E\u0436\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442',
                                    onChange: this.changeProducts
                                },
                                this.state.products.map(function (product, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: product._id,
                                        primaryText: product.title,
                                        key: index
                                    });
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u0410\u0434\u0440\u0435\u0441' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0421\u0442\u0440\u0430\u043D\u0430',
                                floatingLabelText: '\u0421\u0442\u0440\u0430\u043D\u0430',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this4.changeState(_extends({}, _this4.state.data.address, {
                                        country: value
                                    }), 'address');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041E\u0431\u043B\u0430\u0441\u0442\u044C',
                                floatingLabelText: '\u041E\u0431\u043B\u0430\u0441\u0442\u044C',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this4.changeState(_extends({}, _this4.state.data.address, {
                                        state: value
                                    }), 'address');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0413\u043E\u0440\u043E\u0434',
                                floatingLabelText: '\u0413\u043E\u0440\u043E\u0434',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this4.changeState(_extends({}, _this4.state.data.address, {
                                        city: value
                                    }), 'address');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0423\u043B\u0438\u0446\u0430',
                                floatingLabelText: '\u0423\u043B\u0438\u0446\u0430',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this4.changeState(_extends({}, _this4.state.data.address, {
                                        street: value
                                    }), 'address');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0414\u043E\u043C',
                                floatingLabelText: '\u0414\u043E\u043C',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this4.changeState(_extends({}, _this4.state.data.address, {
                                        building: value
                                    }), 'address');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430',
                                floatingLabelText: '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430',
                                onChange: function onChange(event, value) {
                                    return _this4.changeState(_extends({}, _this4.state.data.address, {
                                        apartment: value
                                    }), 'address');
                                }
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'orders',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return OrdersCreate;
}(_react2.default.Component);

exports.default = OrdersCreate;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _hash = __webpack_require__(33);

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersCreate = function (_React$Component) {
    _inherits(UsersCreate, _React$Component);

    function UsersCreate(props) {
        _classCallCheck(this, UsersCreate);

        var _this = _possibleConstructorReturn(this, (UsersCreate.__proto__ || Object.getPrototypeOf(UsersCreate)).call(this, props));

        _this.state = {
            roles: [],
            data: {
                slug: (0, _uid2.default)(16)
            }
        };
        _this.getRoles();
        _this.changeRole = _this.changeRole.bind(_this);
        _this.changeState = _this.changeState.bind(_this);
        return _this;
    }

    _createClass(UsersCreate, [{
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'changeRole',
        value: function changeRole(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    role: value
                })
            });
        }
    }, {
        key: 'getRoles',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getData('/roles');

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    roles: response.data
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getRoles() {
                return _ref.apply(this, arguments);
            }

            return getRoles;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/users'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0418\u043C\u044F',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'name');
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041F\u043E\u0447\u0442\u0430',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'email');
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041F\u0430\u0440\u043E\u043B\u044C',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(_hash2.default.getHash(value), 'password');
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    value: this.state.data.role,
                                    floatingLabelText: '\u0420\u043E\u043B\u044C',
                                    onChange: this.changeRole
                                },
                                this.state.roles.map(function (role, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: role.slug,
                                        primaryText: role.name,
                                        key: index
                                    });
                                })
                            )
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'users',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return UsersCreate;
}(_react2.default.Component);

exports.default = UsersCreate;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(16);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Table = __webpack_require__(13);

var _Dialog = __webpack_require__(21);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _reactRouterDom = __webpack_require__(1);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClientsCreate = function (_React$Component) {
    _inherits(ClientsCreate, _React$Component);

    function ClientsCreate(props) {
        _classCallCheck(this, ClientsCreate);

        var _this = _possibleConstructorReturn(this, (ClientsCreate.__proto__ || Object.getPrototypeOf(ClientsCreate)).call(this, props));

        _this.state = {
            data: {
                addresses: [],
                slug: (0, _uid2.default)(16)
            },
            open: false
        };
        _this.handleOpen = _this.handleOpen.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.addAddress = _this.addAddress.bind(_this);
        _this.deleteAdresses = _this.deleteAdresses.bind(_this);
        return _this;
    }

    _createClass(ClientsCreate, [{
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'handleOpen',
        value: function handleOpen() {
            this.setState({
                open: true
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'deleteAdresses',
        value: function deleteAdresses(id) {
            var addresses = [];
            this.state.data.addresses.forEach(function (address, index) {
                if (index !== id) addresses.push(address);
            });
            this.setState({
                data: _extends({}, this.state.data, {
                    addresses: addresses
                })
            });
        }
    }, {
        key: 'addAddress',
        value: function addAddress() {
            this.setState({
                data: _extends({}, this.state.data, {
                    addresses: [].concat(_toConsumableArray(this.state.data.addresses), [{
                        country: this.state.country,
                        state: this.state.state,
                        city: this.state.city,
                        street: this.state.street,
                        building: this.state.building,
                        apartment: this.state.apartment
                    }])
                })
            });
            this.handleClose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var actions = [_react2.default.createElement(_FlatButton2.default, {
                label: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
                primary: true,
                onClick: this.handleClose
            }), _react2.default.createElement(_FlatButton2.default, {
                label: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
                primary: true,
                onClick: this.addAddress
            })];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/clients'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0418\u043C\u044F',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'name');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041F\u043E\u0447\u0442\u0430',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'email');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'phone');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041F\u0430\u0440\u043E\u043B\u044C',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'password');
                                }
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u0410\u0434\u0440\u0435\u0441\u0430' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _Table.Table,
                                {
                                    selectable: false
                                },
                                _react2.default.createElement(
                                    _Table.TableHeader,
                                    {
                                        displaySelectAll: false,
                                        adjustForCheckbox: false
                                    },
                                    _react2.default.createElement(
                                        _Table.TableRow,
                                        null,
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0421\u0442\u0440\u0430\u043D\u0430'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u041E\u0431\u043B\u0430\u0441\u0442\u044C'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0413\u043E\u0440\u043E\u0434'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0423\u043B\u0438\u0446\u0430'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0414\u043E\u043C'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430'
                                        ),
                                        _react2.default.createElement(_Table.TableHeaderColumn, null)
                                    )
                                ),
                                _react2.default.createElement(
                                    _Table.TableBody,
                                    {
                                        displayRowCheckbox: false
                                    },
                                    this.state.data.addresses.map(function (address, index) {
                                        return _react2.default.createElement(
                                            _Table.TableRow,
                                            {
                                                key: index
                                            },
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.country
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.state
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.city
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.street
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.building
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.apartment
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableHeaderColumn,
                                                null,
                                                _react2.default.createElement(_delete2.default, {
                                                    color: 'rgb(255, 64, 129)',
                                                    onClick: function onClick() {
                                                        return _this2.deleteAdresses(index);
                                                    },
                                                    style: { cursor: 'pointer' }
                                                })
                                            )
                                        );
                                    })
                                )
                            ),
                            _react2.default.createElement(_RaisedButton2.default, {
                                label: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
                                style: { margin: '38px' },
                                onClick: this.handleOpen
                            }),
                            _react2.default.createElement(
                                _Dialog2.default,
                                {
                                    title: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430',
                                    actions: actions,
                                    modal: true,
                                    open: this.state.open,
                                    autoScrollBodyContent: true
                                },
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u0421\u0442\u0440\u0430\u043D\u0430',
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            country: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u041E\u0431\u043B\u0430\u0441\u0442\u044C',
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            state: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u0413\u043E\u0440\u043E\u0434',
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            city: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u0423\u043B\u0438\u0446\u0430',
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            street: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u0414\u043E\u043C',
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            building: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            apartment: value
                                        });
                                    } })
                            )
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'clients',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return ClientsCreate;
}(_react2.default.Component);

exports.default = ClientsCreate;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _Table = __webpack_require__(13);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _Dialog = __webpack_require__(21);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = __webpack_require__(16);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributesCreate = function (_React$Component) {
    _inherits(AttributesCreate, _React$Component);

    function AttributesCreate(props) {
        _classCallCheck(this, AttributesCreate);

        var _this = _possibleConstructorReturn(this, (AttributesCreate.__proto__ || Object.getPrototypeOf(AttributesCreate)).call(this, props));

        _this.state = {
            data: {
                showInFilter: false,
                showInProductPage: false,
                showInList: false,
                isRequired: false,
                name: null,
                title: null,
                units: null,
                attrType: null,
                variants: [],
                slug: (0, _uid2.default)(16)
            },
            open: false,
            types: [{
                id: 'multipleSelect',
                title: 'Множественный список'
            }, {
                id: 'textInput',
                title: 'Текстовое поле'
            }, {
                id: 'select',
                title: 'Список'
            }, {
                id: 'numberInput',
                title: 'Числовое поле'
            }, {
                id: 'textBlock',
                title: 'Текстовый блок'
            }, {
                id: 'boolean',
                title: 'Да/Нет'
            }, {
                id: 'interval',
                title: 'Интервал'
            }],
            variant: {
                id: '',
                value: ''
            }
        };
        _this.changeType = _this.changeType.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleOpen = _this.handleOpen.bind(_this);
        _this.addVariant = _this.addVariant.bind(_this);
        return _this;
    }

    _createClass(AttributesCreate, [{
        key: 'handleOpen',
        value: function handleOpen() {
            this.setState({
                open: true
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'addVariant',
        value: function addVariant() {
            this.setState({
                data: _extends({}, this.state.data, {
                    variants: [].concat(_toConsumableArray(this.state.data.variants), [this.state.variant])
                })
            });
            this.handleClose();
        }
    }, {
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'changeType',
        value: function changeType(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    attrType: value
                })
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var actions = [_react2.default.createElement(_FlatButton2.default, {
                label: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
                primary: true,
                onClick: this.handleClose
            }), _react2.default.createElement(_FlatButton2.default, {
                label: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
                primary: true,
                onClick: this.addVariant
            })];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/attributes'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '250px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u0444\u0438\u043B\u044C\u0442\u0440\u0435',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'showInFilter');
                                }
                            }),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '250px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0442\u043E\u0432\u0430\u0440\u0430',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'showInProductPage');
                                }
                            }),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '250px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043A\u0435',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'showInList');
                                }
                            }),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '250px',
                                    marginLeft: '20px'
                                },
                                label: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'isRequired');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'name');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'title');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'units');
                                }
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u0422\u0438\u043F' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    value: this.state.data.attrType,
                                    floatingLabelText: '\u0422\u0438\u043F',
                                    onChange: this.changeType
                                },
                                this.state.types.map(function (type, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: type.id,
                                        primaryText: type.title,
                                        key: index
                                    });
                                })
                            ),
                            this.state.data.attrType === 'multipleSelect' || this.state.data.attrType === 'select' ? _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _Table.Table,
                                    {
                                        selectable: false
                                    },
                                    _react2.default.createElement(
                                        _Table.TableHeader,
                                        {
                                            displaySelectAll: false,
                                            adjustForCheckbox: false
                                        },
                                        _react2.default.createElement(
                                            _Table.TableRow,
                                            null,
                                            _react2.default.createElement(
                                                _Table.TableHeaderColumn,
                                                null,
                                                '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440'
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableHeaderColumn,
                                                null,
                                                '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435'
                                            ),
                                            _react2.default.createElement(_Table.TableHeaderColumn, null)
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableBody,
                                        {
                                            displayRowCheckbox: false
                                        },
                                        !!this.state.data.variants ? this.state.data.variants.map(function (variant, index) {
                                            return _react2.default.createElement(
                                                _Table.TableRow,
                                                {
                                                    key: index
                                                },
                                                _react2.default.createElement(
                                                    _Table.TableRowColumn,
                                                    null,
                                                    variant.id
                                                ),
                                                _react2.default.createElement(
                                                    _Table.TableRowColumn,
                                                    null,
                                                    variant.value
                                                ),
                                                _react2.default.createElement(
                                                    _Table.TableHeaderColumn,
                                                    null,
                                                    _react2.default.createElement(_delete2.default, {
                                                        color: 'rgb(255, 64, 129)',
                                                        onClick: function onClick() {
                                                            return _this2.deleteVariant(variant.id);
                                                        },
                                                        style: { cursor: 'pointer' }
                                                    })
                                                )
                                            );
                                        }) : null
                                    )
                                ),
                                _react2.default.createElement(_RaisedButton2.default, {
                                    label: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
                                    style: { margin: '38px' },
                                    onClick: this.handleOpen
                                }),
                                _react2.default.createElement(
                                    _Dialog2.default,
                                    {
                                        title: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430',
                                        actions: actions,
                                        modal: true,
                                        open: this.state.open,
                                        autoScrollBodyContent: true
                                    },
                                    _react2.default.createElement(_TextField2.default, {
                                        fullWidth: true,
                                        floatingLabelText: '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440',
                                        value: this.state.variant.id,
                                        errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                        onChange: function onChange(event, value) {
                                            return _this2.setState({
                                                variant: _extends({}, _this2.state.variant, {
                                                    id: value
                                                })
                                            });
                                        } }),
                                    _react2.default.createElement(_TextField2.default, {
                                        fullWidth: true,
                                        floatingLabelText: '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435',
                                        value: this.state.variant.value,
                                        errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                        onChange: function onChange(event, value) {
                                            return _this2.setState({
                                                variant: _extends({}, _this2.state.variant, {
                                                    value: value
                                                })
                                            });
                                        } })
                                )
                            ) : null
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'attributes',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return AttributesCreate;
}(_react2.default.Component);

exports.default = AttributesCreate;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _reactRouterDom = __webpack_require__(1);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributesCreate = function (_React$Component) {
    _inherits(AttributesCreate, _React$Component);

    function AttributesCreate(props) {
        _classCallCheck(this, AttributesCreate);

        var _this = _possibleConstructorReturn(this, (AttributesCreate.__proto__ || Object.getPrototypeOf(AttributesCreate)).call(this, props));

        _this.state = {
            data: {
                title: '',
                attributes: [],
                slug: (0, _uid2.default)(16)
            },
            attributes: []
        };
        _this.getAttributes();
        _this.changeAttribute = _this.changeAttribute.bind(_this);
        return _this;
    }

    _createClass(AttributesCreate, [{
        key: 'getAttributes',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getData('/attributes');

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    attributes: response.data
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAttributes() {
                return _ref.apply(this, arguments);
            }

            return getAttributes;
        }()
    }, {
        key: 'changeAttribute',
        value: function changeAttribute(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    attributes: [].concat(_toConsumableArray(value))
                })
            });
        }
    }, {
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/attribute-sets'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'title');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    multiple: true,
                                    value: this.state.data.attributes,
                                    floatingLabelText: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
                                    onChange: this.changeAttribute
                                },
                                this.state.attributes.map(function (attribute, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: attribute.slug,
                                        primaryText: attribute.title,
                                        key: index
                                    });
                                })
                            )
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'attribute-sets',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return AttributesCreate;
}(_react2.default.Component);

exports.default = AttributesCreate;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsCreate = function (_React$Component) {
    _inherits(TabsCreate, _React$Component);

    function TabsCreate(props) {
        _classCallCheck(this, TabsCreate);

        var _this = _possibleConstructorReturn(this, (TabsCreate.__proto__ || Object.getPrototypeOf(TabsCreate)).call(this, props));

        _this.state = {
            data: {
                name: '',
                title: '',
                slug: (0, _uid2.default)(16)
            }
        };
        return _this;
    }

    _createClass(TabsCreate, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/tabs'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435',
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            name: value
                                        })
                                    });
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            title: value
                                        })
                                    });
                                },
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'tabs',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return TabsCreate;
}(_react2.default.Component);

exports.default = TabsCreate;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabSetsCreate = function (_React$Component) {
    _inherits(TabSetsCreate, _React$Component);

    function TabSetsCreate(props) {
        _classCallCheck(this, TabSetsCreate);

        var _this = _possibleConstructorReturn(this, (TabSetsCreate.__proto__ || Object.getPrototypeOf(TabSetsCreate)).call(this, props));

        _this.state = {
            data: {
                title: '',
                tabs: [],
                slug: (0, _uid2.default)(16)
            },
            tabs: []
        };
        _this.getTabs();
        _this.changeTabs = _this.changeTabs.bind(_this);
        return _this;
    }

    _createClass(TabSetsCreate, [{
        key: 'changeTabs',
        value: function changeTabs(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    tabs: [].concat(_toConsumableArray(value))
                })
            });
        }
    }, {
        key: 'getTabs',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getData('/tabs');

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    tabs: response.data
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getTabs() {
                return _ref.apply(this, arguments);
            }

            return getTabs;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(this.state);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/tab-sets'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                onChange: function onChange(event, value) {
                                    _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            title: value
                                        })
                                    });
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    multiple: true,
                                    value: this.state.data.tabs,
                                    floatingLabelText: '\u0422\u0430\u0431\u044B',
                                    onChange: this.changeTabs
                                },
                                this.state.tabs.map(function (tab, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: tab.slug,
                                        primaryText: tab.title,
                                        key: index
                                    });
                                })
                            )
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'tab-sets',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return TabSetsCreate;
}(_react2.default.Component);

exports.default = TabSetsCreate;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _reactRouterDom = __webpack_require__(1);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RolesCreate = function (_React$Component) {
    _inherits(RolesCreate, _React$Component);

    function RolesCreate(props) {
        _classCallCheck(this, RolesCreate);

        var _this = _possibleConstructorReturn(this, (RolesCreate.__proto__ || Object.getPrototypeOf(RolesCreate)).call(this, props));

        _this.state = {
            data: {
                resources: {
                    users: { showInMenu: false, permissions: [] },
                    statuses: { showInMenu: false, permissions: [] },
                    roles: { showInMenu: false, permissions: [] },
                    products: { showInMenu: false, permissions: [] },
                    photos: { showInMenu: false, permissions: [] },
                    orders: { showInMenu: false, permissions: [] },
                    clients: { showInMenu: false, permissions: [] },
                    categories: { showInMenu: false, permissions: [] },
                    attributes: { showInMenu: false, permissions: [] },
                    "attribute-sets": { showInMenu: false, permissions: [] }
                },
                slug: (0, _uid2.default)(16)
            },
            permissions: [{
                type: 'create',
                label: 'Создание'
            }, {
                type: 'put',
                label: 'Редактирование'
            }, {
                type: 'get',
                label: 'Чтение'
            }, {
                type: 'delete',
                label: 'Удаление'
            }]
        };
        return _this;
    }

    _createClass(RolesCreate, [{
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'menuItems',
        value: function menuItems(values) {
            return this.state.permissions.map(function (_ref, index) {
                var type = _ref.type,
                    label = _ref.label;
                return _react2.default.createElement(_MenuItem2.default, {
                    key: index,
                    insetChildren: true,
                    checked: values && values.indexOf(type) > -1,
                    value: type,
                    primaryText: label
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F'
                        },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'big-resource'
                            },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/roles'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'name');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.categories.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            categories: _extends({}, _this2.state.data.resources.categories, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.categories.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        categories: _extends({}, _this2.state.data.resources.categories, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.products.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            products: _extends({}, _this2.state.data.resources.products, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.products.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        products: _extends({}, _this2.state.data.resources.products, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.users.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            users: _extends({}, _this2.state.data.resources.users, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.users.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        users: _extends({}, _this2.state.data.resources.users, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.roles.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0440\u043E\u043B\u0435\u0439',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            roles: _extends({}, _this2.state.data.resources.roles, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.roles.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        roles: _extends({}, _this2.state.data.resources.roles, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.clients.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            clients: _extends({}, _this2.state.data.resources.clients, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.clients.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        clients: _extends({}, _this2.state.data.resources.clients, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.orders.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            orders: _extends({}, _this2.state.data.resources.orders, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.orders.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        orders: _extends({}, _this2.state.data.resources.orders, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.attributes.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            attributes: _extends({}, _this2.state.data.resources.attributes, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.attributes.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        attributes: _extends({}, _this2.state.data.resources.attributes, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources['attribute-sets'].permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u043E\u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            'attribute-sets': _extends({}, _this2.state.data.resources['attribute-sets'], {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources['attribute-sets'].permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        'attribute-sets': _extends({}, _this2.state.data.resources['attribute-sets'], {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.statuses.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            statuses: _extends({}, _this2.state.data.resources.statuses, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.statuses.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        statuses: _extends({}, _this2.state.data.resources.statuses, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.photos.permissions,
                                    hintText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0444\u043E\u0442\u043E',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            photos: _extends({}, _this2.state.data.resources.photos, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.photos.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        photos: _extends({}, _this2.state.data.resources.photos, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'roles',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return RolesCreate;
}(_react2.default.Component);

exports.default = RolesCreate;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabSetsCreate = function (_React$Component) {
    _inherits(TabSetsCreate, _React$Component);

    function TabSetsCreate(props) {
        _classCallCheck(this, TabSetsCreate);

        var _this = _possibleConstructorReturn(this, (TabSetsCreate.__proto__ || Object.getPrototypeOf(TabSetsCreate)).call(this, props));

        _this.state = {
            data: {
                title: '',
                slug: (0, _uid2.default)(16)
            }
        };
        return _this;
    }

    _createClass(TabSetsCreate, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                {
                                    className: 'resource-actions',
                                    to: '/statuses'
                                },
                                _react2.default.createElement(_FlatButton2.default, {
                                    label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                    primary: true,
                                    icon: _react2.default.createElement(_list2.default, null)
                                })
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                onChange: function onChange(event, value) {
                                    _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            title: value
                                        })
                                    });
                                },
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A(\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435)',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'statuses',
                    data: this.state.data,
                    action: 'create'
                })
            );
        }
    }]);

    return TabSetsCreate;
}(_react2.default.Component);

exports.default = TabSetsCreate;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _draftjsToHtml = __webpack_require__(18);

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _reactDraftWysiwyg = __webpack_require__(19);

var _draftJs = __webpack_require__(20);

var _htmlToDraftjs = __webpack_require__(23);

var _htmlToDraftjs2 = _interopRequireDefault(_htmlToDraftjs);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoriesEdit = function (_React$Component) {
	_inherits(CategoriesEdit, _React$Component);

	function CategoriesEdit(props) {
		_classCallCheck(this, CategoriesEdit);

		var _this = _possibleConstructorReturn(this, (CategoriesEdit.__proto__ || Object.getPrototypeOf(CategoriesEdit)).call(this, props));

		_this.state = {
			categories: [],
			data: {
				isActive: false,
				title: '',
				description: '',
				image: '',
				parentCategory: '',
				slug: '',
				seo: {
					title: '',
					description: '',
					keywords: ''
				},
				creationDate: new Date(),
				modificationDate: new Date()
			},
			descState: _draftJs.EditorState.createEmpty(),
			image: ''
		};
		_this.getCategory(_this.props.location);
		_this.getCategories();
		_this.uploadFile = _this.uploadFile.bind(_this);
		_this.onEditorDescChange = _this.onEditorDescChange.bind(_this);
		_this.changeParentCategory = _this.changeParentCategory.bind(_this);
		return _this;
	}

	_createClass(CategoriesEdit, [{
		key: 'uploadFile',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
				var result;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _data2.default.uploadImage('/upload/categories', file.target.files[0]);

							case 2:
								result = _context.sent;

								this.setState({
									data: _extends({}, this.state.data, {
										image: result
									}),
									image: result
								});

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function uploadFile(_x) {
				return _ref.apply(this, arguments);
			}

			return uploadFile;
		}()
	}, {
		key: 'changeParentCategory',
		value: function changeParentCategory(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					parentCategory: value
				})
			});
		}
	}, {
		key: 'changeState',
		value: function changeState(value, key) {
			var newState = this.state;
			newState.data[key] = value;
			this.setState(newState);
		}
	}, {
		key: 'getCategory',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(uri) {
				var response, description, contentBlock, contentState, editorState;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _data2.default.getResource(uri);

							case 2:
								response = _context2.sent;
								description = response.description;
								contentBlock = (0, _htmlToDraftjs2.default)(description);
								contentState = _draftJs.ContentState.createFromBlockArray(contentBlock.contentBlocks);
								editorState = _draftJs.EditorState.createWithContent(contentState);

								this.setState({
									data: _extends({}, this.state.data, response),
									descState: editorState
								});

							case 8:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getCategory(_x2) {
				return _ref2.apply(this, arguments);
			}

			return getCategory;
		}()
	}, {
		key: 'getCategories',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
				var response;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _data2.default.getResource('/categories');

							case 2:
								response = _context3.sent;

								this.setState({
									categories: response.categories
								});

							case 4:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getCategories() {
				return _ref3.apply(this, arguments);
			}

			return getCategories;
		}()
	}, {
		key: 'onEditorDescChange',
		value: function onEditorDescChange(descState) {
			this.setState({
				descState: descState
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			console.log(this.state);
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Tabs.Tabs,
					null,
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
						_react2.default.createElement(
							'div',
							{
								className: 'big-resource' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{
									className: 'resource-actions',
									to: '/categories'
								},
								_react2.default.createElement(
									_reactRouterDom.Link,
									{
										to: this.props.location + '/delete'
									},
									_react2.default.createElement(_materialUi.FlatButton, {
										label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
										labelStyle: { color: 'rgb(255, 64, 129)' },
										primary: true,
										icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
									})
								),
								_react2.default.createElement(_materialUi.FlatButton, {
									label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
									primary: true,
									icon: _react2.default.createElement(_list2.default, null)
								})
							),
							_react2.default.createElement(_Toggle2.default, {
								style: {
									width: '150px',
									marginLeft: '20px'
								},
								label: '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439',
								toggled: this.state.data.isActive,
								onToggle: function onToggle(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											isActive: value
										})
									});
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								floatingLabelText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
								value: this.state.data.title,
								onChange: function onChange(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											title: value
										})
									});
								}
							}),
							_react2.default.createElement(
								'div',
								{
									style: {
										color: 'rgba(0, 0, 0, 0.3)'
									}
								},
								'\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
							),
							_react2.default.createElement(_reactDraftWysiwyg.Editor, {
								editorState: this.state.descState,
								wrapperClassName: 'demo-wrapper',
								editorClassName: 'demo-editor',
								onEditorStateChange: this.onEditorDescChange,
								onChange: function onChange() {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											description: (0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(_this2.state.descState.getCurrentContent()))
										})
									});
								}
							}),
							_react2.default.createElement('input', {
								type: 'file',
								className: 'inputfile',
								id: 'file',
								onChange: this.uploadFile
							}),
							_react2.default.createElement(
								'label',
								{
									htmlFor: 'file',
									className: 'inputfile__label'
								},
								'\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435'
							),
							_react2.default.createElement(
								'div',
								{
									className: 'inputfile__images'
								},
								_react2.default.createElement('img', {
									className: 'inputfile__image',
									src: this.state.data.image
								})
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									value: this.state.data.parentCategory,
									floatingLabelText: '\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F',
									onChange: function onChange(event, index, value) {
										return _this2.setState({
											data: _extends({}, _this2.state.data, {
												parentCategory: value
											})
										});
									}
								},
								this.state.categories.map(function (category, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: category.slug,
										primaryText: category.title,
										key: index
									});
								})
							),
							_react2.default.createElement(_DatePicker2.default, {
								fullWidth: true,
								floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
								hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
								defaultDate: new Date(this.state.data.creationDate)
							}),
							_react2.default.createElement(_DatePicker2.default, {
								fullWidth: true,
								floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
								hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
								defaultDate: new Date(this.state.data.modificationDate)
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								value: this.state.data.slug,
								onChange: function onChange(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											slug: value
										})
									});
								},
								floatingLabelText: 'Slug',
								label: 'Slug'
							})
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: 'SEO' },
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								floatingLabelText: 'SEO \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								value: !!this.state.data.seo ? this.state.data.seo.title : '',
								onChange: function onChange(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											seo: _extends({}, _this2.state.data.seo, {
												title: value
											})
										})
									});
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435',
								floatingLabelText: 'SEO \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435',
								value: !!this.state.data.seo ? this.state.data.seo.description : '',
								onChange: function onChange(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											seo: _extends({}, _this2.state.data.seo, {
												description: value
											})
										})
									});
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430',
								floatingLabelText: 'SEO \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430',
								value: !!this.state.data.seo ? this.state.data.seo.keywords : '',
								onChange: function onChange(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											seo: _extends({}, _this2.state.data.seo, {
												keywords: value
											})
										})
									});
								}
							})
						)
					)
				),
				_react2.default.createElement(_toolBar2.default, {
					resources: 'categories',
					data: this.state.data,
					action: 'edit',
					photo: this.state.image
				})
			);
		}
	}]);

	return CategoriesEdit;
}(_react2.default.Component);

exports.default = CategoriesEdit;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Table = __webpack_require__(13);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _flipToFront = __webpack_require__(95);

var _flipToFront2 = _interopRequireDefault(_flipToFront);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _uid = __webpack_require__(11);

var _uid2 = _interopRequireDefault(_uid);

var _reactDraftWysiwyg = __webpack_require__(19);

var _draftjsToHtml = __webpack_require__(18);

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _draftJs = __webpack_require__(20);

var _htmlToDraftjs = __webpack_require__(23);

var _htmlToDraftjs2 = _interopRequireDefault(_htmlToDraftjs);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductsEdit = function (_React$Component) {
	_inherits(ProductsEdit, _React$Component);

	function ProductsEdit(props) {
		_classCallCheck(this, ProductsEdit);

		var _this = _possibleConstructorReturn(this, (ProductsEdit.__proto__ || Object.getPrototypeOf(ProductsEdit)).call(this, props));

		_this.state = {
			data: {
				isActive: false,
				title: '',
				description: '',
				shortDescription: '',
				sku: '',
				price: '',
				categories: [],
				images: [],
				'attribute-sets': [],
				attributes: [],
				'tab-sets': [],
				tabs: [],
				seo: {
					title: '',
					description: '',
					keywords: ''
				},
				relatedProducts: [],
				fromSet: [],
				creationDate: new Date(),
				modificationDate: new Date(),
				slug: (0, _uid2.default)(16)
			},
			products: []
		};
		_this.getProduct(_this.props.location);
		_this.getResource('/products');
		_this.getResource('/categories');
		_this.getResource('/attribute-sets');
		_this.getResource('/tab-sets');
		_this.changeRelatedProducts = _this.changeRelatedProducts.bind(_this);
		_this.uploadFile = _this.uploadFile.bind(_this);
		_this.changeCategories = _this.changeCategories.bind(_this);
		_this.changeAttributeSets = _this.changeAttributeSets.bind(_this);
		_this.changeTabSets = _this.changeTabSets.bind(_this);
		_this.onEditorDescChange = _this.onEditorDescChange.bind(_this);
		_this.onEditorShortDescChange = _this.onEditorShortDescChange.bind(_this);
		return _this;
	}

	_createClass(ProductsEdit, [{
		key: 'getProduct',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uri) {
				var response, description, contentBlockDesc, contentStateDesc, editorStateDesc, shortDescription, contentBlockShortDesc, contentStateShortDesc, editorStateShortDesc;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _data2.default.getResource(uri);

							case 2:
								response = _context.sent;
								description = response.description;
								contentBlockDesc = (0, _htmlToDraftjs2.default)(description);
								contentStateDesc = _draftJs.ContentState.createFromBlockArray(contentBlockDesc.contentBlocks);
								editorStateDesc = _draftJs.EditorState.createWithContent(contentStateDesc);
								shortDescription = response.shortDescription;
								contentBlockShortDesc = (0, _htmlToDraftjs2.default)(shortDescription);
								contentStateShortDesc = _draftJs.ContentState.createFromBlockArray(contentBlockShortDesc.contentBlocks);
								editorStateShortDesc = _draftJs.EditorState.createWithContent(contentStateShortDesc);

								this.setState({
									data: _extends({}, this.state.data, response),
									descState: editorStateDesc,
									shortDescState: editorStateShortDesc
								});

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getProduct(_x) {
				return _ref.apply(this, arguments);
			}

			return getProduct;
		}()
	}, {
		key: 'changeState',
		value: function changeState(value, key) {
			var newState = this.state;
			newState.data[key] = value;
			this.setState(newState);
		}
	}, {
		key: 'changeRelatedProducts',
		value: function changeRelatedProducts(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					relatedProducts: [].concat(_toConsumableArray(this.state.data.relatedProducts), [value])
				})
			});
		}
	}, {
		key: 'deleteRelatedProduct',
		value: function deleteRelatedProduct(id) {
			var relatedProducts = [];
			this.state.data.relatedProducts.map(function (relatedProduct) {
				if (relatedProduct !== id) {
					relatedProducts.push(relatedProduct);
				}
			});
			this.setState({
				data: _extends({}, this.state.data, {
					relatedProducts: relatedProducts
				})
			});
		}
	}, {
		key: 'uploadFile',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
				var result;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _data2.default.uploadImage('/upload/products', file.target.files[0]);

							case 2:
								result = _context2.sent;

								this.setState({
									data: _extends({}, this.state.data, {
										images: [].concat(_toConsumableArray(this.state.data.images), [result])
									})
								});

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function uploadFile(_x2) {
				return _ref2.apply(this, arguments);
			}

			return uploadFile;
		}()
	}, {
		key: 'getResource',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(uri) {
				var resource, response, newState;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								resource = uri.slice(1);
								_context3.next = 3;
								return _data2.default.getData(uri);

							case 3:
								response = _context3.sent;
								newState = {};

								newState[resource] = response.data;
								this.setState(newState);

							case 7:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getResource(_x3) {
				return _ref3.apply(this, arguments);
			}

			return getResource;
		}()
	}, {
		key: 'changeCategories',
		value: function changeCategories(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					categories: [].concat(_toConsumableArray(this.state.data.categories), _toConsumableArray(value))
				})
			});
		}
	}, {
		key: 'changeAttributeSets',
		value: function changeAttributeSets(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					'attribute-sets': [].concat(_toConsumableArray(this.state.data['attribute-sets']), _toConsumableArray(value))
				})
			});
		}
	}, {
		key: 'changeTabSets',
		value: function changeTabSets(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					'tab-sets': [].concat(_toConsumableArray(this.state.data['tab-sets']), _toConsumableArray(value))
				})
			});
		}
	}, {
		key: 'onEditorDescChange',
		value: function onEditorDescChange(descState) {
			this.setState({
				descState: descState
			});
		}
	}, {
		key: 'onEditorShortDescChange',
		value: function onEditorShortDescChange(shortDescState) {
			this.setState({
				shortDescState: shortDescState
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (!this.state.data || !this.state.categories || !this.state['attribute-sets'] || !this.state['tab-sets']) {
				return false;
			}
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Tabs.Tabs,
					null,
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
						_react2.default.createElement(
							'div',
							{
								className: 'big-resource' },
							_react2.default.createElement(
								'div',
								{
									className: 'resource-actions'
								},
								_react2.default.createElement(
									_reactRouterDom.Link,
									{
										to: {
											pathname: this.props.location + '/copy',
											state: this.state.data
										}
									},
									_react2.default.createElement(_materialUi.FlatButton, {
										label: '\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C',
										labelStyle: { color: 'rgb(64, 255, 129)' },
										primary: true,
										icon: _react2.default.createElement(_flipToFront2.default, { color: 'rgb(64, 255, 129)' })
									})
								),
								_react2.default.createElement(
									_reactRouterDom.Link,
									{
										to: this.props.location + '/delete'
									},
									_react2.default.createElement(_materialUi.FlatButton, {
										label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
										labelStyle: { color: 'rgb(255, 64, 129)' },
										primary: true,
										icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
									})
								),
								_react2.default.createElement(
									_reactRouterDom.Link,
									{
										to: '/products'
									},
									_react2.default.createElement(_materialUi.FlatButton, {
										label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
										primary: true,
										icon: _react2.default.createElement(_list2.default, null)
									})
								)
							),
							_react2.default.createElement(_Toggle2.default, {
								style: {
									width: '150px',
									marginLeft: '20px'
								},
								label: '\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439',
								toggled: this.state.data.isActive,
								onToggle: function onToggle(event, value) {
									return _this2.changeState(value, 'isActive');
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
								value: this.state.data.title,
								onChange: function onChange(event, value) {
									return _this2.changeState(value, 'title');
								}
							}),
							_react2.default.createElement(
								'div',
								{
									style: {
										color: 'rgba(0, 0, 0, 0.3)'
									}
								},
								'\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
							),
							_react2.default.createElement(_reactDraftWysiwyg.Editor, {
								editorState: this.state.descState,
								wrapperClassName: 'demo-wrapper',
								editorClassName: 'demo-editor',
								onEditorStateChange: this.onEditorDescChange,
								onChange: function onChange() {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											description: (0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(_this2.state.descState.getCurrentContent()))
										})
									});
								}
							}),
							_react2.default.createElement(
								'div',
								{
									style: {
										color: 'rgba(0, 0, 0, 0.3)'
									}
								},
								'\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435'
							),
							_react2.default.createElement(_reactDraftWysiwyg.Editor, {
								editorState: this.state.shortDescState,
								wrapperClassName: 'demo-wrapper',
								editorClassName: 'demo-editor',
								onEditorStateChange: this.onEditorShortDescChange,
								onChange: function onChange() {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											shortDescription: (0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(_this2.state.shortDescState.getCurrentContent()))
										})
									});
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: '\u0410\u0440\u0442\u0438\u043A\u0443\u043B',
								errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
								value: this.state.data.sku,
								onChange: function onChange(event, value) {
									return _this2.changeState(value, 'sku');
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: '\u0426\u0435\u043D\u0430',
								errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
								value: this.state.data.price,
								onChange: function onChange(event, value) {
									return _this2.changeState(value, 'price');
								}
							}),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									multiple: true,
									value: this.state.data.categories,
									floatingLabelText: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438',
									onChange: function onChange(event, index, value) {
										return _this2.setState({
											data: _extends({}, _this2.state.data, {
												categories: value
											})
										});
									}
								},
								this.state.categories.map(function (category, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: category.slug,
										primaryText: category.title,
										key: index
									});
								})
							),
							_react2.default.createElement('input', {
								type: 'file',
								className: 'inputfile',
								id: 'file',
								onChange: this.uploadFile
							}),
							_react2.default.createElement(
								'label',
								{
									htmlFor: 'file',
									className: 'inputfile__label'
								},
								'\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0444\u0430\u0439\u043B \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435'
							),
							_react2.default.createElement(
								'div',
								{
									className: 'inputfile__images'
								},
								this.state.data.images.map(function (image, index) {
									return _react2.default.createElement('img', {
										className: 'inputfile__image',
										src: image,
										key: index
									});
								})
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									multiple: true,
									value: this.state.data['attribute-sets'],
									floatingLabelText: '\u041D\u0430\u0431\u043E\u0440\u044B \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432',
									onChange: function onChange(event, index, value) {
										return _this2.setState({
											data: _extends({}, _this2.state.data, {
												'attribute-sets': value
											})
										});
									}
								},
								this.state['attribute-sets'].map(function (attribute, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: attribute.slug,
										primaryText: attribute.title,
										key: index
									});
								})
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									multiple: true,
									value: this.state.data['tab-sets'],
									floatingLabelText: '\u041D\u0430\u0431\u043E\u0440\u044B \u0442\u0430\u0431\u043E\u0432',
									onChange: function onChange(event, index, value) {
										return _this2.setState({
											data: _extends({}, _this2.state.data, {
												'tab-sets': value
											})
										});
									}
								},
								this.state['tab-sets'].map(function (set, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: set.slug,
										primaryText: set.title,
										key: index
									});
								})
							),
							_react2.default.createElement(_DatePicker2.default, {
								fullWidth: true,
								floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
								hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
								defaultDate: new Date(this.state.data.creationDate)
							}),
							_react2.default.createElement(_DatePicker2.default, {
								fullWidth: true,
								floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
								hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
								defaultDate: new Date(this.state.data.modificationDate)
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								value: this.state.data.slug,
								onChange: function onChange(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											slug: value
										})
									});
								},
								floatingLabelText: 'Slug',
								label: 'Slug'
							})
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: 'SEO' },
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
								value: !!this.state.data.seo ? this.state.data.seo.title : undefined,
								onChange: function onChange(event, value) {
									return _this2.changeState(_extends({}, _this2.state.data.seo, {
										title: value
									}), 'seo');
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435',
								value: !!this.state.data.seo ? this.state.data.seo.description : undefined,
								onChange: function onChange(event, value) {
									return _this2.changeState(_extends({}, _this2.state.data.seo, {
										description: value
									}), 'seo');
								}
							}),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: 'SEO \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430',
								value: !!this.state.data.seo ? this.state.data.seo.keywords : undefined,
								onChange: function onChange(event, value) {
									return _this2.changeState(_extends({}, _this2.state.data.seo, {
										keywords: value
									}), 'seo');
								}
							})
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: '\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B' },
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							_react2.default.createElement(
								_Table.Table,
								{
									selectable: false
								},
								_react2.default.createElement(
									_Table.TableHeader,
									{
										displaySelectAll: false,
										adjustForCheckbox: false
									},
									_react2.default.createElement(
										_Table.TableRow,
										null,
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u0410\u0440\u0442\u0438\u043A\u0443\u043B'
										),
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435'
										),
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u0426\u0435\u043D\u0430'
										),
										_react2.default.createElement(_Table.TableHeaderColumn, null)
									)
								),
								_react2.default.createElement(
									_Table.TableBody,
									{
										displayRowCheckbox: false
									},
									this.state.data.relatedProducts.map(function (relatedProduct, index) {
										return _this2.state.products.map(function (product) {
											if (product.slug === relatedProduct) {
												return _react2.default.createElement(
													_Table.TableRow,
													{
														key: index
													},
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.sku
													),
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.title
													),
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.price
													),
													_react2.default.createElement(
														_Table.TableHeaderColumn,
														null,
														_react2.default.createElement(_delete2.default, {
															color: 'rgb(255, 64, 129)',
															onClick: function onClick() {
																return _this2.deleteRelatedProduct(product.slug);
															},
															style: { cursor: 'pointer' }
														})
													)
												);
											}
										});
									})
								)
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									value: this.state.data.relatedProducts,
									floatingLabelText: '\u041F\u043E\u0445\u043E\u0436\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442',
									onChange: this.changeRelatedProducts
								},
								this.state.products.map(function (product, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: product.slug,
										primaryText: product.title,
										key: index
									});
								})
							)
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: '\u0422\u043E\u0432\u0430\u0440\u044B \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430' },
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							_react2.default.createElement(
								_Table.Table,
								{
									selectable: false
								},
								_react2.default.createElement(
									_Table.TableHeader,
									{
										displaySelectAll: false,
										adjustForCheckbox: false
									},
									_react2.default.createElement(
										_Table.TableRow,
										null,
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u0410\u0440\u0442\u0438\u043A\u0443\u043B'
										),
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435'
										),
										_react2.default.createElement(
											_Table.TableHeaderColumn,
											null,
											'\u0426\u0435\u043D\u0430'
										),
										_react2.default.createElement(_Table.TableHeaderColumn, null)
									)
								),
								_react2.default.createElement(
									_Table.TableBody,
									{
										displayRowCheckbox: false
									},
									this.state.data.fromSet.map(function (fromSet, index) {
										return _this2.state.products.map(function (product) {
											if (product.slug === fromSet) {
												return _react2.default.createElement(
													_Table.TableRow,
													{
														key: index
													},
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.sku
													),
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.title
													),
													_react2.default.createElement(
														_Table.TableRowColumn,
														null,
														product.price
													),
													_react2.default.createElement(
														_Table.TableHeaderColumn,
														null,
														_react2.default.createElement(_delete2.default, {
															color: 'rgb(255, 64, 129)',
															onClick: function onClick() {
																var fromSet = _this2.state.data.fromSet;
																fromSet.splice(index, 1);
																_this2.setState({
																	data: _extends({}, _this2.state.data, {
																		fromSet: fromSet
																	})
																});
															},
															style: { cursor: 'pointer' }
														})
													)
												);
											}
										});
									})
								)
							),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									value: this.state.data.fromSet,
									floatingLabelText: '\u0422\u043E\u0432\u0430\u0440 \u0438\u0437 \u043D\u0430\u0431\u043E\u0440\u0430',
									onChange: function onChange(event, index, value) {
										return _this2.setState({
											data: _extends({}, _this2.state.data, {
												fromSet: [].concat(_toConsumableArray(_this2.state.data.fromSet), [value])
											})
										});
									}
								},
								this.state.products.map(function (product, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: product.slug,
										primaryText: product.title,
										key: index
									});
								})
							)
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{
							label: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B'
						},
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							this.state.data.attributes.map(function (attribute, key) {
								if (attribute.attrType === 'select' || attribute.attrType === 'multipleSelect') return _react2.default.createElement(
									_SelectField2.default,
									{
										fullWidth: true,
										multiple: attribute.attrType === 'multipleSelect',
										value: _this2.state.data.attributes[key].value,
										floatingLabelText: attribute.title,
										onChange: function onChange(event, index, value) {
											var newState = {
												data: _extends({}, _this2.state.data, {
													attributes: _this2.state.data.attributes
												})
											};
											newState.data.attributes[key].value = value;
											_this2.setState(newState);
										},
										key: key
									},
									attribute.variants.map(function (variant, index) {
										return _react2.default.createElement(_MenuItem2.default, {
											value: variant.value,
											primaryText: variant.id,
											key: index
										});
									})
								);
								if (attribute.attrType === 'interval') return _react2.default.createElement(
									'div',
									{
										key: key
									},
									_react2.default.createElement(_TextField2.default, {
										fullWidth: true,
										hintText: attribute.title + ' \u043E\u0442',
										defaultValue: !!_this2.state.data.attributes[key].value ? _this2.state.data.attributes[key].value.from : '',
										floatingLabelText: attribute.title + ' \u043E\u0442',
										onChange: function onChange(event, value) {
											var newState = {
												data: _extends({}, _this2.state.data, {
													attributes: _this2.state.data.attributes
												})
											};
											newState.data.attributes[key].value = _extends({}, newState.data.attributes[key].value);
											newState.data.attributes[key].value.from = value;
											_this2.setState(newState);
										}
									}),
									_react2.default.createElement(_TextField2.default, {
										fullWidth: true,
										hintText: attribute.title + ' \u0434\u043E',
										defaultValue: !!_this2.state.data.attributes[key].value ? _this2.state.data.attributes[key].value.to : '',
										floatingLabelText: attribute.title + ' \u0434\u043E',
										onChange: function onChange(event, value) {
											var newState = {
												data: _extends({}, _this2.state.data, {
													attributes: _this2.state.data.attributes
												})
											};
											newState.data.attributes[key].value = _extends({}, newState.data.attributes[key].value);
											newState.data.attributes[key].value.to = value;
											_this2.setState(newState);
										}
									})
								);
								return _react2.default.createElement(_TextField2.default, {
									fullWidth: true,
									hintText: attribute.title,
									value: _this2.state.data.attributes[key].value,
									floatingLabelText: attribute.title,
									onChange: function onChange(event, value) {
										var newState = {
											data: _extends({}, _this2.state.data, {
												attributes: _this2.state.data.attributes
											})
										};
										newState.data.attributes[key].value = value;
										_this2.setState(newState);
									},
									key: key
								});
							})
						)
					),
					_react2.default.createElement(
						_Tabs.Tab,
						{
							label: '\u0422\u0430\u0431\u044B'
						},
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							this.state.data.tabs.map(function (tab, key) {
								return _react2.default.createElement(_TextField2.default, {
									fullWidth: true,
									hintText: tab.title,
									value: _this2.state.data.tabs[key].value,
									floatingLabelText: tab.title,
									onChange: function onChange(event, value) {
										var newState = {
											data: _extends({}, _this2.state.data, {
												tabs: _this2.state.data.tabs
											})
										};
										newState.data.tabs[key].value = value;
										_this2.setState(newState);
									},
									key: key
								});
							})
						)
					)
				),
				_react2.default.createElement(_toolBar2.default, {
					resources: 'products',
					data: this.state.data,
					action: 'edit'
				})
			);
		}
	}]);

	return ProductsEdit;
}(_react2.default.Component);

exports.default = ProductsEdit;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/flip-to-front");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _hash = __webpack_require__(33);

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersEdit = function (_React$Component) {
    _inherits(UsersEdit, _React$Component);

    function UsersEdit(props) {
        _classCallCheck(this, UsersEdit);

        var _this = _possibleConstructorReturn(this, (UsersEdit.__proto__ || Object.getPrototypeOf(UsersEdit)).call(this, props));

        _this.state = {
            roles: [],
            data: {
                name: '',
                email: '',
                password: '',
                role: '',
                slug: '',
                creationDate: new Date(),
                modificationDate: new Date()
            }
        };
        _this.getData(_this.props.location);
        _this.getRoles();
        return _this;
    }

    _createClass(UsersEdit, [{
        key: 'getData',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uri) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getResource(uri);

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    data: _extends({}, this.state.data, response)
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getData(_x) {
                return _ref.apply(this, arguments);
            }

            return getData;
        }()
    }, {
        key: 'getRoles',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _data2.default.getResource('/roles');

                            case 2:
                                response = _context2.sent;

                                this.setState({
                                    roles: response.roles
                                });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getRoles() {
                return _ref2.apply(this, arguments);
            }

            return getRoles;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'resource-actions'
                                },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: this.props.location + '/delete'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
                                        labelStyle: { color: 'rgb(255, 64, 129)' },
                                        primary: true,
                                        icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
                                    })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: '/users'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                        primary: true,
                                        icon: _react2.default.createElement(_list2.default, null)
                                    })
                                )
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0418\u043C\u044F',
                                value: this.state.data.name,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            name: value
                                        })
                                    });
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041F\u043E\u0447\u0442\u0430',
                                value: this.state.data.email,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            email: value
                                        })
                                    });
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041F\u0430\u0440\u043E\u043B\u044C',
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            password: _hash2.default.getHash(value)
                                        })
                                    });
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    value: this.state.data.role,
                                    floatingLabelText: '\u0420\u043E\u043B\u044C',
                                    onChange: function onChange(event, index, value) {
                                        return _this2.setState({
                                            data: _extends({}, _this2.state.data, {
                                                role: value
                                            })
                                        });
                                    }
                                },
                                this.state.roles.map(function (role, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: role.slug,
                                        primaryText: role.name,
                                        key: index
                                    });
                                })
                            ),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.creationDate)
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.modificationDate)
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.slug,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            slug: value
                                        })
                                    });
                                },
                                floatingLabelText: 'Slug'
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'users',
                    data: this.state.data,
                    action: 'edit'
                })
            );
        }
    }]);

    return UsersEdit;
}(_react2.default.Component);

exports.default = UsersEdit;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RolesEdit = function (_React$Component) {
    _inherits(RolesEdit, _React$Component);

    function RolesEdit(props) {
        _classCallCheck(this, RolesEdit);

        var _this = _possibleConstructorReturn(this, (RolesEdit.__proto__ || Object.getPrototypeOf(RolesEdit)).call(this, props));

        _this.state = {
            data: {
                resources: {
                    users: { showInMenu: false, permissions: [] },
                    statuses: { showInMenu: false, permissions: [] },
                    roles: { showInMenu: false, permissions: [] },
                    products: { showInMenu: false, permissions: [] },
                    photos: { showInMenu: false, permissions: [] },
                    orders: { showInMenu: false, permissions: [] },
                    clients: { showInMenu: false, permissions: [] },
                    categories: { showInMenu: false, permissions: [] },
                    attributes: { showInMenu: false, permissions: [] },
                    "attribute-sets": { showInMenu: false, permissions: [] }
                }
            },
            permissions: [{
                type: 'post',
                label: 'Создание'
            }, {
                type: 'put',
                label: 'Редактирование'
            }, {
                type: 'get',
                label: 'Чтение'
            }, {
                type: 'delete',
                label: 'Удаление'
            }]
        };
        _this.getRole();
        return _this;
    }

    _createClass(RolesEdit, [{
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'getRole',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getResource(this.props.location);

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    data: response
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getRole() {
                return _ref.apply(this, arguments);
            }

            return getRole;
        }()
    }, {
        key: 'menuItems',
        value: function menuItems(values) {
            return this.state.permissions.map(function (_ref2, index) {
                var type = _ref2.type,
                    label = _ref2.label;
                return _react2.default.createElement(_MenuItem2.default, {
                    key: index,
                    insetChildren: true,
                    checked: values && values.indexOf(type) > -1,
                    value: type,
                    primaryText: label
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.state.data.name) {
                return false;
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'big-resource' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'resource-actions'
                                },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: this.props.location + '/delete'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
                                        labelStyle: { color: 'rgb(255, 64, 129)' },
                                        primary: true,
                                        icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
                                    })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: '/roles'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                        primary: true,
                                        icon: _react2.default.createElement(_list2.default, null)
                                    })
                                )
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                value: this.state.data.name,
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'name');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.categories.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            categories: _extends({}, _this2.state.data.resources.categories, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.categories.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.categories.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        categories: _extends({}, _this2.state.data.resources.categories, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.products.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            products: _extends({}, _this2.state.data.resources.products, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.products.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.products.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        products: _extends({}, _this2.state.data.resources.products, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.users.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            users: _extends({}, _this2.state.data.resources.users, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.users.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.users.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        users: _extends({}, _this2.state.data.resources.users, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.roles.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0440\u043E\u043B\u0435\u0439',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            roles: _extends({}, _this2.state.data.resources.roles, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.roles.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.roles.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        roles: _extends({}, _this2.state.data.resources.roles, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.clients.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            clients: _extends({}, _this2.state.data.resources.clients, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.clients.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.clients.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        clients: _extends({}, _this2.state.data.resources.clients, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.orders.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            orders: _extends({}, _this2.state.data.resources.orders, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.orders.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.orders.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        orders: _extends({}, _this2.state.data.resources.orders, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.attributes.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            attributes: _extends({}, _this2.state.data.resources.attributes, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.attributes.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.attributes.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        attributes: _extends({}, _this2.state.data.resources.attributes, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources['attribute-sets'].permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u043E\u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            'attribute-sets': _extends({}, _this2.state.data.resources['attribute-sets'], {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources['attribute-sets'].permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources['attribute-sets'].showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        'attribute-sets': _extends({}, _this2.state.data.resources['attribute-sets'], {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.statuses.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u0432',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            statuses: _extends({}, _this2.state.data.resources.statuses, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.statuses.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.statuses.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        statuses: _extends({}, _this2.state.data.resources.statuses, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    multiple: true,
                                    value: this.state.data.resources.photos.permissions,
                                    floatingLabelText: '\u041F\u0440\u0430\u0432\u0430 \u0434\u043B\u044F \u0444\u043E\u0442\u043E',
                                    errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                    fullWidth: true,
                                    onChange: function onChange(event, index, values) {
                                        return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                            photos: _extends({}, _this2.state.data.resources.photos, {
                                                permissions: values
                                            })
                                        }), 'resources');
                                    }
                                },
                                this.menuItems(this.state.data.resources.photos.permissions)
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '230px',
                                    marginLeft: '20px'
                                },
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u043C\u0435\u043D\u044E',
                                toggled: this.state.data.resources.photos.showInMenu,
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(_extends({}, _this2.state.data.resources, {
                                        photos: _extends({}, _this2.state.data.resources.photos, {
                                            showInMenu: value
                                        })
                                    }), 'resources');
                                }
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.creationDate)
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.modificationDate)
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.slug,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            slug: value
                                        })
                                    });
                                },
                                floatingLabelText: 'Slug',
                                label: 'Slug'
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'roles',
                    data: this.state.data,
                    action: 'edit'
                })
            );
        }
    }]);

    return RolesEdit;
}(_react2.default.Component);

exports.default = RolesEdit;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = __webpack_require__(16);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Table = __webpack_require__(13);

var _Dialog = __webpack_require__(21);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClientsCreate = function (_React$Component) {
    _inherits(ClientsCreate, _React$Component);

    function ClientsCreate(props) {
        _classCallCheck(this, ClientsCreate);

        var _this = _possibleConstructorReturn(this, (ClientsCreate.__proto__ || Object.getPrototypeOf(ClientsCreate)).call(this, props));

        _this.getRole(_this.props.location);
        _this.state = {
            loaded: false,
            open: false,
            data: {
                addresses: []
            }
        };
        _this.handleOpen = _this.handleOpen.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.addAddress = _this.addAddress.bind(_this);
        _this.deleteAddress = _this.deleteAddress.bind(_this);
        return _this;
    }

    _createClass(ClientsCreate, [{
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'getRole',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uri) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getResource(uri);

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    data: response,
                                    loaded: true
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getRole(_x) {
                return _ref.apply(this, arguments);
            }

            return getRole;
        }()
    }, {
        key: 'handleOpen',
        value: function handleOpen() {
            this.setState({
                open: true
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'deleteAddress',
        value: function deleteAddress(id) {
            var addresses = [];
            this.state.data.addresses.forEach(function (address, index) {
                if (index !== id) addresses.push(address);
            });
            this.setState({
                data: _extends({}, this.state.data, {
                    addresses: addresses
                })
            });
        }
    }, {
        key: 'addAddress',
        value: function addAddress() {
            this.setState({
                data: _extends({}, this.state.data, {
                    addresses: [].concat(_toConsumableArray(this.state.data.addresses), [{
                        country: this.state.country,
                        state: this.state.state,
                        city: this.state.city,
                        street: this.state.street,
                        building: this.state.building,
                        apartment: this.state.apartment
                    }])
                })
            });
            this.handleClose();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var actions = [_react2.default.createElement(_FlatButton2.default, {
                label: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
                primary: true,
                onClick: this.handleClose
            }), _react2.default.createElement(_FlatButton2.default, {
                label: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
                primary: true,
                onClick: this.addAddress
            })];
            if (!this.state.loaded) {
                return false;
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'resource-actions'
                                },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: this.props.location + '/delete'
                                    },
                                    _react2.default.createElement(_FlatButton2.default, {
                                        label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
                                        labelStyle: { color: 'rgb(255, 64, 129)' },
                                        primary: true,
                                        icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
                                    })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: '/clients'
                                    },
                                    _react2.default.createElement(_FlatButton2.default, {
                                        label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                        primary: true,
                                        icon: _react2.default.createElement(_list2.default, null)
                                    })
                                )
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.name,
                                hintText: '\u0418\u043C\u044F',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'name');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.email,
                                hintText: '\u041F\u043E\u0447\u0442\u0430',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'email');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.phone,
                                hintText: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'phone');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041F\u0430\u0440\u043E\u043B\u044C',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'password');
                                }
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.creationDate)
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.modificationDate)
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.slug,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            slug: value
                                        })
                                    });
                                },
                                floatingLabelText: 'Slug',
                                label: 'Slug'
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u0410\u0434\u0440\u0435\u0441\u0430' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _Table.Table,
                                {
                                    selectable: false
                                },
                                _react2.default.createElement(
                                    _Table.TableHeader,
                                    {
                                        displaySelectAll: false,
                                        adjustForCheckbox: false
                                    },
                                    _react2.default.createElement(
                                        _Table.TableRow,
                                        null,
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0421\u0442\u0440\u0430\u043D\u0430'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u041E\u0431\u043B\u0430\u0441\u0442\u044C'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0413\u043E\u0440\u043E\u0434'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0423\u043B\u0438\u0446\u0430'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0414\u043E\u043C'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430'
                                        ),
                                        _react2.default.createElement(_Table.TableHeaderColumn, null)
                                    )
                                ),
                                _react2.default.createElement(
                                    _Table.TableBody,
                                    {
                                        displayRowCheckbox: false
                                    },
                                    !!this.state.data.addresses ? this.state.data.addresses.map(function (address, index) {
                                        return _react2.default.createElement(
                                            _Table.TableRow,
                                            {
                                                key: index
                                            },
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.country
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.state
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.city
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.street
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.building
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                address.apartment
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableHeaderColumn,
                                                null,
                                                _react2.default.createElement(_delete2.default, {
                                                    color: 'rgb(255, 64, 129)',
                                                    onClick: function onClick() {
                                                        return _this2.deleteAddress(index);
                                                    },
                                                    style: { cursor: 'pointer' }
                                                })
                                            )
                                        );
                                    }) : null
                                )
                            ),
                            _react2.default.createElement(_RaisedButton2.default, {
                                label: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
                                style: { margin: '38px' },
                                onClick: this.handleOpen
                            }),
                            _react2.default.createElement(
                                _Dialog2.default,
                                {
                                    title: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430',
                                    actions: actions,
                                    modal: true,
                                    open: this.state.open,
                                    autoScrollBodyContent: true
                                },
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u0421\u0442\u0440\u0430\u043D\u0430',
                                    value: this.state.country,
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            country: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u041E\u0431\u043B\u0430\u0441\u0442\u044C',
                                    value: this.state.state,
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            state: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u0413\u043E\u0440\u043E\u0434',
                                    value: this.state.city,
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            city: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u0423\u043B\u0438\u0446\u0430',
                                    value: this.state.street,
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            street: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u0414\u043E\u043C',
                                    value: this.state.building,
                                    errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            building: value
                                        });
                                    } }),
                                _react2.default.createElement(_TextField2.default, {
                                    fullWidth: true,
                                    floatingLabelText: '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430',
                                    value: this.state.apartment,
                                    onChange: function onChange(event, value) {
                                        return _this2.setState({
                                            apartment: value
                                        });
                                    } })
                            )
                        )
                    ),
                    ')'
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'clients',
                    data: this.state.data,
                    action: 'edit'
                })
            );
        }
    }]);

    return ClientsCreate;
}(_react2.default.Component);

exports.default = ClientsCreate;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Table = __webpack_require__(13);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrdersEdit = function (_React$Component) {
    _inherits(OrdersEdit, _React$Component);

    function OrdersEdit(props) {
        _classCallCheck(this, OrdersEdit);

        var _this = _possibleConstructorReturn(this, (OrdersEdit.__proto__ || Object.getPrototypeOf(OrdersEdit)).call(this, props));

        _this.state = {
            statuses: [],
            clients: [],
            data: {
                products: [],
                status: '',
                client: '',
                address: {
                    country: '',
                    state: '',
                    city: '',
                    street: '',
                    building: '',
                    apartment: ''
                },
                slug: '',
                creationDate: new Date(),
                modificationDate: new Date()
            },
            products: []
        };
        _this.getOrder(_this.props.location);
        _this.getClients();
        _this.getStatuses();
        _this.getProducts();
        _this.changeStatus = _this.changeStatus.bind(_this);
        _this.changeClient = _this.changeClient.bind(_this);
        _this.changeProducts = _this.changeProducts.bind(_this);
        return _this;
    }

    _createClass(OrdersEdit, [{
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'changeProducts',
        value: function changeProducts(event, index, value) {
            var _this2 = this;

            this.state.products.forEach(function (product) {
                if (product.slug === value) {
                    _this2.changeState([].concat(_toConsumableArray(_this2.state.data.products), [product]), 'products');
                }
            });
        }
    }, {
        key: 'deleteProduct',
        value: function deleteProduct(id) {
            var products = [];
            this.state.data.products.map(function (product) {
                if (product.slug !== id) {
                    products.push(product);
                }
            });
            this.changeState(products, 'products');
        }
    }, {
        key: 'changeStatus',
        value: function changeStatus(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    status: value
                })
            });
        }
    }, {
        key: 'getClients',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getResource('/clients');

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    clients: response.clients
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getClients() {
                return _ref.apply(this, arguments);
            }

            return getClients;
        }()
    }, {
        key: 'getStatuses',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _data2.default.getResource('/statuses');

                            case 2:
                                response = _context2.sent;

                                this.setState({
                                    statuses: response.statuses
                                });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getStatuses() {
                return _ref2.apply(this, arguments);
            }

            return getStatuses;
        }()
    }, {
        key: 'getProducts',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var response;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _data2.default.getResource('/products');

                            case 2:
                                response = _context3.sent;

                                this.setState({
                                    products: response.products
                                });

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getProducts() {
                return _ref3.apply(this, arguments);
            }

            return getProducts;
        }()
    }, {
        key: 'changeClient',
        value: function changeClient(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    client: value
                })
            });
        }
    }, {
        key: 'getOrder',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(uri) {
                var response;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _data2.default.getResource(uri);

                            case 2:
                                response = _context4.sent;

                                this.setState({
                                    data: _extends({}, this.state.data, response)
                                });

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getOrder(_x) {
                return _ref4.apply(this, arguments);
            }

            return getOrder;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'resource-actions'
                                },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: this.props.location + '/delete'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
                                        labelStyle: { color: 'rgb(255, 64, 129)' },
                                        primary: true,
                                        icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
                                    })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: '/orders'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                        primary: true,
                                        icon: _react2.default.createElement(_list2.default, null)
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    value: this.state.data.status,
                                    floatingLabelText: '\u0421\u0442\u0430\u0442\u0443\u0441',
                                    onChange: this.changeStatus
                                },
                                this.state.statuses.map(function (status, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: status.slug,
                                        primaryText: status.title,
                                        key: index
                                    });
                                })
                            ),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    value: this.state.data.client,
                                    floatingLabelText: '\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A',
                                    onChange: this.changeClient
                                },
                                this.state.clients.map(function (client, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: client.slug,
                                        primaryText: client.name,
                                        key: index
                                    });
                                })
                            ),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.creationDate)
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.modificationDate)
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.slug,
                                onChange: function onChange(event, value) {
                                    return _this3.setState({
                                        data: _extends({}, _this3.state.data, {
                                            slug: value
                                        })
                                    });
                                },
                                floatingLabelText: 'Slug',
                                label: 'Slug'
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _Table.Table,
                                {
                                    selectable: false
                                },
                                _react2.default.createElement(
                                    _Table.TableHeader,
                                    {
                                        displaySelectAll: false,
                                        adjustForCheckbox: false
                                    },
                                    _react2.default.createElement(
                                        _Table.TableRow,
                                        null,
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0410\u0440\u0442\u0438\u043A\u0443\u043B'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0426\u0435\u043D\u0430'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E'
                                        ),
                                        _react2.default.createElement(
                                            _Table.TableHeaderColumn,
                                            null,
                                            '\u0418\u0442\u043E\u0433\u043E'
                                        ),
                                        _react2.default.createElement(_Table.TableHeaderColumn, null)
                                    )
                                ),
                                _react2.default.createElement(
                                    _Table.TableBody,
                                    {
                                        displayRowCheckbox: false
                                    },
                                    this.state.data.products.map(function (product, index) {
                                        return _react2.default.createElement(
                                            _Table.TableRow,
                                            {
                                                key: index
                                            },
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                product.sku
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                product.title
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                product.price
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                product.count
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableRowColumn,
                                                null,
                                                '\u0418\u0422\u041E\u0413\u041E'
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableHeaderColumn,
                                                null,
                                                _react2.default.createElement(_delete2.default, {
                                                    color: 'rgb(255, 64, 129)',
                                                    onClick: function onClick() {
                                                        return _this3.deleteProduct(product.slug);
                                                    },
                                                    style: { cursor: 'pointer' }
                                                })
                                            )
                                        );
                                    })
                                )
                            ),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    value: this.state.data.products,
                                    floatingLabelText: '\u041F\u043E\u0445\u043E\u0436\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442',
                                    onChange: this.changeProducts
                                },
                                this.state.products.map(function (product, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: product.slug,
                                        primaryText: product.title,
                                        key: index
                                    });
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u0410\u0434\u0440\u0435\u0441' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0421\u0442\u0440\u0430\u043D\u0430',
                                floatingLabelText: '\u0421\u0442\u0440\u0430\u043D\u0430',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                value: this.state.data.address.country,
                                onChange: function onChange(event, value) {
                                    return _this3.setState({
                                        data: _extends({}, _this3.state.data, {
                                            address: _extends({}, _this3.state.data.address, {
                                                country: value
                                            })
                                        })
                                    });
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041E\u0431\u043B\u0430\u0441\u0442\u044C',
                                floatingLabelText: '\u041E\u0431\u043B\u0430\u0441\u0442\u044C',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                value: this.state.data.address.state,
                                onChange: function onChange(event, value) {
                                    return _this3.setState({
                                        data: _extends({}, _this3.state.data, {
                                            address: _extends({}, _this3.state.data.address, {
                                                state: value
                                            })
                                        })
                                    });
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0413\u043E\u0440\u043E\u0434',
                                floatingLabelText: '\u0413\u043E\u0440\u043E\u0434',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                value: this.state.data.address.city,
                                onChange: function onChange(event, value) {
                                    return _this3.setState({
                                        data: _extends({}, _this3.state.data, {
                                            address: _extends({}, _this3.state.data.address, {
                                                city: value
                                            })
                                        })
                                    });
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0423\u043B\u0438\u0446\u0430',
                                floatingLabelText: '\u0423\u043B\u0438\u0446\u0430',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                value: this.state.data.address.street,
                                onChange: function onChange(event, value) {
                                    return _this3.setState({
                                        data: _extends({}, _this3.state.data, {
                                            address: _extends({}, _this3.state.data.address, {
                                                street: value
                                            })
                                        })
                                    });
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0414\u043E\u043C',
                                floatingLabelText: '\u0414\u043E\u043C',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                value: this.state.data.address.building,
                                onChange: function onChange(event, value) {
                                    return _this3.setState({
                                        data: _extends({}, _this3.state.data, {
                                            address: _extends({}, _this3.state.data.address, {
                                                building: value
                                            })
                                        })
                                    });
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430',
                                floatingLabelText: '\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430',
                                value: this.state.data.address.apartment,
                                onChange: function onChange(event, value) {
                                    return _this3.setState({
                                        data: _extends({}, _this3.state.data, {
                                            address: _extends({}, _this3.state.data.address, {
                                                apartment: value
                                            })
                                        })
                                    });
                                }
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'orders',
                    data: this.state.data,
                    action: 'edit'
                })
            );
        }
    }]);

    return OrdersEdit;
}(_react2.default.Component);

exports.default = OrdersEdit;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Table = __webpack_require__(13);

var _Dialog = __webpack_require__(21);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = __webpack_require__(16);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributesEdit = function (_React$Component) {
    _inherits(AttributesEdit, _React$Component);

    function AttributesEdit(props) {
        _classCallCheck(this, AttributesEdit);

        var _this = _possibleConstructorReturn(this, (AttributesEdit.__proto__ || Object.getPrototypeOf(AttributesEdit)).call(this, props));

        _this.state = {
            data: {
                showInFilter: false,
                showInProductPage: false,
                showInList: false,
                isRequired: false,
                name: '',
                title: '',
                units: '',
                slug: '',
                attrType: '',
                variants: [],
                creationDate: new Date(),
                modificationDate: new Date()
            },
            open: false,
            types: [{
                id: 'multipleSelect',
                title: 'Множественный список'
            }, {
                id: 'textInput',
                title: 'Текстовое поле'
            }, {
                id: 'select',
                title: 'Список'
            }, {
                id: 'numberInput',
                title: 'Числовое поле'
            }, {
                id: 'textBlock',
                title: 'Текстовый блок'
            }, {
                id: 'boolean',
                title: 'Да/Нет'
            }, {
                id: 'interval',
                title: 'Интервал'
            }],
            variant: {
                id: '',
                value: ''
            }
        };
        _this.getAttribute(_this.props.location);
        _this.changeType = _this.changeType.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        _this.handleOpen = _this.handleOpen.bind(_this);
        _this.addVariant = _this.addVariant.bind(_this);
        return _this;
    }

    _createClass(AttributesEdit, [{
        key: 'handleOpen',
        value: function handleOpen() {
            this.setState({
                open: true
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'addVariant',
        value: function addVariant() {
            this.setState({
                data: _extends({}, this.state.data, {
                    variants: [].concat(_toConsumableArray(this.state.data.variants), [this.state.variant])
                })
            });
            this.handleClose();
        }
    }, {
        key: 'changeState',
        value: function changeState(value, key) {
            var newState = this.state;
            newState.data[key] = value;
            this.setState(newState);
        }
    }, {
        key: 'changeType',
        value: function changeType(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    attrType: value
                })
            });
        }
    }, {
        key: 'getAttribute',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getResource(url);

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    data: response
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAttribute(_x) {
                return _ref.apply(this, arguments);
            }

            return getAttribute;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var actions = [_react2.default.createElement(_FlatButton2.default, {
                label: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
                primary: true,
                onClick: this.handleClose
            }), _react2.default.createElement(_FlatButton2.default, {
                label: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
                primary: true,
                onClick: this.addVariant
            })];
            if (!this.state.data) return false;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'resource-actions'
                                },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: '/attributes'
                                    },
                                    _react2.default.createElement(_FlatButton2.default, {
                                        label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                        primary: true,
                                        icon: _react2.default.createElement(_list2.default, null)
                                    })
                                )
                            ),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '250px',
                                    marginLeft: '20px'
                                },
                                toggled: this.state.data.showInFilter,
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u0444\u0438\u043B\u044C\u0442\u0440\u0435',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'showInFilter');
                                }
                            }),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '250px',
                                    marginLeft: '20px'
                                },
                                toggled: this.state.data.showInProductPage,
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0442\u043E\u0432\u0430\u0440\u0430',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'showInProductPage');
                                }
                            }),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '250px',
                                    marginLeft: '20px'
                                },
                                toggled: this.state.data.showInList,
                                label: '\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043A\u0435',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'showInList');
                                }
                            }),
                            _react2.default.createElement(_Toggle2.default, {
                                style: {
                                    width: '250px',
                                    marginLeft: '20px'
                                },
                                toggled: this.state.data.isRequired,
                                label: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439',
                                onToggle: function onToggle(event, value) {
                                    return _this2.changeState(value, 'isRequired');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.name,
                                hintText: '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435',
                                floatingLabelText: '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'name');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.title,
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                floatingLabelText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'title');
                                }
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.units,
                                hintText: '\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F',
                                floatingLabelText: '\u0415\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
                                onChange: function onChange(event, value) {
                                    return _this2.changeState(value, 'units');
                                }
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.creationDate)
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.modificationDate)
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.slug,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            slug: value
                                        })
                                    });
                                },
                                floatingLabelText: 'Slug',
                                label: 'Slug'
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u0422\u0438\u043F' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    value: this.state.data.attrType,
                                    disabled: true,
                                    floatingLabelText: '\u0422\u0438\u043F'
                                },
                                this.state.types.map(function (type, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: type.id,
                                        primaryText: type.title,
                                        key: index
                                    });
                                })
                            ),
                            this.state.data.attrType === 'multipleSelect' || this.state.data.attrType === 'select' ? _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _Table.Table,
                                    {
                                        selectable: false
                                    },
                                    _react2.default.createElement(
                                        _Table.TableHeader,
                                        {
                                            displaySelectAll: false,
                                            adjustForCheckbox: false
                                        },
                                        _react2.default.createElement(
                                            _Table.TableRow,
                                            null,
                                            _react2.default.createElement(
                                                _Table.TableHeaderColumn,
                                                null,
                                                '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440'
                                            ),
                                            _react2.default.createElement(
                                                _Table.TableHeaderColumn,
                                                null,
                                                '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _Table.TableBody,
                                        {
                                            displayRowCheckbox: false
                                        },
                                        !!this.state.data.variants ? this.state.data.variants.map(function (variant, index) {
                                            return _react2.default.createElement(
                                                _Table.TableRow,
                                                {
                                                    key: index
                                                },
                                                _react2.default.createElement(
                                                    _Table.TableRowColumn,
                                                    null,
                                                    variant.id
                                                ),
                                                _react2.default.createElement(
                                                    _Table.TableRowColumn,
                                                    null,
                                                    variant.value
                                                )
                                            );
                                        }) : null
                                    )
                                ),
                                _react2.default.createElement(_RaisedButton2.default, {
                                    label: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
                                    style: { margin: '38px' },
                                    onClick: this.handleOpen
                                }),
                                _react2.default.createElement(
                                    _Dialog2.default,
                                    {
                                        title: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430',
                                        actions: actions,
                                        modal: true,
                                        open: this.state.open,
                                        autoScrollBodyContent: true
                                    },
                                    _react2.default.createElement(_TextField2.default, {
                                        fullWidth: true,
                                        floatingLabelText: '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440',
                                        value: this.state.variant.id,
                                        errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                        onChange: function onChange(event, value) {
                                            return _this2.setState({
                                                variant: _extends({}, _this2.state.variant, {
                                                    id: value
                                                })
                                            });
                                        } }),
                                    _react2.default.createElement(_TextField2.default, {
                                        fullWidth: true,
                                        floatingLabelText: '\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435',
                                        value: this.state.variant.value,
                                        errorText: '\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435',
                                        onChange: function onChange(event, value) {
                                            return _this2.setState({
                                                variant: _extends({}, _this2.state.variant, {
                                                    value: value
                                                })
                                            });
                                        } })
                                )
                            ) : null
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'attributes',
                    data: this.state.data,
                    action: 'edit'
                })
            );
        }
    }]);

    return AttributesEdit;
}(_react2.default.Component);

exports.default = AttributesEdit;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AttributesCreate = function (_React$Component) {
	_inherits(AttributesCreate, _React$Component);

	function AttributesCreate(props) {
		_classCallCheck(this, AttributesCreate);

		var _this = _possibleConstructorReturn(this, (AttributesCreate.__proto__ || Object.getPrototypeOf(AttributesCreate)).call(this, props));

		_this.state = {
			data: {
				title: '',
				attributes: [],
				slug: ''
			},
			attributes: []
		};
		_this.getAttributes();
		_this.getAttributeSet(_this.props.location);
		_this.changeAttribute = _this.changeAttribute.bind(_this);
		return _this;
	}

	_createClass(AttributesCreate, [{
		key: 'getAttributes',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var response;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _data2.default.getData('/attributes');

							case 2:
								response = _context.sent;

								this.setState({
									attributes: response.data
								});

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getAttributes() {
				return _ref.apply(this, arguments);
			}

			return getAttributes;
		}()
	}, {
		key: 'getAttributeSet',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
				var response;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _data2.default.getResource(url);

							case 2:
								response = _context2.sent;

								this.setState({
									data: response
								});

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getAttributeSet(_x) {
				return _ref2.apply(this, arguments);
			}

			return getAttributeSet;
		}()
	}, {
		key: 'changeState',
		value: function changeState(value, key) {
			var newState = this.state;
			newState.data[key] = value;
			this.setState(newState);
		}
	}, {
		key: 'changeAttribute',
		value: function changeAttribute(event, index, value) {
			this.setState({
				data: _extends({}, this.state.data, {
					attributes: [].concat(_toConsumableArray(value))
				})
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_Tabs.Tabs,
					null,
					_react2.default.createElement(
						_Tabs.Tab,
						{ label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							_react2.default.createElement(
								_reactRouterDom.Link,
								{
									className: 'resource-actions',
									to: '/attribute-sets'
								},
								_react2.default.createElement(
									_reactRouterDom.Link,
									{
										to: this.props.location + '/delete'
									},
									_react2.default.createElement(_materialUi.FlatButton, {
										label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
										labelStyle: { color: 'rgb(255, 64, 129)' },
										primary: true,
										icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
									})
								),
								_react2.default.createElement(_materialUi.FlatButton, {
									label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
									primary: true,
									icon: _react2.default.createElement(_list2.default, null)
								})
							),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								hintText: '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435',
								errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E',
								value: this.state.data.title,
								onChange: function onChange(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											title: value
										})
									});
								}
							}),
							_react2.default.createElement(
								_SelectField2.default,
								{
									fullWidth: true,
									multiple: true,
									value: this.state.data.attributes,
									floatingLabelText: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B',
									onChange: this.changeAttribute
								},
								this.state.attributes.map(function (attribute, index) {
									return _react2.default.createElement(_MenuItem2.default, {
										value: attribute.slug,
										primaryText: attribute.title,
										key: index
									});
								})
							),
							_react2.default.createElement(_TextField2.default, {
								fullWidth: true,
								value: this.state.data.slug,
								onChange: function onChange(event, value) {
									return _this2.setState({
										data: _extends({}, _this2.state.data, {
											slug: value
										})
									});
								},
								floatingLabelText: 'Slug',
								label: 'Slug'
							})
						)
					)
				),
				_react2.default.createElement(_toolBar2.default, {
					resources: 'attribute-sets',
					data: this.state.data,
					action: 'edit'
				})
			);
		}
	}]);

	return AttributesCreate;
}(_react2.default.Component);

exports.default = AttributesCreate;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsEdit = function (_React$Component) {
    _inherits(TabsEdit, _React$Component);

    function TabsEdit(props) {
        _classCallCheck(this, TabsEdit);

        var _this = _possibleConstructorReturn(this, (TabsEdit.__proto__ || Object.getPrototypeOf(TabsEdit)).call(this, props));

        _this.state = {
            data: {
                name: '',
                title: '',
                slug: '',
                creationDate: new Date(),
                modificationDate: new Date()
            }
        };
        _this.getData(_this.props.location);
        return _this;
    }

    _createClass(TabsEdit, [{
        key: 'getData',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uri) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getResource(uri);

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    data: response
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getData(_x) {
                return _ref.apply(this, arguments);
            }

            return getData;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'resource-actions'
                                },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: this.props.location + '/delete'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
                                        labelStyle: { color: 'rgb(255, 64, 129)' },
                                        primary: true,
                                        icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
                                    })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: '/tabs'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                        primary: true,
                                        icon: _react2.default.createElement(_list2.default, null)
                                    })
                                )
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435',
                                value: this.state.data.name,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            name: value
                                        })
                                    });
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.title,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            title: value
                                        })
                                    });
                                },
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.creationDate)
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.modificationDate)
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.slug,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            slug: value
                                        })
                                    });
                                },
                                floatingLabelText: 'Slug',
                                label: 'Slug'
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'tabs',
                    data: this.state.data,
                    action: 'edit'
                })
            );
        }
    }]);

    return TabsEdit;
}(_react2.default.Component);

exports.default = TabsEdit;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = __webpack_require__(7);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(8);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabSetsEdit = function (_React$Component) {
    _inherits(TabSetsEdit, _React$Component);

    function TabSetsEdit(props) {
        _classCallCheck(this, TabSetsEdit);

        var _this = _possibleConstructorReturn(this, (TabSetsEdit.__proto__ || Object.getPrototypeOf(TabSetsEdit)).call(this, props));

        _this.state = {
            data: {
                title: '',
                tabs: [],
                slug: '',
                creationDate: new Date(),
                modificationDate: new Date()
            },
            tabs: []
        };
        _this.getTabs();
        _this.getTabSets(_this.props.location);
        _this.changeTabs = _this.changeTabs.bind(_this);
        return _this;
    }

    _createClass(TabSetsEdit, [{
        key: 'changeTabs',
        value: function changeTabs(event, index, value) {
            this.setState({
                data: _extends({}, this.state.data, {
                    tabs: [].concat(_toConsumableArray(value))
                })
            });
        }
    }, {
        key: 'getTabSets',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uri) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getResource(uri);

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    data: response
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getTabSets(_x) {
                return _ref.apply(this, arguments);
            }

            return getTabSets;
        }()
    }, {
        key: 'getTabs',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _data2.default.getData('/tabs');

                            case 2:
                                response = _context2.sent;

                                this.setState({
                                    tabs: response.data
                                });

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getTabs() {
                return _ref2.apply(this, arguments);
            }

            return getTabs;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'resource-actions'
                                },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: this.props.location + '/delete'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
                                        labelStyle: { color: 'rgb(255, 64, 129)' },
                                        primary: true,
                                        icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
                                    })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: '/tab-sets'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                        primary: true,
                                        icon: _react2.default.createElement(_list2.default, null)
                                    })
                                )
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A',
                                value: this.state.data.title,
                                onChange: function onChange(event, value) {
                                    _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            title: value
                                        })
                                    });
                                },
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(
                                _SelectField2.default,
                                {
                                    fullWidth: true,
                                    multiple: true,
                                    value: this.state.data.tabs,
                                    floatingLabelText: '\u0422\u0430\u0431\u044B',
                                    onChange: this.changeTabs
                                },
                                this.state.tabs.map(function (tab, index) {
                                    return _react2.default.createElement(_MenuItem2.default, {
                                        value: tab.slug,
                                        primaryText: tab.title,
                                        key: index
                                    });
                                })
                            ),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.creationDate)
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.modificationDate)
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.slug,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            slug: value
                                        })
                                    });
                                },
                                floatingLabelText: 'Slug',
                                label: 'Slug'
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'tab-sets',
                    data: this.state.data,
                    action: 'edit'
                })
            );
        }
    }]);

    return TabSetsEdit;
}(_react2.default.Component);

exports.default = TabSetsEdit;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(6);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _DatePicker = __webpack_require__(12);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(15);

var _list = __webpack_require__(5);

var _list2 = _interopRequireDefault(_list);

var _delete = __webpack_require__(9);

var _delete2 = _interopRequireDefault(_delete);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(4);

var _toolBar2 = _interopRequireDefault(_toolBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatusEdit = function (_React$Component) {
    _inherits(StatusEdit, _React$Component);

    function StatusEdit(props) {
        _classCallCheck(this, StatusEdit);

        var _this = _possibleConstructorReturn(this, (StatusEdit.__proto__ || Object.getPrototypeOf(StatusEdit)).call(this, props));

        _this.state = {
            data: {
                title: '',
                slug: '',
                creationDate: new Date(),
                modificationDate: new Date()
            }
        };
        _this.getStatus(_this.props.location);
        return _this;
    }

    _createClass(StatusEdit, [{
        key: 'getStatus',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uri) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _data2.default.getResource(uri);

                            case 2:
                                response = _context.sent;

                                this.setState({
                                    data: response
                                });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getStatus(_x) {
                return _ref.apply(this, arguments);
            }

            return getStatus;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Tabs.Tabs,
                    null,
                    _react2.default.createElement(
                        _Tabs.Tab,
                        { label: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' },
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'resource-page' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'resource-actions'
                                },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: this.props.location + '/delete'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
                                        labelStyle: { color: 'rgb(255, 64, 129)' },
                                        primary: true,
                                        icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
                                    })
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    {
                                        to: '/statuses'
                                    },
                                    _react2.default.createElement(_materialUi.FlatButton, {
                                        label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
                                        primary: true,
                                        icon: _react2.default.createElement(_list2.default, null)
                                    })
                                )
                            ),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.title,
                                onChange: function onChange(event, value) {
                                    _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            title: value
                                        })
                                    });
                                },
                                hintText: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A(\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435)',
                                errorText: '\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E'
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.creationDate)
                            }),
                            _react2.default.createElement(_DatePicker2.default, {
                                fullWidth: true,
                                floatingLabelText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                hintText: '\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F',
                                defaultDate: new Date(this.state.data.modificationDate)
                            }),
                            _react2.default.createElement(_TextField2.default, {
                                fullWidth: true,
                                value: this.state.data.slug,
                                onChange: function onChange(event, value) {
                                    return _this2.setState({
                                        data: _extends({}, _this2.state.data, {
                                            slug: value
                                        })
                                    });
                                },
                                floatingLabelText: 'Slug',
                                label: 'Slug'
                            })
                        )
                    )
                ),
                _react2.default.createElement(_toolBar2.default, {
                    resources: 'statuses',
                    data: this.state.data,
                    action: 'edit'
                })
            );
        }
    }]);

    return StatusEdit;
}(_react2.default.Component);

exports.default = StatusEdit;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [{
	resource: 'photos',
	title: 'Лента фотографий',
	columns: [],
	filters: []
}, {
	resource: 'statuses',
	title: 'Список статусов',
	columns: [{
		name: 'ЗАГОЛОВОК',
		key: 'title'
	}],
	filters: []
}, {
	resource: 'tab-sets',
	title: 'Список наборов табов',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'title'
	}],
	filters: []
}, {
	resource: 'tabs',
	title: 'Список табов',
	columns: [{
		name: 'ЗАГОЛОВОК',
		key: 'title'
	}],
	filters: []
}, {
	resource: 'attribute-sets',
	title: 'Список наборов атрибутов',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'title'
	}],
	filters: []
}, {
	resource: 'attributes',
	title: 'Список атрибутов',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'title'
	}, {
		name: 'ТИП',
		key: 'attrType'
	}, {
		name: 'ОБЯЗАТЕЛЬНЫЙ',
		key: 'isRequired'
	}, {
		name: 'ПОКАЗЫВАТЬ В ФИЛЬТРЕ',
		key: 'showInFilter'
	}],
	filters: [{
		type: 'title',
		title: 'Заголовок'
	}, {
		type: 'type',
		title: 'Тип'
	}, {
		type: 'isRequired',
		title: 'Обязательный'
	}, {
		type: 'showInFilter',
		title: 'Показать в фильтре'
	}]
}, {
	resource: 'orders',
	title: 'Список заказов',
	columns: [{
		name: 'ДАТА',
		key: 'creationDate'
	}, {
		name: 'СТАТУС',
		key: 'status'
	}, {
		name: 'КЛИЕНТ',
		key: 'client'
	}, {
		name: 'СУММА',
		key: 'sum'
	}],
	filters: [{
		type: 'client',
		title: 'Клиент'
	}]
}, {
	resource: 'clients',
	title: 'Список клиентов',
	columns: [{
		name: 'ИМЯ',
		key: 'name'
	}, {
		name: 'ПОЧТА',
		key: 'email'
	}, {
		name: 'ТЕЛЕФОН',
		key: 'phone'
	}],
	filters: [{
		type: 'name',
		title: 'Имя'
	}, {
		type: 'email',
		title: 'Почта'
	}]
}, {
	resource: 'roles',
	title: 'Список ролей',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'name'
	}],
	filters: []
}, {
	resource: 'users',
	title: 'Список пользователей',
	columns: [{
		name: 'ПОЛЬЗОВАТЕЛЬ',
		key: 'name'
	}, {
		name: 'ПОЧТА',
		key: 'email'
	}, {
		name: 'РОЛЬ',
		key: 'role'
	}],
	filters: [{
		type: 'name',
		title: 'Имя'
	}, {
		type: 'email',
		title: 'Почта'
	}, {
		type: 'role',
		title: 'Роль'
	}]
}, {
	resource: 'categories',
	title: 'Список категорий',
	columns: [{
		name: 'ЗАГОЛОВОК',
		key: 'title'
	}],
	filters: [{
		type: 'title',
		title: 'Заголовок'
	}, {
		type: 'creationDateStart',
		title: 'Дата создания от'
	}, {
		type: 'creationDateEnd',
		title: 'Дата создания до'
	}, {
		type: 'modificationDateStart',
		title: 'Дата изменения от'
	}, {
		type: 'modificationDateEnd',
		title: 'Дата изменения до'
	}]
}, {
	resource: 'products',
	title: 'Список продуктов',
	columns: [{
		name: 'АРТИКУЛ',
		key: 'sku'
	}, {
		name: 'ТОВАР',
		key: 'title'
	}, {
		name: 'Категории',
		key: 'categories'
	}, {
		name: 'ЦЕНА',
		key: 'price'
	}, {
		name: 'АКТИВНЫЙ',
		key: 'isActive'
	}],
	filters: [{
		type: 'title',
		title: 'Название'
	}, {
		type: 'sku',
		title: 'Артикул'
	}, {
		type: 'isActive',
		title: 'Активный'
	}, {
		type: 'attribute-sets',
		title: 'Набор атрибутов'
	}, {
		type: 'category',
		title: 'Категория'
	}, {
		type: 'priceStart',
		title: 'Цена от'
	}, {
		type: 'priceEnd',
		title: 'Цена до'
	}]
}];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(107);

var _reactRouterDom = __webpack_require__(1);

var _people = __webpack_require__(26);

var _people2 = _interopRequireDefault(_people);

var _exitToApp = __webpack_require__(108);

var _exitToApp2 = _interopRequireDefault(_exitToApp);

var _home = __webpack_require__(109);

var _home2 = _interopRequireDefault(_home);

var _auth = __webpack_require__(17);

var _auth2 = _interopRequireDefault(_auth);

var _resources = __webpack_require__(25);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesList = function (_React$Component) {
    _inherits(ResourcesList, _React$Component);

    function ResourcesList(props) {
        _classCallCheck(this, ResourcesList);

        return _possibleConstructorReturn(this, (ResourcesList.__proto__ || Object.getPrototypeOf(ResourcesList)).call(this, props));
    }

    _createClass(ResourcesList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                isMenuOpened = _props.isMenuOpened,
                allowedResources = _props.allowedResources,
                basePath = _props.basePath;

            return _react2.default.createElement(
                _List.List,
                {
                    className: isMenuOpened ? "list" : "list_moved"
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            to: basePath
                        },
                        _react2.default.createElement(_List.ListItem, {
                            primaryText: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430',
                            className: 'list__item',
                            leftIcon: _react2.default.createElement(_home2.default, null)
                        })
                    ),
                    allowedResources.map(function (allowed, index) {
                        return _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                key: index,
                                to: '' + basePath + allowed.resource
                            },
                            _react2.default.createElement(_List.ListItem, {
                                primaryText: _resources2.default[allowed.resource].name,
                                className: 'list__item',
                                leftIcon: _resources2.default[allowed.resource].icon
                            })
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            to: 'profile'
                        },
                        _react2.default.createElement(_List.ListItem, {
                            primaryText: '\u041F\u0440\u043E\u0444\u0438\u043B\u044C',
                            className: 'list__item',
                            leftIcon: _react2.default.createElement(_people2.default, null)
                        })
                    ),
                    _react2.default.createElement(_List.ListItem, {
                        primaryText: '\u0412\u044B\u0439\u0442\u0438',
                        className: 'list__item',
                        leftIcon: _react2.default.createElement(_exitToApp2.default, null),
                        onClick: function onClick() {
                            return _auth2.default.logout();
                        }
                    })
                )
            );
        }
    }]);

    return ResourcesList;
}(_react2.default.Component);

exports.default = ResourcesList;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/exit-to-app");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/home");

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(31);

var _Paper = __webpack_require__(111);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(2);

var _TextField2 = _interopRequireDefault(_TextField);

var _Avatar = __webpack_require__(112);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _lockOutline = __webpack_require__(113);

var _lockOutline2 = _interopRequireDefault(_lockOutline);

var _RaisedButton = __webpack_require__(16);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _auth = __webpack_require__(17);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login(props) {
		_classCallCheck(this, Login);

		var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

		_this.state = {
			email: null,
			password: null
		};
		_this.login = _this.login.bind(_this);
		return _this;
	}

	_createClass(Login, [{
		key: 'login',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var _state, email, password;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_state = this.state, email = _state.email, password = _state.password;

								if (email && password) {
									_auth2.default.login(email, password);
								}

							case 2:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function login() {
				return _ref.apply(this, arguments);
			}

			return login;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state2 = this.state,
			    email = _state2.email,
			    password = _state2.password;

			return _react2.default.createElement(
				'div',
				{
					className: 'login-layout'
				},
				_react2.default.createElement(
					_Paper2.default,
					{
						className: 'login-layout__window'
					},
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(_Avatar2.default, {
							icon: _react2.default.createElement(_lockOutline2.default, null),
							color: _colors.white,
							backgroundColor: _colors.pinkA200,
							size: 60,
							className: 'login-layout__window__avatar'
						})
					),
					_react2.default.createElement(_TextField2.default, {
						floatingLabelText: '\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F',
						errorText: email === '' ? 'обязательно для заполнения' : undefined,
						onBlur: function onBlur() {
							return !email && _this2.setState({ email: '' });
						},
						onChange: function onChange(e) {
							return _this2.setState({ email: e.target.value });
						},
						type: 'text', name: 'username'
					}),
					_react2.default.createElement(_TextField2.default, {
						floatingLabelText: '\u041F\u0430\u0440\u043E\u043B\u044C',
						errorText: password === '' ? 'обязательно для заполнения' : undefined,
						onBlur: function onBlur() {
							return !password && _this2.setState({ password: '' });
						},
						onChange: function onChange(e) {
							return _this2.setState({ password: e.target.value });
						},
						type: 'password', name: 'password'
					}),
					_react2.default.createElement(_RaisedButton2.default, {
						label: '\u0412\u041E\u0419\u0422\u0418',
						primary: true,
						className: 'login-layout__window__button',
						onClick: this.login
					})
				)
			);
		}
	}]);

	return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/lock-outline");

/***/ })
/******/ ]);