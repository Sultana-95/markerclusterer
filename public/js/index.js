/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: -28.024,
      lng: 140.887
    }
  }); // Create an array of alphabetical characters used to label the markers.

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Add some markers to the map.

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  }); // new MarkerClusterer({ map, markers });
  // // Add a marker clusterer to manage the markers.

  new MarkerClusterer({
    markers: markers,
    map: map
  });
}

var locations = [{
  lat: -31.56391,
  lng: 147.154312
}, {
  lat: -33.718234,
  lng: 150.363181
}, {
  lat: -33.727111,
  lng: 150.371124
}, {
  lat: -33.848588,
  lng: 151.209834
}, {
  lat: -33.851702,
  lng: 151.216968
}, {
  lat: -34.671264,
  lng: 150.863657
}, {
  lat: -35.304724,
  lng: 148.662905
}, {
  lat: -36.817685,
  lng: 175.699196
}, {
  lat: -36.828611,
  lng: 175.790222
}, {
  lat: -37.75,
  lng: 145.116667
}, {
  lat: -37.759859,
  lng: 145.128708
}, {
  lat: -37.765015,
  lng: 145.133858
}, {
  lat: -37.770104,
  lng: 145.143299
}, {
  lat: -37.7737,
  lng: 145.145187
}, {
  lat: -37.774785,
  lng: 145.137978
}, {
  lat: -37.819616,
  lng: 144.968119
}, {
  lat: -38.330766,
  lng: 144.695692
}, {
  lat: -39.927193,
  lng: 175.053218
}, {
  lat: -41.330162,
  lng: 174.865694
}, {
  lat: -42.734358,
  lng: 147.439506
}, {
  lat: -42.734358,
  lng: 147.501315
}, {
  lat: -42.735258,
  lng: 147.438
}, {
  lat: -43.999792,
  lng: 170.463352
}];

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SULTANA\Desktop\Laravel\ff\resources\js\index.js */"./resources/js/index.js");


/***/ })

/******/ });