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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar FirstTerm = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), scrolling = _useState[0], setScrolling = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleScroll = function() {\n            var scrollTop = window.scrollY;\n            setScrolling(scrollTop > 0);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    var fadeInVariants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1,\n            transition: {\n                duration: 2\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"1A Memo\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen flex flex-col items-center justify-end\",\n                style: {\n                    minHeight: \"50vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    className: \"text-center text-white\",\n                    variants: fadeInVariants,\n                    initial: \"hidden\",\n                    animate: \"visible\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold mb-2\",\n                            children: \"Reflection on 1A\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-500\",\n                            children: \"Published on January 3, 2024\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl\",\n                variants: fadeInVariants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm mb-2 text-white text-justify\",\n                    children: [\n                        \"What a semester. Taking a look back at my first 4 months of university, it was definitely a crazy experience. The semester was filled with many ups, many downs, many wins, and also many losses. Let's take a look back at my first term of Honours Computer Engineering at\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                color: \"#FDB515\"\n                            },\n                            children: \" The University of Waterloo\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, _this),\n                        \". \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 53,\n                    columnNumber: 10\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"flex flex-col items-center justify-center mt-4\",\n                variants: fadeInVariants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/nightsky.jpeg\",\n                    alt: \"Night Sky\",\n                    width: 500,\n                    height: 500\n                }, void 0, false, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"flex flex-col items-center justify-center mt-1 mx-auto max-w-2xl\",\n                variants: fadeInVariants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs text-white text-justify opacity-70\",\n                    children: \"Night sky taken outside of E5 after a Linear Algebra Tutorial\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 81,\n                    columnNumber: 10\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl\",\n                variants: fadeInVariants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm mb-2 text-white text-justify\",\n                    children: 'First off, I just wanted to say that I did not expect to get into this university at all. Funny story, the day the Waterloo Engineering interview was due, I was laying in bed 2 hours before it was due contemplating whether I should even do it, as I doubted any chance I had getting into this school. I told myself \"if you\\'re not going to do it, when are you ever going to take action and do anything\". After t'\n                }, void 0, false, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                    lineNumber: 92,\n                    columnNumber: 10\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/firstterm.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(FirstTerm, \"CyOm2JjlLunxRpKA4hUTJhVIhnQ=\");\n_c = FirstTerm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstTerm);\nvar _c;\n$RefreshReg$(_c, \"FirstTerm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maXJzdHRlcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNMO0FBQ0c7QUFDSjtBQUV0QyxJQUFNSyxZQUFZOztJQUNoQixJQUFrQ0wsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQXBDTSxZQUEyQk4sY0FBaEJPLGVBQWdCUDtJQUVsQ0MsZ0RBQVNBLENBQUM7UUFDUixJQUFNTyxlQUFlO1lBQ25CLElBQU1DLFlBQVlDLE9BQU9DLE9BQU87WUFDaENKLGFBQWFFLFlBQVk7UUFDM0I7UUFFQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsT0FBTztZQUNMRSxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQU1NLGlCQUFpQjtRQUNyQkMsUUFBUTtZQUFFQyxTQUFTO1FBQUU7UUFDckJDLFNBQVM7WUFBRUQsU0FBUztZQUFHRSxZQUFZO2dCQUFFQyxVQUFVO1lBQUU7UUFBRTtJQUNyRDtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNqQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDQyxnREFBTUE7MEJBQ0wsNEVBQUNpQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNEO2dCQUFJRSxXQUFVO2dCQUFzREMsT0FBTztvQkFBRUMsV0FBVztnQkFBTzswQkFDOUYsNEVBQUN0QixpREFBTUEsQ0FBQ2tCLEdBQUc7b0JBQ1RFLFdBQVU7b0JBQ1ZHLFVBQVVYO29CQUNWWSxTQUFRO29CQUNSQyxTQUFROztzQ0FFUiw4REFBQ0M7NEJBQUdOLFdBQVU7c0NBQTBCOzs7Ozs7c0NBR3hDLDhEQUFDTzs0QkFBRVAsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlqQyw4REFBQ3BCLGlEQUFNQSxDQUFDa0IsR0FBRztnQkFDVEUsV0FBVTtnQkFDVkcsVUFBVVg7Z0JBQ1ZZLFNBQVE7Z0JBQ1JDLFNBQVE7MEJBRVAsNEVBQUNFO29CQUFFUCxXQUFVOzt3QkFBdUM7c0NBSTdDLDhEQUFDUTs0QkFBS1AsT0FBTztnQ0FBRVEsT0FBTzs0QkFBVTtzQ0FBRzs7Ozs7O3dCQUFrQzs7Ozs7Ozs7Ozs7OzBCQUkvRSw4REFBQzdCLGlEQUFNQSxDQUFDa0IsR0FBRztnQkFDVEUsV0FBVTtnQkFDVkcsVUFBVVg7Z0JBQ1ZZLFNBQVE7Z0JBQ1JDLFNBQVE7MEJBRVIsNEVBQUNLO29CQUNDQyxLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFROzs7Ozs7Ozs7OzswQkFJWiw4REFBQ2xDLGlEQUFNQSxDQUFDa0IsR0FBRztnQkFDVEUsV0FBVTtnQkFDVkcsVUFBVVg7Z0JBQ1ZZLFNBQVE7Z0JBQ1JDLFNBQVE7MEJBRVAsNEVBQUNFO29CQUFFUCxXQUFVOzhCQUE2Qzs7Ozs7Ozs7Ozs7MEJBSzdELDhEQUFDcEIsaURBQU1BLENBQUNrQixHQUFHO2dCQUNURSxXQUFVO2dCQUNWRyxVQUFVWDtnQkFDVlksU0FBUTtnQkFDUkMsU0FBUTswQkFFUCw0RUFBQ0U7b0JBQUVQLFdBQVU7OEJBQXVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVk3RDtHQWxHTWpCO0tBQUFBO0FBb0dOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZpcnN0dGVybS5qcz83ZGQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuY29uc3QgRmlyc3RUZXJtID0gKCkgPT4ge1xuICBjb25zdCBbc2Nyb2xsaW5nLCBzZXRTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBzZXRTY3JvbGxpbmcoc2Nyb2xsVG9wID4gMCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBmYWRlSW5WYXJpYW50cyA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMiB9IH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPjFBIE1lbW88L3RpdGxlPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiIHN0eWxlPXt7IG1pbkhlaWdodDogJzUwdmgnIH19PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIlxuICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5WYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgICAgIFJlZmxlY3Rpb24gb24gMUFcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5QdWJsaXNoZWQgb24gSmFudWFyeSAzLCAyMDI0PC9wPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNSBteC1hdXRvIG1heC13LTJ4bFwiXG4gICAgICAgIHZhcmlhbnRzPXtmYWRlSW5WYXJpYW50c31cbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgID5cbiAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItMiB0ZXh0LXdoaXRlIHRleHQtanVzdGlmeVwiPlxuICAgICAgICAgICAgICAgIFdoYXQgYSBzZW1lc3Rlci4gVGFraW5nIGEgbG9vayBiYWNrIGF0IG15IGZpcnN0IDQgbW9udGhzIG9mIHVuaXZlcnNpdHksIGl0IHdhcyBkZWZpbml0ZWx5XG4gICAgICAgICAgICAgICAgYSBjcmF6eSBleHBlcmllbmNlLiBUaGUgc2VtZXN0ZXIgd2FzIGZpbGxlZCB3aXRoIG1hbnkgdXBzLCBtYW55IGRvd25zLCBtYW55IHdpbnMsIGFuZCBhbHNvIG1hbnkgbG9zc2VzLlxuICAgICAgICAgICAgICAgIExldCdzIHRha2UgYSBsb29rIGJhY2sgYXQgbXkgZmlyc3QgdGVybSBvZiBIb25vdXJzIENvbXB1dGVyIEVuZ2luZWVyaW5nIGF0XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICcjRkRCNTE1JyB9fT4gVGhlIFVuaXZlcnNpdHkgb2YgV2F0ZXJsb288L3NwYW4+LiB7LyogTWFkZSBcIlVuaXZlcnNpdHkgb2YgV2F0ZXJsb29cIiB5ZWxsb3cgKi99XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNFwiXG4gICAgICAgIHZhcmlhbnRzPXtmYWRlSW5WYXJpYW50c31cbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9uaWdodHNreS5qcGVnXCJcbiAgICAgICAgICBhbHQ9XCJOaWdodCBTa3lcIlxuICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgIC8+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTEgbXgtYXV0byBtYXgtdy0yeGxcIlxuICAgICAgICB2YXJpYW50cz17ZmFkZUluVmFyaWFudHN9XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICA+XG4gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtd2hpdGUgdGV4dC1qdXN0aWZ5IG9wYWNpdHktNzBcIj5cbiAgICAgICAgICAgIE5pZ2h0IHNreSB0YWtlbiBvdXRzaWRlIG9mIEU1IGFmdGVyIGEgTGluZWFyIEFsZ2VicmEgVHV0b3JpYWxcbiAgICAgICAgICA8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTUgbXgtYXV0byBtYXgtdy0yeGxcIlxuICAgICAgICB2YXJpYW50cz17ZmFkZUluVmFyaWFudHN9XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICA+XG4gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1iLTIgdGV4dC13aGl0ZSB0ZXh0LWp1c3RpZnlcIj5cblxuICAgICAgICAgIEZpcnN0IG9mZiwgSSBqdXN0IHdhbnRlZCB0byBzYXkgdGhhdCBJIGRpZCBub3QgZXhwZWN0IHRvIGdldCBpbnRvIHRoaXMgdW5pdmVyc2l0eSBhdCBhbGwuIEZ1bm55IHN0b3J5LFxuICAgICAgICAgIHRoZSBkYXkgdGhlIFdhdGVybG9vIEVuZ2luZWVyaW5nIGludGVydmlldyB3YXMgZHVlLCBJIHdhcyBsYXlpbmcgaW4gYmVkIDIgaG91cnMgYmVmb3JlIGl0IHdhcyBkdWUgY29udGVtcGxhdGluZ1xuICAgICAgICAgIHdoZXRoZXIgSSBzaG91bGQgZXZlbiBkbyBpdCwgYXMgSSBkb3VidGVkIGFueSBjaGFuY2UgSSBoYWQgZ2V0dGluZyBpbnRvIHRoaXMgc2Nob29sLiBJIHRvbGQgbXlzZWxmIFwiaWYgeW91J3JlIG5vdFxuICAgICAgICAgIGdvaW5nIHRvIGRvIGl0LCB3aGVuIGFyZSB5b3UgZXZlciBnb2luZyB0byB0YWtlIGFjdGlvbiBhbmQgZG8gYW55dGhpbmdcIi4gQWZ0ZXIgdFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlyc3RUZXJtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiTmF2YmFyIiwiSGVsbWV0IiwiRmlyc3RUZXJtIiwic2Nyb2xsaW5nIiwic2V0U2Nyb2xsaW5nIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmFkZUluVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRpdiIsInRpdGxlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwiaDEiLCJwIiwic3BhbiIsImNvbG9yIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/firstterm.js\n"));

/***/ })

});