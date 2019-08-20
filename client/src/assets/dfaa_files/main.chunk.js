(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/App.sass":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/App.sass ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:100,300,400&display=swap);", ""]);

// Module
exports.push([module.i, "body {\n  font-family: 'Roboto Mono', monospace; }\n\ninput {\n  background: none;\n  border: none;\n  outline: none;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1em;\n  font-weight: 300; }\n\nbutton {\n  background: none;\n  border: none;\n  outline: none;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1em;\n  font-weight: 300; }\n\n.App {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  overflow: hidden !important;\n  position: relative; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/add.sass":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/add.sass ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=EB+Garamond&display=swap);", ""]);

// Module
exports.push([module.i, ".hide {\n  display: none !important; }\n\n.copy {\n  align-self: flex-end;\n  position: absolute;\n  top: 130px;\n  background-color: black;\n  padding: 5px;\n  color: white;\n  text-align: center;\n  font-size: 0.9em;\n  z-index: 2;\n  animation: 0.5s ease; }\n\n.add {\n  display: block;\n  justify-self: flex-end;\n  opacity: 0.9;\n  margin: 0 10px 0 -10px; }\n  .add-btn {\n    color: red;\n    font-family: \"Roboto Mono\", monospace;\n    font-size: 1em;\n    font-weight: 300;\n    opacity: 0.9;\n    align-self: baseline;\n    z-index: 0;\n    cursor: pointer;\n    transition: 0.5s ease; }\n    .add-btn:hover {\n      background-color: #F0F0F0;\n      box-shadow: -2px 2px black; }\n    .add-btn.active {\n      background-color: #F0F0F0;\n      border-radius: 5px 0 0 0;\n      box-shadow: -2px 2px black;\n      color: black; }\n  .add__hidden {\n    position: absolute;\n    max-width: 70vw;\n    min-width: 230px;\n    transition: 0.5s ease;\n    background-color: #F0F0F0;\n    opacity: 0.9;\n    border-radius: 0 5px 5px 5px;\n    box-shadow: -2px 2px black;\n    font-family: \"Roboto Mono\", monospace;\n    font-size: 0.8em;\n    font-weight: 300;\n    display: flex;\n    flex-direction: column;\n    padding: 25px 15px 15px 15px;\n    z-index: 2;\n    animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both; }\n    .add__hidden.exit {\n      animation: swing-out-top-bck 0.45s cubic-bezier(0.6, -0.28, 0.735, 0.045) both; }\n    .add__hidden-item {\n      text-decoration: none;\n      cursor: pointer;\n      color: black;\n      transition: 0.5s ease; }\n      .add__hidden-item:hover {\n        color: red; }\n      .add__hidden-item.results {\n        padding: 10px;\n        margin-top: 0;\n        cursor: auto;\n        font-size: 0.9em;\n        color: black;\n        background-color: #E0e0e0;\n        cursor: pointer; }\n      .add__hidden-item.translation {\n        color: black;\n        cursor: default;\n        background-color: #E0e0e0;\n        padding-left: 5px;\n        margin-bottom: 0px;\n        border: 1px solid black;\n        border-bottom: none;\n        width: 30px; }\n      .add__hidden-item.input {\n        cursor: auto;\n        color: red;\n        background-color: #E0e0e0;\n        border: 1px solid black;\n        padding: 5px; }\n        .add__hidden-item.input:focus {\n          border-bottom: 1px solid red; }\n      .add__hidden-item.searching {\n        color: red; }\n\n@keyframes swing-in-top-fwd {\n  0% {\n    transform: rotateX(100deg);\n    transform-origin: top;\n    opacity: 0; }\n  100% {\n    transform: rotateX(0);\n    transform-origin: top;\n    opacity: 1; } }\n\n@keyframes swing-out-top-bck {\n  0% {\n    transform: rotateX(0);\n    transform-origin: top;\n    opacity: 1; }\n  100% {\n    transform: rotateX(100deg);\n    transform-origin: top;\n    opacity: 0; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/checkout.sass":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/checkout.sass ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".checkout {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  background-color: #F3F3F3;\n  overflow: hidden !important;\n  animation: fade-in 0.5s both; }\n  .checkout.exit {\n    animation: fade-out 0.5s both; }\n  .checkout__left {\n    width: 60%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    @media (max-width: 900px) {\n      .checkout__left {\n        width: 100%;\n        height: 60%; } }\n    .checkout__left-back {\n      position: absolute;\n      bottom: 2%;\n      left: 3%;\n      font-weight: 300;\n      letter-spacing: 5px;\n      font-size: 0.9em;\n      text-align: center;\n      color: black;\n      border: 1px solid black;\n      padding: 5px;\n      padding-left: 10px;\n      cursor: pointer;\n      transition: 0.5s ease; }\n      @media (max-width: 900px) {\n        .checkout__left-back {\n          top: 2%;\n          bottom: auto;\n          right: 3%;\n          left: auto;\n          font-size: 1em;\n          padding: 5px;\n          padding-left: 10px; } }\n      .checkout__left-back:hover {\n        background-color: red; }\n    .checkout__left__heading {\n      position: absolute;\n      left: 3%;\n      top: 2%;\n      height: 200px; }\n      .checkout__left__heading-title {\n        font-weight: 100;\n        letter-spacing: 10px;\n        font-size: 1.2em; }\n      .checkout__left__heading-header {\n        font-weight: 300;\n        letter-spacing: 9px;\n        font-size: 1em;\n        margin-top: -20px; }\n  .checkout__interior {\n    position: absolute;\n    right: 0;\n    top: 0;\n    background-color: white;\n    width: 40%;\n    height: 100vh;\n    font-size: 0.9em;\n    opacity: 0.8;\n    padding: 1% 1% 1% 2%;\n    box-sizing: border-box;\n    animation: slide-in-right 1s ease forwards; }\n    @media (max-width: 900px) {\n      .checkout__interior {\n        bottom: 0;\n        left: 0;\n        top: auto;\n        width: 100vw;\n        height: 45%;\n        display: flex;\n        flex-direction: column;\n        font-size: 0.8em;\n        animation: slide-in-up 1s ease forwards; } }\n    .checkout__interior-header {\n      color: red; }\n      @media (max-width: 900px) {\n        .checkout__interior-header {\n          position: absolute;\n          top: -7px; } }\n    .checkout__interior-journal {\n      height: 68vh;\n      overflow-x: hidden; }\n      @media (max-width: 900px) {\n        .checkout__interior-journal {\n          height: 90%;\n          width: 100%;\n          margin-top: 20px;\n          align-self: flex-end;\n          border-top: 1px dashed black;\n          border-bottom: 1px dashed black; } }\n      .checkout__interior-journal::-webkit-scrollbar {\n        background: none;\n        border: 1px solid grey;\n        width: 0.5em; }\n      .checkout__interior-journal::-webkit-scrollbar-thumb {\n        background-color: black; }\n      .checkout__interior-journal-text {\n        margin: 30px 0;\n        font-weight: 300; }\n    .checkout__interior__checkout {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      margin-right: 25px;\n      font-weight: 300; }\n      @media (max-width: 900px) {\n        .checkout__interior__checkout {\n          margin-right: 0;\n          margin-bottom: 5px; } }\n      .checkout__interior__checkout-header {\n        grid-column: 1 / span 2;\n        color: red;\n        font-weight: 500; }\n      @media (max-width: 900px) {\n        .checkout__interior__checkout-item {\n          margin: 0; } }\n      .checkout__interior__checkout-price {\n        justify-self: flex-end; }\n        @media (max-width: 900px) {\n          .checkout__interior__checkout-price {\n            margin: 0; } }\n        .checkout__interior__checkout-price.total {\n          color: red;\n          font-weight: 500; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes slide-in-right {\n  0% {\n    transform: translateX(100%);\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    transform: translateX(0%); } }\n\n@keyframes slide-in-up {\n  0% {\n    transform: translateY(100%);\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    transform: translateY(0%); } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/elysian.sass":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/elysian.sass ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".elysian {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden !important; }\n  .elysian-toggleSide {\n    min-width: 10px;\n    height: 100vh;\n    border: 1px solid black;\n    background: white;\n    cursor: pointer;\n    transition: 0.5s ease; }\n    .elysian-toggleSide:hover {\n      background-color: black; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/index.sass":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/index.sass ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/login.sass":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/login.sass ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".login {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  font-size: 1em;\n  z-index: 1;\n  background-color: #fff;\n  opacity: 0.8;\n  overflow: hidden; }\n  .login.exit {\n    animation: fade-out 1s ease-out both; }\n  .login-title {\n    font-size: 5em;\n    letter-spacing: 0.6em;\n    font-weight: 100;\n    color: black;\n    margin-right: -0.6em;\n    z-index: 1;\n    animation: fade-in 1.5s ease-out forwards, fade-out 1s ease-out 2s forwards; }\n  .login__form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    opacity: 0;\n    z-index: 2;\n    animation: fade-in 1.5s ease-out 3.5s forwards; }\n  .login-subtitle {\n    font-weight: 100;\n    width: 600px;\n    text-align: center; }\n  .login-input {\n    padding: 10px;\n    background-color: #F5F5F5;\n    margin-bottom: 20px;\n    width: 300px; }\n    .login-input::placeholder {\n      color: grey; }\n  .login-google {\n    color: red;\n    text-align: center;\n    cursor: pointer; }\n  .login-login {\n    text-align: center;\n    cursor: pointer; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 0.9; }\n  100% {\n    opacity: 0;\n    display: none; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/section.sass":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/section.sass ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".dynamicContainer {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box; }\n\n.section {\n  font-size: 1em;\n  font-weight: 300;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  max-width: 1100px;\n  width: 50%;\n  height: 100%;\n  padding: 1% 3%;\n  border: 1px solid white;\n  position: relative;\n  z-index: 2;\n  background-color: white;\n  animation: fade-in 1s ease-out both;\n  transition: 1.5s ease; }\n  .section:hover {\n    border: 1px solid grey; }\n  .section-header {\n    color: red;\n    letter-spacing: 3px;\n    font-size: 0.9em; }\n    @media (max-width: 600px) {\n      .section-header {\n        max-width: 290px;\n        word-wrap: break-word; } }\n  .section-date {\n    color: red;\n    position: absolute;\n    right: 3%;\n    top: 1%; }\n  .section-title {\n    font-size: 2em;\n    letter-spacing: 5px;\n    width: 90%;\n    margin-left: 0px;\n    margin-bottom: 10px;\n    font-weight: 100; }\n    .section-title::placeholder {\n      color: #333333; }\n  .section-btn {\n    border: 1px solid red;\n    color: red;\n    font-size: 0.8em;\n    width: 160px;\n    margin-right: 23px;\n    margin-bottom: 15px;\n    transition: 0.3s ease;\n    cursor: pointer; }\n    .section-btn:hover {\n      background-color: grey;\n      color: white;\n      border: 1px solid grey; }\n  .section-link {\n    border: 1px solid red;\n    color: red;\n    font-size: 0.8em;\n    margin-bottom: 15px;\n    padding: 0px 10px;\n    width: 100%;\n    transition: 0.3s ease; }\n    .section-link::placeholder {\n      font-weight: 100;\n      color: black; }\n    @media (max-width: 900px) {\n      .section-link {\n        width: 80vw; } }\n  .section-undobtn {\n    position: absolute;\n    left: 0%;\n    bottom: 5%;\n    background-color: red;\n    border: 1px solid red;\n    color: white;\n    animation: fade-in 0.5s ease forwards;\n    cursor: pointer; }\n    .section-undobtn:hover {\n      background-color: white;\n      border: 1px solid black;\n      color: black; }\n    .section-undobtn.exit {\n      animation: fade-out 0.5s ease forwards; }\n  .section-savebtn {\n    position: absolute;\n    right: 3%;\n    bottom: 5%;\n    background-color: white;\n    border: 1px solid black;\n    color: black;\n    animation: fade-in 0.5s ease forwards;\n    cursor: pointer; }\n    .section-savebtn:hover {\n      background-color: red;\n      border: 1px solid black;\n      color: white; }\n  .section__form {\n    display: grid;\n    grid-template-columns: 30px 30px 30px 1fr;\n    margin-left: -25px; }\n    @media (max-width: 900px) {\n      .section__form {\n        margin-left: 0; } }\n    .section__form-input {\n      outline: none;\n      background: none;\n      border: 1px solid white;\n      width: 99%;\n      max-height: 70vh;\n      color: black;\n      font-family: \"Roboto Mono\", monospace;\n      font-size: 0.8em;\n      font-weight: 300;\n      word-wrap: true;\n      resize: none;\n      overflow-y: auto;\n      transition: 1.5s ease; }\n      .section__form-input::placeholder {\n        font-weight: 100;\n        color: black; }\n      .section__form-input::-webkit-scrollbar {\n        background-color: white;\n        border: 1px solid grey; }\n      .section__form-input::-webkit-scrollbar-thumb {\n        background-color: grey; }\n      .section__form-input:focus {\n        border: 1px solid grey; }\n    .section__form-subtract {\n      font-size: 1em;\n      font-weight: 300;\n      opacity: 0.9;\n      align-self: baseline;\n      z-index: 0;\n      cursor: pointer;\n      transition: 0.5s ease; }\n      .section__form-subtract:hover {\n        font-weight: 900; }\n    .section__form-newline {\n      width: 200px;\n      font-size: 0.8em;\n      color: grey;\n      margin-top: 10px;\n      transition: 0.5s ease;\n      cursor: pointer;\n      border: 1px dashed grey; }\n      .section__form-newline:hover {\n        background-color: grey;\n        color: white; }\n    .section__form-drag {\n      color: red;\n      font-family: \"Roboto Mono\", monospace;\n      font-size: 1em;\n      font-weight: 300;\n      margin-left: -10px;\n      opacity: 0.9;\n      align-self: baseline;\n      z-index: 0;\n      cursor: pointer;\n      transition: 0.5s ease; }\n      .section__form-drag:hover {\n        font-weight: 900; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/settings.sass":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/settings.sass ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".settings {\n  font-weight: 100;\n  margin: 1% 3%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  animation: fade-in 1s ease forwards; }\n  .settings-title {\n    font-size: 1.3em; }\n  .settings__form {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-column-gap: 20px; }\n    @media (max-width: 1500px) {\n      .settings__form {\n        grid-template-columns: 1fr;\n        grid-row-gap: 20px; } }\n    .settings__form-title {\n      grid-column: 1 / span 4; }\n      @media (max-width: 1500px) {\n        .settings__form-title {\n          grid-column: 1; } }\n    .settings__form-input {\n      background-color: #F5F5F5;\n      padding: 5px 10px;\n      width: 300px; }\n    .settings__form-submit {\n      text-align: center;\n      border: 1px solid black;\n      width: 160px; }\n      @media (max-width: 1500px) {\n        .settings__form-submit {\n          justify-self: flex-end; } }\n      .settings__form-submit:hover {\n        background-color: red;\n        color: white; }\n  .settings__links {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-column-gap: 100px;\n    grid-row-gap: 30px;\n    text-align: left; }\n    @media (max-width: 1500px) {\n      .settings__links {\n        grid-template-columns: 1fr;\n        grid-row-gap: 20px; } }\n    .settings__links-title {\n      grid-column: 1 / span 3;\n      margin-bottom: -10px; }\n      @media (max-width: 1500px) {\n        .settings__links-title {\n          grid-column: 1;\n          margin-bottom: 20px; } }\n    .settings__links-button {\n      text-align: left;\n      border: 1px solid black;\n      padding: 5px 10px; }\n      .settings__links-button:hover {\n        background-color: blue;\n        color: white; }\n      .settings__links-button.linked {\n        background-color: blue;\n        color: white; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/sidebar.sass":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./src/sass/sidebar.sass ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sidebar {\n  font-weight: 300;\n  font-size: 0.9em;\n  width: 200px;\n  height: 100%;\n  padding: 0 0 0 15px;\n  transition: 0.5s ease;\n  background-color: #F3F3F3;\n  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n  z-index: 1; }\n  .sidebar:hover {\n    background-color: #fff;\n    color: auto; }\n  .sidebar.exit {\n    animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards; }\n  @media (max-width: 900px) {\n    .sidebar {\n      color: auto;\n      padding: 0 10px;\n      box-sizing: border-box;\n      min-width: 42px !important;\n      max-width: 42px; } }\n  .sidebar__items {\n    display: grid;\n    grid-template-columns: 20px 180px;\n    grid-row-gap: 20px;\n    align-items: center; }\n    @media (max-width: 900px) {\n      .sidebar__items {\n        grid-template-columns: 1fr; } }\n  .sidebar-title {\n    font-weight: 100;\n    letter-spacing: 10px;\n    font-size: 1.5em;\n    grid-column: 1 / span 2; }\n    @media (max-width: 900px) {\n      .sidebar-title {\n        grid-column: 1;\n        word-break: break-all;\n        font-size: 1.3em;\n        letter-spacing: 0;\n        margin-left: 4px; } }\n  .sidebar img {\n    cursor: pointer;\n    border: 1px solid white; }\n    @media (max-width: 900px) {\n      .sidebar img:hover {\n        border: 1px solid black; } }\n  .sidebar-item {\n    font-weight: 100;\n    padding: 0 0 0 10%;\n    margin: 0;\n    cursor: pointer; }\n    @media (max-width: 900px) {\n      .sidebar-item {\n        display: none; } }\n    .sidebar-item:hover {\n      font-weight: 300;\n      color: red; }\n    .sidebar-item.separator {\n      content: \"\";\n      width: 90%;\n      height: 1px;\n      border-top: 1px dashed black;\n      grid-column: 1 / span 2;\n      padding: 0;\n      cursor: default; }\n      .sidebar-item.separator:hover {\n        font-weight: 100;\n        color: black; }\n    .sidebar-item.name {\n      margin-top: -20px;\n      margin-bottom: 20px; }\n  .sidebar__footer {\n    display: grid;\n    grid-template-columns: 0.1fr 1fr;\n    grid-row-gap: 0;\n    align-items: center;\n    position: absolute;\n    bottom: 20px; }\n    @media (max-width: 900px) {\n      .sidebar__footer {\n        grid-template-columns: 1fr;\n        grid-row-gap: 10px; } }\n    .sidebar__footer-img {\n      cursor: pointer; }\n    .sidebar__footer-text {\n      margin-left: 15px;\n      font-weight: 100;\n      cursor: pointer; }\n      .sidebar__footer-text:hover {\n        font-weight: 300; }\n      @media (max-width: 900px) {\n        .sidebar__footer-text {\n          display: none; } }\n\n@keyframes slide-in-left {\n  0% {\n    width: 0;\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    width: 200px; } }\n\n@keyframes slide-out-left {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    width: 0;\n    display: none; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/react-grid-layout.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/react-grid-layout.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n  margin-left: -10px;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.react-grid-placeholder {\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  border: 1px solid black;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n\n.react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/react-resizable.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/react-resizable.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+\");\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}\n", ""]);



/***/ }),

/***/ "./src/assets/article.png":
/*!********************************!*\
  !*** ./src/assets/article.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/article.e2cebd4f.png";

/***/ }),

