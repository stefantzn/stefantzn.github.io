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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LoadingPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoadingPage.js */ \"./components/LoadingPage.js\");\n/* harmony import */ var _barrel_optimize_names_FaFileAlt_FaGithub_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FaFileAlt,FaGithub,FaLinkedin!=!react-icons/fa */ \"__barrel_optimize__?names=FaFileAlt,FaGithub,FaLinkedin!=!./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosMail_react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosMail!=!react-icons/io */ \"__barrel_optimize__?names=IoIosMail!=!./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vanta/dist/vanta.net.min */ \"./node_modules/vanta/dist/vanta.net.min.js\");\n/* harmony import */ var vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Render.js */ \"./components/Render.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nvar App = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState[0], setLoading = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), vantaEffect = _useState1[0], setVantaEffect = _useState1[1];\n    var myRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var isFirstVisit = localStorage.getItem(\"isFirstVisit\");\n        if (isFirstVisit === null) {\n            // First visit\n            localStorage.setItem(\"isFirstVisit\", \"false\");\n            setLoading(true);\n            setTimeout(function() {\n                setLoading(false);\n            }, 3000);\n        } else {\n            // Not the first visit\n            setLoading(false);\n        }\n        vanta_dist_vanta_net_min__WEBPACK_IMPORTED_MODULE_3___default()({\n            el: \"#vanta\"\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: myRef,\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            color: \"#FFFFFF\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentWithFadeIn, {\n            isFirstVisit: localStorage.getItem(\"isFirstVisit\")\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(App, \"eA3fHaD5JB9idi3Z3NhHMVEezUU=\");\n_c = App;\nvar ContentWithFadeIn = function(param) {\n    var isFirstVisit = param.isFirstVisit;\n    _s1();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), fadeIn = _useState[0], setFadeIn = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Apply fade in effect only on the first visit\n        if (isFirstVisit === \"false\") {\n            var fadeInTimeout = setTimeout(function() {\n                setFadeIn(true);\n            }, 500); // Adjust the delay based on your preference\n            return function() {\n                return clearTimeout(fadeInTimeout);\n            };\n        }\n    }, [\n        isFirstVisit\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"opacity-0 \".concat(fadeIn ? \"opacity-100\" : \"\"),\n        style: {\n            transition: \"opacity 1s ease-in-out\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Stefan Tuczynski\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"background\",\n                    id: \"vanta\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white flex items-center justify-center h-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-6xl mb-4 gradient-text animated-gradient\",\n                                        children: \"Stefan Tuczynski\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg\",\n                                        children: \"Computer Engineering Student @ University of Waterloo\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center space-x-10 mt-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://www.linkedin.com/in/stefan-tuczynski/\",\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                className: \"text-white hover:text-[#0a66c2] transition duration-300 icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFileAlt_FaGithub_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaLinkedin, {\n                                                    size: 40\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 5\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 3\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://github.com/stefantzn\",\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                className: \"text-white hover:text-[#333] transition duration-300 icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFileAlt_FaGithub_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaGithub, {\n                                                    size: 40\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 5\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 3\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"mailto:svtuczyn@uwaterloo.ca\",\n                                                rel: \"noopener noreferrer\",\n                                                className: \"text-white hover:text-[#1DB954] transition duration-300 icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosMail_react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosMail, {\n                                                    size: 40\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 5\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 3\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"/resume.pdf\",\n                                                target: \"_blank\",\n                                                rel: \"noopener noreferrer\",\n                                                className: \"text-white hover:text-[#6c63ff] transition duration-300 icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFileAlt_FaGithub_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaFileAlt, {\n                                                    size: 40\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 5\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 3\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Render_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Waldek\\\\Stefan\\\\Programming\\\\Projects\\\\stefantzn.github.io\\\\pages\\\\index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_s1(ContentWithFadeIn, \"s7n23fSfhID5pVyFr0/DM12lDnA=\");\n_c1 = ContentWithFadeIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"ContentWithFadeIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RU1nQjtNQUFBQTtBQXVFTiwrREFBZWYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkaW5nUGFnZS5qcyc7XG5pbXBvcnQgeyBGYUxpbmtlZGluLCBGYUdpdGh1YiwgRmFGaWxlQWx0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgSW9Jb3NNYWlsIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IE5FVCBmcm9tICd2YW50YS9kaXN0L3ZhbnRhLm5ldC5taW4nO1xuaW1wb3J0IFJlbmRlciBmcm9tICcuLi9jb21wb25lbnRzL1JlbmRlci5qcyc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt2YW50YUVmZmVjdCwgc2V0VmFudGFFZmZlY3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG15UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNGaXJzdFZpc2l0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzRmlyc3RWaXNpdCcpO1xuXG4gICAgaWYgKGlzRmlyc3RWaXNpdCA9PT0gbnVsbCkge1xuICAgICAgLy8gRmlyc3QgdmlzaXRcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0ZpcnN0VmlzaXQnLCAnZmFsc2UnKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm90IHRoZSBmaXJzdCB2aXNpdFxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgTkVUKHtcbiAgICAgIGVsOiAnI3ZhbnRhJyxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e215UmVmfT5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGluZ1BhZ2UgY29sb3I9XCIjRkZGRkZGXCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDb250ZW50V2l0aEZhZGVJbiBpc0ZpcnN0VmlzaXQ9e2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0ZpcnN0VmlzaXQnKX0gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBDb250ZW50V2l0aEZhZGVJbiA9ICh7IGlzRmlyc3RWaXNpdCB9KSA9PiB7XG4gIGNvbnN0IFtmYWRlSW4sIHNldEZhZGVJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBcHBseSBmYWRlIGluIGVmZmVjdCBvbmx5IG9uIHRoZSBmaXJzdCB2aXNpdFxuICAgIGlmIChpc0ZpcnN0VmlzaXQgPT09ICdmYWxzZScpIHtcbiAgICAgIGNvbnN0IGZhZGVJblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0RmFkZUluKHRydWUpO1xuICAgICAgfSwgNTAwKTsgLy8gQWRqdXN0IHRoZSBkZWxheSBiYXNlZCBvbiB5b3VyIHByZWZlcmVuY2VcblxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChmYWRlSW5UaW1lb3V0KTtcbiAgICB9XG4gIH0sIFtpc0ZpcnN0VmlzaXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YG9wYWNpdHktMCAke2ZhZGVJbiA/ICdvcGFjaXR5LTEwMCcgOiAnJ31gfVxuICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogJ29wYWNpdHkgMXMgZWFzZS1pbi1vdXQnIH19XG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHRpdGxlPlN0ZWZhbiBUdWN6eW5za2k8L3RpdGxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiBpZD1cInZhbnRhXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIG1iLTQgZ3JhZGllbnQtdGV4dCBhbmltYXRlZC1ncmFkaWVudFwiPlN0ZWZhbiBUdWN6eW5za2k8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+Q29tcHV0ZXIgRW5naW5lZXJpbmcgU3R1ZGVudCBAIFVuaXZlcnNpdHkgb2YgV2F0ZXJsb288L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteC0xMCBtdC00XCI+XG4gIDxhXG4gICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zdGVmYW4tdHVjenluc2tpL1wiXG4gICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtWyMwYTY2YzJdIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGljb25cIlxuICA+XG4gICAgPEZhTGlua2VkaW4gc2l6ZT17NDB9IC8+XG4gIDwvYT5cbiAgPGFcbiAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0ZWZhbnR6blwiXG4gICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtWyMzMzNdIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGljb25cIlxuICA+XG4gICAgPEZhR2l0aHViIHNpemU9ezQwfSAvPlxuICA8L2E+XG4gIDxhXG4gICAgaHJlZj1cIm1haWx0bzpzdnR1Y3p5bkB1d2F0ZXJsb28uY2FcIlxuICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1bIzFEQjk1NF0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaWNvblwiXG4gID5cbiAgICA8SW9Jb3NNYWlsIHNpemU9ezQwfSAvPlxuICA8L2E+XG4gIDxhXG4gICAgaHJlZj1cIi9yZXN1bWUucGRmXCJcbiAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1bIzZjNjNmZl0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgaWNvblwiXG4gID5cbiAgICA8RmFGaWxlQWx0IHNpemU9ezQwfSAvPlxuICA8L2E+XG48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFJlbmRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTG9hZGluZ1BhZ2UiLCJGYUxpbmtlZGluIiwiRmFHaXRodWIiLCJGYUZpbGVBbHQiLCJJb0lvc01haWwiLCJORVQiLCJSZW5kZXIiLCJBcHAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZhbnRhRWZmZWN0Iiwic2V0VmFudGFFZmZlY3QiLCJteVJlZiIsImlzRmlyc3RWaXNpdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic2V0VGltZW91dCIsImVsIiwiZGl2IiwicmVmIiwiY29sb3IiLCJDb250ZW50V2l0aEZhZGVJbiIsImZhZGVJbiIsInNldEZhZGVJbiIsImZhZGVJblRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0aXRsZSIsImlkIiwiaDEiLCJwIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});