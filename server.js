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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _localStorage = __webpack_require__(20);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _config = __webpack_require__(21);

var _config2 = _interopRequireDefault(_config);

var _auth = __webpack_require__(4);

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
		key: 'getAttributes',
		value: function () {
			var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(sets) {
				var response;
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.next = 2;
								return _axios2.default.post(_config2.default.uri.admin + '/products/get/attributes', sets, axiosConfig);

							case 2:
								response = _context5.sent;
								return _context5.abrupt('return', response.data);

							case 4:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function getAttributes(_x3) {
				return _ref5.apply(this, arguments);
			}

			return getAttributes;
		}()
	}, {
		key: 'getTabs',
		value: function () {
			var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(sets) {
				var response;
				return regeneratorRuntime.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return _axios2.default.post(_config2.default.uri.admin + '/products/get/tabs', sets, axiosConfig);

							case 2:
								response = _context6.sent;
								return _context6.abrupt('return', response.data);

							case 4:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function getTabs(_x4) {
				return _ref6.apply(this, arguments);
			}

			return getTabs;
		}()
	}, {
		key: 'uploadImage',
		value: function () {
			var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(uri, data) {
				var formData, result;
				return regeneratorRuntime.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								formData = new FormData();

								formData.append('file', data);
								_context7.next = 4;
								return _axios2.default.post(_config2.default.uri.admin + uri, formData, axiosConfig);

							case 4:
								result = _context7.sent;
								return _context7.abrupt('return', result.data.url);

							case 6:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function uploadImage(_x5, _x6) {
				return _ref7.apply(this, arguments);
			}

			return uploadImage;
		}()
	}, {
		key: 'uploadXls',
		value: function () {
			var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(uri, data) {
				var formData, response;
				return regeneratorRuntime.wrap(function _callee8$(_context8) {
					while (1) {
						switch (_context8.prev = _context8.next) {
							case 0:
								formData = new FormData();

								formData.append('file', data);
								_context8.next = 4;
								return _axios2.default.post(_config2.default.uri.admin + '/export' + uri, formData, axiosConfig);

							case 4:
								response = _context8.sent;

								if (!response.data.success) {
									_context8.next = 9;
									break;
								}

								return _context8.abrupt('return', {
									success: true
								});

							case 9:
								return _context8.abrupt('return', {
									success: false
								});

							case 10:
							case 'end':
								return _context8.stop();
						}
					}
				}, _callee8, this);
			}));

			function uploadXls(_x7, _x8) {
				return _ref8.apply(this, arguments);
			}

			return uploadXls;
		}()
	}, {
		key: 'importXls',
		value: function () {
			var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(uri) {
				var response;
				return regeneratorRuntime.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								_context9.next = 2;
								return _axios2.default.get(_config2.default.uri.admin + '/import' + uri, axiosConfig);

							case 2:
								response = _context9.sent;

								if (!response.data.success) {
									_context9.next = 7;
									break;
								}

								return _context9.abrupt('return', {
									success: true
								});

							case 7:
								return _context9.abrupt('return', {
									success: false
								});

							case 8:
							case 'end':
								return _context9.stop();
						}
					}
				}, _callee9, this);
			}));

			function importXls(_x9) {
				return _ref9.apply(this, arguments);
			}

			return importXls;
		}()
	}, {
		key: 'create',
		value: function () {
			var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(uri, data) {
				var result;
				return regeneratorRuntime.wrap(function _callee10$(_context10) {
					while (1) {
						switch (_context10.prev = _context10.next) {
							case 0:
								_context10.next = 2;
								return _axios2.default.post(_config2.default.uri.admin + uri, data, axiosConfig);

							case 2:
								result = _context10.sent;
								return _context10.abrupt('return', result.data);

							case 4:
							case 'end':
								return _context10.stop();
						}
					}
				}, _callee10, this);
			}));

			function create(_x10, _x11) {
				return _ref10.apply(this, arguments);
			}

			return create;
		}()
	}, {
		key: 'edit',
		value: function () {
			var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(uri, data) {
				var response, url, result;
				return regeneratorRuntime.wrap(function _callee11$(_context11) {
					while (1) {
						switch (_context11.prev = _context11.next) {
							case 0:
								if (!(uri === '/profile')) {
									_context11.next = 6;
									break;
								}

								_context11.next = 3;
								return _axios2.default.post(_config2.default.uri.admin + uri + '/', data, axiosConfig);

							case 3:
								response = _context11.sent;

								_auth2.default._token = response.data.token;
								return _context11.abrupt('return', {
									success: true,
									email: response.data.profile.email
								});

							case 6:
								url = _config2.default.uri.admin + uri + '/' + data._id;
								_context11.next = 9;
								return _axios2.default.post(url, data, axiosConfig);

							case 9:
								result = _context11.sent;
								return _context11.abrupt('return', result.data);

							case 11:
							case 'end':
								return _context11.stop();
						}
					}
				}, _callee11, this);
			}));

			function edit(_x12, _x13) {
				return _ref11.apply(this, arguments);
			}

			return edit;
		}()
	}, {
		key: 'remove',
		value: function () {
			var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(uri) {
				var result;
				return regeneratorRuntime.wrap(function _callee12$(_context12) {
					while (1) {
						switch (_context12.prev = _context12.next) {
							case 0:
								_context12.next = 2;
								return _axios2.default.post(_config2.default.uri.admin + uri, null, axiosConfig);

							case 2:
								result = _context12.sent;
								return _context12.abrupt('return', result.data);

							case 4:
							case 'end':
								return _context12.stop();
						}
					}
				}, _callee12, this);
			}));

			function remove(_x14) {
				return _ref12.apply(this, arguments);
			}

			return remove;
		}()
	}]);

	return Data;
}();

exports.default = Data;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(21);

var _config2 = _interopRequireDefault(_config);

var _jsSha = __webpack_require__(56);

var _jsSha2 = _interopRequireDefault(_jsSha);

var _localStorage = __webpack_require__(20);

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
								hashedPassword = (0, _jsSha2.default)(salt + password);
								_context.next = 4;
								return _axios2.default.post(_config2.default.uri.login, { email: email, password: hashedPassword });

							case 4:
								response = _context.sent;

								if (!response.data.success) {
									_context.next = 9;
									break;
								}

								Auth._token = response.data.token;
								Auth.onLoginAction();
								return _context.abrupt('return', true);

							case 9:
								return _context.abrupt('return', {
									success: 'false',
									msg: response.msg
								});

							case 10:
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Toolbar = __webpack_require__(57);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactRouterDom = __webpack_require__(1);

var _data6 = __webpack_require__(2);

var _data7 = _interopRequireDefault(_data6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(action) {
				var _data, _data2, data, result, _data4, _data5, _data3, _result;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(this.props.action === 'create')) {
									_context.next = 16;
									break;
								}

								if (!(this.props.resources === 'categories')) {
									_context.next = 5;
									break;
								}

								_data = {
									url: this.props.photo,
									creationDate: new Date().toLocaleString(),
									modificationDate: new Date().toLocaleString()
								};
								_context.next = 5;
								return _data7.default.create('/photos', _data);

							case 5:
								if (!(this.props.resources === 'products')) {
									_context.next = 9;
									break;
								}

								_data2 = this.props.photos.map(function (photo) {
									return {
										url: photo,
										creationDate: new Date().toLocaleString(),
										modificationDate: new Date().toLocaleString()
									};
								});
								_context.next = 9;
								return _data7.default.create('/photos', _data2);

							case 9:
								data = this.props.data;

								data.creationDate = new Date().toLocaleString();
								data.modificationDate = new Date().toLocaleString();
								_context.next = 14;
								return _data7.default.create('/' + this.props.resources, data);

							case 14:
								result = _context.sent;

								if (result.success) {
									if (action === 'saveAndExit') {
										this.setState({
											created: true
										});
									}
									if (action === 'saveAndAdd') {
										this.setState({
											add: true
										});
									}
								}

							case 16:
								if (!(this.props.action === 'edit')) {
									_context.next = 31;
									break;
								}

								if (!(this.props.resources === 'categories')) {
									_context.next = 21;
									break;
								}

								_data4 = {
									url: this.props.photo,
									creationDate: new Date().toLocaleString(),
									modificationDate: new Date().toLocaleString()
								};
								_context.next = 21;
								return _data7.default.create('/photos', _data4);

							case 21:
								if (!(this.props.resources === 'products')) {
									_context.next = 25;
									break;
								}

								_data5 = this.props.photos.map(function (photo) {
									return {
										url: photo,
										creationDate: new Date().toLocaleString(),
										modificationDate: new Date().toLocaleString()
									};
								});
								_context.next = 25;
								return _data7.default.create('/photos', _data5);

							case 25:
								_data3 = this.props.data;

								_data3.modificationDate = new Date().toLocaleString();
								_context.next = 29;
								return _data7.default.edit('/' + this.props.resources, _data3);

							case 29:
								_result = _context.sent;

								if (_result.success) {
									if (action === 'saveAndExit') {
										this.setState({
											edited: true
										});
									}
								}

							case 31:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function handleSaveButton(_x) {
				return _ref.apply(this, arguments);
			}

			return handleSaveButton;
		}()
	}, {
		key: 'handleRemoveButton',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var result;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _data7.default.remove(this.props.resource);

							case 2:
								result = _context2.sent;

								console.log(result);
								if (result.success) {
									this.setState({
										deleted: true
									});
								}

							case 5:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function handleRemoveButton() {
				return _ref2.apply(this, arguments);
			}

			return handleRemoveButton;
		}()
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

			if (this.state.created || this.state.edited || this.state.deleted || this.state.canceled) {
				return _react2.default.createElement(_reactRouterDom.Redirect, {
					push: true,
					to: {
						pathname: '/' + this.props.resources
					}
				});
			}
			if (this.state.add) {
				return _react2.default.createElement(_reactRouterDom.Redirect, {
					push: true,
					to: '/' + this.props.resources + '/create'
				});
			}
			if (this.props.action === 'delete') {
				return _react2.default.createElement(
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
			}
			if (this.props.action === 'create') {
				return _react2.default.createElement(
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
			}
			if (this.props.action === 'edit') {
				return _react2.default.createElement(
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
		}
	}]);

	return ToolBar;
}(_react2.default.Component);

exports.default = ToolBar;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/delete");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/list");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FlatButton");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("material-ui/SelectField");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("material-ui/MenuItem");

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dashboard = __webpack_require__(44);

var _dashboard2 = _interopRequireDefault(_dashboard);

var _profile = __webpack_require__(55);

var _profile2 = _interopRequireDefault(_profile);

var _resourceCreateEditLayout = __webpack_require__(58);

var _resourceCreateEditLayout2 = _interopRequireDefault(_resourceCreateEditLayout);