/***/ "./src/assets/bible.png":
/*!******************************!*\
  !*** ./src/assets/bible.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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ERV+DZgutlF4rUctRkQIgGxiGoU3hFGLEQkuAQDHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAsSnWBWBcZ2td4lSgEARAmJZruXUJ8IBLAMAxAgBwjAAAHCMAAMcIAMAxAgBwjACw8kJpS95vvWqIBwFgpT/CJaN2JuWau1HwsoteXshmaLfaS1juoObU7BwgpKMsxnkTcQZgZZ9uKmW5N9as/VEqzgDszFaPOgteZr+Waq/1ihUspKMsxnkTcQZgZ49WaKDQJfZrRe3aHwFrJP7ZLy98s3S9DqSsd7a/A/qGZlmvTilCOspinDcRlwD2pqtbnToxxxJ2aUB31/baP6SjLMZ5y5q1hLJ8BgCShXSUxThvIj4DABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABwjAADHCADAMQIAcIwAABybYl1AMGaqW3PV0NPaqn3WxQAxaCT+2S8vqzn6pgYPv86gNmq21SbFUUI6ymKc18muad0ZGjjqtfp1ht1mxRFCOspinNfJrmnVnHHa/5UI4CwgDCEdZTHOm4gPAT+rueP+e6f+0bo0oGyTcs2dnD3NL7vo5aWbqV1qn2DaoOZofwmvieaEdJTFOG8i72cA3RO2v9ShbuvygHJ5D4B5iVPn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"

/***/ }),

