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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Sidebar/Sidebar */ \"./components/Sidebar/Sidebar.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Assignment/AssignmentCard */ \"./components/Assignment/AssignmentCard.tsx\");\n/* harmony import */ var services_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/apis */ \"./services/apis.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [assignmentData, setAssignmentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [submissionData, setSubmissionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"review\");\n    const handleStatusChange = ()=>{\n        if (status === \"review\") {\n            setStatus(\"shortlisted\");\n        } else {\n            setStatus(\"review\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const assignmentResponse = await (0,services_apis__WEBPACK_IMPORTED_MODULE_6__.getAssignmentData)();\n                console.log(\"Assignment Data\", assignmentData);\n                setAssignmentData((assignmentResponse === null || assignmentResponse === void 0 ? void 0 : assignmentResponse.data) || []);\n                const submissionResponse = await (0,services_apis__WEBPACK_IMPORTED_MODULE_6__.getSubmissionData)(status);\n                console.log(\"Submission Response\", submissionResponse);\n                setSubmissionData((submissionResponse === null || submissionResponse === void 0 ? void 0 : submissionResponse.data) || []);\n            } catch (error) {\n                console.log(\"Error while fetching assignment or submission data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-background flex w-[100vw] h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[1rem] w-[100%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: assignmentData\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        assignmentData: assignmentData,\n                        submissionsData: submissionData\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"PhNBtmN8qiR4kobEQxmKB+tScGA=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDRDtBQUNIO0FBQ0E7QUFDb0I7QUFDbUI7QUFFdkYsTUFBTVMsWUFBWTs7SUFDZCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFRLEVBQUU7SUFDOUQsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzlELE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNYyxxQkFBcUI7UUFDdkIsSUFBR0YsV0FBVyxVQUFTO1lBQ25CQyxVQUFVO1FBQ2QsT0FDSTtZQUNBQSxVQUFVO1FBQ2Q7SUFDSjtJQUVBZCxnREFBU0EsQ0FBQztRQUNOLE1BQU1nQixZQUFZO1lBQ2QsSUFBRztnQkFDSCxNQUFNQyxxQkFBcUIsTUFBTVgsZ0VBQWlCQTtnQkFDbERZLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJWO2dCQUMvQkMsa0JBQWtCTyxDQUFBQSwrQkFBQUEseUNBQUFBLG1CQUFvQkcsSUFBSSxLQUFJLEVBQUU7Z0JBRWhELE1BQU1DLHFCQUFxQixNQUFNZCxnRUFBaUJBLENBQUNNO2dCQUNuREssUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkU7Z0JBQ25DVCxrQkFBa0JTLENBQUFBLCtCQUFBQSx5Q0FBQUEsbUJBQW9CRCxJQUFJLEtBQUksRUFBRTtZQUNoRCxFQUNBLE9BQU1FLE9BQU07Z0JBQ1JKLFFBQVFDLEdBQUcsQ0FBQyxzREFBc0RHO1lBQ3RFO1FBQ0o7UUFDQU47SUFDSixHQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUN0QixtRUFBT0E7Ozs7OzBCQUNSLDhEQUFDQyxpRUFBTUE7Ozs7OzBCQUVQLDhEQUFDb0I7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDcEIsaUVBQU1BO3dCQUFDZ0IsTUFBTVg7Ozs7OztrQ0FDZCw4REFBQ0osNkVBQWNBO3dCQUFDSSxnQkFBZ0JBO3dCQUFnQmdCLGlCQUFpQmQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRjtHQXpDTUg7S0FBQUE7QUEyQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2UsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICdAL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgQXNzaWdubWVudENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0Fzc2lnbm1lbnQvQXNzaWdubWVudENhcmQnO1xyXG5pbXBvcnQgeyBnZXRBc3NpZ25tZW50RGF0YSwgZ2V0U3VibWlzc2lvbkRhdGEsIGdldFVzZXJTY29yZURhdGEgfSBmcm9tICdzZXJ2aWNlcy9hcGlzJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthc3NpZ25tZW50RGF0YSwgc2V0QXNzaWdubWVudERhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKVxyXG4gICAgY29uc3QgW3N1Ym1pc3Npb25EYXRhLCBzZXRTdWJtaXNzaW9uRGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pXHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPigncmV2aWV3Jyk7XHJcbiAgICBjb25zdCBoYW5kbGVTdGF0dXNDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdHVzID09PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cygnc2hvcnRsaXN0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ3JldmlldycpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhc3NpZ25tZW50UmVzcG9uc2UgPSBhd2FpdCBnZXRBc3NpZ25tZW50RGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzaWdubWVudCBEYXRhJywgYXNzaWdubWVudERhdGEpO1xyXG4gICAgICAgICAgICBzZXRBc3NpZ25tZW50RGF0YShhc3NpZ25tZW50UmVzcG9uc2U/LmRhdGEgfHwgW10pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VibWlzc2lvblJlc3BvbnNlID0gYXdhaXQgZ2V0U3VibWlzc2lvbkRhdGEoc3RhdHVzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Ym1pc3Npb24gUmVzcG9uc2UnLCBzdWJtaXNzaW9uUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBzZXRTdWJtaXNzaW9uRGF0YShzdWJtaXNzaW9uUmVzcG9uc2U/LmRhdGEgfHwgW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBmZXRjaGluZyBhc3NpZ25tZW50IG9yIHN1Ym1pc3Npb24gZGF0YScsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07IFxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmFja2dyb3VuZCBmbGV4IHctWzEwMHZ3XSBoLVsxMDB2aF0nPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIHsvKiBNYWluIEJvYXJkIFNlY3Rpb24gICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC1bMXJlbV0gdy1bMTAwJV0nPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBkYXRhPXthc3NpZ25tZW50RGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgPEFzc2lnbm1lbnRDYXJkIGFzc2lnbm1lbnREYXRhPXthc3NpZ25tZW50RGF0YX0gc3VibWlzc2lvbnNEYXRhPXtzdWJtaXNzaW9uRGF0YX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhciIsIkZvb3RlciIsIk5hdmJhciIsIkFzc2lnbm1lbnRDYXJkIiwiZ2V0QXNzaWdubWVudERhdGEiLCJnZXRTdWJtaXNzaW9uRGF0YSIsIkRhc2hib2FyZCIsImFzc2lnbm1lbnREYXRhIiwic2V0QXNzaWdubWVudERhdGEiLCJzdWJtaXNzaW9uRGF0YSIsInNldFN1Ym1pc3Npb25EYXRhIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiaGFuZGxlU3RhdHVzQ2hhbmdlIiwiZmV0Y2hEYXRhIiwiYXNzaWdubWVudFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdWJtaXNzaW9uUmVzcG9uc2UiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInN1Ym1pc3Npb25zRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});