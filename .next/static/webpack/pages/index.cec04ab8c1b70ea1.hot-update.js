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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Sidebar/Sidebar */ \"./components/Sidebar/Sidebar.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Assignment/AssignmentCard */ \"./components/Assignment/AssignmentCard.tsx\");\n/* harmony import */ var services_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/apis */ \"./services/apis.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [assignmentData, setAssignmentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [submissionData, setSubmissionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"review\");\n    const fetchAssignmentData = async ()=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_6__.getAssignmentData)();\n            setAssignmentData((response === null || response === void 0 ? void 0 : response.data) || []);\n        } catch (error) {\n            console.log(\"Error while fetching assignment data\", error);\n        }\n    };\n    const fetchSubmissionData = async (status)=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_6__.getSubmissionData)(status);\n            setSubmissionData((response === null || response === void 0 ? void 0 : response.data) || []);\n        } catch (error) {\n            console.log(\"Error while fetching submission data\", error);\n        }\n    };\n    const handleStatusChange = ()=>{\n        if (status === \"review\") {\n            setStatus(\"shortlisted\");\n        } else {\n            setStatus(\"review\");\n        }\n        fetchSubmissionData(status);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            fetchAssignmentData();\n            fetchSubmissionData(status);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-background flex w-[100vw] h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[1rem] w-[100%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: assignmentData\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        assignmentData: assignmentData,\n                        submissionsData: submissionData\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"PhNBtmN8qiR4kobEQxmKB+tScGA=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDRDtBQUNIO0FBQ0E7QUFDb0I7QUFDbUI7QUFFdkYsTUFBTVMsWUFBWTs7SUFDZCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFRLEVBQUU7SUFDOUQsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzlELE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNYyxzQkFBc0I7UUFDeEIsSUFBRztZQUNDLE1BQU1DLFdBQVcsTUFBTVYsZ0VBQWlCQTtZQUN4Q0ksa0JBQWtCTSxDQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVDLElBQUksS0FBSSxFQUFFO1FBQzFDLEVBQ0EsT0FBTUMsT0FBTTtZQUNSQyxRQUFRQyxHQUFHLENBQUMsd0NBQXdDRjtRQUN4RDtJQUNKO0lBQ0EsTUFBTUcsc0JBQXNCLE9BQU1SO1FBQzlCLElBQUc7WUFDQyxNQUFNRyxXQUFXLE1BQU1ULGdFQUFpQkEsQ0FBQ007WUFDekNELGtCQUFrQkksQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVQyxJQUFJLEtBQUksRUFBRTtRQUMxQyxFQUNBLE9BQU1DLE9BQU07WUFDUkMsUUFBUUMsR0FBRyxDQUFDLHdDQUF3Q0Y7UUFDeEQ7SUFDSjtJQUNBLE1BQU1JLHFCQUFxQjtRQUN2QixJQUFHVCxXQUFXLFVBQVM7WUFDbkJDLFVBQVU7UUFDZCxPQUNJO1lBQ0FBLFVBQVU7UUFDZDtRQUNBTyxvQkFBb0JSO0lBQ3hCO0lBR0FiLGdEQUFTQSxDQUFDO1FBQ04sTUFBTXVCLFlBQVk7WUFDZFI7WUFDQU0sb0JBQW9CUjtRQUN4QjtRQUNBVTtJQUNKLEdBQUcsRUFBRTtJQUNMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ3ZCLG1FQUFPQTs7Ozs7MEJBQ1IsOERBQUNDLGlFQUFNQTs7Ozs7MEJBRVAsOERBQUNxQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNyQixpRUFBTUE7d0JBQUNhLE1BQU1SOzs7Ozs7a0NBQ2QsOERBQUNKLDZFQUFjQTt3QkFBQ0ksZ0JBQWdCQTt3QkFBZ0JpQixpQkFBaUJmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakY7R0FuRE1IO0tBQUFBO0FBcUROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnQC9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJztcclxuaW1wb3J0IEFzc2lnbm1lbnRDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Bc3NpZ25tZW50L0Fzc2lnbm1lbnRDYXJkJztcclxuaW1wb3J0IHsgZ2V0QXNzaWdubWVudERhdGEsIGdldFN1Ym1pc3Npb25EYXRhLCBnZXRVc2VyU2NvcmVEYXRhIH0gZnJvbSAnc2VydmljZXMvYXBpcyc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYXNzaWdubWVudERhdGEsIHNldEFzc2lnbm1lbnREYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSlcclxuICAgIGNvbnN0IFtzdWJtaXNzaW9uRGF0YSwgc2V0U3VibWlzc2lvbkRhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKVxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJ3JldmlldycpO1xyXG4gICAgY29uc3QgZmV0Y2hBc3NpZ25tZW50RGF0YSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRBc3NpZ25tZW50RGF0YSgpO1xyXG4gICAgICAgICAgICBzZXRBc3NpZ25tZW50RGF0YShyZXNwb25zZT8uZGF0YSB8fCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIGZldGNoaW5nIGFzc2lnbm1lbnQgZGF0YScsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBmZXRjaFN1Ym1pc3Npb25EYXRhID0gYXN5bmMoc3RhdHVzOnN0cmluZykgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRTdWJtaXNzaW9uRGF0YShzdGF0dXMpO1xyXG4gICAgICAgICAgICBzZXRTdWJtaXNzaW9uRGF0YShyZXNwb25zZT8uZGF0YSB8fCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIGZldGNoaW5nIHN1Ym1pc3Npb24gZGF0YScsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdGF0dXNDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdHVzID09PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cygnc2hvcnRsaXN0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ3JldmlldycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoU3VibWlzc2lvbkRhdGEoc3RhdHVzKTtcclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2hBc3NpZ25tZW50RGF0YSgpO1xyXG4gICAgICAgICAgICBmZXRjaFN1Ym1pc3Npb25EYXRhKHN0YXR1cyk7XHJcbiAgICAgICAgfTsgXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1iYWNrZ3JvdW5kIGZsZXggdy1bMTAwdnddIGgtWzEwMHZoXSc+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgey8qIE1haW4gQm9hcmQgU2VjdGlvbiAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLVsxcmVtXSB3LVsxMDAlXSc+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIGRhdGE9e2Fzc2lnbm1lbnREYXRhfS8+XHJcbiAgICAgICAgICAgICAgICA8QXNzaWdubWVudENhcmQgYXNzaWdubWVudERhdGE9e2Fzc2lnbm1lbnREYXRhfSBzdWJtaXNzaW9uc0RhdGE9e3N1Ym1pc3Npb25EYXRhfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyIiwiRm9vdGVyIiwiTmF2YmFyIiwiQXNzaWdubWVudENhcmQiLCJnZXRBc3NpZ25tZW50RGF0YSIsImdldFN1Ym1pc3Npb25EYXRhIiwiRGFzaGJvYXJkIiwiYXNzaWdubWVudERhdGEiLCJzZXRBc3NpZ25tZW50RGF0YSIsInN1Ym1pc3Npb25EYXRhIiwic2V0U3VibWlzc2lvbkRhdGEiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJmZXRjaEFzc2lnbm1lbnREYXRhIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hTdWJtaXNzaW9uRGF0YSIsImhhbmRsZVN0YXR1c0NoYW5nZSIsImZldGNoRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInN1Ym1pc3Npb25zRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});