/***/ "./src/assets/book.png":
/*!*****************************!*\
  !*** ./src/assets/book.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjCAgEIR7YWSD+AAAHWElEQVR42u3csYpeVRSG4R0ztWhlK4EUFkIKsbORSPpAutS5C9sUXsL0QkAIWErECxACXsGAhYUQJiF9IM00wgwpgmed/7zPUw+c75/ihdXsW2vG/fVi6MuwRz+s3yc++8n07wbmCACECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCEnU0PuNFf6/tNvnP5wb+4s94M/y84dX+se9MTrrffALxbr6cnXHmzmyWcqnfTA27iBIAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCws+kBUV+vH6cncK1f18/TE7YkADO+WI+mJ3Cti+kB23ICQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJj3APbq7/V0esIBPVwPpifsiwDs1at1Pj3hgO4IwH85ASBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACDMewBH8nB9Oz1hQ5frp+kJp08AjuTBejI9YUMXAvDxnAAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQ5j2AI/ltvZ6esKHL6QFHIABH8nw9n57AaXECQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJj3AI7ku/XV9IQNvV3PpiecPgE4ksfryfSEDV0IwMdzAkCYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECY9wCO5OX6ZXrChv6dHnAEAnAk5+t8egKnxQkAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYQIAYd4D2KtP1/3pCQf05fSAvRGAvbq7XkxP4PicABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABDmPYAZb9fL6Qlc65/pAdsSgBl/rm+mJ4ATANIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMIEAMLOpgfc6Pb6fHrClc+mB3Dybk8PuMl+A3BvXU5PuHIxPQD+L04ACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACBMACHsPh70tJKp/RIkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDgtMDhUMDI6MzM6MzArMDI6MDCYrzjkAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA4LTA4VDAyOjMzOjMwKzAyOjAw6fKAWAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/cart.png":
/*!*****************************!*\
  !*** ./src/assets/cart.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/family.png":
/*!*******************************!*\
  !*** ./src/assets/family.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/family.0180f3ec.png";

/***/ }),

