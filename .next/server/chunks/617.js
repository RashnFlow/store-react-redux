"use strict";
exports.id = 617;
exports.ids = [617];
exports.modules = {

/***/ 211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w5": () => (/* binding */ cardReucer),
/* harmony export */   "Lb": () => (/* binding */ cardActions)
/* harmony export */ });
/* unused harmony export cardSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [];
const cardSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, action)=>{
            state.push(action.payload);
        },
        removeItem: (state, action)=>{
            return state.filter((p)=>p.id !== action.payload.id
            );
        }
    }
});
const cardReucer = cardSlice.reducer;
const cardActions = cardSlice.actions;


/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ productApi),
/* harmony export */   "C": () => (/* binding */ useGetProductsQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const productApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: 'api/products',
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: 'https://fakestoreapi.com/'
    }),
    endpoints: (build)=>({
            getProducts: build.query({
                query: (limit = 5)=>`products?limit=${limit}`
            })
        })
});
const { useGetProductsQuery  } = productApi;


/***/ })

};
;