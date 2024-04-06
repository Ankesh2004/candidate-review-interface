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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Sidebar/Sidebar */ \"./components/Sidebar/Sidebar.tsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer/Footer */ \"./components/Footer/Footer.tsx\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Assignment/AssignmentCard */ \"./components/Assignment/AssignmentCard.tsx\");\n/* harmony import */ var _components_UserData_UserData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/UserData/UserData */ \"./components/UserData/UserData.tsx\");\n/* harmony import */ var services_apis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! services/apis */ \"./services/apis.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [assignmentData, setAssignmentData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [submissionData, setSubmissionData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"review\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentUserData, setCurrentUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const fetchAssignmentData = async ()=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_7__.getAssignmentData)();\n            setAssignmentData((response === null || response === void 0 ? void 0 : response.data) || []);\n            console.log(response);\n        } catch (error) {\n            console.log(\"Error while fetching assignment data\", error);\n        }\n    };\n    const fetchSubmissionData = async (status)=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_7__.getSubmissionData)(status);\n            setSubmissionData((response === null || response === void 0 ? void 0 : response.data) || []);\n        } catch (error) {\n            console.log(\"Error while fetching submission data\", error);\n        }\n    };\n    const fetchUserScoreData = async (assignmentId, user_id)=>{\n        try {\n            const response = await (0,services_apis__WEBPACK_IMPORTED_MODULE_7__.getUserScoreData)(assignmentId, user_id);\n            setCurrentUserData((response === null || response === void 0 ? void 0 : response.data) || {});\n            console.log(\"Current user data\", response === null || response === void 0 ? void 0 : response.data);\n        } catch (error) {\n            console.log(\"Error while fetching user score data\", error);\n        }\n    };\n    const handleStatusChange = (newStatus)=>{\n        if (newStatus === status) {\n            return;\n        }\n        if (status === \"review\") {\n            setStatus(\"shortlisted\");\n        } else {\n            setStatus(\"review\");\n        }\n        fetchSubmissionData(status);\n    };\n    const handleUserChange = (id)=>{\n        setUserId(id);\n        fetchUserScoreData((assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.id) || \"assignment123\", id);\n        console.log(\"New user id\", user_id);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            var _submissionData_;\n            await fetchAssignmentData();\n            await fetchSubmissionData(status);\n            setUserId(((_submissionData_ = submissionData[0]) === null || _submissionData_ === void 0 ? void 0 : _submissionData_.id) || \"1\");\n            console.log(\"user id\", user_id);\n            console.log(\"assignment id\", assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.id);\n            fetchUserScoreData((assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.id) || \"assignment123\", user_id);\n            setLoading(false);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 25\n            }, undefined),\n            !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-background flex w-[100vw] h-[100vh]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-[1rem] w-[100%] flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                data: assignmentData\n                            }, void 0, false, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-[100%] flex flex-row gap-[1rem]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Assignment_AssignmentCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        assignmentData: assignmentData,\n                                        submissionsData: submissionData,\n                                        handleStatusChange: handleStatusChange,\n                                        status: status,\n                                        handleUserChange: handleUserChange,\n                                        user_id: user_id\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserData_UserData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        data: currentUserData\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\pages\\\\index.tsx\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"mIZsOdr8xpRqYiK544uyzFZqWC0=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUVBQU9BOzs7OztrQ0FDUiw4REFBQ0MsaUVBQU1BOzs7OztrQ0FFUCw4REFBQ2tDO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ2xDLGlFQUFNQTtnQ0FBQ3FCLE1BQU1kOzs7Ozs7MENBQ2QsOERBQUMwQjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNqQyw2RUFBY0E7d0NBQUNNLGdCQUFnQkE7d0NBQWdCNEIsaUJBQWlCMUI7d0NBQWdCbUIsb0JBQW9CQTt3Q0FBb0JqQixRQUFRQTt3Q0FDakltQixrQkFBa0JBO3dDQUFrQmpCLFNBQVNBOzs7Ozs7a0RBQzdDLDhEQUFDWCxxRUFBUUE7d0NBQUNtQixNQUFNTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BDO0dBeEZNVDtLQUFBQTtBQTBGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZSwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJ0AvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcic7XHJcbmltcG9ydCBBc3NpZ25tZW50Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQXNzaWdubWVudC9Bc3NpZ25tZW50Q2FyZCc7XHJcbmltcG9ydCBVc2VyRGF0YSBmcm9tICdAL2NvbXBvbmVudHMvVXNlckRhdGEvVXNlckRhdGEnO1xyXG5pbXBvcnQgeyBnZXRBc3NpZ25tZW50RGF0YSwgZ2V0U3VibWlzc2lvbkRhdGEsIGdldFVzZXJTY29yZURhdGEgfSBmcm9tICdzZXJ2aWNlcy9hcGlzJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFthc3NpZ25tZW50RGF0YSwgc2V0QXNzaWdubWVudERhdGFdID0gdXNlU3RhdGU8YW55Pih7fSlcclxuICAgIGNvbnN0IFtzdWJtaXNzaW9uRGF0YSwgc2V0U3VibWlzc2lvbkRhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKVxyXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJ3JldmlldycpO1xyXG4gICAgY29uc3QgW3VzZXJfaWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlckRhdGEsIHNldEN1cnJlbnRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgZmV0Y2hBc3NpZ25tZW50RGF0YSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRBc3NpZ25tZW50RGF0YSgpO1xyXG4gICAgICAgICAgICBzZXRBc3NpZ25tZW50RGF0YShyZXNwb25zZT8uZGF0YSB8fCBbXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBmZXRjaGluZyBhc3NpZ25tZW50IGRhdGEnLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZmV0Y2hTdWJtaXNzaW9uRGF0YSA9IGFzeW5jKHN0YXR1czpzdHJpbmcpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0U3VibWlzc2lvbkRhdGEoc3RhdHVzKTtcclxuICAgICAgICAgICAgc2V0U3VibWlzc2lvbkRhdGEocmVzcG9uc2U/LmRhdGEgfHwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBmZXRjaGluZyBzdWJtaXNzaW9uIGRhdGEnLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZmV0Y2hVc2VyU2NvcmVEYXRhID0gYXN5bmMoYXNzaWdubWVudElkOnN0cmluZyx1c2VyX2lkOnN0cmluZykgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRVc2VyU2NvcmVEYXRhKGFzc2lnbm1lbnRJZCx1c2VyX2lkKTtcclxuICAgICAgICAgICAgc2V0Q3VycmVudFVzZXJEYXRhKHJlc3BvbnNlPy5kYXRhIHx8IHt9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHVzZXIgZGF0YVwiLHJlc3BvbnNlPy5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3Igd2hpbGUgZmV0Y2hpbmcgdXNlciBzY29yZSBkYXRhJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN0YXR1c0NoYW5nZSA9IChuZXdTdGF0dXMpID0+IHtcclxuICAgICAgICBpZihuZXdTdGF0dXMgPT09IHN0YXR1cyl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RhdHVzID09PSAncmV2aWV3Jyl7XHJcbiAgICAgICAgICAgIHNldFN0YXR1cygnc2hvcnRsaXN0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRTdGF0dXMoJ3JldmlldycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoU3VibWlzc2lvbkRhdGEoc3RhdHVzKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVVc2VyQ2hhbmdlID0gKGlkOnN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldFVzZXJJZChpZCk7XHJcbiAgICAgICAgZmV0Y2hVc2VyU2NvcmVEYXRhKGFzc2lnbm1lbnREYXRhPy5pZCB8fCAnYXNzaWdubWVudDEyMycsaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IHVzZXIgaWRcIix1c2VyX2lkKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2hBc3NpZ25tZW50RGF0YSgpO1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaFN1Ym1pc3Npb25EYXRhKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIHNldFVzZXJJZChzdWJtaXNzaW9uRGF0YVswXT8uaWQgfHwgJzEnKSBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlkXCIsdXNlcl9pZCk7ICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc3NpZ25tZW50IGlkXCIsYXNzaWdubWVudERhdGE/LmlkKTsgXHJcbiAgICAgICAgICAgIGZldGNoVXNlclNjb3JlRGF0YShhc3NpZ25tZW50RGF0YT8uaWQgfHwgJ2Fzc2lnbm1lbnQxMjMnLHVzZXJfaWQpOyBcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfTsgXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgeyFsb2FkaW5nICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1iYWNrZ3JvdW5kIGZsZXggdy1bMTAwdnddIGgtWzEwMHZoXSc+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgey8qIE1haW4gQm9hcmQgU2VjdGlvbiAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLVsxcmVtXSB3LVsxMDAlXSBmbGV4IGZsZXgtY29sJz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgZGF0YT17YXNzaWdubWVudERhdGF9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVsxMDAlXSBmbGV4IGZsZXgtcm93IGdhcC1bMXJlbV0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBc3NpZ25tZW50Q2FyZCBhc3NpZ25tZW50RGF0YT17YXNzaWdubWVudERhdGF9IHN1Ym1pc3Npb25zRGF0YT17c3VibWlzc2lvbkRhdGF9IGhhbmRsZVN0YXR1c0NoYW5nZT17aGFuZGxlU3RhdHVzQ2hhbmdlfSBzdGF0dXM9e3N0YXR1c30gXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVXNlckNoYW5nZT17aGFuZGxlVXNlckNoYW5nZX0gdXNlcl9pZD17dXNlcl9pZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyRGF0YSBkYXRhPXtjdXJyZW50VXNlckRhdGF9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhciIsIkZvb3RlciIsIk5hdmJhciIsIkFzc2lnbm1lbnRDYXJkIiwiVXNlckRhdGEiLCJnZXRBc3NpZ25tZW50RGF0YSIsImdldFN1Ym1pc3Npb25EYXRhIiwiZ2V0VXNlclNjb3JlRGF0YSIsIkRhc2hib2FyZCIsImFzc2lnbm1lbnREYXRhIiwic2V0QXNzaWdubWVudERhdGEiLCJzdWJtaXNzaW9uRGF0YSIsInNldFN1Ym1pc3Npb25EYXRhIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlcl9pZCIsInNldFVzZXJJZCIsImN1cnJlbnRVc2VyRGF0YSIsInNldEN1cnJlbnRVc2VyRGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hBc3NpZ25tZW50RGF0YSIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZldGNoU3VibWlzc2lvbkRhdGEiLCJmZXRjaFVzZXJTY29yZURhdGEiLCJhc3NpZ25tZW50SWQiLCJoYW5kbGVTdGF0dXNDaGFuZ2UiLCJuZXdTdGF0dXMiLCJoYW5kbGVVc2VyQ2hhbmdlIiwiaWQiLCJmZXRjaERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJzdWJtaXNzaW9uc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});