/***/ "./src/assets/friend.png":
/*!*******************************!*\
  !*** ./src/assets/friend.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/friend.25fb2ca7.png";

/***/ }),

/***/ "./src/assets/guitar.png":
/*!*******************************!*\
  !*** ./src/assets/guitar.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/guitar.4f1a18fe.png";

/***/ }),

/***/ "./src/assets/key.png":
/*!****************************!*\
  !*** ./src/assets/key.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/key.169dbb50.png";

/***/ }),

/***/ "./src/assets/meetup.png":
/*!*******************************!*\
  !*** ./src/assets/meetup.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/photo.png":
/*!******************************!*\
  !*** ./src/assets/photo.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/photo.f486ad7d.png";

/***/ }),

/***/ "./src/assets/poetry.png":
/*!*******************************!*\
  !*** ./src/assets/poetry.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/praying.png":
/*!********************************!*\
  !*** ./src/assets/praying.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/praying.80c6da59.png";

/***/ }),

/***/ "./src/assets/preview.png":
/*!********************************!*\
  !*** ./src/assets/preview.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/preview.ad76b9f6.png";

/***/ }),

/***/ "./src/assets/sermon.png":
/*!*******************************!*\
  !*** ./src/assets/sermon.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sermon.448c82ae.png";

/***/ }),

/***/ "./src/assets/settings.png":
/*!*********************************!*\
  !*** ./src/assets/settings.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/settings.7720859f.png";

/***/ }),

/***/ "./src/components/Add.jsx":
/*!********************************!*\
  !*** ./src/components/Add.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keys.js */ "./src/keys.js");
/* harmony import */ var _sass_add_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/add.sass */ "./src/sass/add.sass");
/* harmony import */ var _sass_add_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_add_sass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/components/Add.jsx";





