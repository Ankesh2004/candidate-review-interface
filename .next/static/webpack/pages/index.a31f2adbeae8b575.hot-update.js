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

/***/ "./components/UserData/UserVideos.tsx":
/*!********************************************!*\
  !*** ./components/UserData/UserVideos.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var public_user_video_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/user_video.mp4 */ \"./public/user_video.mp4\");\n/* harmony import */ var public_user_video_mp4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_user_video_mp4__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _QuestionBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionBar */ \"./components/UserData/QuestionBar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UserVideos = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [playing, setPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [video, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((public_user_video_mp4__WEBPACK_IMPORTED_MODULE_2___default()));\n    const handleVideoClick = ()=>{\n        if (videoRef.current) {\n            const video = videoRef.current;\n            if (video.paused) {\n                video.play();\n                setPlaying(true);\n            } else {\n                video.pause();\n                setPlaying(false);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-[50%] flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                ref: videoRef,\n                width: 200,\n                height: 200,\n                src: (public_user_video_mp4__WEBPACK_IMPORTED_MODULE_2___default()),\n                onClick: handleVideoClick,\n                className: \"rounded-xl shadow-lg\"\n            }, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\UserData\\\\UserVideos.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\UserData\\\\UserVideos.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\E DRIVE\\\\WebD\\\\Self Projects\\\\project\\\\components\\\\UserData\\\\UserVideos.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserVideos, \"EkzMefprQzpylpXylt3x6a7laeg=\");\n_c = UserVideos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserVideos);\nvar _c;\n$RefreshReg$(_c, \"UserVideos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJEYXRhL1VzZXJWaWRlb3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRDtBQUNEO0FBR1A7QUFFeEMsTUFBTUssYUFBYTs7SUFDakIsTUFBTUMsV0FBV0wsNkNBQU1BLENBQW1CO0lBQzFDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUNDLDhEQUFVQTtJQUU3QyxNQUFNUSxtQkFBbUI7UUFDdkIsSUFBSUwsU0FBU00sT0FBTyxFQUFFO1lBQ3BCLE1BQU1ILFFBQVFILFNBQVNNLE9BQU87WUFDOUIsSUFBSUgsTUFBTUksTUFBTSxFQUFFO2dCQUNoQkosTUFBTUssSUFBSTtnQkFDVk4sV0FBVztZQUNiLE9BQU87Z0JBQ0xDLE1BQU1NLEtBQUs7Z0JBQ1hQLFdBQVc7WUFDYjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNSO2dCQUNDUyxLQUFLWjtnQkFDTGEsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsS0FBS2xCLDhEQUFVQTtnQkFDZm1CLFNBQVNYO2dCQUNUTSxXQUFVOzs7Ozs7MEJBRVosOERBQUNiLG9EQUFXQTs7Ozs7Ozs7Ozs7QUFHbEI7R0FoQ01DO0tBQUFBO0FBa0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlckRhdGEvVXNlclZpZGVvcy50c3g/NDIwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlcl92aWRlbyBmcm9tIFwicHVibGljL3VzZXJfdmlkZW8ubXA0XCI7XHJcbmltcG9ydCBQbGF5Q2lyY2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9QbGF5Q2lyY2xlXCI7XHJcbmltcG9ydCBQYXVzZUNpcmNsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvUGF1c2VDaXJjbGVcIjtcclxuaW1wb3J0IFF1ZXN0aW9uQmFyIGZyb20gXCIuL1F1ZXN0aW9uQmFyXCI7XHJcblxyXG5jb25zdCBVc2VyVmlkZW9zID0gKCkgPT4ge1xyXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlkZW8sIHNldFZpZGVvXSA9IHVzZVN0YXRlKHVzZXJfdmlkZW8pO1xyXG5cclxuICBjb25zdCBoYW5kbGVWaWRlb0NsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgdmlkZW8gPSB2aWRlb1JlZi5jdXJyZW50O1xyXG4gICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgdmlkZW8ucGxheSgpO1xyXG4gICAgICAgIHNldFBsYXlpbmcodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuICAgICAgICBzZXRQbGF5aW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctWzUwJV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgXHJcbiAgICAgIDx2aWRlb1xyXG4gICAgICAgIHJlZj17dmlkZW9SZWZ9XHJcbiAgICAgICAgd2lkdGg9ezIwMH1cclxuICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICBzcmM9e3VzZXJfdmlkZW99XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlVmlkZW9DbGlja31cclxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHNoYWRvdy1sZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxRdWVzdGlvbkJhciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJWaWRlb3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlcl92aWRlbyIsIlF1ZXN0aW9uQmFyIiwiVXNlclZpZGVvcyIsInZpZGVvUmVmIiwicGxheWluZyIsInNldFBsYXlpbmciLCJ2aWRlbyIsInNldFZpZGVvIiwiaGFuZGxlVmlkZW9DbGljayIsImN1cnJlbnQiLCJwYXVzZWQiLCJwbGF5IiwicGF1c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserData/UserVideos.tsx\n"));

/***/ })

});