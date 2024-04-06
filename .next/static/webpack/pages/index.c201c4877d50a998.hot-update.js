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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Sidebar/Sidebar */ \"./components/Sidebar/Sidebar.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Assignment/AssignmentCard */ \"./components/Assignment/AssignmentCard.tsx\");\n/* harmony import */ var services_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/apis */ \"./services/apis.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [assignmentData, setAssignmentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [submissionData, setSubmissionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"review\");\n    const fetchAssignmentData = async ()=>{};\n    const handleStatusChange = ()=>{\n        if (status === \"review\") {\n            setStatus(\"shortlisted\");\n        } else {\n            setStatus(\"review\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const assignmentResponse = await (0,services_apis__WEBPACK_IMPORTED_MODULE_6__.getAssignmentData)();\n                console.log(\"Assignment Data\", assignmentData);\n                setAssignmentData((assignmentResponse === null || assignmentResponse === void 0 ? void 0 : assignmentResponse.data) || []);\n                const submissionResponse = await (0,services_apis__WEBPACK_IMPORTED_MODULE_6__.getSubmissionData)(status);\n                console.log(\"Submission Response\", submissionResponse);\n                setSubmissionData((submissionResponse === null || submissionResponse === void 0 ? void 0 : submissionResponse.data) || []);\n            } catch (error) {\n                console.log(\"Error while fetching assignment or submission data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-background flex w-[100vw] h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[1rem] w-[100%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: assignmentData\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        assignmentData: assignmentData,\n                        submissionsData: submissionData\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"PhNBtmN8qiR4kobEQxmKB+tScGA=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDRDtBQUNIO0FBQ0E7QUFDb0I7QUFDbUI7QUFFdkYsTUFBTVMsWUFBWTs7SUFDZCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFRLEVBQUU7SUFDOUQsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzlELE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNYyxzQkFBc0IsV0FFNUI7SUFDQSxNQUFNQyxxQkFBcUI7UUFDdkIsSUFBR0gsV0FBVyxVQUFTO1lBQ25CQyxVQUFVO1FBQ2QsT0FDSTtZQUNBQSxVQUFVO1FBQ2Q7SUFDSjtJQUdBZCxnREFBU0EsQ0FBQztRQUNOLE1BQU1pQixZQUFZO1lBQ2QsSUFBRztnQkFDSCxNQUFNQyxxQkFBcUIsTUFBTVosZ0VBQWlCQTtnQkFDbERhLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJYO2dCQUMvQkMsa0JBQWtCUSxDQUFBQSwrQkFBQUEseUNBQUFBLG1CQUFvQkcsSUFBSSxLQUFJLEVBQUU7Z0JBRWhELE1BQU1DLHFCQUFxQixNQUFNZixnRUFBaUJBLENBQUNNO2dCQUNuRE0sUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkU7Z0JBQ25DVixrQkFBa0JVLENBQUFBLCtCQUFBQSx5Q0FBQUEsbUJBQW9CRCxJQUFJLEtBQUksRUFBRTtZQUNoRCxFQUNBLE9BQU1FLE9BQU07Z0JBQ1JKLFFBQVFDLEdBQUcsQ0FBQyxzREFBc0RHO1lBQ3RFO1FBQ0o7UUFDQU47SUFDSixHQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUN2QixtRUFBT0E7Ozs7OzBCQUNSLDhEQUFDQyxpRUFBTUE7Ozs7OzBCQUVQLDhEQUFDcUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDckIsaUVBQU1BO3dCQUFDaUIsTUFBTVo7Ozs7OztrQ0FDZCw4REFBQ0osNkVBQWNBO3dCQUFDSSxnQkFBZ0JBO3dCQUFnQmlCLGlCQUFpQmY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRjtHQTdDTUg7S0FBQUE7QUErQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2UsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICdAL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgQXNzaWdubWVudENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0Fzc2lnbm1lbnQvQXNzaWdubWVudENhcmQnO1xyXG5pbXBvcnQgeyBnZXRBc3NpZ25tZW50RGF0YSwgZ2V0U3VibWlzc2lvbkRhdGEsIGdldFVzZXJTY29yZURhdGEgfSBmcm9tICdzZXJ2aWNlcy9hcGlzJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthc3NpZ25tZW50RGF0YSwgc2V0QXNzaWdubWVudERhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKVxyXG4gICAgY29uc3QgW3N1Ym1pc3Npb25EYXRhLCBzZXRTdWJtaXNzaW9uRGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPigncmV2aWV3Jyk7XHJcbiAgICBjb25zdCBmZXRjaEFzc2lnbm1lbnREYXRhID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdGF0dXNDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdHVzID09PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cygnc2hvcnRsaXN0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ3JldmlldycpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzc2lnbm1lbnRSZXNwb25zZSA9IGF3YWl0IGdldEFzc2lnbm1lbnREYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3NpZ25tZW50IERhdGEnLCBhc3NpZ25tZW50RGF0YSk7XHJcbiAgICAgICAgICAgIHNldEFzc2lnbm1lbnREYXRhKGFzc2lnbm1lbnRSZXNwb25zZT8uZGF0YSB8fCBbXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXNzaW9uUmVzcG9uc2UgPSBhd2FpdCBnZXRTdWJtaXNzaW9uRGF0YShzdGF0dXMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU3VibWlzc2lvbiBSZXNwb25zZScsIHN1Ym1pc3Npb25SZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHNldFN1Ym1pc3Npb25EYXRhKHN1Ym1pc3Npb25SZXNwb25zZT8uZGF0YSB8fCBbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIGZldGNoaW5nIGFzc2lnbm1lbnQgb3Igc3VibWlzc2lvbiBkYXRhJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTsgXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1iYWNrZ3JvdW5kIGZsZXggdy1bMTAwdnddIGgtWzEwMHZoXSc+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgey8qIE1haW4gQm9hcmQgU2VjdGlvbiAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLVsxcmVtXSB3LVsxMDAlXSc+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIGRhdGE9e2Fzc2lnbm1lbnREYXRhfS8+XHJcbiAgICAgICAgICAgICAgICA8QXNzaWdubWVudENhcmQgYXNzaWdubWVudERhdGE9e2Fzc2lnbm1lbnREYXRhfSBzdWJtaXNzaW9uc0RhdGE9e3N1Ym1pc3Npb25EYXRhfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyIiwiRm9vdGVyIiwiTmF2YmFyIiwiQXNzaWdubWVudENhcmQiLCJnZXRBc3NpZ25tZW50RGF0YSIsImdldFN1Ym1pc3Npb25EYXRhIiwiRGFzaGJvYXJkIiwiYXNzaWdubWVudERhdGEiLCJzZXRBc3NpZ25tZW50RGF0YSIsInN1Ym1pc3Npb25EYXRhIiwic2V0U3VibWlzc2lvbkRhdGEiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJmZXRjaEFzc2lnbm1lbnREYXRhIiwiaGFuZGxlU3RhdHVzQ2hhbmdlIiwiZmV0Y2hEYXRhIiwiYXNzaWdubWVudFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdWJtaXNzaW9uUmVzcG9uc2UiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInN1Ym1pc3Npb25zRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});