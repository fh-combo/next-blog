webpackHotUpdate(1,{

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBlogUrl; });
/* unused harmony export getDetailUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTotalUrl; });
/* unused harmony export getLastIdUrl */
/* unused harmony export getNextIdUrl */
/* unused harmony export getCommentsUrl */
/* unused harmony export postCommentUrl */
/* unused harmony export postArticleUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLifeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdminBlogUrl; });
/* unused harmony export postAdminDetailUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return postAdminPasswordUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("./config/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__until__ = __webpack_require__("./until/index.js");

 //前台

var getBlogUrl = function getBlogUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["b" /* toQueryStr */])(obj);
};
var getDetailUrl = function getDetailUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/detail' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["b" /* toQueryStr */])(obj);
};
var getTotalUrl = function getTotalUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/total' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["b" /* toQueryStr */])(obj);
};
var getLastIdUrl = function getLastIdUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/lastId' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["b" /* toQueryStr */])(obj);
};
var getNextIdUrl = function getNextIdUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/nextId' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["b" /* toQueryStr */])(obj);
};
var getCommentsUrl = function getCommentsUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/comments' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["b" /* toQueryStr */])(obj);
};
var postCommentUrl = function postCommentUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postComment';
};
var postArticleUrl = function postArticleUrl() {
  //发表文章
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postArticle';
};
var getLifeUrl = function getLifeUrl() {
  //生活板块
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/life';
}; //后台

var getAdminBlogUrl = function getAdminBlogUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getAdminBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["b" /* toQueryStr */])(obj);
};
var postAdminDetailUrl = function postAdminDetailUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postAdminDetail';
};
var postAdminPasswordUrl = function postAdminPasswordUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postAdminPassword';
}; // export const getBlogUrl = domain+'/api/getBlog'
// export const getTotalUrl = domain+'/api/total'
// export const getLifeUrl = domain+'/api/life'
// export const getDetailUrl = domain+'/api/detail'
// export const getLastIdUrl = domain+'/api/lastId'
// export const getNextIdUrl = domain+'/api/nextId'
// export const getCommentsUrl = domain+'/api/comments'
// export const postArticleUrl = domain+'/api/postArticle'
// export const postCommentUrl = domain+'/api/postComment'
// export const getAdminBlogUrl = domain + '/api/getAdminBlog'
// export const getAdminCommentsUrl = domain + '/api/getAdminComments'
// export const postAdminDetailUrl = domain + '/api/postAdminDetail'

/***/ }),

/***/ "./store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSearchPageList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSearchList; });
/* unused harmony export getSearchTotal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLifeList; });
/* unused harmony export postComments */
/* unused harmony export postArticle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdminBlogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postAdminPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action_types__ = __webpack_require__("./store/action-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/_isomorphic-unfetch@2.0.0@isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


 //前台

var getSearchPageList =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            jsonData = _context.sent;
            return _context.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].SEARCH_PAGE_DATA,
              searchData: jsonData
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSearchPageList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getSearchList =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            jsonData = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].SEARCH_DATA,
              searchData: jsonData
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getSearchList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getSearchTotal =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            jsonData = _context3.sent;
            return _context3.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].GET_SEARCH_TOTAL_DATA,
              searchTotalData: jsonData
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getSearchTotal(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getLifeList =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context4.sent;
            _context4.next = 5;
            return res.json();

          case 5:
            jsonData = _context4.sent;
            return _context4.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].GET_LIFE,
              lifeData: jsonData
            }));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getLifeList(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var postComments =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(dispatch, url, body) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context5.sent;
            _context5.next = 5;
            return res.json();

          case 5:
            jsonData = _context5.sent;
            return _context5.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].POST_COMMENTS,
              getCommentsData: jsonData
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function postComments(_x9, _x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();
var postArticle =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(dispatch, url, body) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context6.sent;
            _context6.next = 5;
            return res.json();

          case 5:
            jsonData = _context6.sent;
            return _context6.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].POST_ARTICLE,
              postArticleData: jsonData
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function postArticle(_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}(); //后台

var getAdminBlogList =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context7.sent;
            _context7.next = 5;
            return res.json();

          case 5:
            jsonData = _context7.sent;
            return _context7.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].GET_ADMIN_DATA,
              adminBlogData: jsonData
            }));

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getAdminBlogList(_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}(); // export const postAdminDetail = async (dispatch, url) => {
//   //修改文章
//   const res = await fetch(url)
//   const jsonData = await res.json()
//   return dispatch({type: actionTypes.POST_ADMIN_DETAIL, postAdminDetailData: jsonData})
// }

var postAdminPassword =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8(dispatch, url, body) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context8.sent;
            _context8.next = 5;
            return res.json();

          case 5:
            jsonData = _context8.sent;
            return _context8.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].POST_ADMIN_PASSWORD,
              postAdminPasswordData: jsonData
            }));

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function postAdminPassword(_x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./until/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateHtml */
/* unused harmony export spaceAdd */
/* unused harmony export getPathName */
/* unused harmony export NbspToSpace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatTime; });
/* unused harmony export getArticleInfo */
/* unused harmony export OldTime */
/* unused harmony export getHtml */
/* harmony export (immutable) */ __webpack_exports__["b"] = toQueryStr;
/* unused harmony export regUrl */
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var format = __webpack_require__("./node_modules/_date-format@1.2.0@date-format/lib/index.js");

var updateHtml = function updateHtml(str) {
  return str.replace(/'|"|:|\.|\[|\]|\\/g, function (str) {
    if (str === '"') {
      return '@quot;';
    } else if (str === "'") {
      return '@apos;';
    } else if (str === ':') {
      return '&#58;';
    } else if (str === '[') {
      return '&#91;';
    } else if (str === '[') {
      return '&#93;';
    } else if (str === '\\') {
      //自定义的 找不到
      return '&#43;';
    } else {
      return '&#183;';
    }
  });
};
var spaceAdd = function spaceAdd(str) {
  return str && str.replace(/\+/g, '&nbsp;');
};
var getPathName = function getPathName(props) {
  return props.location && props.location.pathname && props.location.pathname.substring(1);
};
var NbspToSpace = function NbspToSpace(str) {
  return str && str.replace(/&nbsp;/g, '　');
};
var formatTime = function formatTime(time) {
  var zh = ["日", "一", "二", "三", "四", "五", "六"];
  var date = new Date(time * 1000);
  return format.asString('yyyy-MM-dd hh:mm', date) + ' 星期' + zh[date.getDay()];
};
var getArticleInfo = function getArticleInfo(detailArr) {
  var _ref = detailArr && detailArr[0] ? detailArr[0] : {},
      rest = _extends({}, _ref);
  /*{
      content,
          createTime,
          id,
          img,
          lastModify,
          like,
          modifyCount,
          recommend,
          short,
          title,
          type,
          url,
          user,
          visitor,
          week
  }*/


  return rest;
};
var OldTime = 1531094400; // 2018-07-09 00:00:00 星期一

var getHtml = function getHtml(str, newTime) {
  if (OldTime > newTime) {
    //这是曾经的文章
    return str ? str : null;
  } else {
    return str ? str.replace(/@quot;|@apos;/g, function (str) {
      if (str === '@quot;') {
        return '"';
      } else if (str === "@apos;") {
        return "'";
      }
    }) : null;
  }
};
function toQueryStr(obj) {
  return "?" + JSON.stringify(obj).replace(/{|}|\"|\'/g, "").replace(/,/g, "&").replace(/:/g, "=");
}
var regUrl = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;

/***/ })

})
//# sourceMappingURL=1.f1489d48868776cba644.hot-update.js.map