class Add extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.toggleView = () => {
      if (this.state.buttonClass === "add-btn") {
        this.setState({
          hiddenClass: "add__hidden",
          buttonClass: "add-btn active"
        });
      } else {
        this.setState({
          hiddenClass: "add__hidden exit"
        });
        setTimeout(() => {
          this.setState({
            hiddenClass: "add__hidden hide",
            buttonClass: "add-btn"
          });
        }, 500);
      }
    };

    this.handleVerseQuery = e => {
      if (e.target.value === "") {
        this.setState({
          searchVerseClass: "add__hidden-item"
        });
      } else {
        this.setState({
          verseQuery: e.target.value,
          searchVerseClass: "add__hidden-item searching"
        });
      }
    };

    this.renderExpandedView = () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.hiddenClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "add__hidden-item",
        href: "https://www.biblegateway.com/",
        target: "__blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "open Bible"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "add__hidden-item translation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "ESV"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "add__hidden-item input",
        placeholder: "search verse by reference",
        onChange: this.handleVerseQuery,
        autoFocus: "autofocus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: this.state.searchVerseClass,
        onClick: this.getResults,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "search"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: this.state.copyAlertClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "hover and click text to copy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.resultsVerseClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "add__hidden-item",
        onClick: this.copyToClipboard,
        dangerouslySetInnerHTML: {
          __html: this.state.verseResults
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })));
    };

    this.copyToClipboard = e => {
      const textField = document.createElement("textarea");
      textField.innerText = e.target.innerText;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
    };

    this.getResults = async () => {
      if (this.state.verseQuery === "") {
        this.setState({
          verseResults: "No Results.",
          resultsVerseClass: "add__hidden-item results"
        });
      } else {
        const bibleVerse = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.esv.org/v3/passage/text/", {
          params: {
            q: this.state.verseQuery,
            "include-headings": false,
            "include-footnotes": false,
            "include-verse-numbers": false,
            "include-short-copyright": false,
            "include-passage-references": false
          },
          headers: {
            Authorization: "Token " + _keys_js__WEBPACK_IMPORTED_MODULE_2__["BIBLE_API"]
          }
        });
        console.log(bibleVerse.data.passages);

        if (bibleVerse.data.passages.length === 0) {
          this.setState({
            verseResults: "No Results.",
            resultsVerseClass: "add__hidden-item results"
          });
        } else {
          this.setState({
            verseResults: bibleVerse.data.passages,
            resultsVerseClass: "add__hidden-item results",
            copyAlertClass: "copy"
          });
        }
      }
    };

    this.state = {
      minimized: true,
      hiddenClass: "add__hidden hide",
      buttonClass: "add-btn",
      searchVerseClass: "add__hidden-item",
      resultsVerseClass: "add__hidden-item hide",
      copyAlertClass: "copy hide",
      bibleVersionID: "06125adad2d5898a-01",
      abbreviation: "ESV",
      verseQuery: "",
      verseResults: ""
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.state.buttonClass,
      onClick: this.toggleView,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "+"), this.renderExpandedView());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Add);

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkout */ "./src/components/Checkout.jsx");
/* harmony import */ var _Elysian__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Elysian */ "./src/components/Elysian.jsx");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings */ "./src/components/Settings.jsx");
/* harmony import */ var _sass_App_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/App.sass */ "./src/sass/App.sass");
/* harmony import */ var _sass_App_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_App_sass__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/components/App.js";







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/",
      exact: true,
      component: _Elysian__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/checkout",
      component: _Checkout__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/settings",
      component: _Settings__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Checkout.jsx":
/*!*************************************!*\
  !*** ./src/components/Checkout.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_preview_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/preview.png */ "./src/assets/preview.png");
/* harmony import */ var _assets_preview_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_preview_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_checkout_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/checkout.sass */ "./src/sass/checkout.sass");
/* harmony import */ var _sass_checkout_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_checkout_sass__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/components/Checkout.jsx";





class Checkout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.toMainMenu = () => {
      this.setState({
        checkoutClass: "checkout exit"
      });
      setTimeout(() => {
        this.setState({
          toMainMenu: true
        });
      }, 200);
    };

    this.state = {
      checkoutClass: "checkout",
      toMainMenu: false
    };
  }

  render() {
    if (this.state.toMainMenu) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        push: true,
        to: "/",
        replace: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.state.checkoutClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkout__left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__left-back",
      onClick: this.toMainMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkout__left__heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__left__heading-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "elysian"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__left__heading-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "checkout")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "checkout__left-img",
      src: _assets_preview_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      width: "450",
      height: "450",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "checkout__left-expandbtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkout__interior",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "preview interior"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkout__interior-journal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior-journal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "8/1/19 quiet times"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior-journal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior-journal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "8/1/19 sermon notes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior-journal-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "checkout__interior__checkout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior__checkout-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "checkout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior__checkout-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "august'19 journal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior__checkout-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "$30"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior__checkout-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "shipping"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior__checkout-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "$5"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior__checkout-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "checkout__interior__checkout-price total",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "$35"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ }),

/***/ "./src/components/Elysian.jsx":
/*!************************************!*\
  !*** ./src/components/Elysian.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./src/components/Login.jsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.jsx");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./src/components/Section.jsx");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings */ "./src/components/Settings.jsx");
/* harmony import */ var _sass_elysian_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/elysian.sass */ "./src/sass/elysian.sass");
/* harmony import */ var _sass_elysian_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_elysian_sass__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/components/Elysian.jsx";







class Elysian extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.switchSections = section => {
      this.setState({
        section
      });

      switch (section) {
        case "bible":
          break;

        case "quiet times":
          break;

        case "devotionals/articles/podcasts":
          break;

        case "books/novels":
          break;

        case "sermons":
          break;

        case "photography/snapshots":
          break;

        case "poems":
          break;

        case "songs/lyrics":
          break;

        case "meetups":
          break;

        case "relationships":
          break;

        case "family":
          break;

        default:
      }
    };

    this.toggleSideBar = () => {
      if (this.state.sidebarClass === "sidebar") {
        this.setState({
          sidebarClass: "sidebar exit"
        });
        let mediaQuery = window.matchMedia("(max-width: 900px)");

        if (mediaQuery.matches) {
          this.setState({
            viewSidebar: false
          });
        } else {
          setTimeout(() => {
            this.setState({
              viewSidebar: false
            });
          }, 500);
        }
      } else if (this.state.sidebarClass === "sidebar exit") {
        this.setState({
          sidebarClass: "sidebar",
          viewSidebar: true
        });
      }
    };

    this.state = {
      section: "bible",
      sidebarClass: "sidebar",
      viewSidebar: true
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "elysian",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, this.state.viewSidebar && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      switchSections: this.switchSections,
      sidebarClass: this.state.sidebarClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "elysian-toggleSide",
      onClick: this.toggleSideBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), this.state.section === "settings" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), !this.state.section && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
      switchSections: this.switchSections,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), this.state.section !== "settings" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      section: this.state.section,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Elysian);

/***/ }),

/***/ "./src/components/Login.jsx":
/*!**********************************!*\
  !*** ./src/components/Login.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_login_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/login.sass */ "./src/sass/login.sass");
/* harmony import */ var _sass_login_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_login_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/components/Login.jsx";



class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.handleLogin = () => {
      this.setState({
        loginClass: "login exit"
      });
      setTimeout(() => {
        this.props.switchSections("bible");
      }, 1000);
    };

    this.state = {
      loginClass: "login"
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.state.loginClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "login-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "elysian"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login__form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "login-subtitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "login to elysian"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "login-input",
      type: "email",
      placeholder: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "login-input",
      type: "password",
      placeholder: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "login-login",
      onClick: this.handleLogin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Login")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/Section.jsx":
/*!************************************!*\
  !*** ./src/components/Section.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autosize-textarea */ "./node_modules/react-autosize-textarea/lib/index.js");