var _resourcesLayout = __webpack_require__(61);

var _resourcesLayout2 = _interopRequireDefault(_resourcesLayout);

var _removeLayout = __webpack_require__(80);

var _removeLayout2 = _interopRequireDefault(_removeLayout);

var _list = __webpack_require__(81);

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

	_list2.default.forEach(function (route) {
		routes.push({
			path: '' + root + route.resource + '/create',
			exact: true,
			component: function component() {
				return _react2.default.createElement(_resourceCreateEditLayout2.default, {
					resource: route.resource,
					structure: route.structure,
					action: 'create'
				});
			}
		});
		routes.push({
			path: '' + root + route.resource + '/:id',
			exact: true,
			component: function component(props) {
				return _react2.default.createElement(_resourceCreateEditLayout2.default, _extends({
					resource: route.resource,
					structure: route.structure,
					action: 'edit'
				}, props));
			}
		});
	});

	resources.forEach(function (resource) {
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bookmark = __webpack_require__(45);

var _bookmark2 = _interopRequireDefault(_bookmark);

var _list = __webpack_require__(8);

var _list2 = _interopRequireDefault(_list);

var _people = __webpack_require__(18);

var _people2 = _interopRequireDefault(_people);

var _controlPoint = __webpack_require__(46);

var _controlPoint2 = _interopRequireDefault(_controlPoint);

var _verifiedUser = __webpack_require__(47);

var _verifiedUser2 = _interopRequireDefault(_verifiedUser);

var _attachMoney = __webpack_require__(48);

var _attachMoney2 = _interopRequireDefault(_attachMoney);

var _viewList = __webpack_require__(49);

var _viewList2 = _interopRequireDefault(_viewList);

var _stars = __webpack_require__(50);

var _stars2 = _interopRequireDefault(_stars);

var _tab = __webpack_require__(51);

var _tab2 = _interopRequireDefault(_tab);

var _viewAgenda = __webpack_require__(52);

var _viewAgenda2 = _interopRequireDefault(_viewAgenda);

var _stayCurrentPortrait = __webpack_require__(53);

var _stayCurrentPortrait2 = _interopRequireDefault(_stayCurrentPortrait);

var _collections = __webpack_require__(54);

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
/* 18 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/social/people");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("localStorage");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// let config = {
// 	uri: {
// 		admin: 'http://admin.formetoo.ru/api',
// 		login: 'http://admin.formetoo.ru/api/login',
// 		allowed: 'http://admin.formetoo.ru/api/allowed'
// 	}
// }
var config = {
	uri: {
		admin: 'http://localhost:3001/api',
		login: 'http://localhost:3001/api/login',
		allowed: 'http://localhost:3001/api/allowed'
	}
};

exports.default = config;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Tabs");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-draft-wysiwyg");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("draftjs-to-html");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("html-to-draftjs");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
module.exports = __webpack_require__(30);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(31);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(32);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(33);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bodyParser = __webpack_require__(34);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _reactRouterDom = __webpack_require__(1);

var _MuiThemeProvider = __webpack_require__(35);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Launcher = __webpack_require__(36);

var _Launcher2 = _interopRequireDefault(_Launcher);

var _index = __webpack_require__(16);

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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _renderRoutes = __webpack_require__(37);

var _renderRoutes2 = _interopRequireDefault(_renderRoutes);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(38);

__webpack_require__(39);

var _routes = __webpack_require__(40);

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
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-router-config/renderRoutes");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "html, body, .layout, #root, .body {\n    height: 100%;\n}\n\nbody {\n    margin: 0;\n}\n\n#app {\n    height: 100%;\n}\n\na, a:link, a:visited, a:active {\n    text-decoration: none;\n}\n\n/*--------------САЙДБАР---------------*/\n\n.list, .list_moved {\n    background-color: white;\n    min-width: 280px;\n    transition: 0.2s linear;\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    height: 98%;\n}\n\n.list_moved {\n    margin-left: -280px;\n}\n\n.list__item {\n    text-align: start;\n    height: 50px;\n}\n\n/*--------------СТРАНИЦА ЛОГИНА---------------*/\n\n.login-layout {\n    background-color: rgb(0, 188, 212);\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.login-layout__window {\n    width: 300px;\n    height: 320px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.login-layout__window__avatar {\n    margin-top: 15px;\n}\n\n.login-layout__window__button {\n    margin-top: 10px;\n    width: 90%;\n}\n\n/*--------------КОНТЕНТНАЯ ОБЛАСТЬ---------------*/\n\n.body {\n    display: flex;\n    background-color: rgb(237, 236, 236);\n}\n\n.content {\n    width: 100%;\n}\n\n.content, .content_moved {\n    display: flex;\n    flex-flow: column;\n    transition: all 200ms linear;\n    margin: 40px;\n    background-color: rgb(237, 236, 236);\n}\n\n.content_moved {\n    width: 100%;\n}\n\n.resource-page {\n    background-color: white;\n    padding-top: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n    max-height: 780px;\n}\n\n.media-resource {\n    background-color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    max-height: 780px;\n    overflow-y: scroll;\n}\n\n.big-resource {\n    background-color: white;\n    padding: 20px;\n    max-height: 730px;\n    overflow-y: scroll;\n}\n\n.pagination {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgb(232, 232, 232);\n}\n\n.total {\n    font-size: 18px\n}\n\n/*--------------ФОТОГРАФИИ---------------*/\n\n.photos__gridlist {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 40px;\n}\n\n/*--------------ГЛАВНАЯ СТРАНИЦА---------------*/\n\n.dashboard {\n    padding: 40px;\n}\n\n.dashboard__item {\n    width: 350px;\n    height: 120px;\n    margin: 30px;\n    box-shadow: 0 4px 8px gray;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.dashboard__title {\n    font-size: 24px;\n    margin-top: 20px;\n    margin-left: 15px;\n}\n\n.dashboard__refs {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.dashboard__item__title {\n    color: black;\n}\n\n/*--------------ТАБЛИЦЫ---------------*/\n\n.table {\n    margin-top: 80px;\n}\n\n.table__header__column {\n    color: black !important;\n    font-size: 14px !important;\n    font-weight: 500;\n}\n\n.table__row {\n    border-color: black !important;\n}\n\n.input {\n    border: 1px solid black;\n    margin-top: 20px;\n}\n\n.inputfile {\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n\n.inputfile + .inputfile__label {\n    font-size: 1.25em;\n    height: 70px;\n    width: 98%;\n    margin-left: 15px;\n    font-weight: 700;\n    color: gray;\n    background-color: #edecec;\n    display: inline-block;\n    text-align: center;\n    padding-top: 55px;\n    margin-top: 40px;\n}\n\n.inputfile:focus + .inputfile__label,\n.inputfile + .inputfile__label:hover {\n    cursor: pointer;\n}\n\n.inputfile__images {\n    display: flex;\n    justify-content: flex-start;\n    margin-left: 15px;\n    margin-top: 20px;\n}\n\n.inputfile__image {\n    width: 100px;\n    height: 100px;\n    margin-left: 5px;\n}\n\n.warning-msg {\n    margin: 20px;\n    font-weight: bold;\n    font-size: large;\n}\n\n.profile__label {\n    text-align: center;\n    font-size: 20px;\n    font-weight: 600;\n}\n\n.resource-filters {\n    margin-left: 15px;\n    display: flex;\n    flex-flow: column;\n}\n\n.resource-headline {\n    display: flex;\n    justify-content: space-between;\n}\n\n.resource-buttons {\n    margin-top: 15px;\n}\n\n.resource-actions {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.filter {\n    display: flex;\n}", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".rdw-option-wrapper {\n    border: 1px solid #F1F1F1;\n    padding: 5px;\n    min-width: 25px;\n    height: 20px;\n    border-radius: 2px;\n    margin: 0 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    background: white;\n    text-transform: capitalize;\n}\n.rdw-option-wrapper:hover {\n    box-shadow: 1px 1px 0px #BFBDBD;\n}\n.rdw-option-wrapper:active {\n    box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-option-active {\n    box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-option-disabled {\n    opacity: 0.3;\n    cursor: default;\n}\n.rdw-dropdown-wrapper {\n    height: 30px;\n    background: white;\n    cursor: pointer;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    margin: 0 3px;\n    text-transform: capitalize;\n    background: white;\n}\n.rdw-dropdown-wrapper:focus {\n    outline: none;\n}\n.rdw-dropdown-wrapper:hover {\n    box-shadow: 1px 1px 0px #BFBDBD;\n    background-color: #FFFFFF;\n}\n.rdw-dropdown-wrapper:active {\n    box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-dropdown-carettoopen {\n    height: 0px;\n    width: 0px;\n    position: absolute;\n    top: 35%;\n    right: 10%;\n    border-top: 6px solid black;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n}\n.rdw-dropdown-carettoclose {\n    height: 0px;\n    width: 0px;\n    position: absolute;\n    top: 35%;\n    right: 10%;\n    border-bottom: 6px solid black;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n}\n.rdw-dropdown-selectedtext {\n    display: flex;\n    position: relative;\n    height: 100%;\n    align-items: center;\n    padding: 0 5px;\n}\n.rdw-dropdown-optionwrapper {\n    z-index: 100;\n    position: relative;\n    border: 1px solid #F1F1F1;\n    width: 98%;\n    background: white;\n    border-radius: 2px;\n    margin: 0;\n    padding: 0;\n    max-height: 250px;\n    overflow-y: scroll;\n}\n.rdw-dropdown-optionwrapper:hover {\n    box-shadow: 1px 1px 0px #BFBDBD;\n    background-color: #FFFFFF;\n}\n.rdw-dropdownoption-default {\n    min-height: 25px;\n    display: flex;\n    align-items: center;\n    padding: 0 5px;\n}\n.rdw-dropdownoption-highlighted {\n    background: #F1F1F1;\n}\n.rdw-dropdownoption-active {\n    background: #f5f5f5;\n}\n.rdw-dropdownoption-disabled {\n    opacity: 0.3;\n    cursor: default;\n}\n.rdw-inline-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n}\n.rdw-inline-dropdown {\n    width: 50px;\n}\n.rdw-inline-dropdownoption {\n    height: 40px;\n    display: flex;\n    justify-content: center;\n}\n.rdw-block-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n}\n.rdw-block-dropdown {\n    width: 110px;\n}\n.rdw-fontsize-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n}\n.rdw-fontsize-dropdown {\n    min-width: 40px;\n}\n.rdw-fontsize-option {\n    display: flex;\n    justify-content: center;\n}\n.rdw-fontfamily-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n}\n.rdw-fontfamily-dropdown {\n    width: 115px;\n}\n.rdw-fontfamily-placeholder {\n    white-space: nowrap;\n    max-width: 90px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.rdw-fontfamily-optionwrapper {\n    width: 140px;\n}\n.rdw-list-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n}\n.rdw-list-dropdown {\n    width: 50px;\n    z-index: 90;\n}\n.rdw-list-dropdownOption {\n    height: 40px;\n    display: flex;\n    justify-content: center;\n}\n.rdw-text-align-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n}\n.rdw-text-align-dropdown {\n    width: 50px;\n    z-index: 90;\n}\n.rdw-text-align-dropdownOption {\n    height: 40px;\n    display: flex;\n    justify-content: center;\n}\n.rdw-right-aligned-block {\n    text-align: right;\n}\n.rdw-left-aligned-block {\n    text-align: left !important;\n}\n.rdw-center-aligned-block {\n    text-align: center !important;\n}\n.rdw-justify-aligned-block {\n    text-align: justify !important;\n}\n.rdw-right-aligned-block > div {\n    display: inline-block;\n}\n.rdw-left-aligned-block > div {\n    display: inline-block;\n}\n.rdw-center-aligned-block > div {\n    display: inline-block;\n}\n.rdw-justify-aligned-block > div {\n    display: inline-block;\n}\n.rdw-colorpicker-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n    position: relative;\n}\n.rdw-colorpicker-modal {\n    position: absolute;\n    top: 35px;\n    left: 5px;\n    display: flex;\n    flex-direction: column;\n    width: 175px;\n    height: 175px;\n    border: 1px solid #F1F1F1;\n    padding: 15px;\n    border-radius: 2px;\n    z-index: 100;\n    background: white;\n    box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-colorpicker-modal-header {\n    display: flex;\n    padding-bottom: 5px;\n}\n.rdw-colorpicker-modal-style-label {\n    font-size: 15px;\n    width: 50%;\n    text-align: center;\n    cursor: pointer;\n    padding: 0 10px 5px;\n}\n.rdw-colorpicker-modal-style-label-active {\n    border-bottom: 2px solid #0a66b7;\n}\n.rdw-colorpicker-modal-options {\n    margin: 5px auto;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    flex-wrap: wrap;\n    overflow: scroll;\n}\n.rdw-colorpicker-cube {\n    width: 22px;\n    height: 22px;\n    border: 1px solid #F1F1F1;\n}\n.rdw-colorpicker-option {\n    margin: 3px;\n    padding: 0;\n    min-height: 20px;\n    border: none;\n    width: 22px;\n    height: 22px;\n    min-width: 22px;\n    box-shadow: 1px 2px 1px #BFBDBD inset;\n}\n.rdw-colorpicker-option:hover {\n    box-shadow: 1px 2px 1px #BFBDBD;\n}\n.rdw-colorpicker-option:active {\n    box-shadow: -1px -2px 1px #BFBDBD;\n}\n.rdw-colorpicker-option-active {\n    box-shadow: 0px 0px 2px 2px #BFBDBD;\n}\n.rdw-link-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n    position: relative;\n}\n.rdw-link-dropdown {\n    width: 50px;\n}\n.rdw-link-dropdownOption {\n    height: 40px;\n    display: flex;\n    justify-content: center;\n}\n.rdw-link-dropdownPlaceholder {\n    margin-left: 8px;\n}\n.rdw-link-modal {\n    position: absolute;\n    top: 35px;\n    left: 5px;\n    display: flex;\n    flex-direction: column;\n    width: 235px;\n    height: 205px;\n    border: 1px solid #F1F1F1;\n    padding: 15px;\n    border-radius: 2px;\n    z-index: 100;\n    background: white;\n    box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-link-modal-label {\n    font-size: 15px;\n}\n.rdw-link-modal-input {\n    margin-top: 5px;\n    border-radius: 2px;\n    border: 1px solid #F1F1F1;\n    height: 25px;\n    margin-bottom: 15px;\n    padding: 0 5px;\n}\n.rdw-link-modal-input:focus {\n    outline: none;\n}\n.rdw-link-modal-buttonsection {\n    margin: 0 auto;\n}\n.rdw-link-modal-target-option {\n    margin-bottom: 20px;\n}\n.rdw-link-modal-target-option > span {\n    margin-left: 5px;\n}\n.rdw-link-modal-btn {\n    margin-left: 10px;\n    width: 75px;\n    height: 30px;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    cursor: pointer;\n    background: white;\n    text-transform: capitalize;\n}\n.rdw-link-modal-btn:hover {\n    box-shadow: 1px 1px 0px #BFBDBD;\n}\n.rdw-link-modal-btn:active {\n    box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-link-modal-btn:focus {\n    outline: none !important;\n}\n.rdw-link-modal-btn:disabled {\n    background: #ece9e9;\n}\n.rdw-link-dropdownoption {\n    height: 40px;\n    display: flex;\n    justify-content: center;\n}\n.rdw-history-dropdown {\n    width: 50px;\n}\n.rdw-embedded-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n    position: relative;\n}\n.rdw-embedded-modal {\n    position: absolute;\n    top: 35px;\n    left: 5px;\n    display: flex;\n    flex-direction: column;\n    width: 235px;\n    height: 180px;\n    border: 1px solid #F1F1F1;\n    padding: 15px;\n    border-radius: 2px;\n    z-index: 100;\n    background: white;\n    justify-content: space-between;\n    box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-embedded-modal-header {\n    font-size: 15px;\n    display: flex;\n}\n.rdw-embedded-modal-header-option {\n    width: 50%;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.rdw-embedded-modal-header-label {\n    width: 95px;\n    border: 1px solid #f1f1f1;\n    margin-top: 5px;\n    background: #6EB8D4;\n    border-bottom: 2px solid #0a66b7;\n}\n.rdw-embedded-modal-link-section {\n    display: flex;\n    flex-direction: column;\n}\n.rdw-embedded-modal-link-input {\n    width: 88%;\n    height: 35px;\n    margin: 10px 0;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    font-size: 15px;\n    padding: 0 5px;\n}\n.rdw-embedded-modal-link-input-wrapper {\n    display: flex;\n    align-items: center;\n}\n.rdw-embedded-modal-link-input:focus {\n    outline: none;\n}\n.rdw-embedded-modal-btn-section {\n    display: flex;\n    justify-content: center;\n}\n.rdw-embedded-modal-btn {\n    margin: 0 3px;\n    width: 75px;\n    height: 30px;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    cursor: pointer;\n    background: white;\n    text-transform: capitalize;\n}\n.rdw-embedded-modal-btn:hover {\n    box-shadow: 1px 1px 0px #BFBDBD;\n}\n.rdw-embedded-modal-btn:active {\n    box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-embedded-modal-btn:focus {\n    outline: none !important;\n}\n.rdw-embedded-modal-btn:disabled {\n    background: #ece9e9;\n}\n.rdw-embedded-modal-size {\n    align-items: center;\n    display: flex;\n    margin: 8px 0;\n    justify-content: space-between;\n}\n.rdw-embedded-modal-size-input {\n    width: 80%;\n    height: 20px;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    font-size: 12px;\n}\n.rdw-embedded-modal-size-input:focus {\n    outline: none;\n}\n.rdw-emoji-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n    position: relative;\n}\n.rdw-emoji-modal {\n    overflow: auto;\n    position: absolute;\n    top: 35px;\n    left: 5px;\n    display: flex;\n    flex-wrap: wrap;\n    width: 235px;\n    height: 180px;\n    border: 1px solid #F1F1F1;\n    padding: 15px;\n    border-radius: 2px;\n    z-index: 100;\n    background: white;\n    box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-emoji-icon {\n    margin: 2.5px;\n    height: 24px;\n    width: 24px;\n    cursor: pointer;\n    font-size: 22px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.rdw-spinner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n}\n.rdw-spinner > div {\n    width: 12px;\n    height: 12px;\n    background-color: #333;\n\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n.rdw-spinner .rdw-bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n.rdw-spinner .rdw-bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n@-webkit-keyframes sk-bouncedelay {\n    0%, 80%, 100% { -webkit-transform: scale(0) }\n    40% { -webkit-transform: scale(1.0) }\n}\n@keyframes sk-bouncedelay {\n    0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    } 40% {\n          -webkit-transform: scale(1.0);\n          transform: scale(1.0);\n      }\n}\n.rdw-image-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n    position: relative;\n}\n.rdw-image-modal {\n    position: absolute;\n    top: 35px;\n    left: 5px;\n    display: flex;\n    flex-direction: column;\n    width: 235px;\n    border: 1px solid #F1F1F1;\n    padding: 15px;\n    border-radius: 2px;\n    z-index: 100;\n    background: white;\n    box-shadow: 3px 3px 5px #BFBDBD;\n}\n.rdw-image-modal-header {\n    font-size: 15px;\n    margin: 10px 0;\n    display: flex;\n}\n.rdw-image-modal-header-option {\n    width: 50%;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.rdw-image-modal-header-label {\n    width: 80px;\n    background: #f1f1f1;\n    border: 1px solid #f1f1f1;\n    margin-top: 5px;\n}\n.rdw-image-modal-header-label-highlighted {\n    background: #6EB8D4;\n    border-bottom: 2px solid #0a66b7;\n}\n.rdw-image-modal-upload-option {\n    width: 100%;\n    color: gray;\n    cursor: pointer;\n    display: flex;\n    border: none;\n    font-size: 15px;\n    align-items: center;\n    justify-content: center;\n    background-color: #f1f1f1;\n    outline: 2px dashed gray;\n    outline-offset: -10px;\n    margin: 10px 0;\n    padding: 9px 0;\n}\n.rdw-image-modal-upload-option-highlighted {\n    outline: 2px dashed #0a66b7;\n}\n.rdw-image-modal-upload-option-label {\n    cursor: pointer;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 15px;\n}\n.rdw-image-modal-upload-option-label span{\n    padding: 0 20px;\n}\n.rdw-image-modal-upload-option-image-preview {\n    max-width: 100%;\n    max-height: 200px;\n}\n.rdw-image-modal-upload-option-input {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1;\n}\n.rdw-image-modal-url-section {\n    display: flex;\n    align-items: center;\n}\n.rdw-image-modal-url-input {\n    width: 90%;\n    height: 35px;\n    margin: 15px 0 12px;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    font-size: 15px;\n    padding: 0 5px;\n}\n.rdw-image-modal-btn-section {\n    margin: 10px auto 0;\n}\n.rdw-image-modal-url-input:focus {\n    outline: none;\n}\n.rdw-image-modal-btn {\n    margin: 0 5px;\n    width: 75px;\n    height: 30px;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    cursor: pointer;\n    background: white;\n    text-transform: capitalize;\n}\n.rdw-image-modal-btn:hover {\n    box-shadow: 1px 1px 0px #BFBDBD;\n}\n.rdw-image-modal-btn:active {\n    box-shadow: 1px 1px 0px #BFBDBD inset;\n}\n.rdw-image-modal-btn:focus {\n    outline: none !important;\n}\n.rdw-image-modal-btn:disabled {\n    background: #ece9e9;\n}\n.rdw-image-modal-spinner {\n    position: absolute;\n    top: -3px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.5;\n}\n.rdw-image-modal-alt-input {\n    width: 70%;\n    height: 20px;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    font-size: 12px;\n    margin-left: 5px;\n}\n.rdw-image-modal-alt-input:focus {\n    outline: none;\n}\n.rdw-image-modal-alt-lbl {\n    font-size: 12px;\n}\n.rdw-image-modal-size {\n    align-items: center;\n    display: flex;\n    margin: 8px 0;\n    justify-content: space-between;\n}\n.rdw-image-modal-size-input {\n    width: 40%;\n    height: 20px;\n    border: 1px solid #F1F1F1;\n    border-radius: 2px;\n    font-size: 12px;\n}\n.rdw-image-modal-size-input:focus {\n    outline: none;\n}\n.rdw-image-mandatory-sign {\n    color: red;\n    margin-left: 3px;\n    margin-right: 3px;\n}\n.rdw-remove-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n    position: relative;\n}\n.rdw-history-wrapper {\n    display: flex;\n    align-items: center;\n    margin-bottom: 6px;\n}\n.rdw-history-dropdownoption {\n    height: 40px;\n    display: flex;\n    justify-content: center;\n}\n.rdw-history-dropdown {\n    width: 50px;\n}\n.rdw-link-decorator-wrapper {\n    position: relative;\n}\n.rdw-link-decorator-icon {\n    position: absolute;\n    left: 40%;\n    top: 0;\n    cursor: pointer;\n    background-color: white;\n}\n.rdw-mention-link {\n    text-decoration: none;\n    color: #1236ff;\n    background-color: #f0fbff;\n    padding: 1px 2px;\n    border-radius: 2px;\n}\n.rdw-suggestion-wrapper {\n    position: relative;\n}\n.rdw-suggestion-dropdown {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #F1F1F1;\n    min-width: 100px;\n    max-height: 150px;\n    overflow: auto;\n    background: white;\n    z-index: 100;\n}\n.rdw-suggestion-option {\n    padding: 7px 5px;\n    border-bottom: 1px solid #f1f1f1;\n}\n.rdw-suggestion-option-active {\n    background-color: #F1F1F1;\n}\n.rdw-hashtag-link {\n    text-decoration: none;\n    color: #1236ff;\n    background-color: #f0fbff;\n    padding: 1px 2px;\n    border-radius: 2px;\n}\n.rdw-image-alignment-options-popup {\n    position: absolute;;\n    background: white;\n    display: flex;\n    padding: 5px 2px;\n    border-radius: 2px;\n    border: 1px solid #F1F1F1;\n    width: 105px;\n    cursor: pointer;\n    z-index: 100;\n}\n.rdw-alignment-option-left {\n    justify-content: flex-start;\n}\n.rdw-image-alignment-option {\n    height: 15px;\n    width: 15px;\n    min-width: 15px;\n}\n.rdw-image-alignment {\n    position: relative;\n}\n.rdw-image-imagewrapper {\n    position: relative;\n}\n.rdw-image-center {\n    display: flex;\n    justify-content: center;\n}\n.rdw-image-left {\n    display: flex;\n}\n.rdw-image-right {\n    display: flex;\n    justify-content: flex-end;\n}\n.rdw-image-alignment-options-popup-right {\n    right: 0;\n}\n.rdw-editor-main {\n    height: 100%;\n    overflow: auto;\n    box-sizing: border-box;\n}\n.rdw-editor-toolbar {\n    padding: 6px 5px 0;\n    border-radius: 2px;\n    border: 1px solid #F1F1F1;\n    display: flex;\n    justify-content: flex-start;\n    background: white;\n    flex-wrap: wrap;\n    font-size: 15px;\n    margin-bottom: 5px;\n    user-select: none;\n}\n.public-DraftStyleDefault-block {\n    margin: 1em 0;\n}\n.rdw-editor-wrapper:focus {\n    outline: none;\n}\n.rdw-editor-wrapper {\n    box-sizing: content-box;\n}\n.rdw-editor-main blockquote {\n    border-left: 5px solid #f1f1f1;\n    padding-left: 5px;\n}\n.rdw-editor-main pre {\n    background: #f1f1f1;\n    border-radius: 3px;\n    padding: 1px 10px;\n}\n\n.DraftEditor-editorContainer,.DraftEditor-root,.public-DraftEditor-content{height:inherit;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-root{position:relative}.DraftEditor-editorContainer{background-color:rgba(255,255,255,0);border-left:.1px solid transparent;position:relative;z-index:1}.public-DraftEditor-block{position:relative}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;z-index:0}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol,.public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) \". \";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1) \". \";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2) \". \";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) \". \";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4) \". \";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}\n", ""]);

// exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appLayout = __webpack_require__(41);

var _appLayout2 = _interopRequireDefault(_appLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
	path: '/',
	exact: false,
	component: _appLayout2.default
}];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__(42);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(43);

var _routes = __webpack_require__(16);

var _routes2 = _interopRequireDefault(_routes);

var _resources = __webpack_require__(82);

var _resources2 = _interopRequireDefault(_resources);

var _login = __webpack_require__(86);

var _login2 = _interopRequireDefault(_login);

var _auth = __webpack_require__(4);

var _auth2 = _interopRequireDefault(_auth);

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

var _copyProductPage = __webpack_require__(90);

var _copyProductPage2 = _interopRequireDefault(_copyProductPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppLayout = function (_React$Component) {
	_inherits(AppLayout, _React$Component);

	function AppLayout(props) {
		_classCallCheck(this, AppLayout);

		var _this = _possibleConstructorReturn(this, (AppLayout.__proto__ || Object.getPrototypeOf(AppLayout)).call(this, props));

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

	_createClass(AppLayout, [{
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
							component: _copyProductPage2.default
						})
					)
				)
			);
		}
	}]);

	return AppLayout;
}(_react2.default.Component);

exports.default = AppLayout;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Card = __webpack_require__(7);

var _resources = __webpack_require__(17);

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
/* 45 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/bookmark");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/image/control-point");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/verified-user");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/editor/attach-money");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/view-list");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/stars");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/tab");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/view-agenda");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/communication/stay-current-portrait");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/image/collections");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(3);

var _TextField2 = _interopRequireDefault(_TextField);

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(5);

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
/* 56 */
/***/ (function(module, exports) {

module.exports = require("js-sha256");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toolbar");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tabs = __webpack_require__(22);

var _TextField = __webpack_require__(3);

var _TextField2 = _interopRequireDefault(_TextField);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _list = __webpack_require__(8);

var _list2 = _interopRequireDefault(_list);

var _SelectField = __webpack_require__(11);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(12);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _delete = __webpack_require__(6);

var _delete2 = _interopRequireDefault(_delete);

var _Table = __webpack_require__(13);

var _Dialog = __webpack_require__(59);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _flipToFront = __webpack_require__(60);

var _flipToFront2 = _interopRequireDefault(_flipToFront);

var _reactDraftWysiwyg = __webpack_require__(23);

var _draftjsToHtml = __webpack_require__(24);

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _draftJs = __webpack_require__(25);

var _htmlToDraftjs = __webpack_require__(26);

var _htmlToDraftjs2 = _interopRequireDefault(_htmlToDraftjs);

var _reactRouterDom = __webpack_require__(1);

var _toolBar = __webpack_require__(5);

var _toolBar2 = _interopRequireDefault(_toolBar);

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceCreateEditLayout = function (_React$Component) {
	_inherits(ResourceCreateEditLayout, _React$Component);

	function ResourceCreateEditLayout(props) {
		_classCallCheck(this, ResourceCreateEditLayout);

		var _this = _possibleConstructorReturn(this, (ResourceCreateEditLayout.__proto__ || Object.getPrototypeOf(ResourceCreateEditLayout)).call(this, props));

		_this.state = {
			data: _this.getInitialState()
		};
		if (_this.props.action === 'edit') {
			_this.getResourceInfo().catch(function (err) {
				return console.error('resource-layout:27 ERROR GETTING RESOURCE!: ', err);
			});
		}
		if (_this.props.resource === 'attribute-sets') {
			_this.getData('attributes').catch(function (err) {
				return console.error('resource-layout:31 ERROR GETTING DATA!: ', err);
			});
		}
		if (_this.props.resource === 'tab-sets') {
			_this.state = _extends({}, _this.state, {
				tabs: []
			});
			_this.getData('tabs').catch(function (err) {
				return console.error('resource-layout:39 ERROR GETTING DATA!: ', err);
			});
		}
		if (_this.props.resource === 'attribute-sets') {
			_this.state = _extends({}, _this.state, {
				attributes: []
			});
			_this.getData('attributes').catch(function (err) {
				return console.error('resource-layout:47 ERROR GETTING DATA!: ', err);
			});
		}
		if (_this.props.resource === 'attributes') {
			_this.state = _extends({}, _this.state, {
				open: false,
				variant: {
					id: '',
					value: ''
				}
			});
		}
		if (_this.props.resource === 'orders') {
			_this.state = _extends({}, _this.state, {
				clients: [],
				statuses: [],
				products: []
			});
			_this.getData('clients').catch(function (err) {
				return console.error('resource-layout:66 ERROR GETTING DATA!: ', err);
			});
			_this.getData('statuses').catch(function (err) {
				return console.error('resource-layout:68 ERROR GETTING DATA!: ', err);
			});
			_this.getData('products').catch(function (err) {
				return console.error('resource-layout:70 ERROR GETTING DATA!: ', err);
			});
		}
		if (_this.props.resource === 'clients') {
			_this.state = _extends({}, _this.state, {
				address: {
					country: '',
					state: '',
					city: '',
					street: '',
					building: '',
					apartment: ''
				},
				open: false
			});
		}
		if (_this.props.resource === 'users') {
			_this.state = _extends({}, _this.state, {
				roles: []
			});
			_this.getData('roles').catch(function (err) {
				return console.error('resource-layout:92 ERROR GETTING DATA!: ', err);
			});
		}
		if (_this.props.resource === 'categories') {
			_this.state = _extends({}, _this.state, {
				categories: [],
				descState: _draftJs.EditorState.createEmpty()
			});
			_this.getData('categories').catch(function (err) {
				return console.error('resource-layout:102 ERROR GETTING DATA!: ', err);
			});
		}
		if (_this.props.resource === 'products') {
			_this.state = _extends({}, _this.state, {
				categories: [],
				'attribute-sets': [],
				'tab-sets': [],
				products: [],
				descState: _draftJs.EditorState.createEmpty(),
				shortDescState: _draftJs.EditorState.createEmpty()
			});
			_this.getData('categories').catch(function (err) {
				return console.error('resource-layout:117 ERROR GETTING DATA!: ', err);
			});
			_this.getData('attribute-sets').catch(function (err) {
				return console.error('resource-layout:119 ERROR GETTING DATA!: ', err);
			});
			_this.getData('tab-sets').catch(function (err) {
				return console.error('resource-layout:121 ERROR GETTING DATA!: ', err);
			});
			_this.getData('products').catch(function (err) {
				return console.error('resource-layout:123 ERROR GETTING DATA!: ', err);
			});
		}
		_this.changeValueOfInput = _this.changeValueOfInput.bind(_this);
		_this.changeSwitchInput = _this.changeSwitchInput.bind(_this);
		_this.handleClose = _this.handleClose.bind(_this);
		_this.handleOpen = _this.handleOpen.bind(_this);
		_this.addVariant = _this.addVariant.bind(_this);
		_this.addAddress = _this.addAddress.bind(_this);
		_this.onEditorDescChange = _this.onEditorDescChange.bind(_this);
		_this.onEditorShortDescChange = _this.onEditorShortDescChange.bind(_this);
		_this.uploadFile = _this.uploadFile.bind(_this);
		_this.uploadFiles = _this.uploadFiles.bind(_this);
		return _this;
	}

	_createClass(ResourceCreateEditLayout, [{
		key: 'getInitialState',
		value: function getInitialState() {
			var currentResource = {};

			var parseArrayOfKeys = function parseArrayOfKeys(keys, defaultValue) {
				if (keys.length === 2) {
					currentResource[keys[0]] = _extends({}, currentResource[keys[0]]);
					currentResource[keys[0]][keys[1]] = defaultValue;
				}
				if (keys.length === 3) {
					currentResource[keys[0]] = _extends({}, currentResource[keys[0]]);
					currentResource[keys[0]][keys[1]] = _extends({}, currentResource[keys[0]][keys[1]]);
					currentResource[keys[0]][keys[1]][keys[2]] = defaultValue;
				}
			};

			this.props.structure.tabs.forEach(function (tab) {
				tab.content.forEach(function (field) {
					if (field.type === 'table') {
						return;
					}
					var name = field.name,
					    defaultValue = field.defaultValue;

					if (name instanceof Array) {
						parseArrayOfKeys(name, defaultValue);
						return;
					}
					currentResource[name] = defaultValue;
				});
			});

			if (this.props.resource === 'attributes') {
				currentResource.variants = [];
			}

			if (this.props.resource === 'orders') {
				currentResource.products = [];
			}

			if (this.props.resource === 'clients') {
				currentResource.addresses = [];
				delete currentResource.address;
			}

			if (this.props.resource === 'products') {
				currentResource.relatedProducts = [];
				currentResource.fromSet = [];
			}

			return currentResource;
		}
	}, {
		key: 'getResourceInfo',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var id, result, description, contentBlock, contentState, editorState, _description, _contentBlock, _contentState, _editorState, shortDescription, contentBlockShortDesc, contentStateShortDesc, editorStateShortDesc;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								id = this.props.match.params.id;
								_context.next = 3;
								return _data2.default.getResource('/' + this.props.resource + '/' + id);

							case 3:
								result = _context.sent;

								if (!(this.props.resource === 'categories')) {
									_context.next = 11;
									break;
								}

								description = result.description;
								contentBlock = (0, _htmlToDraftjs2.default)(description);
								contentState = _draftJs.ContentState.createFromBlockArray(contentBlock.contentBlocks);
								editorState = _draftJs.EditorState.createWithContent(contentState);

								this.setState({
									data: result,
									descState: editorState
								});
								return _context.abrupt('return');

							case 11:
								if (!(this.props.resource === 'products')) {
									_context.next = 22;
									break;
								}

								_description = result.description;
								_contentBlock = (0, _htmlToDraftjs2.default)(_description);
								_contentState = _draftJs.ContentState.createFromBlockArray(_contentBlock.contentBlocks);
								_editorState = _draftJs.EditorState.createWithContent(_contentState);
								shortDescription = result.shortDescription;
								contentBlockShortDesc = (0, _htmlToDraftjs2.default)(shortDescription);
								contentStateShortDesc = _draftJs.ContentState.createFromBlockArray(contentBlockShortDesc.contentBlocks);
								editorStateShortDesc = _draftJs.EditorState.createWithContent(contentStateShortDesc);

								this.setState({
									data: result,
									descState: _editorState,
									shortDescState: editorStateShortDesc
								});
								return _context.abrupt('return');

							case 22:
								this.setState({
									data: result
								});

							case 23:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getResourceInfo() {
				return _ref.apply(this, arguments);
			}

			return getResourceInfo;
		}()
	}, {
		key: 'getData',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resources) {
				var response;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _data2.default.getData('/' + resources);

							case 2:
								response = _context2.sent;

								this.setState(_defineProperty({}, resources, response.data));

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getData(_x) {
				return _ref2.apply(this, arguments);
			}

			return getData;
		}()
	}, {
		key: 'uploadFile',
		value: function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(file) {
				var result;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _data2.default.uploadImage('/upload/categories', file.target.files[0]);

							case 2:
								result = _context3.sent;

								this.setState({
									data: _extends({}, this.state.data, {
										image: result
									}),
									image: result
								});

							case 4:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function uploadFile(_x2) {
				return _ref3.apply(this, arguments);
			}

			return uploadFile;
		}()
	}, {
		key: 'uploadFiles',
		value: function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(file) {
				var result;
				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return _data2.default.uploadImage('/upload/products', file.target.files[0]);

							case 2:
								result = _context4.sent;

								this.setState({
									data: _extends({}, this.state.data, {
										images: [].concat(_toConsumableArray(this.state.data.images), [result])
									})
								});

							case 4:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function uploadFiles(_x3) {
				return _ref4.apply(this, arguments);
			}

			return uploadFiles;
		}()
	}, {
		key: 'changeValueOfInput',
		value: function changeValueOfInput(e) {
			var _e$target = e.target,
			    name = _e$target.name,
			    value = _e$target.value;

			this.setState({
				data: _extends({}, this.state.data, _defineProperty({}, name, value))
			});
		}
	}, {
		key: 'changeSelectInput',
		value: function () {
			var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(value, name, multiple) {
				var attributes, tabs;
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								if (!(this.props.resource === 'products')) {
									_context5.next = 13;
									break;
								}

								if (!(name === 'attribute-sets')) {
									_context5.next = 6;
									break;
								}

								_context5.next = 4;
								return _data2.default.getAttributes(value);

							case 4:
								attributes = _context5.sent;

								this.setState({
									data: _extends({}, this.state.data, {
										attributes: attributes
									})
								});

							case 6:
								if (!(name === 'tab-sets')) {
									_context5.next = 11;
									break;
								}

								_context5.next = 9;
								return _data2.default.getTabs(value);

							case 9:
								tabs = _context5.sent;

								this.setState({
									data: _extends({}, this.state.data, {
										tabs: tabs
									})
								});

							case 11:
								this.setState({
									data: _extends({}, this.state.data, _defineProperty({}, name, value))
								});
								return _context5.abrupt('return');

							case 13:
								if (!(name instanceof Array)) {
									_context5.next = 16;
									break;
								}

								if (name.length === 3) {
									if (!!multiple) {
										this.setState({
											data: _extends({}, this.state.data, _defineProperty({}, name[0], _extends({}, this.state.data[name[0]], _defineProperty({}, name[1], _extends({}, this.state.data[name[0]][name[1]], _defineProperty({}, name[2], value))))))
										});
									}
								}
								return _context5.abrupt('return');

							case 16:
								this.setState({
									data: _extends({}, this.state.data, _defineProperty({}, name, value))
								});

							case 17:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function changeSelectInput(_x4, _x5, _x6) {
				return _ref5.apply(this, arguments);
			}

			return changeSelectInput;
		}()
	}, {
		key: 'changeSwitchInput',
		value: function changeSwitchInput(value, name, multiple) {
			if (!!multiple) {
				if (name.length === 3) {
					this.setState({
						data: _extends({}, this.state.data, _defineProperty({}, name[0], _extends({}, this.state.data[name[0]], _defineProperty({}, name[1], _extends({}, this.state.data[name[0]][name[1]], _defineProperty({}, name[2], value))))))
					});
				}
				return;
			}
			this.setState({
				data: _extends({}, this.state.data, _defineProperty({}, name, value))
			});
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
		key: 'addAddress',
		value: function addAddress() {
			this.setState({
				data: _extends({}, this.state.data, {
					addresses: [].concat(_toConsumableArray(this.state.data.addresses), [this.state.address])
				})
			});
			this.handleClose();
		}
	}, {
		key: 'deleteVariant',
		value: function deleteVariant(id) {
			var newVariants = [];
			this.state.data.variants.forEach(function (variant) {
				if (variant.id === id) {
					return;
				}
				newVariants.push(variant);
			});
			this.setState({
				data: _extends({}, this.state.data, {
					variants: newVariants
				})
			});
			this.handleClose();
		}
	}, {
		key: 'pushToTable',
		value: function pushToTable(value, name) {
			this.setState({
				data: _extends({}, this.state.data, _defineProperty({}, name, [].concat(_toConsumableArray(this.state.data[name]), [value])))
			});
		}
	}, {
		key: 'deleteTableRow',
		value: function deleteTableRow(index, name) {
			var newItems = [];
			this.state.data[name].forEach(function (item, i) {
				if (i === index) {
					return;
				}
				newItems.push(item);
			});
			this.setState({
				data: _extends({}, this.state.data, _defineProperty({}, name, newItems))
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

			var tabs = this.props.structure.tabs;

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement(
					_Tabs.Tabs,
					null,
					tabs.map(function (tab, tabIndex) {
						return _react2.default.createElement(
							_Tabs.Tab,
							{
								label: tab.title,
								key: tabIndex
							},
							_react2.default.createElement(
								'div',
								{
									className: !!tab.className ? tab.className : 'resource-page'
								},
								_react2.default.createElement(
									'div',
									{
										className: 'resource-actions'
									},
									_this2.props.action === 'edit' ? _react2.default.createElement(
										_reactRouterDom.Link,
										{
											to: _this2.props.location.pathname + '/delete'
										},
										_react2.default.createElement(_FlatButton2.default, {
											label: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
											labelStyle: { color: 'rgb(255, 64, 129)' },
											primary: true,
											icon: _react2.default.createElement(_delete2.default, { color: 'rgb(255, 64, 129)' })
										})
									) : null,
									_this2.props.action === 'edit' && _this2.props.resource === 'products' ? _react2.default.createElement(
										_reactRouterDom.Link,
										{
											to: {
												pathname: _this2.props.location.pathname + '/copy'
											}
										},
										_react2.default.createElement(_FlatButton2.default, {
											label: '\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C',
											labelStyle: { color: 'rgb(64, 255, 129)' },
											primary: true,
											icon: _react2.default.createElement(_flipToFront2.default, { color: 'rgb(64, 255, 129)' })
										})
									) : null,
									_react2.default.createElement(
										_reactRouterDom.Link,
										{
											to: '/' + _this2.props.resource
										},
										_react2.default.createElement(_FlatButton2.default, {
											label: '\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u043F\u0438\u0441\u043A\u0443',
											primary: true,
											icon: _react2.default.createElement(_list2.default, null)
										})
									)
								),
								tab.content.map(function (field, fieldIndex) {
									var name = field.name,
									    required = field.required,
									    title = field.title,
									    type = field.type;

									if (type === 'textInput') {
										if (name instanceof Array) {
											return _react2.default.createElement(
												'div',
												{
													className: 'input',
													key: fieldIndex
												},
												_react2.default.createElement(_TextField2.default, {
													fullWidth: true,
													hintText: title,
													floatingLabelText: title,
													errorText: required ? 'Поле обязательно' : '',
													value: _this2.state.data[name[0]][name[1]],
													onChange: function onChange(e) {
														return _this2.setState({
															data: _extends({}, _this2.state.data, _defineProperty({}, name[0], _extends({}, _this2.state.data[name[0]], _defineProperty({}, name[1], e.target.value))))
														});
													}
												})
											);
										}
										return _react2.default.createElement(
											'div',
											{
												className: 'input',
												key: fieldIndex
											},
											_react2.default.createElement(_TextField2.default, {
												fullWidth: true,
												hintText: title,
												floatingLabelText: title,
												errorText: required ? 'Поле обязательно' : '',
												name: name,
												value: _this2.state.data[name],
												onChange: _this2.changeValueOfInput
											})
										);
									}
									if (type === 'multipleSelect' && !!field.variants || type === 'select' && !!field.variants) {
										var _name = field.name,
										    _required = field.required,
										    _title = field.title,
										    _type = field.type,
										    variants = field.variants;

										var actions = [_react2.default.createElement(_FlatButton2.default, {
											label: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
											primary: true,
											onClick: _this2.handleClose
										}), _react2.default.createElement(_FlatButton2.default, {
											label: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
											primary: true,
											onClick: _this2.addVariant
										})];
										if (_name instanceof Array) {
											if (_name.length === 3) {
												return _react2.default.createElement(
													'div',
													{
														className: 'input',
														key: fieldIndex
													},
													_react2.default.createElement(
														_SelectField2.default,
														{
															fullWidth: true,
															multiple: _type === 'multipleSelect',
															value: _this2.state.data[_name[0]][_name[1]][_name[2]],
															floatingLabelText: _title,
															errorText: _required ? 'Поле обязательно' : '',
															onChange: function onChange(event, index, value) {
																return _this2.changeSelectInput(value, _name, true);
															}
														},
														variants.map(function (variant, index) {
															return _react2.default.createElement(_MenuItem2.default, {
																value: variant.id,
																primaryText: variant.title,
																key: index
															});
														})
													)
												);
											}
											return;
										}
										return _react2.default.createElement(
											'div',
											{
												className: 'input',
												key: fieldIndex
											},
											_react2.default.createElement(
												_SelectField2.default,
												{
													fullWidth: true,
													multiple: _type === 'multipleSelect',
													value: _this2.state.data[_name],
													floatingLabelText: _title,
													errorText: _required ? 'Поле обязательно' : '',
													onChange: function onChange(event, index, value) {
														return _this2.changeSelectInput(value, _name);
													}
												},
												!!variants ? variants.map(function (variant, index) {
													return _react2.default.createElement(_MenuItem2.default, {
														value: variant.id,
														primaryText: variant.title,
														key: index
													});
												}) : _this2.state[_name].map(function (item, index) {
													return _react2.default.createElement(_MenuItem2.default, {
														value: item.slug,
														primaryText: item.title,
														key: index
													});
												})
											),
											(_this2.state.data.attrType === 'select' || _this2.state.data.attrType === 'multipleSelect') && _this2.props.resource === 'attributes' ? _react2.default.createElement(
												_react2.default.Fragment,
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
														!!_this2.state.data.variants ? _this2.state.data.variants.map(function (variant, index) {
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
																	_Table.TableRowColumn,
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
													onClick: _this2.handleOpen
												}),
												_react2.default.createElement(
													_Dialog2.default,
													{
														title: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430',
														actions: actions,
														modal: true,
														open: _this2.state.open,
														autoScrollBodyContent: true
													},
													_react2.default.createElement(_TextField2.default, {
														fullWidth: true,
														floatingLabelText: '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440',
														value: _this2.state.variant.id,
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
														value: _this2.state.variant.value,
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
										);
									}
									if (type === 'multipleSelect') {
										return _react2.default.createElement(
											'div',
											{
												className: 'input',
												key: fieldIndex
											},
											_react2.default.createElement(
												_SelectField2.default,
												{
													fullWidth: true,
													multiple: type === 'multipleSelect',
													value: _this2.state.data[name],
													floatingLabelText: title,
													errorText: required ? 'Поле обязательно' : '',
													onChange: function onChange(event, index, value) {
														return _this2.changeSelectInput(value, name);
													}
												},
												_this2.state[name].map(function (item, index) {
													return _react2.default.createElement(_MenuItem2.default, {
														value: item.slug,
														primaryText: item.title,
														key: index
													});
												})
											)
										);
									}
									if (type === 'select') {
										var _name2 = field.name,
										    _title2 = field.title,
										    needResources = field.needResources;

										return _react2.default.createElement(
											'div',
											{
												className: 'input',
												key: fieldIndex
											},
											_react2.default.createElement(
												_SelectField2.default,
												{
													fullWidth: true,
													multiple: type === 'multipleSelect',
													value: _this2.state.data[_name2],
													floatingLabelText: _title2,
													errorText: required ? 'Поле обязательно' : '',
													onChange: function onChange(event, index, value) {
														return _this2.changeSelectInput(value, _name2);
													}
												},
												_this2.state[needResources].map(function (item, index) {
													return _react2.default.createElement(_MenuItem2.default, {
														value: item.slug,
														primaryText: item.title || item.name,
														key: index
													});
												})
											)
										);
									}
									if (type === 'boolean') {
										var _name3 = field.name,
										    _title3 = field.title;

										if (_name3 instanceof Array) {
											if (_name3.length === 3) {
												return _react2.default.createElement(
													'div',
													{
														className: 'input',
														key: fieldIndex
													},
													_react2.default.createElement(_Toggle2.default, {
														style: {
															width: '250px'
														},
														toggled: _this2.state.data[_name3[0]][_name3[1]][_name3[2]],
														label: _title3,
														onToggle: function onToggle(event, value) {
															return _this2.changeSwitchInput(value, _name3, true);
														}
													})
												);
											}
											return;
										}
										return _react2.default.createElement(
											'div',
											{
												className: 'input',
												key: fieldIndex
											},
											_react2.default.createElement(_Toggle2.default, {
												style: {
													width: '250px'
												},
												toggled: _this2.state.data[_name3],
												label: _title3,
												onToggle: function onToggle(event, value) {
													return _this2.changeSwitchInput(value, _name3);
												}
											})
										);
									}
									if (type === 'table') {
										var columns = field.columns,
										    _name4 = field.name;

										return _react2.default.createElement(
											_Table.Table,
											{
												selectable: false,
												key: fieldIndex
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
													columns.map(function (item, index) {
														return _react2.default.createElement(
															_Table.TableHeaderColumn,
															{
																key: index
															},
															item.title
														);
													}),
													_react2.default.createElement(_Table.TableHeaderColumn, null)
												)
											),
											_react2.default.createElement(
												_Table.TableBody,
												{
													displayRowCheckbox: false
												},
												_this2.state.data[_name4].map(function (item, index) {
													return _react2.default.createElement(
														_Table.TableRow,
														{
															key: index
														},
														columns.map(function (column, index) {
															return _react2.default.createElement(
																_Table.TableRowColumn,
																{
																	key: index
																},
																item[column.name]
															);
														}),
														_react2.default.createElement(
															_Table.TableRowColumn,
															null,
															_react2.default.createElement(_delete2.default, {
																color: 'rgb(255, 64, 129)',
																onClick: function onClick() {
																	return _this2.deleteTableRow(index, _name4);
																},
																style: { cursor: 'pointer' }
															})
														)
													);
												})
											)
										);
									}
									if (type === 'pushTable') {
										var _title4 = field.title,
										    _needResources = field.needResources,
										    _name5 = field.name;

										return _react2.default.createElement(
											'div',
											{
												className: 'input',
												key: fieldIndex
											},
											_react2.default.createElement(
												_SelectField2.default,
												{
													fullWidth: true,
													floatingLabelText: _title4,
													onChange: function onChange(event, index, value) {
														return _this2.pushToTable(value, _name5);
													}
												},
												_this2.state[_needResources].map(function (item, index) {
													return _react2.default.createElement(_MenuItem2.default, {
														value: item,
														primaryText: item.title || item.name,
														key: index
													});
												})
											)
										);
									}
									if (type === 'dialog') {
										var _actions = [_react2.default.createElement(_FlatButton2.default, {
											label: '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
											primary: true,
											onClick: _this2.handleClose
										}), _react2.default.createElement(_FlatButton2.default, {
											label: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C',
											primary: true,
											onClick: _this2.addAddress
										})];
										return _react2.default.createElement(
											_react2.default.Fragment,
											{
												key: fieldIndex
											},
											_react2.default.createElement(
												_Dialog2.default,
												{
													title: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430',
													actions: _actions,
													modal: true,
													open: _this2.state.open,
													autoScrollBodyContent: true
												},
												field.children.map(function (element, index) {
													return _react2.default.createElement(
														'div',
														{
															className: 'input',
															key: index
														},
														_react2.default.createElement(_TextField2.default, {
															fullWidth: true,
															hintText: element.title,
															floatingLabelText: element.title,
															errorText: element.required ? 'Поле обязательно' : '',
															value: _this2.state[field.name][element.name],
															onChange: function onChange(e) {
																return _this2.setState(_defineProperty({}, field.name, _extends({}, _this2.state[field.name], _defineProperty({}, element.name, e.target.value))));
															}
														})
													);
												})
											),
											_react2.default.createElement(_RaisedButton2.default, {
												label: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
												style: { margin: '38px' },
												onClick: _this2.handleOpen
											})
										);
									}
									if (type === 'wysiwyg') {
										return _react2.default.createElement(
											'div',
											{
												className: 'input',
												key: fieldIndex
											},
											_react2.default.createElement(
												'div',
												{
													style: {
														color: 'rgba(0, 0, 0, 0.3)'
													}
												},
												title
											),
											_react2.default.createElement(_reactDraftWysiwyg.Editor, {
												editorState: _this2.state[field.editorStateName],
												wrapperClassName: 'demo-wrapper',
												editorClassName: 'demo-editor',
												onEditorStateChange: field.editorStateName === 'descState' ? _this2.onEditorDescChange : _this2.onEditorShortDescChange,
												onChange: function onChange() {
													return _this2.setState({
														data: _extends({}, _this2.state.data, _defineProperty({}, name, (0, _draftjsToHtml2.default)((0, _draftJs.convertToRaw)(_this2.state[field.editorStateName].getCurrentContent()))))
													});
												}
											})
										);
									}
									if (type === 'file') {
										if (!field.multiple) {
											return _react2.default.createElement(
												'div',
												{
													className: 'input',
													key: fieldIndex
												},
												_react2.default.createElement('input', {
													type: 'file',
													className: 'inputfile',
													id: 'file',
													onChange: _this2.uploadFile
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
													!!_this2.state.data.image ? _react2.default.createElement('img', {
														className: 'inputfile__image',
														src: _this2.state.data.image
													}) : null
												)
											);
										} else {
											return _react2.default.createElement(
												'div',
												{
													className: 'input',
													key: fieldIndex
												},
												_react2.default.createElement('input', {
													type: 'file',
													className: 'inputfile',
													id: 'file',
													onChange: _this2.uploadFiles
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
													_this2.state.data.images.map(function (image, index) {
														return _react2.default.createElement('img', {
															className: 'inputfile__image',
															src: image,
															key: index
														});
													})
												)
											);
										}
									}
								})
							)
						);
					}),
					this.props.resource === 'products' && !!this.state.data.attributes ? _react2.default.createElement(
						_Tabs.Tab,
						{
							label: '\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B'
						},
						_react2.default.createElement(
							'div',
							{
								className: 'resource-page' },
							this.state.data.attributes.map(function (attribute, key) {
								if (attribute.attrType === 'select' || attribute.attrType === 'multipleSelect') {
									return _react2.default.createElement(
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
								}
								if (attribute.attrType === 'interval') {
									return _react2.default.createElement(
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
								}
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
					) : null,
					this.props.resource === 'products' && !!this.state.data.tabs ? _react2.default.createElement(
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
					) : null
				),
				_react2.default.createElement(_toolBar2.default, {
					resources: this.props.resource,
					data: this.state.data,
					action: this.props.action,
					photos: this.props.resource === 'products' ? this.state.data.images : undefined,
					photo: this.props.resource === 'categories' ? this.state.data.image : null
				})
			);
		}
	}]);

	return ResourceCreateEditLayout;
}(_react2.default.Component);

exports.default = ResourceCreateEditLayout;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/flip-to-front");

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

var _Card = __webpack_require__(7);

var _data = __webpack_require__(2);

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
		_this.getData(_this.props.path).catch(function (err) {
			return console.log('resource-layout:16, Error getting data! ', err);
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
								console.log(this.props.path);
								_context2.next = 3;
								return this.getData(this.props.path);

							case 3:
								response = _context2.sent;

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

var _resourcesBody = __webpack_require__(63);

var _resourcesBody2 = _interopRequireDefault(_resourcesBody);

var _resourcesHeader = __webpack_require__(69);

var _resourcesHeader2 = _interopRequireDefault(_resourcesHeader);

var _Card = __webpack_require__(7);

var _mapObj = __webpack_require__(75);

var _mapObj2 = _interopRequireDefault(_mapObj);

var _pagination = __webpack_require__(76);

var _pagination2 = _interopRequireDefault(_pagination);

var _photos = __webpack_require__(78);

var _photos2 = _interopRequireDefault(_photos);

var _data = __webpack_require__(2);

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
					if (key === 'title' || key === 'sku') {
						return resource[key].indexOf(value) !== -1;
					}
					if (key === 'showInFilter' || key === 'isActive' || key === 'isRequire' || key === 'attrType' || key === 'role') {
						return resource[key] === value;
					}
					if (key === 'client') {
						return resource[key] === value;
					}
					if (key === 'attribute-sets' || key === 'categories' || key === 'name' || key === 'email') {
						return resource[key].indexOf(value) !== -1;
					}
					if (key === 'priceStart') {
						return Number(resource.price) >= Number(value);
					}
					if (key === 'priceEnd') {
						return Number(resource.price) <= Number(value);
					}
					if (key === 'creationDateStart') {
						return new Date(resource.creationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) >= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')));
					}
					if (key === 'creationDateEnd') {
						return new Date(resource.creationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) <= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')));
					}
					if (key === 'modificationDateStart') {
						return new Date(resource.modificationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) >= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')));
					}
					if (key === 'modificationDateEnd') {
						return new Date(resource.modificationDate.toLocaleString().slice(0, resource.creationDate.toLocaleString().indexOf(','))) <= new Date(value.toLocaleString().slice(0, value.toLocaleString().indexOf(',')));
					}
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
					_react2.default.createElement(_resourcesBody2.default, {
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

var _delete = __webpack_require__(6);

var _delete2 = _interopRequireDefault(_delete);

var _create = __webpack_require__(64);

var _create2 = _interopRequireDefault(_create);

var _TextField = __webpack_require__(3);

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

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesBody = function (_React$Component) {
	_inherits(ResourcesBody, _React$Component);

	function ResourcesBody(props) {
		_classCallCheck(this, ResourcesBody);

		var _this = _possibleConstructorReturn(this, (ResourcesBody.__proto__ || Object.getPrototypeOf(ResourcesBody)).call(this, props));

		_this.state = {
			ascendingSort: true,
			sortedData: [],
			categories: [],
			roles: [],
			products: [],
			data: {}
		};
		if (_this.props.path === '/users') {
			_this.getRoles();
		}
		if (_this.props.path === '/products') {
			_this.getProductsPrice();
			_this.getCategories();
		}
		return _this;
	}

	_createClass(ResourcesBody, [{
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
				var newData = this.state.sortedData.slice().sort(ResourcesBody.ascendingSort.bind(null, resource.key));

				this.setState({
					sortedData: newData
				});
			} else {
				var _newData = this.state.sortedData.slice().sort(ResourcesBody.descendingSort.bind(null, resource.key));

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

	return ResourcesBody;
}(_react2.default.Component);

exports.default = ResourcesBody;

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

var _colors = __webpack_require__(27);

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

var _SelectField = __webpack_require__(11);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(12);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _TextField = __webpack_require__(3);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _DatePicker = __webpack_require__(74);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _data = __webpack_require__(2);

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
                                label: '\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u0430\u0439\u043B',
                                primary: true,
                                icon: _react2.default.createElement(_importExport2.default, { color: _colors.cyan500 }),
                                href: /*'http://admin.formetoo.ru/api/import/products'*/'http://localhost:3001/api/import/products'
                            }),
                            _react2.default.createElement(
                                _FlatButton2.default,
                                {
                                    label: '\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u0430\u0439\u043B',
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

module.exports = require("material-ui/DatePicker");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("map-obj");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialUiPagination = __webpack_require__(77);

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
/* 77 */
/***/ (function(module, exports) {

module.exports = require("material-ui-pagination");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GridList = __webpack_require__(79);

var _delete = __webpack_require__(6);

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
/* 79 */
/***/ (function(module, exports) {

module.exports = require("material-ui/GridList");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _toolBar = __webpack_require__(5);

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
/* 81 */
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
	filters: [],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			content: [{
				type: 'textInput',
				title: 'Заголовок(наименование)',
				name: 'title',
				defaultValue: '',
				required: true
			}]
		}]
	}
}, {
	resource: 'tab-sets',
	title: 'Список наборов табов',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'title'
	}],
	filters: [],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			content: [{
				type: 'textInput',
				title: 'Заголовок',
				name: 'title',
				defaultValue: '',
				required: true
			}, {
				type: 'multipleSelect',
				title: 'Табы',
				name: 'tabs',
				defaultValue: [],
				required: true
			}]
		}]
	}
}, {
	resource: 'tabs',
	title: 'Список табов',
	columns: [{
		name: 'ЗАГОЛОВОК',
		key: 'title'
	}],
	filters: [],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			content: [{
				type: 'textInput',
				title: 'Наименование',
				name: 'name',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				title: 'Заголовок',
				name: 'title',
				defaultValue: '',
				required: true
			}]
		}]
	}
}, {
	resource: 'attribute-sets',
	title: 'Список наборов атрибутов',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'title'
	}],
	filters: [],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			content: [{
				type: 'textInput',
				title: 'Наименование',
				name: 'title',
				defaultValue: '',
				required: true
			}, {
				type: 'multipleSelect',
				title: 'Атрибуты',
				name: 'attributes',
				defaultValue: [],
				required: true
			}]
		}]
	}
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
	}],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			content: [{
				type: 'boolean',
				title: 'Показывать в фильтре',
				name: 'showInFilter',
				required: false
			}, {
				type: 'boolean',
				title: 'Показывать на странице товара',
				name: 'showInProductPage',
				required: false
			}, {
				type: 'boolean',
				title: 'Показывать в списке',
				name: 'showInList',
				required: false
			}, {
				type: 'boolean',
				title: 'Обязательный',
				name: 'isRequired',
				required: false
			}, {
				type: 'textInput',
				title: 'Наименование',
				name: 'name',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				title: 'Заголовок',
				name: 'title',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				title: 'Единица измерения',
				name: 'unit',
				defaultValue: '',
				required: true
			}]
		}, {
			title: 'ТИП',
			content: [{
				type: 'select',
				title: 'Тип',
				name: 'attrType',
				variants: [{
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
				defaultValue: 'textInput',
				required: true
			}]
		}]
	}
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
	}],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			content: [{
				type: 'select',
				title: 'Статус',
				name: 'status',
				needResources: 'statuses',
				defaultValue: '',
				required: true
			}, {
				type: 'select',
				title: 'Заказчик',
				name: 'client',
				needResources: 'clients',
				defaultValue: '',
				required: true
			}]
		}, {
			title: 'ПРОДУКТЫ',
			content: [{
				type: 'table',
				columns: [{
					name: 'sku',
					title: 'Артикул'
				}, {
					name: 'title',
					title: 'Наименование'
				}, {
					name: 'price',
					title: 'Цена'
				}],
				name: 'products'
			}, {
				type: 'pushTable',
				title: 'Продукт',
				needResources: 'products',
				name: 'products'
			}]
		}, {
			title: 'АДРЕС',
			content: [{
				type: 'textInput',
				name: ['address', 'country'],
				title: 'Страна',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: ['address', 'state'],
				title: 'Область',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: ['address', 'city'],
				title: 'Город',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: ['address', 'street'],
				title: 'Улица',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: ['address', 'building'],
				title: 'Дом',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: ['address', 'apartment'],
				title: 'Квартира',
				defaultValue: '',
				required: true
			}]
		}]
	}
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
	}],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			content: [{
				type: 'textInput',
				name: 'name',
				title: 'Имя',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: 'email',
				title: 'Почта',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: 'phone',
				title: 'Телефон',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: 'password',
				title: 'Пароль',
				defaultValue: '',
				required: true
			}]
		}, {
			title: 'АДРЕСА',
			content: [{
				type: 'table',
				columns: [{
					name: 'country',
					title: 'Страна'
				}, {
					name: 'state',
					title: 'Область'
				}, {
					name: 'city',
					title: 'Город'
				}, {
					name: 'street',
					title: 'Улица'
				}, {
					name: 'building',
					title: 'Дом'
				}, {
					name: 'apartment',
					title: 'Квартира'
				}],
				name: 'addresses'
			}, {
				type: 'dialog',
				name: 'address',
				children: [{
					type: 'textInput',
					name: 'country',
					title: 'Страна',
					defaultValue: '',
					required: true
				}, {
					type: 'textInput',
					name: 'state',
					title: 'Область',
					defaultValue: '',
					required: true
				}, {
					type: 'textInput',
					name: 'city',
					title: 'Город',
					defaultValue: '',
					required: true
				}, {
					type: 'textInput',
					name: 'street',
					title: 'Улица',
					defaultValue: '',
					required: true
				}, {
					type: 'textInput',
					name: 'building',
					title: 'Дом',
					defaultValue: '',
					required: true
				}, {
					type: 'textInput',
					name: 'apartment',
					title: 'Квартира',
					defaultValue: '',
					required: true
				}]
			}]
		}]
	}
}, {
	resource: 'roles',
	title: 'Список ролей',
	columns: [{
		name: 'НАЗВАНИЕ',
		key: 'name'
	}],
	filters: [],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			className: 'big-resource',
			content: [{
				type: 'textInput',
				name: 'name',
				title: 'Название',
				defaultValue: '',
				required: true
			}, {
				type: 'multipleSelect',
				name: ['resources', 'categories', 'permissions'],
				title: 'Права для категорий',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'categories', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'products', 'permissions'],
				title: 'Права для продуктов',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'products', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'users', 'permissions'],
				title: 'Права для пользователей',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'users', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'roles', 'permissions'],
				title: 'Права для ролей',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'roles', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'clients', 'permissions'],
				title: 'Права для клиентов',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'clients', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'orders', 'permissions'],
				title: 'Права для заказов',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'orders', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'attributes', 'permissions'],
				title: 'Права для атрибутов',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'attributes', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'tabs', 'permissions'],
				title: 'Права для табов',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'tabs', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'attribute-sets', 'permissions'],
				title: 'Права для наборов атрибутов',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'attribute-sets', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'tab-sets', 'permissions'],
				title: 'Права для наборов табов',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'tab-sets', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'statuses', 'permissions'],
				title: 'Права для статусов',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'statuses', 'showInMenu'],
				title: 'Показывать в меню'
			}, {
				type: 'multipleSelect',
				name: ['resources', 'photos', 'permissions'],
				title: 'Права для фото',
				variants: [{
					id: 'get',
					title: 'Чтение'
				}, {
					id: 'create',
					title: 'Создание'
				}, {
					id: 'put',
					title: 'Редактирование'
				}, {
					id: 'delete',
					title: 'Удаление'
				}],
				defaultValue: []
			}, {
				type: 'boolean',
				name: ['resources', 'photos', 'showInMenu'],
				title: 'Показывать в меню'
			}]
		}]
	}
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
	}],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			content: [{
				type: 'textInput',
				name: 'name',
				title: 'Имя',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: 'email',
				title: 'Почта',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: 'password',
				title: 'Пароль',
				defaultValue: '',
				required: true
			}, {
				type: 'select',
				name: 'role',
				title: 'Роль',
				needResources: 'roles',
				defaultValue: '',
				required: true
			}]
		}]
	}
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
	}],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			className: 'big-resource',
			content: [{
				type: 'boolean',
				name: 'isActive',
				title: 'Активный',
				defaultValue: false,
				required: false
			}, {
				type: 'textInput',
				name: 'title',
				title: 'Заголовок',
				defaultValue: '',
				required: true
			}, {
				type: 'wysiwyg',
				name: 'description',
				title: 'Описание',
				editorStateName: 'descState',
				defaultValue: '',
				required: true
			}, {
				type: 'file',
				name: 'image',
				title: 'Перенесите сюда файл или нажмите, чтобы выбрать изображение',
				defaultValue: undefined,
				required: false
			}, {
				type: 'select',
				name: 'parentCategory',
				needResources: 'categories',
				title: 'Родительская категория',
				required: false
			}]
		}, {
			title: 'SEO',
			content: [{
				type: 'textInput',
				name: ['seo', 'title'],
				title: 'SEO заголовок',
				required: false
			}, {
				type: 'textInput',
				name: ['seo', 'description'],
				title: 'SEO описание',
				required: false
			}, {
				type: 'textInput',
				name: ['seo', 'keywords'],
				title: 'SEO ключевые слова',
				required: false
			}]
		}]
	}
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
	}],
	structure: {
		tabs: [{
			title: 'ОСНОВНОЕ',
			className: 'big-resource',
			content: [{
				type: 'boolean',
				name: 'isActive',
				title: 'Активный',
				defaultValue: false,
				required: false
			}, {
				type: 'textInput',
				name: 'title',
				title: 'Заголовок',
				defaultValue: '',
				required: true
			}, {
				type: 'wysiwyg',
				name: 'description',
				title: 'Описание',
				editorStateName: 'descState',
				defaultValue: '',
				required: true
			}, {
				type: 'wysiwyg',
				name: 'shortDescription',
				editorStateName: 'shortDescState',
				title: 'Краткое описание',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: 'sku',
				title: 'Атрикул',
				defaultValue: '',
				required: true
			}, {
				type: 'textInput',
				name: 'price',
				title: 'Цена',
				defaultValue: '',
				required: true
			}, {
				type: 'multipleSelect',
				name: 'categories',
				title: 'Категории',
				defaultValue: [],
				needResources: 'categories',
				required: false
			}, {
				type: 'file',
				name: 'images',
				multiple: true,
				title: 'Перенесите сюда файл или нажмите, чтобы выбрать изображение',
				defaultValue: [],
				required: false
			}, {
				type: 'multipleSelect',
				name: 'attribute-sets',
				title: 'Наборы атрибутов',
				defaultValue: [],
				needResources: 'attribute-sets',
				required: false
			}, {
				type: 'multipleSelect',
				name: 'tab-sets',
				title: 'Наборы табов',
				defaultValue: [],
				needResources: 'tab-sets',
				required: false
			}]
		}, {
			title: 'SEO',
			content: [{
				type: 'textInput',
				name: ['seo', 'title'],
				title: 'SEO заголовок',
				defaultValue: '',
				required: false
			}, {
				type: 'textInput',
				name: ['seo', 'description'],
				title: 'SEO описание',
				defaultValue: '',
				required: false
			}, {
				type: 'textInput',
				name: ['seo', 'keywords'],
				title: 'SEO ключевые слова',
				defaultValue: '',
				required: false
			}]
		}, {
			title: 'ПОХОЖИЕ ПРОДУКТЫ',
			content: [{
				type: 'table',
				name: 'relatedProducts',
				columns: [{
					name: 'sku',
					title: 'Артикул'
				}, {
					name: 'title',
					title: 'Наименование'
				}, {
					name: 'price',
					title: 'Цена'
				}],
				defaultValue: []
			}, {
				type: 'pushTable',
				title: 'Похожий продукт',
				needResources: 'products',
				name: 'relatedProducts'
			}]
		}, {
			title: 'ТОВАРЫ ИЗ НАБОРА',
			content: [{
				type: 'table',
				name: 'fromSet',
				columns: [{
					name: 'sku',
					title: 'Артикул'
				}, {
					name: 'title',
					title: 'Наименование'
				}, {
					name: 'price',
					title: 'Цена'
				}],
				defaultValue: []
			}, {
				type: 'pushTable',
				title: 'Товар из набора',
				needResources: 'products',
				name: 'fromSet'
			}]
		}]
	}
}];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(83);

