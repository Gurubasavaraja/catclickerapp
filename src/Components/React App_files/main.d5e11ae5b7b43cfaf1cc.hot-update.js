webpackHotUpdate("main",{

/***/ "./src/Components/CatForm.jsx":
/*!************************************!*\
  !*** ./src/Components/CatForm.jsx ***!
  \************************************/
/*! exports provided: CatForm, CatFormFull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatForm", function() { return CatForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatFormFull", function() { return CatFormFull; });
/* harmony import */ var _home_guru_catclickerapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_guru_catclickerapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _ComponentsCss_CatForm_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ComponentsCss/CatForm.css */ "./src/ComponentsCss/CatForm.css");
/* harmony import */ var _ComponentsCss_CatForm_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ComponentsCss_CatForm_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


var _jsxFileName = "/home/guru/catclickerapp/src/Components/CatForm.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_home_guru_catclickerapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






const CatForm = props => {
  console.log("props", props);
  var CatNameDtr = props.detailprops[0].CatName;
  var CatClikseDtr = props.detailprops[0].CatCliks;
  var CatNickNameDtr = props.detailprops[0].CatNickName;
  var CatindexDtr = props.detailprops[0].index;
  console.log("props", CatClikseDtr);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    CatName: "",
    CatClicks: 0,
    CatNickName: ""
  }),
        _useState2 = Object(_home_guru_catclickerapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        form = _useState2[0],
        setValues = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
        _useState4 = Object(_home_guru_catclickerapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        show = _useState4[0],
        setShow = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setValues(_objectSpread({}, form, {
      CatName: CatNameDtr,
      CatClicks: CatClikseDtr,
      CatNickName: CatNickNameDtr,
      Catindex: CatindexDtr
    }));
  }, [CatNameDtr, CatClikseDtr, CatNickNameDtr]);

  const change = e => {
    setValues(_objectSpread({}, form, {
      [e.target.name]: e.target.value
    }));
  };

  const reset = () => {
    setValues({
      CatName: "",
      CatClicks: 0,
      CatNickName: ""
    });
  };

  const addCat = e => {
    e.preventDefault();
    setShow(true);
    console.log("formadd", form);
    props.newForm(form);
  };

  const onShowingForm = () => {
    setValues({
      CatName: "",
      CatClicks: 0,
      CatNickName: "",
      Catindex: undefined
    });
    setShow(false); // document.getElementById("newform").style.display = show ? "none" : ""
  };

  const onFormSubmite = e => {
    e.preventDefault();
    console.log("form", form);
    props.clickFunc(props.detailprops[0].index, form);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    id: "form",
    style: {
      width: '18rem',
      maxWidth: "100%",
      display: show ? "" : "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      marginBottom: "15px",
      width: "100%",
      textAlign: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onShowingForm,
    id: "newForm",
    variant: "primary",
    style: {
      padding: "3px 6px"
    },
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "New form")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onFormSubmite,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      float: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Cat Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    name: "CatName",
    value: form.CatName,
    onChange: change,
    type: "text",
    placeholder: "Enter Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicCatNickName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      float: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Cat NickName"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    name: "CatNickName",
    value: form.CatNickName,
    onChange: change,
    placeholder: "Enter CatNickName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      float: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Cat Image"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicClicks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      float: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Cat Clicks"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    name: "CatClicks",
    value: form.CatClicks,
    onChange: change,
    placeholder: "Enter clicks",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "success",
    style: {
      float: "left",
      fontSize: "14px",
      padding: "4px"
    },
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "danger",
    style: {
      float: "left",
      fontSize: "14px",
      padding: "4px",
      marginLeft: "5px"
    },
    onClick: reset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Undo")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    id: "newform",
    style: {
      width: '18rem',
      maxWidth: "100%",
      display: show ? "none" : ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: addCat,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      float: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Cat Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    name: "CatName",
    value: form.CatName,
    onChange: change,
    type: "text",
    placeholder: "Enter Name",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicCatNickName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      float: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Cat NickName"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    name: "CatNickName",
    value: form.CatNickName,
    onChange: change,
    placeholder: "Enter CatNickName",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      float: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Cat Image"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "formBasicClicks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    style: {
      float: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Cat Clicks"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    name: "CatClicks",
    value: form.CatClicks,
    onChange: change,
    placeholder: "Enter clicks",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "success",
    style: {
      float: "left",
      fontSize: "14px",
      padding: "4px"
    },
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "Save"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "danger",
    style: {
      float: "left",
      fontSize: "14px",
      padding: "4px",
      marginLeft: "5px"
    },
    onClick: reset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Undo")))));
};

const CatFormFull = () => {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  });
};



/***/ })

})
//# sourceMappingURL=main.d5e11ae5b7b43cfaf1cc.hot-update.js.map