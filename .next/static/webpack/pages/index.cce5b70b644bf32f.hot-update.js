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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_EditButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EditButton */ \"./components/common/EditButton.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var utils_formatDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/formatDate */ \"./utils/formatDate.ts\");\n/* harmony import */ var utils_secondsToHour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/secondsToHour */ \"./utils/secondsToHour.ts\");\n/* harmony import */ var _mui_icons_material_Inventory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Inventory */ \"./node_modules/@mui/icons-material/Inventory.js\");\n/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Description */ \"./node_modules/@mui/icons-material/Description.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var public_profile_pic_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! public/profile-pic.jpg */ \"./public/profile-pic.jpg\");\n/* harmony import */ var utils_colorPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/colorPicker */ \"./utils/colorPicker.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst AssignmentCard = (param)=>{\n    let { assignmentData, submissionsData, handleStatusChange, status } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border w-[30%] p-[0.5rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-h1 font-bold\",\n                        children: assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center gap-[0.4rem]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-h2 text-progress-green font-bold\",\n                                children: assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.status\n                            }, void 0, false, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_EditButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between text-p font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-secondary-text\",\n                        children: \"Assignment Link\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: \"text-blue-500\",\n                        href: assignmentData.link || \"\",\n                        children: assignmentData.link\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between text-p font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-secondary-text\",\n                        children: \"Assignment Hour\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (0,utils_secondsToHour__WEBPACK_IMPORTED_MODULE_5__.secondsToHours)(assignmentData.duration_in_seconds)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between text-p font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-secondary-text\",\n                        children: \"Assignment Ends at\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (0,utils_formatDate__WEBPACK_IMPORTED_MODULE_4__.formatDate)(assignmentData.ends_at)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-[1rem] p-[0.5rem] text-p font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-foreground flex flex-row items-center gap-[0.4rem] shadow-sm \".concat(status === \"review\" ? \"shadow-xl\" : \"\", \" p-[0.5rem] rounded-2xl\"),\n                                onClick: handleStatusChange,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Inventory__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"TO REVIEW\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-foreground flex flex-row items-center gap-[0.4rem] shadow-sm \".concat(status === \"shortlis\" ? \"shadow-xl\" : \"\", \" p-[0.5rem] rounded-2xl\"),\n                                onClick: handleStatusChange,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"SHORTLISTED\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-[1rem] \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-between text-p text-secondary-text font-bold\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"CANDIDATE\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"SCORE\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            submissionsData.map((submission)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row p-[0.2rem] items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-row gap-[0.5rem]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                    className: \"rounded-xl\",\n                                                    src: public_profile_pic_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                                    alt: \"\",\n                                                    width: 50,\n                                                    height: 50\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 15\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"text-h2 font-bold\",\n                                                            children: submission === null || submission === void 0 ? void 0 : submission.full_name\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                                            lineNumber: 65,\n                                                            columnNumber: 17\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-p text-secondary-text\",\n                                                            children: submission === null || submission === void 0 ? void 0 : submission.email\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 17\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 15\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-\".concat((0,utils_colorPicker__WEBPACK_IMPORTED_MODULE_8__.colorPicker)(submission === null || submission === void 0 ? void 0 : submission.score), \" text-h2 font-bold\"),\n                                            children: submission === null || submission === void 0 ? void 0 : submission.score\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\Assignment\\\\AssignmentCard.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AssignmentCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssignmentCard);\nvar _c;\n$RefreshReg$(_c, \"AssignmentCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fzc2lnbm1lbnQvQXNzaWdubWVudENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDakI7QUFDaUI7QUFDTztBQUNLO0FBQ0k7QUFDL0I7QUFDaUI7QUFDQTtBQUVoRCxNQUFNVSxpQkFBaUI7UUFBQyxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQUVDLE1BQU0sRUFBRTtJQUNyRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXFCTCwyQkFBQUEscUNBQUFBLGVBQWdCTyxLQUFLOzs7Ozs7a0NBQ3hELDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUNYTCwyQkFBQUEscUNBQUFBLGVBQWdCRyxNQUFNOzs7Ozs7MENBRXpCLDhEQUFDYiwwREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDYztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFHSCxXQUFVO2tDQUFzQjs7Ozs7O2tDQUNwQyw4REFBQ2Qsa0RBQUlBO3dCQUFDYyxXQUFVO3dCQUFnQkksTUFBTVQsZUFBZVUsSUFBSSxJQUFJO2tDQUMxRFYsZUFBZVUsSUFBSTs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBc0I7Ozs7OztrQ0FDcEMsOERBQUNNO2tDQUFHbEIsbUVBQWNBLENBQUNPLGVBQWVZLG1CQUFtQjs7Ozs7Ozs7Ozs7OzBCQUV2RCw4REFBQ1I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBc0I7Ozs7OztrQ0FDcEMsOERBQUNNO2tDQUFHbkIsNERBQVVBLENBQUNRLGVBQWVhLE9BQU87Ozs7Ozs7Ozs7OzswQkFJdkMsOERBQUNUOztrQ0FFQyw4REFBQ0E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUztnQ0FBT1QsV0FBVyxtRUFBb0csT0FBakNGLFdBQVMsV0FBUyxjQUFZLElBQUc7Z0NBQ3ZIWSxTQUFTYjs7a0RBQ1AsOERBQUNSLHFFQUFhQTs7Ozs7a0RBQ2QsOERBQUNpQjtrREFBRTs7Ozs7Ozs7Ozs7OzBDQUVMLDhEQUFDRztnQ0FBT1QsV0FBVyxtRUFBc0csT0FBbkNGLFdBQVMsYUFBVyxjQUFZLElBQUc7Z0NBQ3pIWSxTQUFTYjs7a0RBQ1AsOERBQUNQLHdFQUFlQTs7Ozs7a0RBQ2hCLDhEQUFDZ0I7a0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJUCw4REFBQ1A7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNNO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO2tEQUFFOzs7Ozs7Ozs7Ozs7NEJBRUpWLGdCQUFnQmUsR0FBRyxDQUFDLENBQUNDLDJCQUNwQiw4REFBQ2I7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2YsOERBQUNULG1EQUFLQTtvREFBQ1MsV0FBVTtvREFBYWEsS0FBS3JCLDhEQUFVQTtvREFBRXNCLEtBQUk7b0RBQUdDLE9BQU87b0RBQUlDLFFBQVE7Ozs7Ozs4REFDekUsOERBQUNqQjs7c0VBQ0MsOERBQUNJOzREQUFHSCxXQUFVO3NFQUFxQlksdUJBQUFBLGlDQUFBQSxXQUFZSyxTQUFTOzs7Ozs7c0VBQ3hELDhEQUFDWDs0REFBRU4sV0FBVTtzRUFBOEJZLHVCQUFBQSxpQ0FBQUEsV0FBWU0sS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUc5RCw4REFBQ1o7NENBQUVOLFdBQVcsUUFBdUMsT0FBL0JQLDhEQUFXQSxDQUFDbUIsdUJBQUFBLGlDQUFBQSxXQUFZTyxLQUFLLEdBQUU7c0RBQXNCUCx1QkFBQUEsaUNBQUFBLFdBQVlPLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xRztLQWhFTXpCO0FBa0VOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXNzaWdubWVudC9Bc3NpZ25tZW50Q2FyZC50c3g/YWY2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFZGl0QnV0dG9uIGZyb20gXCIuLi9jb21tb24vRWRpdEJ1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwidXRpbHMvZm9ybWF0RGF0ZVwiO1xyXG5pbXBvcnQgeyBzZWNvbmRzVG9Ib3VycyB9IGZyb20gXCJ1dGlscy9zZWNvbmRzVG9Ib3VyXCI7XHJcbmltcG9ydCBJbnZlbnRvcnlJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0ludmVudG9yeVwiO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFByb2ZpbGVQaWMgZnJvbSBcInB1YmxpYy9wcm9maWxlLXBpYy5qcGdcIjtcclxuaW1wb3J0IHsgY29sb3JQaWNrZXIgfSBmcm9tIFwidXRpbHMvY29sb3JQaWNrZXJcIjtcclxuXHJcbmNvbnN0IEFzc2lnbm1lbnRDYXJkID0gKHsgYXNzaWdubWVudERhdGEsIHN1Ym1pc3Npb25zRGF0YSwgaGFuZGxlU3RhdHVzQ2hhbmdlLCBzdGF0dXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciB3LVszMCVdIHAtWzAuNXJlbV1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1oMSBmb250LWJvbGRcIj57YXNzaWdubWVudERhdGE/LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtWzAuNHJlbV1cIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWgyIHRleHQtcHJvZ3Jlc3MtZ3JlZW4gZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgIHthc3NpZ25tZW50RGF0YT8uc3RhdHVzfVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxFZGl0QnV0dG9uIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHRleHQtcCBmb250LWJvbGRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktdGV4dFwiPkFzc2lnbm1lbnQgTGluazwvaDI+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiIGhyZWY9e2Fzc2lnbm1lbnREYXRhLmxpbmsgfHwgXCJcIn0+XHJcbiAgICAgICAgICB7YXNzaWdubWVudERhdGEubGlua31cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHRleHQtcCBmb250LWJvbGRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnktdGV4dFwiPkFzc2lnbm1lbnQgSG91cjwvaDI+XHJcbiAgICAgICAgPHA+e3NlY29uZHNUb0hvdXJzKGFzc2lnbm1lbnREYXRhLmR1cmF0aW9uX2luX3NlY29uZHMpfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdGV4dC1wIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeS10ZXh0XCI+QXNzaWdubWVudCBFbmRzIGF0PC9oMj5cclxuICAgICAgICA8cD57Zm9ybWF0RGF0ZShhc3NpZ25tZW50RGF0YS5lbmRzX2F0KX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIENhbmRpZGF0ZXMgICovfVxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHsvKiBCdXR0b25zICAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLVsxcmVtXSBwLVswLjVyZW1dIHRleHQtcCBmb250LWJvbGRcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmctZm9yZWdyb3VuZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtWzAuNHJlbV0gc2hhZG93LXNtICR7c3RhdHVzPT09XCJyZXZpZXdcIj8nc2hhZG93LXhsJzonJ30gcC1bMC41cmVtXSByb3VuZGVkLTJ4bGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdGF0dXNDaGFuZ2V9PlxyXG4gICAgICAgICAgICA8SW52ZW50b3J5SWNvbiAvPlxyXG4gICAgICAgICAgICA8cD5UTyBSRVZJRVc8L3A+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmctZm9yZWdyb3VuZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtWzAuNHJlbV0gc2hhZG93LXNtICR7c3RhdHVzPT09XCJzaG9ydGxpc1wiPydzaGFkb3cteGwnOicnfSBwLVswLjVyZW1dIHJvdW5kZWQtMnhsYH1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN0YXR1c0NoYW5nZX0+XHJcbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICAgICAgPHA+U0hPUlRMSVNURUQ8L3A+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogQ2FuZGlkYXRlcyBMaXN0ICAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLVsxcmVtXSBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdGV4dC1wIHRleHQtc2Vjb25kYXJ5LXRleHQgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgIDxwPkNBTkRJREFURTwvcD5cclxuICAgICAgICAgICAgPHA+U0NPUkU8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzdWJtaXNzaW9uc0RhdGEubWFwKChzdWJtaXNzaW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwLVswLjJyZW1dIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLVswLjVyZW1dXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQteGxcIiBzcmM9e1Byb2ZpbGVQaWN9IGFsdD1cIlwiIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0vPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1oMiBmb250LWJvbGRcIj57c3VibWlzc2lvbj8uZnVsbF9uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXAgdGV4dC1zZWNvbmRhcnktdGV4dFwiPntzdWJtaXNzaW9uPy5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC0ke2NvbG9yUGlja2VyKHN1Ym1pc3Npb24/LnNjb3JlKX0gdGV4dC1oMiBmb250LWJvbGRgfT57c3VibWlzc2lvbj8uc2NvcmV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBc3NpZ25tZW50Q2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRWRpdEJ1dHRvbiIsIkxpbmsiLCJmb3JtYXREYXRlIiwic2Vjb25kc1RvSG91cnMiLCJJbnZlbnRvcnlJY29uIiwiRGVzY3JpcHRpb25JY29uIiwiSW1hZ2UiLCJQcm9maWxlUGljIiwiY29sb3JQaWNrZXIiLCJBc3NpZ25tZW50Q2FyZCIsImFzc2lnbm1lbnREYXRhIiwic3VibWlzc2lvbnNEYXRhIiwiaGFuZGxlU3RhdHVzQ2hhbmdlIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImgyIiwiaHJlZiIsImxpbmsiLCJwIiwiZHVyYXRpb25faW5fc2Vjb25kcyIsImVuZHNfYXQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwic3VibWlzc2lvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZnVsbF9uYW1lIiwiZW1haWwiLCJzY29yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Assignment/AssignmentCard.tsx\n"));

/***/ })

});