var _reactRouterDom = __webpack_require__(1);

var _people = __webpack_require__(18);

var _people2 = _interopRequireDefault(_people);

var _exitToApp = __webpack_require__(84);

var _exitToApp2 = _interopRequireDefault(_exitToApp);

var _home = __webpack_require__(85);

var _home2 = _interopRequireDefault(_home);

var _auth = __webpack_require__(4);

var _auth2 = _interopRequireDefault(_auth);

var _resources = __webpack_require__(17);

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
/* 83 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/exit-to-app");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/home");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(27);

var _Paper = __webpack_require__(87);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(3);

var _TextField2 = _interopRequireDefault(_TextField);

var _Avatar = __webpack_require__(88);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _lockOutline = __webpack_require__(89);

var _lockOutline2 = _interopRequireDefault(_lockOutline);

var _RaisedButton = __webpack_require__(9);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _auth = __webpack_require__(4);

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
/* 87 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/lock-outline");

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

var _Tabs = __webpack_require__(22);

var _TextField = __webpack_require__(3);

var _TextField2 = _interopRequireDefault(_TextField);

var _Toggle = __webpack_require__(14);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _Table = __webpack_require__(13);

var _delete = __webpack_require__(6);

var _delete2 = _interopRequireDefault(_delete);

var _SelectField = __webpack_require__(11);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _list = __webpack_require__(8);

var _list2 = _interopRequireDefault(_list);

var _MenuItem = __webpack_require__(12);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _FlatButton = __webpack_require__(10);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _reactRouterDom = __webpack_require__(1);

var _uid = __webpack_require__(91);

var _uid2 = _interopRequireDefault(_uid);

var _reactDraftWysiwyg = __webpack_require__(23);

var _draftJs = __webpack_require__(25);

var _draftjsToHtml = __webpack_require__(24);

var _draftjsToHtml2 = _interopRequireDefault(_draftjsToHtml);

var _htmlToDraftjs = __webpack_require__(26);

var _htmlToDraftjs2 = _interopRequireDefault(_htmlToDraftjs);

var _data = __webpack_require__(2);

var _data2 = _interopRequireDefault(_data);

var _toolBar = __webpack_require__(5);

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

			if (!this.state.categories || !this.state.products || !this.state['attribute-sets'] || !this.state['tab-sets']) {
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
/* 91 */
/***/ (function(module, exports) {

module.exports = require("uid");

/***/ })
/******/ ]);