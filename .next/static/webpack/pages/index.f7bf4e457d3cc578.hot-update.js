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

/***/ "./components/Assignment/AssignmentCard.tsx":
/*!**************************************************!*\
  !*** ./components/Assignment/AssignmentCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_EditButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EditButton */ \"./components/common/EditButton.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var utils_formatDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/formatDate */ \"./utils/formatDate.ts\");\n/* harmony import */ var utils_secondsToHour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/secondsToHour */ \"./utils/secondsToHour.ts\");\n/* harmony import */ var _mui_icons_material_Inventory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Inventory */ \"./node_modules/@mui/icons-material/Inventory.js\");\n/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Description */ \"./node_modules/@mui/icons-material/Description.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var public_profile_pic_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/profile-pic.jpg */ \"./public/profile-pic.jpg\");\n/* harmony import */ var utils_colorPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/colorPicker */ \"./utils/colorPicker.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst AssignmentCard = (param)=>{\n    let { assignmentData, submissionsData, handleStatusChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border w-[30%] p-[0.5rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-h1 font-bold\",\n                        children: assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center gap-[0.4rem]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-h2 text-progress-green font-bold\",\n                                children: assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.status\n                            }, void 0, false, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_EditButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between text-p font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-secondary-text\",\n                        children: \"Assignment Link\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: \"text-blue-500\",\n                        href: assignmentData.link || \"\",\n                        children: assignmentData.link\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between text-p font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-secondary-text\",\n                        children: \"Assignment Hour\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (0,utils_secondsToHour__WEBPACK_IMPORTED_MODULE_5__.secondsToHours)(assignmentData.duration_in_seconds)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between text-p font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-secondary-text\",\n                        children: \"Assignment Ends at\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (0,utils_formatDate__WEBPACK_IMPORTED_MODULE_4__.formatDate)(assignmentData.ends_at)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-[1rem] p-[0.5rem] text-p font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-foreground flex flex-row items-center gap-[0.4rem] shadow-sm hover:shadow-xl p-[0.5rem] rounded-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Inventory__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"TO REVIEW\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-foreground flex flex-row items-center gap-[0.4rem] shadow-sm hover:shadow-xl p-[0.5rem] rounded-2xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"SHORTLISTED\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-[1rem] \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between text-p text-secondary-text font-bold\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"CANDIDATE\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"SCORE\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            submissionsData.map((submission)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row p-[0.2rem] items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-row gap-[0.5rem]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                    className: \"rounded-xl\",\n                                                    src: public_profile_pic_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                    alt: \"\",\n                                                    width: 50,\n                                                    height: 50\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 15\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"text-h2 font-bold\",\n                                                            children: submission === null || submission === void 0 ? void 0 : submission.full_name\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 17\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-p font-bold\",\n                                                            children: submission === null || submission === void 0 ? void 0 : submission.email\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 17\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 15\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-\".concat((0,utils_colorPicker__WEBPACK_IMPORTED_MODULE_8__.colorPicker)(submission === null || submission === void 0 ? void 0 : submission.score), \" text-h2 font-bold\"),\n                                            children: submission === null || submission === void 0 ? void 0 : submission.score\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AssignmentCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssignmentCard);\nvar _c;\n$RefreshReg$(_c, \"AssignmentCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fzc2lnbm1lbnQvQXNzaWdubWVudENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDakI7QUFDaUI7QUFDTztBQUNLO0FBQ0k7QUFDL0I7QUFDaUI7QUFDQTtBQUVoRCxNQUFNVSxpQkFBaUI7UUFBQyxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQUU7SUFDN0UscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFxQkosMkJBQUFBLHFDQUFBQSxlQUFnQk0sS0FBSzs7Ozs7O2tDQUN4RCw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBR0gsV0FBVTswQ0FDWEosMkJBQUFBLHFDQUFBQSxlQUFnQlEsTUFBTTs7Ozs7OzBDQUV6Qiw4REFBQ2xCLDBEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2YsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQXNCOzs7Ozs7a0NBQ3BDLDhEQUFDYixrREFBSUE7d0JBQUNhLFdBQVU7d0JBQWdCSyxNQUFNVCxlQUFlVSxJQUFJLElBQUk7a0NBQzFEVixlQUFlVSxJQUFJOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDUDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFHSCxXQUFVO2tDQUFzQjs7Ozs7O2tDQUNwQyw4REFBQ087a0NBQUdsQixtRUFBY0EsQ0FBQ08sZUFBZVksbUJBQW1COzs7Ozs7Ozs7Ozs7MEJBRXZELDhEQUFDVDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFHSCxXQUFVO2tDQUFzQjs7Ozs7O2tDQUNwQyw4REFBQ087a0NBQUduQiw0REFBVUEsQ0FBQ1EsZUFBZWEsT0FBTzs7Ozs7Ozs7Ozs7OzBCQUl2Qyw4REFBQ1Y7O2tDQUVDLDhEQUFDQTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNVO2dDQUFPVixXQUFVOztrREFDaEIsOERBQUNWLHFFQUFhQTs7Ozs7a0RBQ2QsOERBQUNpQjtrREFBRTs7Ozs7Ozs7Ozs7OzBDQUVMLDhEQUFDRztnQ0FBT1YsV0FBVTs7a0RBQ2hCLDhEQUFDVCx3RUFBZUE7Ozs7O2tEQUNoQiw4REFBQ2dCO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSVAsOERBQUNSO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDTztrREFBRTs7Ozs7O2tEQUNILDhEQUFDQTtrREFBRTs7Ozs7Ozs7Ozs7OzRCQUVKVixnQkFBZ0JjLEdBQUcsQ0FBQyxDQUFDQywyQkFDcEIsOERBQUNiO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNmLDhEQUFDUixtREFBS0E7b0RBQUNRLFdBQVU7b0RBQWFhLEtBQUtwQiw4REFBVUE7b0RBQUVxQixLQUFJO29EQUFHQyxPQUFPO29EQUFJQyxRQUFROzs7Ozs7OERBQ3pFLDhEQUFDakI7O3NFQUNDLDhEQUFDSTs0REFBR0gsV0FBVTtzRUFBcUJZLHVCQUFBQSxpQ0FBQUEsV0FBWUssU0FBUzs7Ozs7O3NFQUN4RCw4REFBQ1Y7NERBQUVQLFdBQVU7c0VBQW9CWSx1QkFBQUEsaUNBQUFBLFdBQVlNLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHcEQsOERBQUNYOzRDQUFFUCxXQUFXLFFBQXVDLE9BQS9CTiw4REFBV0EsQ0FBQ2tCLHVCQUFBQSxpQ0FBQUEsV0FBWU8sS0FBSyxHQUFFO3NEQUFzQlAsdUJBQUFBLGlDQUFBQSxXQUFZTyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUc7S0E5RE14QjtBQWdFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Fzc2lnbm1lbnQvQXNzaWdubWVudENhcmQudHN4P2FmNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRWRpdEJ1dHRvbiBmcm9tIFwiLi4vY29tbW9uL0VkaXRCdXR0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcInV0aWxzL2Zvcm1hdERhdGVcIjtcclxuaW1wb3J0IHsgc2Vjb25kc1RvSG91cnMgfSBmcm9tIFwidXRpbHMvc2Vjb25kc1RvSG91clwiO1xyXG5pbXBvcnQgSW52ZW50b3J5SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9JbnZlbnRvcnlcIjtcclxuaW1wb3J0IERlc2NyaXB0aW9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rlc2NyaXB0aW9uJztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBQcm9maWxlUGljIGZyb20gXCJwdWJsaWMvcHJvZmlsZS1waWMuanBnXCI7XHJcbmltcG9ydCB7IGNvbG9yUGlja2VyIH0gZnJvbSBcInV0aWxzL2NvbG9yUGlja2VyXCI7XHJcblxyXG5jb25zdCBBc3NpZ25tZW50Q2FyZCA9ICh7IGFzc2lnbm1lbnREYXRhLCBzdWJtaXNzaW9uc0RhdGEsIGhhbmRsZVN0YXR1c0NoYW5nZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHctWzMwJV0gcC1bMC41cmVtXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWgxIGZvbnQtYm9sZFwiPnthc3NpZ25tZW50RGF0YT8udGl0bGV9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC1bMC40cmVtXVwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtaDIgdGV4dC1wcm9ncmVzcy1ncmVlbiBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAge2Fzc2lnbm1lbnREYXRhPy5zdGF0dXN9XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPEVkaXRCdXR0b24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdGV4dC1wIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS10ZXh0XCI+QXNzaWdubWVudCBMaW5rPC9oMj5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCIgaHJlZj17YXNzaWdubWVudERhdGEubGluayB8fCBcIlwifT5cclxuICAgICAgICAgIHthc3NpZ25tZW50RGF0YS5saW5rfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdGV4dC1wIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS10ZXh0XCI+QXNzaWdubWVudCBIb3VyPC9oMj5cclxuICAgICAgICA8cD57c2Vjb25kc1RvSG91cnMoYXNzaWdubWVudERhdGEuZHVyYXRpb25faW5fc2Vjb25kcyl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXAgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LXRleHRcIj5Bc3NpZ25tZW50IEVuZHMgYXQ8L2gyPlxyXG4gICAgICAgIDxwPntmb3JtYXREYXRlKGFzc2lnbm1lbnREYXRhLmVuZHNfYXQpfTwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogQ2FuZGlkYXRlcyAgKi99XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgey8qIEJ1dHRvbnMgICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtWzFyZW1dIHAtWzAuNXJlbV0gdGV4dC1wIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1mb3JlZ3JvdW5kIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC1bMC40cmVtXSBzaGFkb3ctc20gaG92ZXI6c2hhZG93LXhsIHAtWzAuNXJlbV0gcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgICAgPEludmVudG9yeUljb24gLz5cclxuICAgICAgICAgICAgPHA+VE8gUkVWSUVXPC9wPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWZvcmVncm91bmQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLVswLjRyZW1dIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3cteGwgcC1bMC41cmVtXSByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgICA8RGVzY3JpcHRpb25JY29uIC8+XHJcbiAgICAgICAgICAgIDxwPlNIT1JUTElTVEVEPC9wPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIENhbmRpZGF0ZXMgTGlzdCAgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC1bMXJlbV0gXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHRleHQtcCB0ZXh0LXNlY29uZGFyeS10ZXh0IGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICA8cD5DQU5ESURBVEU8L3A+XHJcbiAgICAgICAgICAgIDxwPlNDT1JFPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7c3VibWlzc2lvbnNEYXRhLm1hcCgoc3VibWlzc2lvbikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcC1bMC4ycmVtXSBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC1bMC41cmVtXVwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJyb3VuZGVkLXhsXCIgc3JjPXtQcm9maWxlUGljfSBhbHQ9XCJcIiB3aWR0aD17NTB9IGhlaWdodD17NTB9Lz5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtaDIgZm9udC1ib2xkXCI+e3N1Ym1pc3Npb24/LmZ1bGxfbmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1wIGZvbnQtYm9sZFwiPntzdWJtaXNzaW9uPy5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC0ke2NvbG9yUGlja2VyKHN1Ym1pc3Npb24/LnNjb3JlKX0gdGV4dC1oMiBmb250LWJvbGRgfT57c3VibWlzc2lvbj8uc2NvcmV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc3NpZ25tZW50Q2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRWRpdEJ1dHRvbiIsIkxpbmsiLCJmb3JtYXREYXRlIiwic2Vjb25kc1RvSG91cnMiLCJJbnZlbnRvcnlJY29uIiwiRGVzY3JpcHRpb25JY29uIiwiSW1hZ2UiLCJQcm9maWxlUGljIiwiY29sb3JQaWNrZXIiLCJBc3NpZ25tZW50Q2FyZCIsImFzc2lnbm1lbnREYXRhIiwic3VibWlzc2lvbnNEYXRhIiwiaGFuZGxlU3RhdHVzQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImgyIiwic3RhdHVzIiwiaHJlZiIsImxpbmsiLCJwIiwiZHVyYXRpb25faW5fc2Vjb25kcyIsImVuZHNfYXQiLCJidXR0b24iLCJtYXAiLCJzdWJtaXNzaW9uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJmdWxsX25hbWUiLCJlbWFpbCIsInNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Assignment/AssignmentCard.tsx\n"));

/***/ })

});