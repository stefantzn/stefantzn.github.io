"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar.js */ \"./components/Navbar.js\");\n/* harmony import */ var _components_LoadingPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoadingPage.js */ \"./components/LoadingPage.js\");\n/* harmony import */ var _components_Particles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Particles.js */ \"./components/Particles.js\");\n/* harmony import */ var _barrel_optimize_names_FaGithub_FaLinkedin_FaSpotify_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaGithub,FaLinkedin,FaSpotify!=!react-icons/fa */ \"__barrel_optimize__?names=FaGithub,FaLinkedin,FaSpotify!=!./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosMail_react_icons_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosMail!=!react-icons/io */ \"__barrel_optimize__?names=IoIosMail!=!./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_LuInstagram_react_icons_lu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=LuInstagram!=!react-icons/lu */ \"__barrel_optimize__?names=LuInstagram!=!./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-typed */ \"./node_modules/react-typed/dist/react-typed.js\");\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar App = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState[0], setLoading = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var isFirstVisit = localStorage.getItem(\"isFirstVisit\");\n        if (isFirstVisit === null) {\n            // First visit\n            localStorage.setItem(\"isFirstVisit\", \"false\");\n            setLoading(true);\n            setTimeout(function() {\n                setLoading(false);\n            }, 3000);\n        } else {\n            // Not the first visit\n            setLoading(false);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingPage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            color: \"#FFFFFF\"\n        }, void 0, false, {\n            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWithFadeIn, {\n            isFirstVisit: localStorage.getItem(\"isFirstVisit\")\n        }, void 0, false, {\n            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(App, \"J7PPXooW06IQ11rfabbvgk72KFw=\");\n_c = App;\nvar ContentWithFadeIn = function(param) {\n    var isFirstVisit = param.isFirstVisit;\n    _s1();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), fadeIn = _useState[0], setFadeIn = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Apply fade in effect only on the first visit\n        if (isFirstVisit === \"false\") {\n            var fadeInTimeout = setTimeout(function() {\n                setFadeIn(true);\n            }, 500); // Adjust the delay based on your preference\n            return function() {\n                return clearTimeout(fadeInTimeout);\n            };\n        }\n    }, [\n        isFirstVisit\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"opacity-0 \".concat(fadeIn ? \"opacity-100\" : \"\"),\n        style: {\n            transition: \"opacity 1s ease-in-out\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Stefan Tuczynski\"\n                }, void 0, false, {\n                    fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Particles_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                fadeIn: isFirstVisit === \"false\"\n            }, void 0, false, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-col items-center justify-center h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-6xl font-bold mb-4 text-center\",\n                        children: \"Stefan Tuczynski\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg text-center\",\n                        children: \"Computer Engineering Student @ University of Waterloo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_typed__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            strings: [\n                                \"Engineering Student\",\n                                \"Programmer\",\n                                \"Learner\",\n                                \"Hardware Enthusiast\"\n                            ],\n                            typeSpeed: 75,\n                            backSpeed: 40,\n                            loop: true\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center fixed bottom-8 left-1/2 transform -translate-x-1/2 space-x-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.linkedin.com/in/stefan-tuczynski/\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"text-white hover:text-[#0a66c2] transition duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaLinkedin_FaSpotify_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaLinkedin, {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/stefantzn\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"text-white hover:text-[#333] transition duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaLinkedin_FaSpotify_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaGithub, {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://instagram.com/stefan.t1\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"text-white hover:text-[#bc2a8d] transition duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LuInstagram_react_icons_lu__WEBPACK_IMPORTED_MODULE_9__.LuInstagram, {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://open.spotify.com/user/gc4ixa97ys0brkajg0mogwixm?si=cd3bf71fc8d146ea\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"text-white hover:text-[#1DB954] transition duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaLinkedin_FaSpotify_react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaSpotify, {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"mailto:tuczynskis@gmail.com\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"text-white hover:text-[#f2a60c] transition duration-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosMail_react_icons_io__WEBPACK_IMPORTED_MODULE_10__.IoIosMail, {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stefan/Files/Programming/stefantzn.github.io/pages/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s1(ContentWithFadeIn, \"s7n23fSfhID5pVyFr0/DM12lDnA=\");\n_c1 = ContentWithFadeIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"ContentWithFadeIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDbkIsdUZBQVNBOzRCQUFDaUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0I7SUFwRk1uQjtNQUFBQTtBQXNGTiwrREFBZVYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci5qcyc7XG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nUGFnZS5qcyc7XG5pbXBvcnQgUGFydGljbGVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYXJ0aWNsZXMuanMnO1xuaW1wb3J0IHsgRmFMaW5rZWRpbiwgRmFHaXRodWIsIEZhU3BvdGlmeSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IElvSW9zTWFpbCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCB7IEx1SW5zdGFncmFtIH0gZnJvbSAncmVhY3QtaWNvbnMvbHUnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3JlYWN0LXR5cGVkJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpc0ZpcnN0VmlzaXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNGaXJzdFZpc2l0Jyk7XG5cbiAgICBpZiAoaXNGaXJzdFZpc2l0ID09PSBudWxsKSB7XG4gICAgICAvLyBGaXJzdCB2aXNpdFxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzRmlyc3RWaXNpdCcsICdmYWxzZScpO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3QgdGhlIGZpcnN0IHZpc2l0XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmdQYWdlIGNvbG9yPVwiI0ZGRkZGRlwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8Q29udGVudFdpdGhGYWRlSW4gaXNGaXJzdFZpc2l0PXtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNGaXJzdFZpc2l0Jyl9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQ29udGVudFdpdGhGYWRlSW4gPSAoeyBpc0ZpcnN0VmlzaXQgfSkgPT4ge1xuICBjb25zdCBbZmFkZUluLCBzZXRGYWRlSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQXBwbHkgZmFkZSBpbiBlZmZlY3Qgb25seSBvbiB0aGUgZmlyc3QgdmlzaXRcbiAgICBpZiAoaXNGaXJzdFZpc2l0ID09PSAnZmFsc2UnKSB7XG4gICAgICBjb25zdCBmYWRlSW5UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEZhZGVJbih0cnVlKTtcbiAgICAgIH0sIDUwMCk7IC8vIEFkanVzdCB0aGUgZGVsYXkgYmFzZWQgb24geW91ciBwcmVmZXJlbmNlXG5cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoZmFkZUluVGltZW91dCk7XG4gICAgfVxuICB9LCBbaXNGaXJzdFZpc2l0XSk7XG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BvcGFjaXR5LTAgJHtmYWRlSW4gPyAnb3BhY2l0eS0xMDAnIDogJyd9YH1cbiAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246ICdvcGFjaXR5IDFzIGVhc2UtaW4tb3V0JyB9fVxuICAgID5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5TdGVmYW4gVHVjenluc2tpPC90aXRsZT5cbiAgICAgIDwvSGVsbWV0PlxuXG4gICAgICA8UGFydGljbGVDb250YWluZXIgLz5cbiAgICAgIDxOYXZiYXIgZmFkZUluPXtpc0ZpcnN0VmlzaXQgPT09ICdmYWxzZSd9IC8+XG4gICAgICB7LyogWW91ciBhZGRpdGlvbmFsIGNvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyXCI+U3RlZmFuIFR1Y3p5bnNraTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1jZW50ZXJcIj5Db21wdXRlciBFbmdpbmVlcmluZyBTdHVkZW50IEAgVW5pdmVyc2l0eSBvZiBXYXRlcmxvbzwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgIDxUeXBlZFxuICAgICAgICAgICAgc3RyaW5ncz17WydFbmdpbmVlcmluZyBTdHVkZW50JywgJ1Byb2dyYW1tZXInLCAnTGVhcm5lcicsICdIYXJkd2FyZSBFbnRodXNpYXN0J119XG4gICAgICAgICAgICB0eXBlU3BlZWQ9ezc1fVxuICAgICAgICAgICAgYmFja1NwZWVkPXs0MH1cbiAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZpeGVkIGJvdHRvbS04IGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHNwYWNlLXgtMTBcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3N0ZWZhbi10dWN6eW5za2kvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1bIzBhNjZjMl0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZhTGlua2VkaW4gc2l6ZT17NDB9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0ZWZhbnR6blwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtWyMzMzNdIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGYUdpdGh1YiBzaXplPXs0MH0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vc3RlZmFuLnQxXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1bI2JjMmE4ZF0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPEx1SW5zdGFncmFtIHNpemU9ezQwfSAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS91c2VyL2djNGl4YTk3eXMwYnJrYWpnMG1vZ3dpeG0/c2k9Y2QzYmY3MWZjOGQxNDZlYVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtWyMxREI5NTRdIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGYVNwb3RpZnkgc2l6ZT17NDB9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwibWFpbHRvOnR1Y3p5bnNraXNAZ21haWwuY29tXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1bI2YyYTYwY10gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPElvSW9zTWFpbCBzaXplPXs0MH0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdmJhciIsIkxvYWRpbmdQYWdlIiwiUGFydGljbGVDb250YWluZXIiLCJGYUxpbmtlZGluIiwiRmFHaXRodWIiLCJGYVNwb3RpZnkiLCJJb0lvc01haWwiLCJMdUluc3RhZ3JhbSIsIlR5cGVkIiwiSGVsbWV0IiwiQXBwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0ZpcnN0VmlzaXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInNldFRpbWVvdXQiLCJkaXYiLCJjb2xvciIsIkNvbnRlbnRXaXRoRmFkZUluIiwiZmFkZUluIiwic2V0RmFkZUluIiwiZmFkZUluVGltZW91dCIsImNsZWFyVGltZW91dCIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsInRpdGxlIiwiaDEiLCJwIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsImxvb3AiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});