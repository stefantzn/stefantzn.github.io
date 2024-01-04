"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/firstterm",{

/***/ "./pages/firstterm.js":
/*!****************************!*\
  !*** ./pages/firstterm.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar FirstTerm = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), scrolling = _useState[0], setScrolling = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleScroll = function() {\n            var scrollTop = window.scrollY;\n            setScrolling(scrollTop > 0);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    var fadeInVariants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1,\n            transition: {\n                duration: 2\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"1A Memo\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen flex flex-col items-center justify-end\",\n                style: {\n                    minHeight: \"50vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    className: \"text-center text-white\",\n                    variants: fadeInVariants,\n                    initial: \"hidden\",\n                    animate: \"visible\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold mb-2\",\n                            children: \"Reflection on 1A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-500\",\n                            children: \"Published on January 3, 2024\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl\",\n                variants: fadeInVariants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white\",\n                    children: \"What a semester. Taking a look back at my first 4 months of university, it was definitely a crazy experience. The semester was s\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"flex flex-col items-center justify-center mt-10\",\n                variants: fadeInVariants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/nightsky.jpeg\",\n                    alt: \"Night Sky\",\n                    width: 500,\n                    height: 500\n                }, void 0, false, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(FirstTerm, \"CyOm2JjlLunxRpKA4hUTJhVIhnQ=\");\n_c = FirstTerm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstTerm);\nvar _c;\n$RefreshReg$(_c, \"FirstTerm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maXJzdHRlcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNMO0FBQ0c7QUFDSjtBQUV0QyxJQUFNSyxZQUFZOztJQUNoQixJQUFrQ0wsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQXBDTSxZQUEyQk4sY0FBaEJPLGVBQWdCUDtJQUVsQ0MsZ0RBQVNBLENBQUM7UUFDUixJQUFNTyxlQUFlO1lBQ25CLElBQU1DLFlBQVlDLE9BQU9DLE9BQU87WUFDaENKLGFBQWFFLFlBQVk7UUFDM0I7UUFFQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsT0FBTztZQUNMRSxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQU1NLGlCQUFpQjtRQUNyQkMsUUFBUTtZQUFFQyxTQUFTO1FBQUU7UUFDckJDLFNBQVM7WUFBRUQsU0FBUztZQUFHRSxZQUFZO2dCQUFFQyxVQUFVO1lBQUU7UUFBRTtJQUNyRDtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNqQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDQyxnREFBTUE7MEJBQ0wsNEVBQUNpQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNEO2dCQUFJRSxXQUFVO2dCQUFzREMsT0FBTztvQkFBRUMsV0FBVztnQkFBTzswQkFDOUYsNEVBQUN0QixpREFBTUEsQ0FBQ2tCLEdBQUc7b0JBQ1RFLFdBQVU7b0JBQ1ZHLFVBQVVYO29CQUNWWSxTQUFRO29CQUNSQyxTQUFROztzQ0FFUiw4REFBQ0M7NEJBQUdOLFdBQVU7c0NBQTBCOzs7Ozs7c0NBR3hDLDhEQUFDTzs0QkFBRVAsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlqQyw4REFBQ3BCLGlEQUFNQSxDQUFDa0IsR0FBRztnQkFDVEUsV0FBVTtnQkFDVkcsVUFBVVg7Z0JBQ1ZZLFNBQVE7Z0JBQ1JDLFNBQVE7MEJBRVIsNEVBQUNFO29CQUFFUCxXQUFVOzhCQUFhOzs7Ozs7Ozs7OzswQkFLNUIsOERBQUNwQixpREFBTUEsQ0FBQ2tCLEdBQUc7Z0JBQ1RFLFdBQVU7Z0JBQ1ZHLFVBQVVYO2dCQUNWWSxTQUFRO2dCQUNSQyxTQUFROzBCQUVSLDRFQUFDRztvQkFDQ0MsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0FuRU03QjtLQUFBQTtBQXFFTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9maXJzdHRlcm0uanM/N2RkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmNvbnN0IEZpcnN0VGVybSA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbGluZywgc2V0U2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgc2V0U2Nyb2xsaW5nKHNjcm9sbFRvcCA+IDApO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmFkZUluVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDIgfSB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT4xQSBNZW1vPC90aXRsZT5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIiBzdHlsZT17eyBtaW5IZWlnaHQ6ICc1MHZoJyB9fT5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICB2YXJpYW50cz17ZmFkZUluVmFyaWFudHN9XG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICBSZWZsZWN0aW9uIG9uIDFBXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+UHVibGlzaGVkIG9uIEphbnVhcnkgMywgMjAyNDwvcD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTUgbXgtYXV0byBtYXgtdy0yeGxcIlxuICAgICAgICB2YXJpYW50cz17ZmFkZUluVmFyaWFudHN9XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICA+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5XaGF0IGEgc2VtZXN0ZXIuIFRha2luZyBhIGxvb2sgYmFjayBhdCBteSBmaXJzdCA0IG1vbnRocyBvZiB1bml2ZXJzaXR5LCBpdCB3YXMgZGVmaW5pdGVseVxuICAgICAgICBhIGNyYXp5IGV4cGVyaWVuY2UuIFRoZSBzZW1lc3RlciB3YXMgc1xuICAgICAgICA8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTEwXCJcbiAgICAgICAgdmFyaWFudHM9e2ZhZGVJblZhcmlhbnRzfVxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL25pZ2h0c2t5LmpwZWdcIlxuICAgICAgICAgIGFsdD1cIk5pZ2h0IFNreVwiXG4gICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgLz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpcnN0VGVybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIk5hdmJhciIsIkhlbG1ldCIsIkZpcnN0VGVybSIsInNjcm9sbGluZyIsInNldFNjcm9sbGluZyIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZhZGVJblZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkaXYiLCJ0aXRsZSIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluSGVpZ2h0IiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImgxIiwicCIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/firstterm.js\n"));

/***/ })

});