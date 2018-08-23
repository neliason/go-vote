/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUserAuthenticated = exports.getShowAddPoll = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Import Actions
	
	
	var _AppActions = __webpack_require__(11);
	
	// Initial State
	var initialState = {
	  showAddPoll: false,
	  userAuthenticated: false
	};
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POLL:
	      return _extends({}, state, {
	        showAddPoll: !state.showAddPoll
	      });
	
	    case _AppActions.USER_LOGIN:
	      return _extends({}, state, {
	        userAuthenticated: true
	      });
	
	    case _AppActions.USER_LOGOUT:
	      return _extends({}, state, {
	        userAuthenticated: false
	      });
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get showAddPoll
	var getShowAddPoll = exports.getShowAddPoll = function getShowAddPoll(state) {
	  return state.app.showAddPoll;
	};
	
	var getUserAuthenticated = exports.getUserAuthenticated = function getUserAuthenticated(state) {
	  return state.app.userAuthenticated;
	};
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ADD_USER = undefined;
	exports.addUser = addUser;
	exports.fetchUser = fetchUser;
	
	var _apiCaller = __webpack_require__(12);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ADD_USER = exports.ADD_USER = 'ADD_USER';
	
	function addUser(user) {
	  return {
	    type: ADD_USER,
	    user: user
	  };
	}
	
	function fetchUser() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('user').then(function (res) {
	      return dispatch(addUser(res));
	    });
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VOTE_ON_POLL = exports.DELETE_POLL = exports.ADD_POLLS = exports.ADD_POLL = undefined;
	exports.addPoll = addPoll;
	exports.addPollRequest = addPollRequest;
	exports.addPolls = addPolls;
	exports.fetchMyPolls = fetchMyPolls;
	exports.fetchPolls = fetchPolls;
	exports.fetchPoll = fetchPoll;
	exports.deletePoll = deletePoll;
	exports.deletePollRequest = deletePollRequest;
	exports.voteOnPoll = voteOnPoll;
	exports.voteOnPollRequest = voteOnPollRequest;
	
	var _apiCaller = __webpack_require__(12);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_POLL = exports.ADD_POLL = 'ADD_POLL';
	var ADD_POLLS = exports.ADD_POLLS = 'ADD_POLLS';
	var DELETE_POLL = exports.DELETE_POLL = 'DELETE_POLL';
	var VOTE_ON_POLL = exports.VOTE_ON_POLL = 'VOTE_ON_POLL';
	
	// Export Actions
	function addPoll(poll) {
	  return {
	    type: ADD_POLL,
	    poll: poll
	  };
	}
	
	function addPollRequest(poll) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('polls', 'post', {
	      poll: {
	        name: poll.name,
	        title: poll.title,
	        choices: poll.choices
	      }
	    }).then(function (res) {
	      return dispatch(addPoll(res.poll));
	    });
	  };
	}
	
	function addPolls(polls) {
	  return {
	    type: ADD_POLLS,
	    polls: polls
	  };
	}
	
	function fetchMyPolls() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('mypolls').then(function (res) {
	      return dispatch(addPolls(res.mypolls));
	    });
	  };
	}
	
	function fetchPolls() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('polls').then(function (res) {
	      dispatch(addPolls(res.polls));
	    });
	  };
	}
	
	function fetchPoll(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('polls/' + cuid).then(function (res) {
	      return dispatch(addPoll(res.poll));
	    });
	  };
	}
	
	function deletePoll(cuid) {
	  return {
	    type: DELETE_POLL,
	    cuid: cuid
	  };
	}
	
	function deletePollRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('polls/' + cuid, 'delete').then(function () {
	      return dispatch(deletePoll(cuid));
	    });
	  };
	}
	
	function voteOnPoll(cuid, indexOfChoice) {
	  return {
	    type: VOTE_ON_POLL,
	    cuid: cuid,
	    indexOfChoice: indexOfChoice
	  };
	}
	
	function voteOnPollRequest(cuid, indexOfChoice, userAuthenticated) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('polls/' + cuid + '/vote', 'post', {
	      indexOfChoice: indexOfChoice
	    }).then(function (res) {
	      if (res.message) {
	        alert(res.message);
	        return;
	      }
	      dispatch(voteOnPoll(cuid, indexOfChoice));
	    });
	  };
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPoll = exports.getPolls = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _PollActions = __webpack_require__(6);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var PollReducer = function PollReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PollActions.ADD_POLL:
	      return {
	        data: [action.poll].concat(_toConsumableArray(state.data))
	      };
	
	    case _PollActions.ADD_POLLS:
	      return {
	        data: action.polls
	      };
	
	    case _PollActions.DELETE_POLL:
	      return {
	        data: state.data.filter(function (poll) {
	          return poll.cuid !== action.cuid;
	        })
	      };
	
	    case _PollActions.VOTE_ON_POLL:
	      {
	        var newData = state.data.map(function (poll) {
	          if (poll.cuid === action.cuid) {
	            var newChoices = poll.choices;
	            newChoices[action.indexOfChoice].votes += 1;
	            return _extends({}, poll, {
	              choices: newChoices
	            });
	          }
	          return poll;
	        });
	        return {
	          data: newData
	        };
	      }
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all polls
	var getPolls = exports.getPolls = function getPolls(state) {
	  return state.polls.data;
	};
	
	// Get poll by cuid
	var getPoll = exports.getPoll = function getPoll(state, cuid) {
	  return state.polls.data.filter(function (poll) {
	    return poll.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = PollReducer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _UserActions = __webpack_require__(4);
	
	var initialState = {};
	
	var UserReducer = function UserReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _UserActions.ADD_USER:
	      return _extends({}, state, {
	        currentUser: action.user
	      });
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get user
	var getUser = exports.getUser = function getUser(state) {
	  return state.users.currentUser;
	};
	
	// Export Reducer
	exports.default = UserReducer;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.USER_LOGOUT = exports.USER_LOGIN = exports.TOGGLE_ADD_POLL = undefined;
	exports.toggleAddPoll = toggleAddPoll;
	exports.userLogin = userLogin;
	exports.userLogout = userLogout;
	exports.checkUserAuthStatus = checkUserAuthStatus;
	
	var _apiCaller = __webpack_require__(12);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var TOGGLE_ADD_POLL = exports.TOGGLE_ADD_POLL = 'TOGGLE_ADD_POLL';
	var USER_LOGIN = exports.USER_LOGIN = 'USER_LOGIN';
	var USER_LOGOUT = exports.USER_LOGOUT = 'USER_LOGOUT';
	
	var jsonEmpty = function jsonEmpty(json) {
	  return Object.keys(json).length === 0 && json.constructor === Object;
	};
	
	// Export Actions
	function toggleAddPoll() {
	  return {
	    type: TOGGLE_ADD_POLL
	  };
	}
	
	function userLogin() {
	  return {
	    type: USER_LOGIN
	  };
	}
	
	function userLogout() {
	  return {
	    type: USER_LOGOUT
	  };
	}
	
	function checkUserAuthStatus() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('user').then(function (res) {
	      if (jsonEmpty(res)) {
	        dispatch(userLogout());
	      } else {
	        dispatch(userLogin());
	      }
	    });
	  };
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(58);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(51);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
	//   process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
	//   '/api';
	
	var API_URL = exports.API_URL = 'https://go-vote.herokuapp.com/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: {
	      'content-type': 'application/json'
	    },
	    method: method,
	    body: JSON.stringify(body),
	    credentials: 'include'
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(67);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(69);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(68);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Components
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PollListItem = __webpack_require__(48);
	
	var _PollListItem2 = _interopRequireDefault(_PollListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PollList = function PollList(props) {
	  return _jsx('div', {
	    className: 'listView'
	  }, void 0, props.polls.map(function (poll, index, arr) {
	    return _jsx(_PollListItem2.default, {
	      poll: poll,
	      onDelete: function onDelete() {
	        return props.handleDeletePoll(poll.cuid);
	      },
	      userAuthenticated: props.userAuthenticated,
	      user: props.user,
	      isMyPolls: props.isMyPolls,
	      isLastPoll: index === arr.length - 1
	    }, poll.cuid);
	  }));
	};
	
	exports.default = PollList;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _PollList = __webpack_require__(16);
	
	var _PollList2 = _interopRequireDefault(_PollList);
	
	var _PollActions = __webpack_require__(6);
	
	var _UserActions = __webpack_require__(4);
	
	var _AppReducer = __webpack_require__(3);
	
	var _PollReducer = __webpack_require__(7);
	
	var _UserReducer = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MyPollsPage = function (_Component) {
	  _inherits(MyPollsPage, _Component);
	
	  function MyPollsPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MyPollsPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyPollsPage.__proto__ || Object.getPrototypeOf(MyPollsPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePoll = function (poll) {
	      if (confirm('Do you want to delete this poll')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _PollActions.deletePollRequest)(poll));
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MyPollsPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PollActions.fetchMyPolls)());
	      this.props.dispatch((0, _UserActions.fetchUser)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_PollList2.default, {
	        polls: this.props.polls,
	        handleDeletePoll: this.handleDeletePoll,
	        userAuthenticated: this.props.userAuthenticated,
	        user: this.props.user,
	        isMyPolls: true
	      }));
	    }
	  }]);
	
	  return MyPollsPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	// MyPollsPage.need = [() => { return fetchPolls(); }];
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    polls: (0, _PollReducer.getPolls)(state),
	    userAuthenticated: (0, _AppReducer.getUserAuthenticated)(state),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	MyPollsPage.contextTypes = {
	  router: _propTypes2.default.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(MyPollsPage);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactBootstrap = __webpack_require__(24);
	
	var _jsCookie = __webpack_require__(59);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	var _PollChart = __webpack_require__(46);
	
	var _PollChart2 = _interopRequireDefault(_PollChart);
	
	var _ShareButtons = __webpack_require__(49);
	
	var _ShareButtons2 = _interopRequireDefault(_ShareButtons);
	
	var _PollListItem = {
	  "single-poll": "_2_NVwwL3CgW9BuqdaKVi_P",
	  "poll-title": "Q9EuuXZNwU5zj0t8IN3CA",
	  "author-name": "_1ABYwjIaZu7rT-pTTiE_y0",
	  "poll-option": "_2FnKk8ou8vy0WMyCH-5PRz",
	  "poll-action": "zA0gY8T04rmokQ7yaL_qz",
	  "divider": "LT-O_b9i2QDdFJFbhcZW7",
	  "poll-detail-page": "_7ZRNUobPXQnfYO6DgG-p3",
	  "poll-and-chart": "_2iySh5GvIG6voYZbzQx-PB",
	  "poll-detail": "_1O-AmAOas1V1OxyE6QHePt",
	  "num-votes-text": "_2vStx4YjnYEb0cgCI-f4Qj",
	  "poll-chart": "_2I_FnzPetj25AOj3vcSPIR",
	  "share-button": "_1HMEGxZ_MAgRddDAlWAFYG",
	  "submit-btn": "_3pY5d_RE6D1Ehq183YE53i",
	  "detail-submit-and-share-btns": "_3AiIDgAaJTh7IygXdFCLsu",
	  "share-btns": "T4atQ77rI0hz4GaqcK_tX",
	  "input-group": "_1vy1naD6Q7oGD7Xcmciyg8"
	};
	
	var _PollListItem2 = _interopRequireDefault(_PollListItem);
	
	var _PollActions = __webpack_require__(6);
	
	var _UserActions = __webpack_require__(4);
	
	var _PollReducer = __webpack_require__(7);
	
	var _AppReducer = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PollDetailPage = function (_Component) {
	  _inherits(PollDetailPage, _Component);
	
	  function PollDetailPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PollDetailPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PollDetailPage.__proto__ || Object.getPrototypeOf(PollDetailPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      selectedIndex: null
	    }, _this.handleVote = function (cuid, indexOfChoice) {
	      if (_this.state.selectedIndex === null) {
	        alert('Please select an option');
	        return;
	      }
	      if (!_this.props.userAuthenticated) {
	        var pollsVotedOnCookie = _jsCookie2.default.get('pollsVotedOn');
	        var pollsVotedOn = [];
	        if (pollsVotedOnCookie) {
	          pollsVotedOn = JSON.parse(pollsVotedOnCookie);
	        }
	        if (pollsVotedOn.includes(cuid)) {
	          alert('User already voted');
	          return;
	        }
	        pollsVotedOn.push(cuid);
	        _jsCookie2.default.set('pollsVotedOn', pollsVotedOn);
	      }
	      _this.props.dispatch((0, _PollActions.voteOnPollRequest)(cuid, indexOfChoice));
	    }, _this.handleSelected = function (index) {
	      _this.setState({
	        selectedIndex: index
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PollDetailPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _UserActions.fetchUser)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _jsx('div', {
	        className: _PollListItem2.default['poll-detail-page']
	      }, void 0, _jsx(_reactHelmet2.default, {
	        title: this.props.poll.title
	      }), _jsx('h3', {
	        className: _PollListItem2.default['poll-title']
	      }, void 0, this.props.poll.title), _jsx('p', {
	        className: _PollListItem2.default['author-name']
	      }, void 0, 'by ', this.props.poll.name), _jsx('div', {
	        className: _PollListItem2.default['poll-and-chart']
	      }, void 0, _jsx('div', {
	        className: _PollListItem2.default['single-poll'] + ' ' + _PollListItem2.default['poll-detail']
	      }, void 0, this.props.poll.choices.map(function (choice, index) {
	        return _jsx('div', {
	          className: _PollListItem2.default['input-group']
	        }, void 0, _jsx('input', {
	          id: 'radio' + index,
	          name: 'radio',
	          type: 'radio',
	          checked: index === _this2.state.selectedIndex,
	          onClick: function onClick() {
	            return _this2.handleSelected(index);
	          }
	        }), _jsx('label', {
	          htmlFor: 'radio' + index
	        }, void 0, choice.name, _jsx('span', {
	          className: _PollListItem2.default['num-votes-text']
	        }, void 0, _jsx('i', {}, void 0, ' ', choice.votes, ' ', choice.votes === 1 ? 'vote' : 'votes'))));
	      }), _jsx('div', {
	        className: _PollListItem2.default['detail-submit-and-share-btns']
	      }, void 0, _jsx(_reactBootstrap.Button, {
	        className: 'btn ' + _PollListItem2.default['submit-btn'],
	        onClick: function onClick() {
	          return _this2.handleVote(_this2.props.poll.cuid, _this2.state.selectedIndex);
	        }
	      }, void 0, 'Submit'), _jsx(_ShareButtons2.default, {
	        className: _PollListItem2.default['share-btns'],
	        size: 30,
	        url: process.env.BASE_URL + '/polls/' + this.props.poll.slug + '-' + this.props.poll.cuid,
	        message: this.props.poll.title + ' | go-vote'
	      }))), _jsx('div', {
	        className: _PollListItem2.default['poll-chart']
	      }, void 0, _jsx(_PollChart2.default, {
	        choices: this.props.poll.choices
	      }))));
	    }
	  }]);
	
	  return PollDetailPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in server side.
	
	
	PollDetailPage.need = [function (params) {
	  return (0, _PollActions.fetchPoll)(params.cuid);
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    poll: (0, _PollReducer.getPoll)(state, props.params.cuid),
	    userAuthenticated: (0, _AppReducer.getUserAuthenticated)(state)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PollDetailPage);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _PollList = __webpack_require__(16);
	
	var _PollList2 = _interopRequireDefault(_PollList);
	
	var _PollCreateWidget = __webpack_require__(47);
	
	var _PollCreateWidget2 = _interopRequireDefault(_PollCreateWidget);
	
	var _PollActions = __webpack_require__(6);
	
	var _AppActions = __webpack_require__(11);
	
	var _UserActions = __webpack_require__(4);
	
	var _AppReducer = __webpack_require__(3);
	
	var _PollReducer = __webpack_require__(7);
	
	var _UserReducer = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PollListPage = function (_Component) {
	  _inherits(PollListPage, _Component);
	
	  function PollListPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PollListPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PollListPage.__proto__ || Object.getPrototypeOf(PollListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePoll = function (poll) {
	      if (confirm('Do you want to delete this poll')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _PollActions.deletePollRequest)(poll));
	      }
	    }, _this.handleAddPoll = function (name, title, choices) {
	      _this.props.dispatch((0, _AppActions.toggleAddPoll)());
	      _this.props.dispatch((0, _PollActions.addPollRequest)({ name: name, title: title, choices: choices }));
	    }, _this.toggleAddPollSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPoll)());
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PollListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PollActions.fetchPolls)());
	      this.props.dispatch((0, _UserActions.fetchUser)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx(_PollCreateWidget2.default, {
	        addPoll: this.handleAddPoll,
	        showAddPoll: this.props.showAddPoll,
	        user: this.props.user,
	        toggleAddPoll: this.toggleAddPollSection
	      }), _jsx(_PollList2.default, {
	        handleDeletePoll: this.handleDeletePoll,
	        polls: this.props.polls,
	        userAuthenticated: this.props.userAuthenticated,
	        user: this.props.user,
	        isMyPolls: false
	      }));
	    }
	  }]);
	
	  return PollListPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	
	
	PollListPage.need = [function () {
	  return (0, _PollActions.fetchPolls)();
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    showAddPoll: (0, _AppReducer.getShowAddPoll)(state),
	    polls: (0, _PollReducer.getPolls)(state),
	    userAuthenticated: (0, _AppReducer.getUserAuthenticated)(state),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	PollListPage.contextTypes = {
	  router: _propTypes2.default.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PollListPage);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _loginPage = {
	  "login": "_39Apl1G4TaDzmhrnJDEKON",
	  "login-text": "_1wIw9k05_fXo-6g233bX0j",
	  "login-btn": "_1tCdV-U9J1KSuPtZP4J7xY",
	  "github-icon": "_3eLUNH321JwLZYb2te0g1p"
	};
	
	var _loginPage2 = _interopRequireDefault(_loginPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LoginPage = function LoginPage() {
	  return _jsx('div', {
	    className: _loginPage2.default.login
	  }, void 0, _jsx('p', {
	    className: _loginPage2.default['login-text']
	  }, void 0, 'Login to Go-Vote'), _jsx('a', {
	    href: '/auth/github'
	  }, void 0, _jsx('div', {
	    className: 'btn ' + _loginPage2.default['login-btn']
	  }, void 0, _jsx('i', {
	    className: 'fab fa-github fa-lg ' + _loginPage2.default['github-icon']
	  }), 'Login with GitHub')));
	};
	
	exports.default = LoginPage;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	({
	  "container": "_1VeB563_1RTc4Bzu7sDmsY",
	  "menu": "_3z53d26V5d6qjnmJOu0nNX",
	  "display-name": "O4hId1I2a6tNrTt8bHgsx",
	  "clementine-text": "aEPlEFHkkvFwRqQGXWsyg",
	  "btn-container": "SvpoZDwKWCS90gLzBWxVr",
	  "btn": "_3by0qMVBfT0dYL4KbTexwS",
	  "btn-delete": "_31_Yc2fYxTb1_RH1VST6Qt",
	  "click-nbr": "_2_H8YWmDWs5jZMRS7vzT16",
	  "github-profile": "_3l9OIoNKqmgx2ziwPXR8M7",
	  "profile-value": "_1LZ3CIeqiFGhU4KBQWKqQd",
	  "menu-divide": "_1L3HdifY6CMsp4dBD_alcz"
	});
	
	var _UserActions = __webpack_require__(4);
	
	var _UserReducer = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ref = _jsx('span', {}, void 0, 'ID: ');
	
	var _ref2 = _jsx('span', {}, void 0, 'Username: ');
	
	var _ref3 = _jsx('span', {}, void 0, 'Display Name: ');
	
	var _ref4 = _jsx('span', {}, void 0, 'Repositories: ');
	
	var ProfilePage = function (_Component) {
	  _inherits(ProfilePage, _Component);
	
	  function ProfilePage() {
	    _classCallCheck(this, ProfilePage);
	
	    return _possibleConstructorReturn(this, (ProfilePage.__proto__ || Object.getPrototypeOf(ProfilePage)).apply(this, arguments));
	  }
	
	  _createClass(ProfilePage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _UserActions.fetchUser)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: 'container'
	      }, void 0, _jsx('div', {
	        className: 'github-profile'
	      }, void 0, _jsx('p', {}, void 0, _ref, _jsx('span', {
	        id: 'profile-id',
	        className: 'profile-value'
	      }, void 0, this.props.user.id)), _jsx('p', {}, void 0, _ref2, _jsx('span', {
	        id: 'profile-username',
	        className: 'profile-value'
	      }, void 0, this.props.user.username)), _jsx('p', {}, void 0, _ref3, _jsx('span', {
	        id: 'display-name',
	        className: 'profile-value'
	      }, void 0, this.props.user.displayName)), _jsx('p', {}, void 0, _ref4, _jsx('span', {
	        id: 'profile-repos',
	        className: 'profile-value'
	      }, void 0, this.props.user.publicRepos))));
	    }
	  }]);
	
	  return ProfilePage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	
	
	ProfilePage.need = [function () {
	  return (0, _UserActions.fetchUser)();
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProfilePage);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(9);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var pollSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  choices: [{
	    name: { type: 'String', required: true },
	    votes: { type: 'Number', default: 0 }
	  }],
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('Poll', pollSchema);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(9);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var userSchema = new Schema({
	  github: {
	    id: String,
	    displayName: String,
	    username: String,
	    publicRepos: Number
	  },
	  pollsVotedOn: [String]
	});
	
	exports.default = _mongoose2.default.model('User', userSchema);

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(5);
	
	var _App = __webpack_require__(43);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}
	
	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(19);
	  __webpack_require__(18);
	  __webpack_require__(17);
	  __webpack_require__(20);
	  __webpack_require__(21);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(19).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/polls/:slug-:cuid',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(18).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/login',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(20).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/mypolls',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(17).default);
	    }).bind(null, __webpack_require__));
	  }
	}), _jsx(_reactRouter.Route, {
	  path: '/profile',
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(21).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(25);
	
	var _reduxThunk = __webpack_require__(70);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(15);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(50);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  _poll2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	
	    var poll1 = new _poll2.default({
	      name: 'Admin',
	      title: 'Favorite drink?',
	      slug: 'favorite-drink',
	      cuid: 'cikqgkv4q01ck7453ualdn3hg',
	      choices: [{ name: 'coke', votes: 7 }, { name: 'pepsi', votes: 3 }]
	    });
	    var poll2 = new _poll2.default({
	      name: 'Admin',
	      title: 'Favorite snack?',
	      slug: 'favorite-snack',
	      cuid: 'cikqgkv4q01ck7453ualdn3hh',
	      choices: [{ name: 'candy', votes: 11 }, { name: 'chips', votes: 4 }]
	    });
	
	    _poll2.default.create([poll1, poll2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};
	
	var _poll = __webpack_require__(22);
	
	var _poll2 = _interopRequireDefault(_poll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(13);
	
	var _poll = __webpack_require__(52);
	
	var PollController = _interopRequireWildcard(_poll);
	
	var _common = __webpack_require__(55);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Polls
	router.route('/polls').get(PollController.getPolls);
	
	// Get one poll by cuid
	router.route('/polls/:cuid').get(PollController.getPoll);
	
	// Add a new Poll
	router.route('/polls').post(PollController.addPoll);
	
	// Delete a poll by cuid
	router.route('/polls/:cuid').delete(PollController.deletePoll);
	
	router.route('/polls/:cuid/vote').post(PollController.voteOnPoll);
	
	router.route('/mypolls').get(_common.isLoggedIn, PollController.getMyPolls);
	
	exports.default = router;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	module.exports = function (app, passport) {
	  app.route('/logout').get(function (req, res) {
	    req.logout();
	    res.redirect('/login');
	  });
	
	  app.route('/api/user').get(function (req, res) {
	    if (req.user) {
	      res.json(req.user.github);
	    } else {
	      res.json({});
	    }
	  });
	
	  app.route('/auth/github').get(passport.authenticate('github'));
	
	  app.route('/auth/github/callback').get(passport.authenticate('github', {
	    successRedirect: '/',
	    failureRedirect: '/login'
	  }));
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(56);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	var _user = __webpack_require__(23);
	
	var _user2 = _interopRequireDefault(_user);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GitHubStrategy = __webpack_require__(61).Strategy;
	
	var configAuth = __webpack_require__(54);
	
	module.exports = function (passport) {
	  passport.serializeUser(function (user, done) {
	    done(null, user.id);
	  });
	
	  passport.deserializeUser(function (id, done) {
	    _user2.default.findById(id, function (err, user) {
	      done(err, user);
	    });
	  });
	
	  passport.use(new GitHubStrategy({
	    clientID: configAuth.githubAuth.clientID,
	    clientSecret: configAuth.githubAuth.clientSecret,
	    callbackURL: configAuth.githubAuth.callbackURL
	  }, function (token, refreshToken, profile, done) {
	    process.nextTick(function () {
	      _user2.default.findOne({ 'github.id': profile.id }, function (err, user) {
	        if (err) {
	          return done(err);
	        }
	
	        if (user) {
	          return done(null, user);
	        } else {
	          var newUser = new _user2.default();
	
	          newUser.github.id = profile.id;
	          newUser.github.username = profile.username;
	          newUser.github.displayName = profile.displayName;
	          newUser.github.publicRepos = profile._json.public_repos;
	
	          newUser.save(function (err) {
	            if (err) {
	              throw err;
	            }
	
	            return done(null, newUser);
	          });
	        }
	      });
	    });
	  }));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(14);
	var cssnext = __webpack_require__(62);
	var postcssFocus = __webpack_require__(63);
	var postcssReporter = __webpack_require__(64);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("dotenv");

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(2);
	
	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(15);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(45);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(44);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _AppActions = __webpack_require__(11);
	
	var _AppReducer = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var _ref = _jsx(_DevTools2.default, {});
	
	var _ref2 = _jsx(_Footer2.default, {});
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.toggleAddPollSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPoll)());
	    };
	
	    _this.state = { isMounted: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _AppActions.checkUserAuthStatus)());
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'go-vote',
	        titleTemplate: '%s',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Header2.default, {
	        toggleAddPoll: this.toggleAddPollSection,
	        userAuthenticated: this.props.userAuthenticated
	      }), _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.children), _ref2));
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    userAuthenticated: (0, _AppReducer.getUserAuthenticated)(state)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('p', {}, void 0, '\xA9 2018 \xB7 Nick Eliason');
	
	var _ref2 = _jsx('p', {}, void 0, 'GitHub : ', _jsx('a', {
	  href: 'https://github.com/neliason',
	  target: '_Blank'
	}, void 0, 'neliason'));
	
	function Footer() {
	  return _jsx('div', {
	    className: _Footer2.default.footer
	  }, void 0, _ref, _ref2);
	}
	
	exports.default = Footer;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	exports.Header = Header;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRouter = __webpack_require__(5);
	
	var _Header = {
	  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
	  "content": "_1eavAvnySzoZc5rld6Q4pa",
	  "site-title": "UfFn6muOcOBjkVI5_yltp",
	  "add-poll-button": "_1i-nZvqSIVppRGx063sFk0",
	  "navbar": "_3UQRaVe_7Awdu51MeZEx_N",
	  "selected": "_3IRlmCpgSZBcTGVIGHvgaI"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('span', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	  href: '/mypolls'
	}, void 0, 'My Polls')), _jsx('li', {}, void 0, _jsx('a', {
	  href: '/profile'
	}, void 0, 'Profile')));
	
	var _ref2 = _jsx('a', {
	  href: '/logout'
	}, void 0, 'Logout');
	
	var _ref3 = _jsx(_reactRouter.Link, {
	  to: '/login'
	}, void 0, 'Login');
	
	var _ref4 = _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, 'Go-Vote');
	
	function Header(props, context) {
	  return _jsx('div', {
	    className: _Header2.default.header
	  }, void 0, _jsx('div', {
	    className: _Header2.default.navbar
	  }, void 0, _jsx('ul', {}, void 0, props.userAuthenticated ? _ref : null, _jsx('li', {}, void 0, props.userAuthenticated ? _ref2 : _ref3))), _jsx('div', {
	    className: _Header2.default.content
	  }, void 0, _jsx('h1', {
	    className: _Header2.default['site-title']
	  }, void 0, _ref4), context.router.isActive('/', true) && props.userAuthenticated ? _jsx('a', {
	    className: _Header2.default['add-poll-button'],
	    href: '#',
	    onClick: props.toggleAddPoll
	  }, void 0, 'Add Poll') : null));
	}
	
	Header.contextTypes = {
	  router: _propTypes2.default.object
	};
	
	exports.default = Header;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactChartjs = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PollChart = function PollChart(props) {
	  var chartData = {
	    labels: props.choices.map(function (choice) {
	      return choice.name;
	    }),
	    datasets: [{
	      data: props.choices.map(function (choice) {
	        return choice.votes;
	      }),
	      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#7CBB00'],
	      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#7CBB00']
	    }]
	  };
	
	  return _jsx('div', {}, void 0, _jsx(_reactChartjs.Doughnut, {
	    data: chartData
	  }));
	};
	
	exports.default = PollChart;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PollCreateWidget = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactBootstrap = __webpack_require__(24);
	
	var _PollCreateWidget = {
	  "form": "_3lOoAPNPOkMMwDcuZxrbuO",
	  "form-content": "_1WPYPSmBCTiGLr0v_EWnKn",
	  "form-title": "EmLcf9hRdqQWMvq_TK62k",
	  "form-field": "_36GLVy29nv3MCdQM_uzPCO",
	  "choices-title-text": "_2SigdAq8lHC8s2r-iPclx",
	  "choice-flexbox": "gTVqEAR11ED4RQoLkuRYr",
	  "choice-form-field": "_1qyZvFra2ogjwX64Nva68G",
	  "delete-button": "_1bpu3hcfYnKbXPK4MV2FoM",
	  "poll-submit-button": "_3oBl5rBHuWcM1oVSRY5Opw",
	  "appear": "_12_ED3Hin7AU47x4dyqCZI"
	};
	
	var _PollCreateWidget2 = _interopRequireDefault(_PollCreateWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var PollCreateWidget = exports.PollCreateWidget = function (_Component) {
	  _inherits(PollCreateWidget, _Component);
	
	  function PollCreateWidget() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PollCreateWidget);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PollCreateWidget.__proto__ || Object.getPrototypeOf(PollCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      options: [{
	        text: '',
	        placeholder: 'Blue',
	        id: 1
	      }, {
	        text: '',
	        placeholder: 'Red',
	        id: 2
	      }],
	      nextId: 3
	    }, _this.onOptionChange = function (event, index) {
	      var optionText = event.target.value;
	      var newOptions = _this.state.options.map(function (option, mapIndex) {
	        if (mapIndex === index) {
	          return _extends({}, option, {
	            text: optionText
	          });
	        }
	        return option;
	      });
	      _this.setState({ options: newOptions });
	    }, _this.addOption = function () {
	      if (_this.state.options.length < 4) {
	        var newOptions = [].concat(_toConsumableArray(_this.state.options), [{
	          text: '',
	          placeholder: 'choice ' + (_this.state.options.length + 1),
	          id: _this.state.nextId
	        }]);
	        _this.setState({
	          options: newOptions,
	          nextId: ++_this.state.nextId
	        });
	      }
	    }, _this.deleteChoice = function (indexToDelete) {
	      if (_this.state.options.length > 2) {
	        var newOptions = _this.state.options.filter(function (choice, index) {
	          return index !== indexToDelete;
	        }).map(function (choice, index) {
	          if (index === 0) {
	            return _extends({}, choice, {
	              placeholder: 'Blue'
	            });
	          } else if (index === 1) {
	            return _extends({}, choice, {
	              placeholder: 'Red'
	            });
	          }
	          return _extends({}, choice, {
	            placeholder: 'choice ' + (index + 1)
	          });
	        });
	        _this.setState({
	          options: newOptions
	        });
	      }
	    }, _this.addPoll = function () {
	      var titleRef = _this.refs.title;
	      var choices = _this.state.options.map(function (option) {
	        return option.text;
	      });
	      if (titleRef.value && choices.length >= 2) {
	        _this.props.addPoll(_this.props.user.username, titleRef.value, choices);
	        titleRef.value = '';
	        var newOptions = _this.state.options.filter(function (option, index) {
	          return index < 2;
	        }).map(function (option) {
	          return _extends({}, option, {
	            text: ''
	          });
	        });
	        _this.setState({ options: newOptions });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PollCreateWidget, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var cls = _PollCreateWidget2.default.form + ' ' + (this.props.showAddPoll ? _PollCreateWidget2.default.appear : '');
	      return _jsx('div', {
	        className: cls
	      }, void 0, _jsx('div', {
	        className: _PollCreateWidget2.default['form-content']
	      }, void 0, _jsx('h2', {
	        className: _PollCreateWidget2.default['form-title']
	      }, void 0, 'Create Poll'), _react2.default.createElement('input', { placeholder: 'What is your favorite color?', className: _PollCreateWidget2.default['form-field'], ref: 'title' }), _jsx('div', {
	        className: _PollCreateWidget2.default['choices-title-text']
	      }, void 0, 'Choices'), this.state.options.map(function (option, index) {
	        return _jsx('div', {
	          className: _PollCreateWidget2.default['choice-flexbox']
	        }, option.id, _jsx('input', {
	          placeholder: option.placeholder,
	          className: _PollCreateWidget2.default['choice-form-field'],
	          onChange: function onChange(event) {
	            return _this2.onOptionChange(event, index);
	          },
	          value: _this2.state.options[index].text
	        }), _jsx('i', {
	          className: 'fas fa-trash fa-lg ' + _PollCreateWidget2.default['delete-button'],
	          onClick: function onClick() {
	            return _this2.deleteChoice(index);
	          }
	        }));
	      }), _jsx(_reactBootstrap.ButtonToolbar, {}, void 0, _jsx(_reactBootstrap.Button, {
	        bsStyle: 'primary',
	        href: '#',
	        onClick: this.addPoll
	      }, void 0, 'Submit'), _jsx(_reactBootstrap.Button, {
	        onClick: this.addOption
	      }, void 0, 'Add Choice'), _jsx(_reactBootstrap.Button, {
	        onClick: this.props.toggleAddPoll
	      }, void 0, 'Close'))));
	    }
	  }]);
	
	  return PollCreateWidget;
	}(_react.Component);
	
	exports.default = PollCreateWidget;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRouter = __webpack_require__(5);
	
	var _PollListItem = {
	  "single-poll": "_2_NVwwL3CgW9BuqdaKVi_P",
	  "poll-title": "Q9EuuXZNwU5zj0t8IN3CA",
	  "author-name": "_1ABYwjIaZu7rT-pTTiE_y0",
	  "poll-option": "_2FnKk8ou8vy0WMyCH-5PRz",
	  "poll-action": "zA0gY8T04rmokQ7yaL_qz",
	  "divider": "LT-O_b9i2QDdFJFbhcZW7",
	  "poll-detail-page": "_7ZRNUobPXQnfYO6DgG-p3",
	  "poll-and-chart": "_2iySh5GvIG6voYZbzQx-PB",
	  "poll-detail": "_1O-AmAOas1V1OxyE6QHePt",
	  "num-votes-text": "_2vStx4YjnYEb0cgCI-f4Qj",
	  "poll-chart": "_2I_FnzPetj25AOj3vcSPIR",
	  "share-button": "_1HMEGxZ_MAgRddDAlWAFYG",
	  "submit-btn": "_3pY5d_RE6D1Ehq183YE53i",
	  "detail-submit-and-share-btns": "_3AiIDgAaJTh7IygXdFCLsu",
	  "share-btns": "T4atQ77rI0hz4GaqcK_tX",
	  "input-group": "_1vy1naD6Q7oGD7Xcmciyg8"
	};
	
	var _PollListItem2 = _interopRequireDefault(_PollListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PollListItem = function PollListItem(props) {
	  return _jsx('div', {
	    className: _PollListItem2.default['single-poll']
	  }, void 0, _jsx('h3', {
	    className: _PollListItem2.default['poll-title']
	  }, void 0, _jsx(_reactRouter.Link, {
	    to: '/polls/' + props.poll.slug + '-' + props.poll.cuid
	  }, void 0, props.poll.title)), props.userAuthenticated && props.poll.name === props.user.username && props.isMyPolls ? _jsx('p', {
	    className: _PollListItem2.default['poll-action']
	  }, void 0, _jsx('a', {
	    href: '#',
	    onClick: props.onDelete
	  }, void 0, 'Delete Poll')) : _jsx('p', {
	    className: _PollListItem2.default['author-name']
	  }, void 0, 'by ', props.poll.name), !props.isLastPoll ? _jsx('hr', {
	    className: _PollListItem2.default.divider
	  }) : null);
	};
	
	exports.default = PollListItem;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(1);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PollListItem = {
	  "single-poll": "_2_NVwwL3CgW9BuqdaKVi_P",
	  "poll-title": "Q9EuuXZNwU5zj0t8IN3CA",
	  "author-name": "_1ABYwjIaZu7rT-pTTiE_y0",
	  "poll-option": "_2FnKk8ou8vy0WMyCH-5PRz",
	  "poll-action": "zA0gY8T04rmokQ7yaL_qz",
	  "divider": "LT-O_b9i2QDdFJFbhcZW7",
	  "poll-detail-page": "_7ZRNUobPXQnfYO6DgG-p3",
	  "poll-and-chart": "_2iySh5GvIG6voYZbzQx-PB",
	  "poll-detail": "_1O-AmAOas1V1OxyE6QHePt",
	  "num-votes-text": "_2vStx4YjnYEb0cgCI-f4Qj",
	  "poll-chart": "_2I_FnzPetj25AOj3vcSPIR",
	  "share-button": "_1HMEGxZ_MAgRddDAlWAFYG",
	  "submit-btn": "_3pY5d_RE6D1Ehq183YE53i",
	  "detail-submit-and-share-btns": "_3AiIDgAaJTh7IygXdFCLsu",
	  "share-btns": "T4atQ77rI0hz4GaqcK_tX",
	  "input-group": "_1vy1naD6Q7oGD7Xcmciyg8"
	};
	
	var _PollListItem2 = _interopRequireDefault(_PollListItem);
	
	var _reactShare = __webpack_require__(66);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ShareButtons = function ShareButtons(props) {
	  return _jsx('div', {}, void 0, _jsx(_reactShare.FacebookShareButton, {
	    url: props.url,
	    quote: props.message,
	    className: _PollListItem2.default['share-button']
	  }, void 0, _jsx(_reactShare.FacebookIcon, {
	    size: props.size,
	    round: true
	  })), _jsx(_reactShare.TwitterShareButton, {
	    url: props.url,
	    title: props.message,
	    className: _PollListItem2.default['share-button']
	  }, void 0, _jsx(_reactShare.TwitterIcon, {
	    size: props.size,
	    round: true
	  })), _jsx(_reactShare.EmailShareButton, {
	    url: props.url,
	    subject: props.message,
	    className: _PollListItem2.default['share-button']
	  }, void 0, _jsx(_reactShare.EmailIcon, {
	    size: props.size,
	    round: true
	  })));
	};
	
	exports.default = ShareButtons;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(25);
	
	var _AppReducer = __webpack_require__(3);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PollReducer = __webpack_require__(7);
	
	var _PollReducer2 = _interopRequireDefault(_PollReducer);
	
	var _UserReducer = __webpack_require__(8);
	
	var _UserReducer2 = _interopRequireDefault(_UserReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  polls: _PollReducer2.default,
	  users: _UserReducer2.default
	});
	
	// Import Reducers

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// require('dotenv').load();
	
	var config = {
	  mongoURL: process.env.MONGO_URI,
	  port: process.env.PORT
	};
	
	exports.default = config;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPolls = getPolls;
	exports.addPoll = addPoll;
	exports.getPoll = getPoll;
	exports.deletePoll = deletePoll;
	exports.voteOnPoll = voteOnPoll;
	exports.getMyPolls = getMyPolls;
	
	var _poll = __webpack_require__(22);
	
	var _poll2 = _interopRequireDefault(_poll);
	
	var _user = __webpack_require__(23);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _cuid = __webpack_require__(57);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(60);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(71);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Get all polls
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPolls(req, res) {
	  _poll2.default.find().sort('-dateAdded').exec(function (err, polls) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ polls: polls });
	  });
	}
	
	/**
	 * Save a poll
	 * @param req
	 * @param res
	 * @returns void
	 */
	function addPoll(req, res) {
	  if (!req.body.poll.name || !req.body.poll.title || !req.body.poll.choices) {
	    res.status(403).end();
	  }
	  var pollTitle = (0, _sanitizeHtml2.default)(req.body.poll.title);
	  var pollName = (0, _sanitizeHtml2.default)(req.body.poll.name);
	  var pollChoices = req.body.poll.choices.map(function (choice) {
	    return { name: (0, _sanitizeHtml2.default)(choice), votes: 0 };
	  });
	  var pollSlug = (0, _limax2.default)(pollTitle.toLowerCase(), { lowercase: true });
	  var pollCuid = (0, _cuid2.default)();
	  var poll = {
	    title: pollTitle,
	    name: pollName,
	    choices: pollChoices,
	    slug: pollSlug,
	    cuid: pollCuid
	  };
	  var newPoll = new _poll2.default(poll);
	
	  newPoll.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	      return;
	    }
	    res.json({ poll: saved });
	  });
	}
	
	/**
	 * Get a single poll
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPoll(req, res) {
	  _poll2.default.findOne({ cuid: req.params.cuid }).exec(function (err, poll) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ poll: poll });
	  });
	}
	
	/**
	 * Delete a poll
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePoll(req, res) {
	  _poll2.default.findOne({ cuid: req.params.cuid }).exec(function (err, poll) {
	    if (err) {
	      res.status(500).send(err);
	    }
	
	    poll.remove(function () {
	      res.status(200).end();
	    });
	  });
	}
	
	function voteOnPoll(req, res) {
	  if (req.user) {
	    if (req.user.pollsVotedOn.includes(req.params.cuid)) {
	      res.send({ message: 'User already voted' });
	      return;
	    }
	    var newPollsVotedOn = [].concat(_toConsumableArray(req.user.pollsVotedOn), [req.params.cuid]);
	    _user2.default.findOneAndUpdate({ _id: req.user.id }, { $set: { pollsVotedOn: newPollsVotedOn } }, function (userUpdateError) {
	      if (userUpdateError) {
	        res.status(500).send(userUpdateError);
	      }
	    });
	  }
	
	  _poll2.default.findOne({ cuid: req.params.cuid }).exec(function (findErr, poll) {
	    if (findErr) {
	      res.status(500).send(findErr);
	    }
	    poll.choices[req.body.indexOfChoice].votes += 1;
	    poll.save(function (saveErr, updatedPoll) {
	      if (saveErr) {
	        res.status(500).send(saveErr);
	      }
	      res.json(updatedPoll);
	    });
	  });
	}
	
	/**
	 * Get all user's polls
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getMyPolls(req, res) {
	  _poll2.default.find({ name: req.user.github.username }).exec(function (err, mypolls) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ mypolls: mypolls });
	  });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Webpack Requirements
	
	
	var _express = __webpack_require__(13);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(35);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(9);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(34);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(39);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _passport = __webpack_require__(38);
	
	var _passport2 = _interopRequireDefault(_passport);
	
	var _expressSession = __webpack_require__(37);
	
	var _expressSession2 = _interopRequireDefault(_expressSession);
	
	var _webpack = __webpack_require__(14);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(33);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(41);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(42);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(27);
	
	var _reactRedux = __webpack_require__(2);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(40);
	
	var _reactRouter = __webpack_require__(5);
	
	var _reactHelmet = __webpack_require__(10);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(26);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(31);
	
	var _poll = __webpack_require__(29);
	
	var _poll2 = _interopRequireDefault(_poll);
	
	var _dummyData = __webpack_require__(28);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(36).load();
	__webpack_require__(32)(_passport2.default);
	
	// Initialize the Express App
	var app = new _express2.default();
	
	// Set Development modes checks
	var isDevMode = process.env.NODE_ENV === 'development' || false;
	var isProdMode = process.env.NODE_ENV === 'production' || false;
	
	// Run Webpack dev server in development mode
	if (isDevMode) {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	// React And Redux Setup
	
	
	// Import required modules
	
	var userRoutes = __webpack_require__(30);
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(process.env.MONGO_URI, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  (0, _dummyData2.default)();
	});
	
	app.use((0, _expressSession2.default)({
	  secret: process.env.SESSION_SECRET,
	  resave: false,
	  saveUninitialized: true
	}));
	app.use(_passport2.default.initialize());
	app.use(_passport2.default.session());
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
	app.use('/api', _poll2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link rel="stylesheet prefetch" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">\n        <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Lato:300,400,700">\n        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/solid.css">\n        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/brands.css">\n        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/fontawesome.css">\n      </head>\n      <body>\n        <div id="root">' + (process.env.NODE_ENV === 'production' ? html : '<div>' + html + '</div>') + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	userRoutes(app, _passport2.default);
	
	// start app
	app.listen(process.env.PORT, function (error) {
	  if (!error) {
	    console.log('go-vote is running on port: ' + process.env.PORT); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	module.exports = {
	  'githubAuth': {
	    'clientID': process.env.GITHUB_KEY,
	    'clientSecret': process.env.GITHUB_SECRET,
	    'callbackURL': process.env.APP_URL + 'auth/github/callback'
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isLoggedIn = isLoggedIn;
	// TODO: determine if api call or from browser
	function isLoggedIn(req, res, next) {
	  if (req.isAuthenticated()) {
	    return next();
	  } else {
	    res.redirect('/login');
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("js-cookie");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("passport-github");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("react-chartjs-2");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("react-share");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ }
/******/ ]);