/* harmony import */ var react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/react-grid-layout.css */ "./src/css/react-grid-layout.css");
/* harmony import */ var _css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_react_grid_layout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/react-resizable.css */ "./src/css/react-resizable.css");
/* harmony import */ var _css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_react_resizable_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Add */ "./src/components/Add.jsx");
/* harmony import */ var _assets_cart_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/cart.png */ "./src/assets/cart.png");
/* harmony import */ var _assets_cart_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_cart_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sass_section_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sass/section.sass */ "./src/sass/section.sass");
/* harmony import */ var _sass_section_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_section_sass__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/components/Section.jsx";









class Section extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.handleTitleChange = e => {
      this.setState({
        title: e.target.value
      });
    };

    this.handleTextChange = e => {
      const index = e.target.attributes.getNamedItem("index").value;
      this.state.text[index] = e.target.value;
      this.forceUpdate();
    };

    this.renderTextAreas = () => {
      let num = this.state.text;
      let length = num.length;
      return num.map((text, index) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "section__form",
          key: index,
          "data-grid": {
            x: 0,
            y: 0,
            w: 12,
            h: 1
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        }, length === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          style: {
            opacity: 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, "-"), length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "section__form-subtract",
          index: index,
          onClick: this.subtractSection,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Add__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "section__form-drag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_autosize_textarea__WEBPACK_IMPORTED_MODULE_1___default.a, {
          className: "section__form-input",
          type: "text",
          index: index,
          value: this.state.text[index],
          onChange: this.handleTextChange,
          placeholder: "reflections/notes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }));
      });
    };

    this.addSection = () => {
      this.setState(prevState => {
        return {
          text: [...this.state.text, this.state.newText],
          numOfSections: prevState.numOfSections + 1
        };
      });
    };

    this.subtractSection = e => {
      const index = e.target.attributes.getNamedItem("index").value;
      this.setState({
        deletedText: this.state.text[index],
        deletedIndex: index,
        showDeletedNotif: true
      });
      setTimeout(() => {
        this.setState({
          undoClass: "section-undobtn exit"
        });
      }, 10000);
      setTimeout(() => {
        this.setState({
          showDeletedNotif: false
        });
      }, 10500);
      setTimeout(() => {
        this.setState({
          undoClass: "section-undobtn"
        });
      }, 10600);
      this.state.text.splice(index, 1);
      this.forceUpdate();
    };

    this.undoDeletion = () => {
      console.log(this.state.deletedIndex, this.state.deletedText);
      this.state.text.splice(this.state.deletedIndex, 0, this.state.deletedText);
      this.forceUpdate();
      this.setState({
        showDeletedNotif: false
      });
      setTimeout(() => {
        this.setState({
          undoClass: "section-undobtn"
        });
      }, 100);
    };

    this.handleLinkChange = e => {
      this.setState({
        linkValue: e.target.value
      });
    };

    this.state = {
      title: "",
      titlePlaceholder: "TITLE",
      numOfSections: 1,
      text: [""],
      newText: [""],
      deletedText: "",
      deletedIndex: null,
      showDeletedNotif: false,
      undoClass: "section-undobtn",
      linkValue: "",
      linkPlaceholder: "link to passage",
      linkBibleText: "",
      linkDevoText: "",
      linkBookText: "",
      linkSermonText: "",
      linkPoemText: "",
      linkSongText: "",
      bibleText: [""],
      qtText: [""],
      devoText: [""],
      bookText: [""],
      sermonText: [""],
      photoText: [""],
      poemText: [""],
      songText: [""],
      meetupText: [""],
      relationshipText: [""],
      familyText: [""],
      date: ""
    };
  }
  /**
   * Setting today's date
   **/


  componentDidMount() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    this.setState({
      date: mm + "/" + dd + "/" + yyyy
    });
  }
  /**
   * Handling SAVING text when leaving a section,
   * RETREIVING text when returning to a section,
   * and RESETING text input when appropriate
   **/


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.section !== this.props.section) {
      switch (prevProps.section) {
        case "bible":
          this.setState({
            bibleText: this.state.text,
            linkBibleText: this.state.linkValue
          });
          break;

        case "quiet times":
          this.setState({
            qtText: this.state.text
          });
          break;

        case "devotionals/articles/podcasts":
          this.setState({
            devoText: this.state.text,
            linkDevoText: this.state.linkValue
          });
          break;

        case "books/novels":
          this.setState({
            bookText: this.state.text,
            linkBookText: this.state.linkValue
          });
          break;

        case "sermons":
          this.setState({
            sermonText: this.state.text,
            linkSermonText: this.state.linkValue
          });
          break;

        case "photography/snapshots":
          this.setState({
            photoText: this.state.text
          });
          break;

        case "poems":
          this.setState({
            poemText: this.state.text,
            linkPoemeText: this.state.linkValue
          });
          break;

        case "songs/lyrics":
          this.setState({
            songText: this.state.text,
            linkSongText: this.state.linkValue
          });
          break;

        case "meetups":
          this.setState({
            meetupText: this.state.text
          });
          break;

        case "relationships":
          this.setState({
            relationshipText: this.state.text
          });
          break;

        case "family":
          this.setState({
            familyText: this.state.text
          });
          break;

        default:
      }

      this.setState({
        text: "",
        linkValue: ""
      });

      switch (this.props.section) {
        case "bible":
          this.setState({
            text: this.state.bibleText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to passage",
            linkValue: this.state.linkBibleText
          });
          break;

        case "quiet times":
          this.setState({
            text: this.state.qtText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: null
          });
          break;

        case "devotionals/articles/podcasts":
          this.setState({
            text: this.state.devoText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to devotional/article/podcasts",
            linkValue: this.state.linkDevoText
          });
          break;

        case "books/novels":
          this.setState({
            text: this.state.bookText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to ebook",
            linkValue: this.state.linkBookText
          });
          break;

        case "sermons":
          this.setState({
            text: this.state.sermonText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to sermon",
            linkValue: this.state.linkSermonText
          });
          break;

        case "photography/snapshots":
          this.setState({
            text: this.state.photoText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: null,
            linkValue: this.state.linkPhotoText
          });
          break;

        case "poems":
          this.setState({
            text: this.state.poemText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to poem",
            linkValue: this.state.linkPoemText
          });
          break;

        case "songs/lyrics":
          this.setState({
            text: this.state.songText,
            titlePlaceholder: "TITLE",
            linkPlaceholder: "link to song",
            linkValue: this.state.linkSongText
          });
          break;

        case "meetups":
          this.setState({
            text: this.state.meetupText,
            titlePlaceholder: "NAME",
            linkPlaceholder: null
          });
          break;

        case "relationships":
          this.setState({
            text: this.state.relationshipText,
            titlePlaceholder: "NAME",
            linkPlaceholder: null
          });
          break;

        case "family":
          this.setState({
            text: this.state.familyText,
            titlePlaceholder: "NAME",
            linkPlaceholder: null
          });
          break;

        default:
      }
    }
  }
  /**
   * Handling TITLE and BODY text changes
   **/


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dynamicContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "section-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, this.props.section), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "section-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    }, this.state.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "section-title",
      type: "text",
      value: this.state.title,
      onChange: this.handleTitleChange,
      placeholder: this.state.titlePlaceholder,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }), this.props.section === "photography/snapshots" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "section-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, "open Google photos"), this.props.section === "photography/snapshots" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "section-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, "open iCloud photos"), this.state.linkPlaceholder && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "section-link",
      placeholder: this.state.linkPlaceholder,
      value: this.state.linkValue,
      onChange: this.handleLinkChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }), this.props.section === "songs/lyrics" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "section-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, "search song/lyrics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "layout",
      isDraggable: false,
      draggableHandle: ".section__form-drag",
      cols: 12,
      rowHeight: 30,
      width: 785,
      autoSize: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, this.renderTextAreas()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "section__form-newline",
      onClick: this.addSection,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, "add another section"), this.state.showDeletedNotif && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.state.undoClass,
      onClick: this.undoDeletion,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, "undo delete?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "section-savebtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, "save")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/Settings.jsx":
