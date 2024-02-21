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

/***/ "./src/components/common/analytics.js":
/*!********************************************!*\
  !*** ./src/components/common/analytics.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GA_TRACKING_ID: () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   event: () => (/* binding */ event),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\n// import ReactGA from \"react-ga\";\nconst GA_TRACKING_ID = \"G-YE9SJBBG4L\"; //replace it with your measurement id\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action, category, label, value })=>{\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vYW5hbHl0aWNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtDQUFrQztBQUUzQixNQUFNQSxpQkFBaUIsZUFBZSxDQUFDLHFDQUFxQztBQUNuRiw0RUFBNEU7QUFDckUsTUFBTUMsV0FBVyxDQUFDQztJQUN2QkMsT0FBT0MsSUFBSSxDQUFDLFVBQVVKLGdCQUFnQjtRQUNwQ0ssV0FBV0g7SUFDYjtBQUNGLEVBQUU7QUFDRiw2RUFBNkU7QUFDdEUsTUFBTUksUUFBUSxDQUFDLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRTtJQUN0RFAsT0FBT0MsSUFBSSxDQUFDLFNBQVNHLFFBQVE7UUFDM0JJLGdCQUFnQkg7UUFDaEJJLGFBQWFIO1FBQ2JDLE9BQU9BO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW90aXZfaGVhbHRoLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2FuYWx5dGljcy5qcz8wN2NmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuXG5leHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBcIkctWUU5U0pCQkc0TFwiOyAvL3JlcGxhY2UgaXQgd2l0aCB5b3VyIG1lYXN1cmVtZW50IGlkXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3BhZ2VzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsKSA9PiB7XG4gIHdpbmRvdy5ndGFnKFwiY29uZmlnXCIsIEdBX1RSQUNLSU5HX0lELCB7XG4gICAgcGFnZV9wYXRoOiB1cmwsXG4gIH0pO1xufTtcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIGNhdGVnb3J5LCBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICB3aW5kb3cuZ3RhZyhcImV2ZW50XCIsIGFjdGlvbiwge1xuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICB9KTtcbn07Il0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/analytics.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_local_target_css_path_src_pages_app_js_import_arguments_src_path_fonts_myfont_a_otf_weight_400_style_normal_path_fonts_myfont_bold_otf_weight_700_style_normal_variableName_myFont___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"src/pages/_app.js\",\"import\":\"\",\"arguments\":[{\"src\":[{\"path\":\"../../fonts/myfont_a.otf\",\"weight\":\"400\",\"style\":\"normal\"},{\"path\":\"../../fonts/myfont_bold.otf\",\"weight\":\"700\",\"style\":\"normal\"}]}],\"variableName\":\"myFont\"} */ \"./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"src/pages/_app.js\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":[{\\\"path\\\":\\\"../../fonts/myfont_a.otf\\\",\\\"weight\\\":\\\"400\\\",\\\"style\\\":\\\"normal\\\"},{\\\"path\\\":\\\"../../fonts/myfont_bold.otf\\\",\\\"weight\\\":\\\"700\\\",\\\"style\\\":\\\"normal\\\"}]}],\\\"variableName\\\":\\\"myFont\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_src_pages_app_js_import_arguments_src_path_fonts_myfont_a_otf_weight_400_style_normal_path_fonts_myfont_bold_otf_weight_700_style_normal_variableName_myFont___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_src_pages_app_js_import_arguments_src_path_fonts_myfont_a_otf_weight_400_style_normal_path_fonts_myfont_bold_otf_weight_700_style_normal_variableName_myFont___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_common_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/analytics */ \"./src/components/common/analytics.js\");\n// import \"@/styles/globals.css\";\n// import localFont from \"next/font/local\";\n// import \"animate.css\";\n// const myFont = localFont({\n//   src: [\n//     {\n//       path: \"../../fonts/myfont_a.otf\",\n//       weight: \"400\",\n//       style: \"normal\",\n//     },\n//     {\n//       path: \"../../fonts/myfont_bold.otf\",\n//       weight: \"700\",\n//       style: \"normal\",\n//     },\n//   ],\n// });\n// export default function App({ Component, pageProps }) {\n//   return (\n//     <main style={myFont.style}>\n//       <Component {...pageProps} />\n//     </main>\n//   );\n// }\n// _app.js (or _app.tsx for TypeScript)\n\n\n\n\n\n\n\n// import { useEffect } from 'react';\n\n // Import the utility you created  \nfunction MyApp({ Component, pageProps }) {\n    // useEffect(() => {\n    //   initGA(); // Initialize Google Analytics\n    //   logPageView(); // Log the initial page view\n    //   // Add additional tracking logic as needed\n    // }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _components_common_analytics__WEBPACK_IMPORTED_MODULE_6__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: (next_font_local_target_css_path_src_pages_app_js_import_arguments_src_path_fonts_myfont_a_otf_weight_400_style_normal_path_fonts_myfont_bold_otf_weight_700_style_normal_variableName_myFont___WEBPACK_IMPORTED_MODULE_7___default().style),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        strategy: \"lazyOnload\",\n                        src: `https://www.googletagmanager.com/gtag/js?id=${_components_common_analytics__WEBPACK_IMPORTED_MODULE_6__.GA_TRACKING_ID}`\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/motive_health/src/pages/_app.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        id: \"google-analytics-script\",\n                        strategy: \"lazyOnload\",\n                        children: `\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', '${_components_common_analytics__WEBPACK_IMPORTED_MODULE_6__.GA_TRACKING_ID}', {\n          page_path: window.location.pathname,\n          });\n    `\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/motive_health/src/pages/_app.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/motive_health/src/pages/_app.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/motive_health/src/pages/_app.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBQ2pDLDJDQUEyQztBQUMzQyx3QkFBd0I7QUFFeEIsNkJBQTZCO0FBQzdCLFdBQVc7QUFDWCxRQUFRO0FBQ1IsMENBQTBDO0FBQzFDLHVCQUF1QjtBQUN2Qix5QkFBeUI7QUFDekIsU0FBUztBQUNULFFBQVE7QUFDUiw2Q0FBNkM7QUFDN0MsdUJBQXVCO0FBQ3ZCLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU07QUFFTiwwREFBMEQ7QUFDMUQsYUFBYTtBQUNiLGtDQUFrQztBQUNsQyxxQ0FBcUM7QUFDckMsY0FBYztBQUNkLE9BQU87QUFDUCxJQUFJO0FBSUosdUNBQXVDOztBQVdqQ0E7QUFWd0I7QUFFVDtBQUNtQjtBQUNQO0FBQ0M7QUFDbEMscUNBQXFDO0FBQ2lCO0FBQ2UsQ0FBQyxtQ0FBbUM7QUFnQnpHLFNBQVNPLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsb0JBQW9CO0lBQ3BCLDZDQUE2QztJQUM3QyxnREFBZ0Q7SUFFaEQsK0NBQStDO0lBQy9DLFVBQVU7SUFDVixNQUFNQyxTQUFTVCxzREFBU0E7SUFDeEJFLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsb0JBQW9CLENBQUNDO1lBQ3pCUixrRUFBYSxDQUFDUTtRQUNoQjtRQUNBRixPQUFPSSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJKO1FBQ3hDLE9BQU87WUFDTEQsT0FBT0ksTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCTDtRQUMzQztJQUNGLEdBQUc7UUFBQ0QsT0FBT0ksTUFBTTtLQUFDO0lBRWxCLHFCQUNFLDhEQUFDRztRQUFLQyxPQUFPbEIsNE9BQVk7OzBCQUN2Qjs7a0NBQ0UsOERBQUNFLG9EQUFNQTt3QkFDTGlCLFVBQVM7d0JBQ1RDLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRWhCLHdFQUFtQixDQUFDLENBQUM7Ozs7OztrQ0FFM0UsOERBQUNGLG9EQUFNQTt3QkFBQ29CLElBQUc7d0JBQTBCSCxVQUFTO2tDQUMzQyxDQUFDOzs7OzBCQUljLEVBQUVmLHdFQUFtQixDQUFDOzs7SUFHNUMsQ0FBQzs7Ozs7Ozs7MEJBR0MsOERBQUNJO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW90aXZfaGVhbHRoLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuLy8gaW1wb3J0IGxvY2FsRm9udCBmcm9tIFwibmV4dC9mb250L2xvY2FsXCI7XG4vLyBpbXBvcnQgXCJhbmltYXRlLmNzc1wiO1xuXG4vLyBjb25zdCBteUZvbnQgPSBsb2NhbEZvbnQoe1xuLy8gICBzcmM6IFtcbi8vICAgICB7XG4vLyAgICAgICBwYXRoOiBcIi4uLy4uL2ZvbnRzL215Zm9udF9hLm90ZlwiLFxuLy8gICAgICAgd2VpZ2h0OiBcIjQwMFwiLFxuLy8gICAgICAgc3R5bGU6IFwibm9ybWFsXCIsXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBwYXRoOiBcIi4uLy4uL2ZvbnRzL215Zm9udF9ib2xkLm90ZlwiLFxuLy8gICAgICAgd2VpZ2h0OiBcIjcwMFwiLFxuLy8gICAgICAgc3R5bGU6IFwibm9ybWFsXCIsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vIH0pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPG1haW4gc3R5bGU9e215Rm9udC5zdHlsZX0+XG4vLyAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgPC9tYWluPlxuLy8gICApO1xuLy8gfVxuXG5cblxuLy8gX2FwcC5qcyAob3IgX2FwcC50c3ggZm9yIFR5cGVTY3JpcHQpXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IGxvY2FsRm9udCBmcm9tIFwibmV4dC9mb250L2xvY2FsXCI7XG5pbXBvcnQgXCJhbmltYXRlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBndGFnIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9hbmFseXRpY3NcIlxuaW1wb3J0IHsgaW5pdEdBLCBsb2dQYWdlVmlldyB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL2FuYWx5dGljcyc7IC8vIEltcG9ydCB0aGUgdXRpbGl0eSB5b3UgY3JlYXRlZCAgXG5cbmNvbnN0IG15Rm9udCA9IGxvY2FsRm9udCh7XG4gIHNyYzogW1xuICAgIHtcbiAgICAgIHBhdGg6IFwiLi4vLi4vZm9udHMvbXlmb250X2Eub3RmXCIsXG4gICAgICB3ZWlnaHQ6IFwiNDAwXCIsXG4gICAgICBzdHlsZTogXCJub3JtYWxcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiLi4vLi4vZm9udHMvbXlmb250X2JvbGQub3RmXCIsXG4gICAgICB3ZWlnaHQ6IFwiNzAwXCIsXG4gICAgICBzdHlsZTogXCJub3JtYWxcIixcbiAgICB9LFxuICBdLFxufSk7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpbml0R0EoKTsgLy8gSW5pdGlhbGl6ZSBHb29nbGUgQW5hbHl0aWNzXG4gIC8vICAgbG9nUGFnZVZpZXcoKTsgLy8gTG9nIHRoZSBpbml0aWFsIHBhZ2Ugdmlld1xuXG4gIC8vICAgLy8gQWRkIGFkZGl0aW9uYWwgdHJhY2tpbmcgbG9naWMgYXMgbmVlZGVkXG4gIC8vIH0sIFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybCk7XG4gICAgfTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtteUZvbnQuc3R5bGV9PlxuICAgICAgPD5cbiAgICAgICAgPFNjcmlwdFxuICAgICAgICAgIHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke2d0YWcuR0FfVFJBQ0tJTkdfSUR9YH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNjcmlwdCBpZD1cImdvb2dsZS1hbmFseXRpY3Mtc2NyaXB0XCIgc3RyYXRlZ3k9XCJsYXp5T25sb2FkXCI+XG4gICAgICAgICAge2BcbiAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtndGFnLkdBX1RSQUNLSU5HX0lEfScsIHtcbiAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICB9KTtcbiAgICBgfVxuICAgICAgICA8L1NjcmlwdD5cbiAgICAgIDwvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsibXlGb250IiwidXNlUm91dGVyIiwiU2NyaXB0IiwidXNlRWZmZWN0IiwiZ3RhZyIsImluaXRHQSIsImxvZ1BhZ2VWaWV3IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInBhZ2V2aWV3IiwiZXZlbnRzIiwib24iLCJvZmYiLCJtYWluIiwic3R5bGUiLCJzdHJhdGVneSIsInNyYyIsIkdBX1RSQUNLSU5HX0lEIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/animate.css"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();