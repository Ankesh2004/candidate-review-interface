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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Sidebar/Sidebar */ \"./components/Sidebar/Sidebar.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Assignment/AssignmentCard */ \"./components/Assignment/AssignmentCard.tsx\");\n/* harmony import */ var _components_UserData_UserData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/UserData/UserData */ \"./components/UserData/UserData.tsx\");\n/* harmony import */ var services_apis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! services/apis */ \"./services/apis.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [assignmentData, setAssignmentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [submissionData, setSubmissionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"review\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentUserData, setCurrentUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const fetchAssignmentData = async ()=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_7__.getAssignmentData)();\n            setAssignmentData((response === null || response === void 0 ? void 0 : response.data) || []);\n            console.log(response);\n        } catch (error) {\n            console.log(\"Error while fetching assignment data\", error);\n        }\n    };\n    const fetchSubmissionData = async (status)=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_7__.getSubmissionData)(status);\n            setSubmissionData((response === null || response === void 0 ? void 0 : response.data) || []);\n        } catch (error) {\n            console.log(\"Error while fetching submission data\", error);\n        }\n    };\n    const fetchUserScoreData = async (assignmentId, user_id)=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_7__.getUserScoreData)(assignmentId, user_id);\n            setCurrentUserData((response === null || response === void 0 ? void 0 : response.data) || {});\n            console.log(\"Current user data\", response === null || response === void 0 ? void 0 : response.data);\n        } catch (error) {\n            console.log(\"Error while fetching user score data\", error);\n        }\n    };\n    const handleStatusChange = ()=>{\n        if (status === \"review\") {\n            setStatus(\"shortlisted\");\n        } else {\n            setStatus(\"review\");\n        }\n        fetchSubmissionData(status);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            var _submissionData_;\n            await fetchAssignmentData();\n            await fetchSubmissionData(status);\n            setUserId(((_submissionData_ = submissionData[0]) === null || _submissionData_ === void 0 ? void 0 : _submissionData_.id) || \"1\");\n            console.log(\"user id\", user_id);\n            console.log(\"assignment id\", assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.id);\n            fetchUserScoreData((assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.id) || \"\", user_id);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-background flex w-[100vw] h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[1rem] w-[100%] flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: assignmentData\n                    }, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[100%] flex flex-row gap-[1rem]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                assignmentData: assignmentData,\n                                submissionsData: submissionData,\n                                handleStatusChange: handleStatusChange,\n                                status: status\n                            }, void 0, false, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserData_UserData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                data: currentUserData\n                            }, void 0, false, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"2HPsutuT4TlCNsroUykVqS4d37E=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZSwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJ0AvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcic7XHJcbmltcG9ydCBBc3NpZ25tZW50Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQXNzaWdubWVudC9Bc3NpZ25tZW50Q2FyZCc7XHJcbmltcG9ydCBVc2VyRGF0YSBmcm9tICdAL2NvbXBvbmVudHMvVXNlckRhdGEvVXNlckRhdGEnO1xyXG5pbXBvcnQgeyBnZXRBc3NpZ25tZW50RGF0YSwgZ2V0U3VibWlzc2lvbkRhdGEsIGdldFVzZXJTY29yZURhdGEgfSBmcm9tICdzZXJ2aWNlcy9hcGlzJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthc3NpZ25tZW50RGF0YSwgc2V0QXNzaWdubWVudERhdGFdID0gdXNlU3RhdGU8YW55Pih7fSlcclxuICAgIGNvbnN0IFtzdWJtaXNzaW9uRGF0YSwgc2V0U3VibWlzc2lvbkRhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKVxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJ3JldmlldycpO1xyXG4gICAgY29uc3QgW3VzZXJfaWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlckRhdGEsIHNldEN1cnJlbnRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcclxuICAgIGNvbnN0IGZldGNoQXNzaWdubWVudERhdGEgPSBhc3luYygpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QXNzaWdubWVudERhdGEoKTtcclxuICAgICAgICAgICAgc2V0QXNzaWdubWVudERhdGEocmVzcG9uc2U/LmRhdGEgfHwgW10pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igd2hpbGUgZmV0Y2hpbmcgYXNzaWdubWVudCBkYXRhJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGZldGNoU3VibWlzc2lvbkRhdGEgPSBhc3luYyhzdGF0dXM6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFN1Ym1pc3Npb25EYXRhKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIHNldFN1Ym1pc3Npb25EYXRhKHJlc3BvbnNlPy5kYXRhIHx8IFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igd2hpbGUgZmV0Y2hpbmcgc3VibWlzc2lvbiBkYXRhJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGZldGNoVXNlclNjb3JlRGF0YSA9IGFzeW5jKGFzc2lnbm1lbnRJZDpzdHJpbmcsdXNlcl9pZDpzdHJpbmcpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0VXNlclNjb3JlRGF0YShhc3NpZ25tZW50SWQsdXNlcl9pZCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRVc2VyRGF0YShyZXNwb25zZT8uZGF0YSB8fCB7fSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB1c2VyIGRhdGFcIixyZXNwb25zZT8uZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHdoaWxlIGZldGNoaW5nIHVzZXIgc2NvcmUgZGF0YScsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdGF0dXNDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc3RhdHVzID09PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cygnc2hvcnRsaXN0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ3JldmlldycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoU3VibWlzc2lvbkRhdGEoc3RhdHVzKTtcclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2hBc3NpZ25tZW50RGF0YSgpO1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaFN1Ym1pc3Npb25EYXRhKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIHNldFVzZXJJZChzdWJtaXNzaW9uRGF0YVswXT8uaWQgfHwgJzEnKSBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlkXCIsdXNlcl9pZCk7ICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc3NpZ25tZW50IGlkXCIsYXNzaWdubWVudERhdGE/LmlkKTsgXHJcbiAgICAgICAgICAgIGZldGNoVXNlclNjb3JlRGF0YShhc3NpZ25tZW50RGF0YT8uaWQgfHwgJycsdXNlcl9pZCk7IFxyXG4gICAgICAgIH07IFxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmFja2dyb3VuZCBmbGV4IHctWzEwMHZ3XSBoLVsxMDB2aF0nPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIHsvKiBNYWluIEJvYXJkIFNlY3Rpb24gICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC1bMXJlbV0gdy1bMTAwJV0gZmxleCBmbGV4LWNvbCc+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIGRhdGE9e2Fzc2lnbm1lbnREYXRhfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bMTAwJV0gZmxleCBmbGV4LXJvdyBnYXAtWzFyZW1dJz5cclxuICAgICAgICAgICAgICAgICAgICA8QXNzaWdubWVudENhcmQgYXNzaWdubWVudERhdGE9e2Fzc2lnbm1lbnREYXRhfSBzdWJtaXNzaW9uc0RhdGE9e3N1Ym1pc3Npb25EYXRhfSBoYW5kbGVTdGF0dXNDaGFuZ2U9e2hhbmRsZVN0YXR1c0NoYW5nZX0gc3RhdHVzPXtzdGF0dXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8VXNlckRhdGEgZGF0YT17Y3VycmVudFVzZXJEYXRhfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhciIsIkZvb3RlciIsIk5hdmJhciIsIkFzc2lnbm1lbnRDYXJkIiwiVXNlckRhdGEiLCJnZXRBc3NpZ25tZW50RGF0YSIsImdldFN1Ym1pc3Npb25EYXRhIiwiZ2V0VXNlclNjb3JlRGF0YSIsIkRhc2hib2FyZCIsImFzc2lnbm1lbnREYXRhIiwic2V0QXNzaWdubWVudERhdGEiLCJzdWJtaXNzaW9uRGF0YSIsInNldFN1Ym1pc3Npb25EYXRhIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlcl9pZCIsInNldFVzZXJJZCIsImN1cnJlbnRVc2VyRGF0YSIsInNldEN1cnJlbnRVc2VyRGF0YSIsImZldGNoQXNzaWdubWVudERhdGEiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmZXRjaFN1Ym1pc3Npb25EYXRhIiwiZmV0Y2hVc2VyU2NvcmVEYXRhIiwiYXNzaWdubWVudElkIiwiaGFuZGxlU3RhdHVzQ2hhbmdlIiwiZmV0Y2hEYXRhIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdWJtaXNzaW9uc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});