/*!*************************************!*\
  !*** ./src/components/Settings.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_settings_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/settings.sass */ "./src/sass/settings.sass");
/* harmony import */ var _sass_settings_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_settings_sass__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/components/Settings.jsx";



class Settings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.linkAccount = type => {
      switch (type) {
        case "Google":
          return this.setState({
            googleText: "linked to yanghakim0@gmail.com",
            googleClass: "settings__links-button linked"
          });

        case "iCloud":
          return this.setState({
            icloudText: "linked to yanghakim@icloud.com",
            icloudClass: "settings__links-button linked"
          });

        case "Evernote":
          return this.setState({
            evernoteText: "linked to yanghakim0@gmail.com",
            evernoteClass: "settings__links-button linked"
          });

        case "Spotify":
          return this.setState({
            spotifyText: "linked to yanghakim0@gmail.com",
            spotifyClass: "settings__links-button linked"
          });

        case "iTunes":
          return this.setState({
            itunesText: "linked to yanghakim@apple.com",
            itunesClass: "settings__links-button linked"
          });
      }
    };

    this.state = {
      googleText: "link to Google Photos",
      icloudText: "link to iCloud Photos",
      evernoteText: "link to Evernote",
      spotifyText: "link to Spotify",
      itunesText: "link to iTunes",
      googleClass: "settings__links-button",
      icloudClass: "settings__links-button",
      evernoteClass: "settings__links-button",
      spotifyClass: "settings__links-button",
      itunesClass: "settings__links-button"
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "settings-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "settings__form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "settings__form-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Change Your Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      className: "settings__form-input",
      placeholder: "old password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      className: "settings__form-input",
      placeholder: "new password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      className: "settings__form-input",
      placeholder: "confirm new password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "settings__form-submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "submit changes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "settings__links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "settings__links-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Link Your Accounts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.state.googleClass,
      onClick: () => this.linkAccount("Google"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, this.state.googleText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.state.icloudClass,
      onClick: () => this.linkAccount("iCloud"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, this.state.icloudText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.state.evernoteClass,
      onClick: () => this.linkAccount("Evernote"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, this.state.evernoteText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.state.spotifyClass,
      onClick: () => this.linkAccount("Spotify"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, this.state.spotifyText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: this.state.itunesClass,
      onClick: () => this.linkAccount("iTunes"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, this.state.itunesText)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./src/components/Sidebar.jsx":
/*!************************************!*\
  !*** ./src/components/Sidebar.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_settings_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/settings.png */ "./src/assets/settings.png");
/* harmony import */ var _assets_settings_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_settings_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_bible_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/bible.png */ "./src/assets/bible.png");
/* harmony import */ var _assets_bible_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_bible_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_book_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/book.png */ "./src/assets/book.png");
/* harmony import */ var _assets_book_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_book_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_article_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/article.png */ "./src/assets/article.png");
/* harmony import */ var _assets_article_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_article_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_praying_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/praying.png */ "./src/assets/praying.png");
/* harmony import */ var _assets_praying_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_praying_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_sermon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/sermon.png */ "./src/assets/sermon.png");
/* harmony import */ var _assets_sermon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_sermon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_photo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/photo.png */ "./src/assets/photo.png");
/* harmony import */ var _assets_photo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_photo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_poetry_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/poetry.png */ "./src/assets/poetry.png");
/* harmony import */ var _assets_poetry_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_poetry_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_guitar_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/guitar.png */ "./src/assets/guitar.png");
/* harmony import */ var _assets_guitar_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_guitar_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_meetup_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/meetup.png */ "./src/assets/meetup.png");
/* harmony import */ var _assets_meetup_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_meetup_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_friend_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/friend.png */ "./src/assets/friend.png");
/* harmony import */ var _assets_friend_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_friend_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_family_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/family.png */ "./src/assets/family.png");
/* harmony import */ var _assets_family_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_family_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_cart_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/cart.png */ "./src/assets/cart.png");
/* harmony import */ var _assets_cart_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_cart_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_key_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/key.png */ "./src/assets/key.png");
/* harmony import */ var _assets_key_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_key_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sass_sidebar_sass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sass/sidebar.sass */ "./src/sass/sidebar.sass");
/* harmony import */ var _sass_sidebar_sass__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sass_sidebar_sass__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/components/Sidebar.jsx";


















