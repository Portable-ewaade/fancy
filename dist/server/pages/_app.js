/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./analytics.js":
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initGA: () => (/* binding */ initGA),\n/* harmony export */   logPageView: () => (/* binding */ logPageView)\n/* harmony export */ });\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initGA = ()=>{\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default().initialize(\"G-YE9SJBBG4L\"); // Replace with your tracking ID\n};\nconst logPageView = ()=>{\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default().set({\n        page: window.location.pathname\n    });\n    react_ga__WEBPACK_IMPORTED_MODULE_0___default().pageview(window.location.pathname);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmFseXRpY3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUV4QixNQUFNQyxTQUFTO0lBQ3BCRCwwREFBa0IsQ0FBQyxpQkFBaUIsZ0NBQWdDO0FBQ3RFLEVBQUU7QUFFSyxNQUNMRyxjQUFjO0lBQ2RILG1EQUFXLENBQUM7UUFBRUssTUFBTUMsT0FBT0MsUUFBUSxDQUFDQyxRQUFRO0lBQUM7SUFDN0NSLHdEQUFnQixDQUFDTSxPQUFPQyxRQUFRLENBQUNDLFFBQVE7QUFDM0MsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdGl2X2hlYWx0aC8uL2FuYWx5dGljcy5qcz9iZTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRHQSA9ICgpID0+IHtcclxuICBSZWFjdEdBLmluaXRpYWxpemUoXCJHLVlFOVNKQkJHNExcIik7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHRyYWNraW5nIElEXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3RcclxuICBsb2dQYWdlVmlldyA9ICgpID0+IHtcclxuICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KTtcclxuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdEdBIiwiaW5pdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./analytics.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_local_target_css_path_src_pages_app_js_import_arguments_src_path_fonts_myfont_a_otf_weight_400_style_normal_path_fonts_myfont_bold_otf_weight_700_style_normal_variableName_myFont___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"src\\\\pages\\\\_app.js\",\"import\":\"\",\"arguments\":[{\"src\":[{\"path\":\"../../fonts/myfont_a.otf\",\"weight\":\"400\",\"style\":\"normal\"},{\"path\":\"../../fonts/myfont_bold.otf\",\"weight\":\"700\",\"style\":\"normal\"}]}],\"variableName\":\"myFont\"} */ \"./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":[{\\\"path\\\":\\\"../../fonts/myfont_a.otf\\\",\\\"weight\\\":\\\"400\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"../../fonts/myfont_bold.otf\\\",\\\"weight\\\":\\\"700\\\",\\\"style\\\":\\\"normal\\\"}]}],\\\"variableName\\\":\\\"myFont\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_src_pages_app_js_import_arguments_src_path_fonts_myfont_a_otf_weight_400_style_normal_path_fonts_myfont_bold_otf_weight_700_style_normal_variableName_myFont___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_src_pages_app_js_import_arguments_src_path_fonts_myfont_a_otf_weight_400_style_normal_path_fonts_myfont_bold_otf_weight_700_style_normal_variableName_myFont___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../analytics */ \"./analytics.js\");\n// import \"@/styles/globals.css\";\n// import localFont from \"next/font/local\";\n// import \"animate.css\";\n// const myFont = localFont({\n//   src: [\n//     {\n//       path: \"../../fonts/myfont_a.otf\",\n//       weight: \"400\",\n//       style: \"normal\",\n//     },\n//     {\n//       path: \"../../fonts/myfont_bold.otf\",\n//       weight: \"700\",\n//       style: \"normal\",\n//     },\n//   ],\n// });\n// export default function App({ Component, pageProps }) {\n//   return (\n//     <main style={myFont.style}>\n//       <Component {...pageProps} />\n//     </main>\n//   );\n// }\n// _app.js (or _app.tsx for TypeScript)\n\n\n\n\n\n // Import the utility you created  \nfunction MyApp({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_analytics__WEBPACK_IMPORTED_MODULE_4__.initGA)(); // Initialize Google Analytics\n        (0,_analytics__WEBPACK_IMPORTED_MODULE_4__.logPageView)(); // Log the initial page view\n    // Add additional tracking logic as needed\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: (next_font_local_target_css_path_src_pages_app_js_import_arguments_src_path_fonts_myfont_a_otf_weight_400_style_normal_path_fonts_myfont_bold_otf_weight_700_style_normal_variableName_myFont___WEBPACK_IMPORTED_MODULE_5___default().style),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\KehindeAdetule\\\\Documents\\\\ninjas\\\\mhri\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\KehindeAdetule\\\\Documents\\\\ninjas\\\\mhri\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 60,\n        columnNumber: 11\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsMkNBQTJDO0FBQzNDLHdCQUF3QjtBQUV4Qiw2QkFBNkI7QUFDN0IsV0FBVztBQUNYLFFBQVE7QUFDUiwwQ0FBMEM7QUFDMUMsdUJBQXVCO0FBQ3ZCLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsUUFBUTtBQUNSLDZDQUE2QztBQUM3Qyx1QkFBdUI7QUFDdkIseUJBQXlCO0FBQ3pCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTTtBQUVOLDBEQUEwRDtBQUMxRCxhQUFhO0FBQ2Isa0NBQWtDO0FBQ2xDLHFDQUFxQztBQUNyQyxjQUFjO0FBQ2QsT0FBTztBQUNQLElBQUk7QUFJSix1Q0FBdUM7O0FBUWpDQTtBQVB3QjtBQUVUO0FBRWE7QUFDb0IsQ0FBQyxtQ0FBbUM7QUFnQjFGLFNBQVNJLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckNMLGdEQUFTQSxDQUFDO1FBQ1JDLGtEQUFNQSxJQUFJLDhCQUE4QjtRQUN4Q0MsdURBQVdBLElBQUksNEJBQTRCO0lBRTNDLDBDQUEwQztJQUM1QyxHQUFHLEVBQUU7SUFFTCxxQkFBUSw4REFBQ0k7UUFBS0MsT0FBT1IsNE9BQVk7a0JBQzdCLDRFQUFDSztZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRTlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3Rpdl9oZWFsdGgvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbi8vIGltcG9ydCBsb2NhbEZvbnQgZnJvbSBcIm5leHQvZm9udC9sb2NhbFwiO1xyXG4vLyBpbXBvcnQgXCJhbmltYXRlLmNzc1wiO1xyXG5cclxuLy8gY29uc3QgbXlGb250ID0gbG9jYWxGb250KHtcclxuLy8gICBzcmM6IFtcclxuLy8gICAgIHtcclxuLy8gICAgICAgcGF0aDogXCIuLi8uLi9mb250cy9teWZvbnRfYS5vdGZcIixcclxuLy8gICAgICAgd2VpZ2h0OiBcIjQwMFwiLFxyXG4vLyAgICAgICBzdHlsZTogXCJub3JtYWxcIixcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIHBhdGg6IFwiLi4vLi4vZm9udHMvbXlmb250X2JvbGQub3RmXCIsXHJcbi8vICAgICAgIHdlaWdodDogXCI3MDBcIixcclxuLy8gICAgICAgc3R5bGU6IFwibm9ybWFsXCIsXHJcbi8vICAgICB9LFxyXG4vLyAgIF0sXHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8bWFpbiBzdHlsZT17bXlGb250LnN0eWxlfT5cclxuLy8gICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4vLyAgICAgPC9tYWluPlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gX2FwcC5qcyAob3IgX2FwcC50c3ggZm9yIFR5cGVTY3JpcHQpXHJcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBsb2NhbEZvbnQgZnJvbSBcIm5leHQvZm9udC9sb2NhbFwiO1xyXG5pbXBvcnQgXCJhbmltYXRlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnLi4vLi4vYW5hbHl0aWNzJzsgLy8gSW1wb3J0IHRoZSB1dGlsaXR5IHlvdSBjcmVhdGVkICBcclxuXHJcbmNvbnN0IG15Rm9udCA9IGxvY2FsRm9udCh7XHJcbiAgc3JjOiBbXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwiLi4vLi4vZm9udHMvbXlmb250X2Eub3RmXCIsXHJcbiAgICAgIHdlaWdodDogXCI0MDBcIixcclxuICAgICAgc3R5bGU6IFwibm9ybWFsXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBcIi4uLy4uL2ZvbnRzL215Zm9udF9ib2xkLm90ZlwiLFxyXG4gICAgICB3ZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgIHN0eWxlOiBcIm5vcm1hbFwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59KTtcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRHQSgpOyAvLyBJbml0aWFsaXplIEdvb2dsZSBBbmFseXRpY3NcclxuICAgIGxvZ1BhZ2VWaWV3KCk7IC8vIExvZyB0aGUgaW5pdGlhbCBwYWdlIHZpZXdcclxuXHJcbiAgICAvLyBBZGQgYWRkaXRpb25hbCB0cmFja2luZyBsb2dpYyBhcyBuZWVkZWRcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAgPG1haW4gc3R5bGU9e215Rm9udC5zdHlsZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvbWFpbj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsibXlGb250IiwidXNlRWZmZWN0IiwiaW5pdEdBIiwibG9nUGFnZVZpZXciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1haW4iLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ga");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/animate.css"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();