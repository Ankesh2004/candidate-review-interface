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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Sidebar/Sidebar */ \"./components/Sidebar/Sidebar.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Assignment/AssignmentCard */ \"./components/Assignment/AssignmentCard.tsx\");\n/* harmony import */ var services_apis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/apis */ \"./services/apis.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [assignmentData, setAssignmentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [submissionData, setSubmissionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"review\");\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const fetchAssignmentData = async ()=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_6__.getAssignmentData)();\n            setAssignmentData((response === null || response === void 0 ? void 0 : response.data) || []);\n        } catch (error) {\n            console.log(\"Error while fetching assignment data\", error);\n        }\n    };\n    const fetchSubmissionData = async (status)=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_6__.getSubmissionData)(status);\n            setSubmissionData((response === null || response === void 0 ? void 0 : response.data) || []);\n        } catch (error) {\n            console.log(\"Error while fetching submission data\", error);\n        }\n    };\n    const handleStatusChange = ()=>{\n        if (status === \"review\") {\n            setStatus(\"shortlisted\");\n        } else {\n            setStatus(\"review\");\n        }\n        fetchSubmissionData(status);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            fetchAssignmentData();\n            fetchSubmissionData(status);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-background flex w-[100vw] h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[1rem] w-[100%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: assignmentData\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        assignmentData: assignmentData,\n                        submissionsData: submissionData,\n                        handleStatusChange: handleStatusChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"WSaEVNfQQz0F/SVyd+2Ez4SPPlU=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDRDtBQUNIO0FBQ0E7QUFDb0I7QUFDbUI7QUFFdkYsTUFBTVMsWUFBWTs7SUFDZCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFRLEVBQUU7SUFDOUQsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzlELE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBUztJQUM3QyxNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQU0sQ0FBQztJQUNyRCxNQUFNZ0Isc0JBQXNCO1FBQ3hCLElBQUc7WUFDQyxNQUFNQyxXQUFXLE1BQU1aLGdFQUFpQkE7WUFDeENJLGtCQUFrQlEsQ0FBQUEscUJBQUFBLCtCQUFBQSxTQUFVQyxJQUFJLEtBQUksRUFBRTtRQUMxQyxFQUNBLE9BQU1DLE9BQU07WUFDUkMsUUFBUUMsR0FBRyxDQUFDLHdDQUF3Q0Y7UUFDeEQ7SUFDSjtJQUNBLE1BQU1HLHNCQUFzQixPQUFNVjtRQUM5QixJQUFHO1lBQ0MsTUFBTUssV0FBVyxNQUFNWCxnRUFBaUJBLENBQUNNO1lBQ3pDRCxrQkFBa0JNLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVUMsSUFBSSxLQUFJLEVBQUU7UUFDMUMsRUFDQSxPQUFNQyxPQUFNO1lBQ1JDLFFBQVFDLEdBQUcsQ0FBQyx3Q0FBd0NGO1FBQ3hEO0lBQ0o7SUFDQSxNQUFNSSxxQkFBcUI7UUFDdkIsSUFBR1gsV0FBVyxVQUFTO1lBQ25CQyxVQUFVO1FBQ2QsT0FDSTtZQUNBQSxVQUFVO1FBQ2Q7UUFDQVMsb0JBQW9CVjtJQUN4QjtJQUdBYixnREFBU0EsQ0FBQztRQUNOLE1BQU15QixZQUFZO1lBQ2RSO1lBQ0FNLG9CQUFvQlY7UUFDeEI7UUFDQVk7SUFDSixHQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUN6QixtRUFBT0E7Ozs7OzBCQUNSLDhEQUFDQyxpRUFBTUE7Ozs7OzBCQUVQLDhEQUFDdUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDdkIsaUVBQU1BO3dCQUFDZSxNQUFNVjs7Ozs7O2tDQUNkLDhEQUFDSiw2RUFBY0E7d0JBQUNJLGdCQUFnQkE7d0JBQWdCbUIsaUJBQWlCakI7d0JBQWdCYSxvQkFBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckg7R0FwRE1oQjtLQUFBQTtBQXNETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZSwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJ0AvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcic7XHJcbmltcG9ydCBBc3NpZ25tZW50Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQXNzaWdubWVudC9Bc3NpZ25tZW50Q2FyZCc7XHJcbmltcG9ydCB7IGdldEFzc2lnbm1lbnREYXRhLCBnZXRTdWJtaXNzaW9uRGF0YSwgZ2V0VXNlclNjb3JlRGF0YSB9IGZyb20gJ3NlcnZpY2VzL2FwaXMnO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Fzc2lnbm1lbnREYXRhLCBzZXRBc3NpZ25tZW50RGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pXHJcbiAgICBjb25zdCBbc3VibWlzc2lvbkRhdGEsIHNldFN1Ym1pc3Npb25EYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSlcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCdyZXZpZXcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGU8YW55Pih7fSlcclxuICAgIGNvbnN0IGZldGNoQXNzaWdubWVudERhdGEgPSBhc3luYygpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QXNzaWdubWVudERhdGEoKTtcclxuICAgICAgICAgICAgc2V0QXNzaWdubWVudERhdGEocmVzcG9uc2U/LmRhdGEgfHwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBmZXRjaGluZyBhc3NpZ25tZW50IGRhdGEnLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZmV0Y2hTdWJtaXNzaW9uRGF0YSA9IGFzeW5jKHN0YXR1czpzdHJpbmcpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0U3VibWlzc2lvbkRhdGEoc3RhdHVzKTtcclxuICAgICAgICAgICAgc2V0U3VibWlzc2lvbkRhdGEocmVzcG9uc2U/LmRhdGEgfHwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBmZXRjaGluZyBzdWJtaXNzaW9uIGRhdGEnLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3RhdHVzQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHN0YXR1cyA9PT0gJ3Jldmlldycpe1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ3Nob3J0bGlzdGVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0U3RhdHVzKCdyZXZpZXcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaFN1Ym1pc3Npb25EYXRhKHN0YXR1cyk7XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoQXNzaWdubWVudERhdGEoKTtcclxuICAgICAgICAgICAgZmV0Y2hTdWJtaXNzaW9uRGF0YShzdGF0dXMpO1xyXG4gICAgICAgIH07IFxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmFja2dyb3VuZCBmbGV4IHctWzEwMHZ3XSBoLVsxMDB2aF0nPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIHsvKiBNYWluIEJvYXJkIFNlY3Rpb24gICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC1bMXJlbV0gdy1bMTAwJV0nPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhciBkYXRhPXthc3NpZ25tZW50RGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgPEFzc2lnbm1lbnRDYXJkIGFzc2lnbm1lbnREYXRhPXthc3NpZ25tZW50RGF0YX0gc3VibWlzc2lvbnNEYXRhPXtzdWJtaXNzaW9uRGF0YX0gaGFuZGxlU3RhdHVzQ2hhbmdlPXtoYW5kbGVTdGF0dXNDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXIiLCJGb290ZXIiLCJOYXZiYXIiLCJBc3NpZ25tZW50Q2FyZCIsImdldEFzc2lnbm1lbnREYXRhIiwiZ2V0U3VibWlzc2lvbkRhdGEiLCJEYXNoYm9hcmQiLCJhc3NpZ25tZW50RGF0YSIsInNldEFzc2lnbm1lbnREYXRhIiwic3VibWlzc2lvbkRhdGEiLCJzZXRTdWJtaXNzaW9uRGF0YSIsInN0YXR1cyIsInNldFN0YXR1cyIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJmZXRjaEFzc2lnbm1lbnREYXRhIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hTdWJtaXNzaW9uRGF0YSIsImhhbmRsZVN0YXR1c0NoYW5nZSIsImZldGNoRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInN1Ym1pc3Npb25zRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});