class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.toCheckout = () => {
      this.setState({
        renderCheckout: true
      });
    };

    this.state = {
      renderCheckout: false
    };
  }

  render() {
    if (this.state.renderCheckout) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        push: true,
        to: {
          pathname: "/checkout"
        },
        replace: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.sidebarClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar__items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "sidebar-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "elysian"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: {
        marginTop: "-20px",
        marginBottom: "20px"
      },
      src: _assets_settings_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      height: "18",
      width: "18",
      alt: "settings",
      onClick: () => this.props.switchSections("settings"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item name",
      onClick: () => this.props.switchSections("settings"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "yangha kim"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_bible_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      height: "18",
      width: "18",
      alt: "bible",
      onClick: () => this.props.switchSections("bible"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("bible"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "bible"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_praying_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      height: "18",
      width: "18",
      alt: "praying",
      onClick: () => this.props.switchSections("quiet times"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("quiet times"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "quiet times"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_article_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      height: "18",
      width: "18",
      alt: "article",
      onClick: () => this.props.switchSections("devotionals/articles/podcasts"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("devotionals/articles/podcasts"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "devotionals/", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), "articles/", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), "podcasts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_book_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      height: "18",
      width: "18",
      alt: "book",
      onClick: () => this.props.switchSections("books/novels"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("books/novels"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "books/novels"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_sermon_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      height: "18",
      width: "18",
      alt: "sermon",
      onClick: () => this.props.switchSections("sermons"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("sermons"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "sermons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_photo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      height: "18",
      width: "18",
      alt: "photography",
      onClick: () => this.props.switchSections("photography/snapshots"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("photography/snapshots"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "photography/", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), "snapshots"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_poetry_png__WEBPACK_IMPORTED_MODULE_9___default.a,
      height: "18",
      width: "18",
      alt: "poetry",
      onClick: () => this.props.switchSections("poems"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("poems"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "poems"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_guitar_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      height: "18",
      width: "18",
      alt: "guitar",
      onClick: () => this.props.switchSections("songs/lyrics"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("songs/lyrics"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "songs/lyrics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_meetup_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      height: "18",
      width: "18",
      alt: "meetup",
      onClick: () => this.props.switchSections("meetups"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("meetups"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "meet ups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_friend_png__WEBPACK_IMPORTED_MODULE_12___default.a,
      height: "18",
      width: "18",
      alt: "friend",
      onClick: () => this.props.switchSections("relationships"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("relationships"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "relationships"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_family_png__WEBPACK_IMPORTED_MODULE_13___default.a,
      height: "18",
      width: "18",
      alt: "family",
      onClick: () => this.props.switchSections("family"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      onClick: () => this.props.switchSections("family"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, "family"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item separator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_bible_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      height: "0",
      width: "0",
      alt: "todos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, "todos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_bible_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      height: "0",
      width: "0",
      alt: "reminders",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, "reminders")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_cart_png__WEBPACK_IMPORTED_MODULE_14___default.a,
      className: "sidebar__footer-img",
      width: "18",
      height: "18",
      onClick: this.toCheckout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar__footer-text",
      onClick: this.toCheckout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, "checkout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _assets_key_png__WEBPACK_IMPORTED_MODULE_15___default.a,
      className: "sidebar__footer-img",
      width: "18",
      height: "18",
      onClick: this.handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "sidebar__footer-text",
      onClick: this.handleLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, "logout")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/css/react-grid-layout.css":
/*!***************************************!*\
  !*** ./src/css/react-grid-layout.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./react-grid-layout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/react-grid-layout.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./react-grid-layout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/react-grid-layout.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./react-grid-layout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/react-grid-layout.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/css/react-resizable.css":
/*!*************************************!*\
  !*** ./src/css/react-resizable.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./react-resizable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/react-resizable.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./react-resizable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/react-resizable.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./react-resizable.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/react-resizable.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_index_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sass/index.sass */ "./src/sass/index.sass");
/* harmony import */ var _sass_index_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_index_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/Admin/Desktop/git/elysian/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/keys.js":
/*!*********************!*\
  !*** ./src/keys.js ***!
  \*********************/
/*! exports provided: BIBLE_API, GOOGLE_PLACES_CLIENT_ID, GOOGLE_PLACES_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BIBLE_API", function() { return BIBLE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_PLACES_CLIENT_ID", function() { return GOOGLE_PLACES_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_PLACES_CLIENT_SECRET", function() { return GOOGLE_PLACES_CLIENT_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_CLIENT_ID", function() { return GOOGLE_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_CLIENT_SECRET", function() { return GOOGLE_CLIENT_SECRET; });
const BIBLE_API = "2b56d3016714c2b2c235b064c9579a563bcf798f";
const GOOGLE_PLACES_CLIENT_ID = "705084399147-ksadivaphgpvpi9u27ks2h462prqd6pt.apps.googleusercontent.com";
const GOOGLE_PLACES_CLIENT_SECRET = "tx0znR4tEV-Jk6zgMteH9jNi";
const GOOGLE_CLIENT_ID = "705084399147-rk1aienq40jfl6p6368rl90maman0lh5.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "7RrkVKeQOH5BXD-4pJ85X-Qh";

/***/ }),

/***/ "./src/sass/App.sass":
/*!***************************!*\
  !*** ./src/sass/App.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/App.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/App.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./App.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/App.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/sass/add.sass":
/*!***************************!*\
  !*** ./src/sass/add.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./add.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/add.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./add.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/add.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./add.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/add.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/sass/checkout.sass":
/*!********************************!*\
  !*** ./src/sass/checkout.sass ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./checkout.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/checkout.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./checkout.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/checkout.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./checkout.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/checkout.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/sass/elysian.sass":
/*!*******************************!*\
  !*** ./src/sass/elysian.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./elysian.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/elysian.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./elysian.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/elysian.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./elysian.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/elysian.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/sass/index.sass":
/*!*****************************!*\
  !*** ./src/sass/index.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/index.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/index.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./index.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/index.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/sass/login.sass":
/*!*****************************!*\
  !*** ./src/sass/login.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./login.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/login.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./login.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/login.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./login.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/login.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/sass/section.sass":
/*!*******************************!*\
  !*** ./src/sass/section.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./section.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/section.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./section.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/section.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./section.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/section.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/sass/settings.sass":
/*!********************************!*\
  !*** ./src/sass/settings.sass ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./settings.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/settings.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./settings.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/settings.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./settings.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/settings.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/sass/sidebar.sass":
/*!*******************************!*\
  !*** ./src/sass/sidebar.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./sidebar.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/sidebar.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./sidebar.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/sidebar.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-3!./sidebar.sass */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/sass/sidebar.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Admin/Desktop/git/elysian/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Admin/Desktop/git/elysian/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map