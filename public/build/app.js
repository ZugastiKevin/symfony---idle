(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Layout/dropdown.js */ "./assets/scripts/Layout/dropdown.js");
/* harmony import */ var _scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_Layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Layout/switch_layout.js */ "./assets/scripts/Layout/switch_layout.js");
/* harmony import */ var _scripts_Layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_Layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_Security_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/Security/form.js */ "./assets/scripts/Security/form.js");
/* harmony import */ var _scripts_Security_form_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_Security_form_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_Security_remember_me_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/Security/remember_me.js */ "./assets/scripts/Security/remember_me.js");
/* harmony import */ var _scripts_Security_remember_me_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_Security_remember_me_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scripts_Security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/Security/reset-btn.js */ "./assets/scripts/Security/reset-btn.js");
/* harmony import */ var _scripts_Security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_Security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");


/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */







console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ },

/***/ "./assets/scripts/Layout/dropdown.js"
/*!*******************************************!*\
  !*** ./assets/scripts/Layout/dropdown.js ***!
  \*******************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function attachHoverDropdown(toggleSelector) {
  var toggles = document.querySelectorAll(toggleSelector);
  toggles.forEach(function (toggle) {
    var targetSelector = toggle.dataset.dropdownTarget;
    if (!targetSelector) return;
    var dropdownContent = document.querySelector(targetSelector);
    if (!dropdownContent) return;
    var hideTimeout = null;
    var isOpen = false;
    var showDropdown = function showDropdown() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      isOpen = true;
      dropdownContent.style.display = "flex";
      dropdownContent.style.animation = "show-content 0.25s ease forwards";
      toggle.classList.add("dropdown-open");
    };
    var reallyHideDropdown = function reallyHideDropdown() {
      dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";
      var _handler = function handler(event) {
        if (event.animationName === "dont-show-content") {
          dropdownContent.style.display = "none";
          toggle.classList.remove("dropdown-open");
          dropdownContent.removeEventListener("animationend", _handler);
          isOpen = false;
        }
      };
      dropdownContent.addEventListener("animationend", _handler);
    };
    var hideDropdown = function hideDropdown() {
      hideTimeout = setTimeout(reallyHideDropdown, 150);
    };
    var toggleDropdown = function toggleDropdown(event) {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      } else {
        showDropdown();
      }
    };

    // Desktop : hover
    toggle.addEventListener("mouseenter", showDropdown);
    toggle.addEventListener("mouseleave", hideDropdown);
    dropdownContent.addEventListener("mouseenter", showDropdown);
    dropdownContent.addEventListener("mouseleave", hideDropdown);

    // Mobile : click/touch
    toggle.addEventListener("click", toggleDropdown);
    toggle.addEventListener("touchstart", toggleDropdown, {
      passive: false
    });

    // Fermer si on clique ailleurs
    document.addEventListener("click", function (event) {
      if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      }
    });
    document.addEventListener("touchstart", function (event) {
      if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      }
    });
  });
}
function attachNavbarDropdown() {
  var toggle = document.querySelector(".navbar-dropdown-toggle");
  var navbarMenu = document.querySelector(".navbar_menu");
  var navbarContainer = document.querySelector(".dropdown-navbar");
  if (!toggle || !navbarMenu || !navbarContainer) return;
  var targetSelector = toggle.dataset.dropdownTarget;
  if (!targetSelector) return;
  var dropdownContent = document.querySelector(targetSelector);
  if (!dropdownContent) return;
  var regionEls = [toggle, navbarContainer, dropdownContent];
  var hideTimeout = null;
  var isClosing = false;
  var isOpen = false;
  var isInRegion = function isInRegion(el) {
    return regionEls.some(function (node) {
      return node && node.contains(el);
    });
  };
  var showAll = function showAll() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    isClosing = false;
    isOpen = true;
    dropdownContent.style.display = "flex";
    dropdownContent.style.animation = "show-content 0.25s ease forwards";
    toggle.classList.add("dropdown-open");
    navbarMenu.classList.remove("navbar-menu-anim-show");
    navbarMenu.classList.add("navbar-menu-anim-hide");
    navbarContainer.style.display = "flex";
    navbarContainer.classList.remove("dropdown-navbar-anim-hide");
    navbarContainer.classList.add("dropdown-navbar-anim-show");
  };
  var reallyHideAll = function reallyHideAll() {
    isClosing = true;
    isOpen = false;
    dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";
    var _handler2 = function handler(event) {
      if (event.animationName === "dont-show-content") {
        if (!isClosing) {
          dropdownContent.removeEventListener("animationend", _handler2);
          return;
        }
        dropdownContent.style.display = "none";
        toggle.classList.remove("dropdown-open");
        dropdownContent.removeEventListener("animationend", _handler2);
      }
    };
    dropdownContent.addEventListener("animationend", _handler2);
    navbarContainer.classList.remove("dropdown-navbar-anim-show");
    navbarContainer.classList.add("dropdown-navbar-anim-hide");
    navbarMenu.classList.remove("navbar-menu-anim-hide");
    navbarMenu.classList.add("navbar-menu-anim-show");
  };
  var onLeaveRegion = function onLeaveRegion(event) {
    var to = event.relatedTarget;
    if (to && isInRegion(to)) return;
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(reallyHideAll, 150);
  };
  var toggleNavbar = function toggleNavbar(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isOpen) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    } else {
      showAll();
    }
  };

  // Desktop : hover
  regionEls.forEach(function (el) {
    el.addEventListener("mouseenter", showAll);
    el.addEventListener("mouseleave", onLeaveRegion);
  });

  // Mobile : click/touch
  toggle.addEventListener("click", toggleNavbar);
  toggle.addEventListener("touchstart", toggleNavbar, {
    passive: false
  });

  // Fermer si on clique ailleurs
  document.addEventListener("click", function (event) {
    if (isOpen && !isInRegion(event.target)) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    }
  });
  document.addEventListener("touchstart", function (event) {
    if (isOpen && !isInRegion(event.target)) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  attachNavbarDropdown();
  attachHoverDropdown(".language-dropdown-toggle");
  attachHoverDropdown(".theme-dropdown-toggle");
});

/***/ },

/***/ "./assets/scripts/Layout/switch_layout.js"
/*!************************************************!*\
  !*** ./assets/scripts/Layout/switch_layout.js ***!
  \************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
window.switchView = function (viewId) {
  document.querySelectorAll('.sidebar-view').forEach(function (v) {
    return v.style.display = 'none';
  });
  document.getElementById(viewId).style.display = 'flex';
};

/***/ },

/***/ "./assets/scripts/Security/form.js"
/*!*****************************************!*\
  !*** ./assets/scripts/Security/form.js ***!
  \*****************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* =====================================================
   VALIDATION GÉNÉRIQUE DES FORMULAIRES
   Emails + Mots de passe + Pseudos + Custom validators
   Compatible Support / User / Login / ForgotPassword
   ===================================================== */

var selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
var inputs = document.querySelectorAll(selector);
var form = document.querySelector('.all-form');

// =====================================================
// Fonctions d'apparence des inputs
// =====================================================
function initInput(inputEl) {
  var wrapper = inputEl.closest('span') || inputEl.parentElement;
  if (inputEl.value.trim() !== '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
  inputEl.addEventListener('focus', onFocus);
  inputEl.addEventListener('blur', onBlur);

  // Pour le responsive mobile
  inputEl.addEventListener('touchend', onBlur);
}
function onFocus(ev) {
  var parent = ev.target.closest('span') || ev.target.parentElement;
  if (parent && parent.classList) {
    parent.classList.add('inputs--filled');
  }
}
function onBlur(ev) {
  var input = ev.target;
  var wrapper = input.closest('span') || input.parentElement;
  if (input.value.trim() === '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--filled', 'inputs--invalid');
  } else {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
}
function liveValidation(ev) {
  var input = ev.target;
  var wrapper = input.closest('span') || input.parentElement;
  if (!input.checkValidity()) {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
  } else {
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  }
}

// =====================================================
// Système de validation générique
// =====================================================
var validators = {};
var validationTimers = {}; // Stockage des timers

function registerValidator(inputId, errorId, validateFn) {
  validators[inputId] = {
    errorId: errorId,
    validateFn: validateFn
  };
}
function runValidator(inputId) {
  var config = validators[inputId];
  if (!config) return true;
  var input = document.getElementById(inputId);
  var errorBox = document.getElementById(config.errorId);
  if (!input || !errorBox) return true;
  var wrapper = input.closest('span') || input.parentElement;
  errorBox.style.visibility = 'hidden';
  errorBox.textContent = "\xA0";
  wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  var result = config.validateFn(input.value, input);
  if (result !== true) {
    errorBox.textContent = result;
    errorBox.style.visibility = 'visible';
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
    return false;
  }
  return true;
}
function attachValidator(inputId) {
  var eventTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['input', 'blur'];
  var delayMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  var input = document.getElementById(inputId);
  if (!input) return;
  eventTypes.forEach(function (eventType) {
    if (eventType === 'input') {
      // Pour l'événement 'input', on ajoute un délai de 3 secondes
      input.addEventListener('input', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
        }
        validationTimers[inputId] = setTimeout(function () {
          runValidator(inputId);
        }, delayMs);
      });
    } else if (eventType === 'change') {
      // Pour 'change', validation immédiate
      input.addEventListener('change', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });
    } else if (eventType === 'blur') {
      // Pour 'blur', validation immédiate
      input.addEventListener('blur', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });

      // Ajouter 'touchend' pour mobile
      input.addEventListener('touchend', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        // Petit délai pour éviter les doubles déclenchements
        setTimeout(function () {
          return runValidator(inputId);
        }, 100);
      });
    } else if (eventType === 'click') {
      // Pour 'click', validation immédiate
      input.addEventListener('click', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });
    }
  });
}

// =====================================================
// VALIDATEURS EMAILS (génériques pour tout le site)
// =====================================================

function registerEmail(inputId, errorId) {
  registerValidator(inputId, errorId, function (value, input) {
    var v = value.trim();
    if (v === "") return t('email_required');
    if (!input.checkValidity()) return t('email_invalid');
    return true;
  });
}
var emailFields = [{
  inputId: "support_email",
  errorId: "email-error"
}, {
  inputId: "user_email",
  errorId: "user_email-error"
}, {
  inputId: "username",
  errorId: "username-error"
}, {
  inputId: "forgot_password_request_form_email",
  errorId: "forgot_email-error"
}];
emailFields.forEach(function (f) {
  return registerEmail(f.inputId, f.errorId);
});

// =====================================================
// VALIDATEURS PSEUDOS (génériques)
// =====================================================

function t(key) {
  return window.appTranslations && window.appTranslations[key] || key;
}
function registerPseudo(inputId, errorId) {
  var minLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  registerValidator(inputId, errorId, function (value) {
    var v = value.trim();
    if (v === "") return t('pseudo_required');
    if (v.length < minLength) return t('pseudo_min_3');
    return true;
  });
}
var pseudoFields = [{
  inputId: "support_name",
  errorId: "pseudo-error",
  minLength: 3
}, {
  inputId: "user_pseudo",
  errorId: "user_pseudo-error",
  minLength: 3
}];
pseudoFields.forEach(function (f) {
  return registerPseudo(f.inputId, f.errorId, f.minLength);
});

// =====================================================
// VALIDATEURS MOTS DE PASSE (génériques)
// =====================================================

registerValidator("user_plainPassword_first", "user_password_first-error", function (value) {
  var v = value.trim();
  if (v === "") return t('password_required');
  if (v.length < 8) return t('password_length_8');
  if (!/[A-Z]/.test(v)) return t('password_upper');
  if (!/\d/.test(v)) return t('password_number');
  if (!/[\W_]/.test(v)) return t('password_special');
  return true;
});
registerValidator("user_plainPassword_second", "user_password_second-error", function (value) {
  var first = document.getElementById("user_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return t('password_confirm_required');
  if (value !== first.value) return t('password_mismatch');
  return true;
});
registerValidator("reset_password_form_plainPassword_first", "reset_password_form_plainPassword_first-error", function (value) {
  var v = value.trim();
  if (v === "") return t('password_required');
  if (v.length < 8) return t('password_length_8');
  if (!/[A-Z]/.test(v)) return t('password_upper');
  if (!/\d/.test(v)) return t('password_number');
  if (!/[\W_]/.test(v)) return t('password_special');
  return true;
});
registerValidator("reset_password_form_plainPassword_second", "reset_password_form_plainPassword_second-error", function (value) {
  var first = document.getElementById("reset_password_form_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return t('password_confirm_required');
  if (value !== first.value) return t('password_mismatch');
  return true;
});

// Mot de passe de connexion
registerValidator("password", "password-error", function (value) {
  if (value.trim() === "") return t('password_required');
  return true;
});

// Mot de passe "oublié" (nouveau mot de passe, si tu as un champs dédié)
registerValidator("forgot_password", "forgot_password-error", function (value) {
  if (value.trim() === "") return t('password_required');
  return true;
});

// =====================================================
// VALIDATEURS SUPPORT SUPPLÉMENTAIRES → category / message / image
// =====================================================

registerValidator("support_category", "selecte-error", function (value) {
  if (!value || value.trim() === "") return t('support_category_required');
  return true;
});
registerValidator("support_message", "text-area-error", function (value) {
  var v = value.trim();
  if (v === "") return t('support_message_required');
  if (v.length < 10) return t('support_message_min_10');
  return true;
});

// VALIDATION DE L’IMAGE (support)
registerValidator("support_imageFile", "image-error", function (value, input) {
  var file = input.files[0];
  if (!file) return true;
  var allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  var max = 2 * 1024 * 1024;
  if (!allowed.includes(file.type)) return t('image_type');
  if (file.size > max) return t('image_size');
  return true;
});

// ========================
// SOUMISSION DU FORMULAIRE
// ========================
function onSubmit(ev) {
  var hasError = false;

  // Annuler tous les timers en cours
  Object.keys(validationTimers).forEach(function (inputId) {
    clearTimeout(validationTimers[inputId]);
    delete validationTimers[inputId];
  });

  // Vérifier tous les validateurs enregistrés
  Object.keys(validators).forEach(function (inputId) {
    if (!runValidator(inputId)) {
      hasError = true;
    }
  });

  // Vérifier la validité HTML5 des champs sans validateur custom
  var form = ev.target;
  var inputs = form.querySelectorAll(selector);
  inputs.forEach(function (input) {
    // Ignorer les champs qui ont déjà un validateur custom
    if (validators[input.id]) return;
    var wrapper = input.closest('span') || input.parentElement;
    if (!input.checkValidity()) {
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
      hasError = true;
    } else {
      wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
    }
  });
  if (hasError) {
    ev.preventDefault();
  }
}

// ========================
// INITIALISATION
// ========================
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.all-form');
  var loginForm = document.getElementById('login-form');
  var inputs = document.querySelectorAll(selector);

  // Initialiser les inputs de base
  inputs.forEach(function (input) {
    initInput(input);
    if (input.tagName === 'SELECT' && input.value) {
      var wrapper = input.closest('span') || input.parentElement;
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
    }
  });

  // Attacher les validateurs du formulaire de support
  attachValidator('support_name', ['input', 'blur'], 3000);
  attachValidator('support_email', ['input', 'blur'], 3000);
  attachValidator('support_category', ['change', 'blur'], 3000);
  attachValidator('support_message', ['input', 'blur'], 3000);
  attachValidator('support_imageFile', ['change'], 0);

  // Attacher les validateurs du formulaire utilisateur
  attachValidator('user_pseudo', ['input', 'blur'], 3000);
  attachValidator('user_email', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher les validateurs du formulaire reset password
  attachValidator('reset_password_form_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('reset_password_form_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher les validateurs du formulaire de connexion
  attachValidator('username', ['input', 'blur'], 3000);
  attachValidator('password', ['input', 'blur'], 3000);

  // Attacher les validateurs éventuels du formulaire "mot de passe oublié"
  attachValidator('forgot_password_request_form_email', ['input', 'blur'], 3000);
  attachValidator('forgot_password', ['input', 'blur'], 3000);

  // Attacher la validation au submit
  if (form) {
    form.addEventListener('submit', onSubmit);
  }

  // Attacher la validation au formulaire de connexion
  if (loginForm) {
    loginForm.addEventListener('submit', onSubmit);
  }
});

/***/ },

/***/ "./assets/scripts/Security/remember_me.js"
/*!************************************************!*\
  !*** ./assets/scripts/Security/remember_me.js ***!
  \************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("cookie-consent");
  var accept = document.getElementById("accept-cookies");
  var refuse = document.getElementById("refuse-cookies");
  var rememberCheckbox = document.getElementById("_remember_me");

  // Vérifier que les éléments existent
  if (!box || !accept || !refuse) {
    console.warn("Éléments cookie non trouvés");
    return;
  }
  var consent = localStorage.getItem("cookie-consent");

  // AFFICHAGE INITIAL
  if (!consent) {
    setTimeout(function () {
      box.classList.add("show");
    }, 600);
  } else if (consent === "refused") {
    box.classList.add("collapsed");
  }

  // DÉSACTIVER REMEMBER ME SI REFUS
  if (consent !== "accepted" && rememberCheckbox) {
    rememberCheckbox.disabled = true;
  }

  // ACCEPTER
  accept.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "accepted");
    box.classList.remove("show");
    box.classList.add("hidden");
    if (rememberCheckbox) rememberCheckbox.disabled = false;
  });

  // REFUSER
  refuse.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "refused");
    box.classList.remove("show");
    box.classList.add("collapsed");
    if (rememberCheckbox) {
      rememberCheckbox.checked = false;
      rememberCheckbox.disabled = true;
    }
  });

  // SI ON CLIQUE SUR LE BOUTON RÉDUIT → RÉAFFICHER LA BANNIÈRE
  var collapseBtn = document.getElementById("cookie-expand-btn");
  if (collapseBtn) {
    collapseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      box.classList.remove("collapsed");
      box.classList.add("show");
    });
  }

  // SI ON CLIQUE SUR REMEMBER ME APRÈS UN REFUS → RÉAFFICHER LA BANNIÈRE
  if (rememberCheckbox) {
    var rememberLabel = document.querySelector('label[for="_remember_me"]');
    var clickHandler = function clickHandler(e) {
      var currentConsent = localStorage.getItem("cookie-consent");
      if (currentConsent === "refused") {
        e.preventDefault();
        e.stopPropagation();
        rememberCheckbox.checked = false;
        box.classList.remove("collapsed");
        box.classList.add("show");
        return false;
      }
    };
    rememberCheckbox.addEventListener("click", clickHandler);
    if (rememberLabel) {
      rememberLabel.addEventListener("click", clickHandler);
    }
  }
});

/***/ },

/***/ "./assets/scripts/Security/reset-btn.js"
/*!**********************************************!*\
  !*** ./assets/scripts/Security/reset-btn.js ***!
  \**********************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.querySelectorAll('.reset-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var input = button.previousElementSibling;
    if (input && input.dataset.original !== undefined) {
      input.value = input.dataset.original;
      input.dispatchEvent(new Event('change'));
    }
  });
});

/***/ },

/***/ "./assets/styles/app.scss"
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-b7170d","vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-6d35c4"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQWdJLE1BQU0sRUFBSTtFQUN0REEsTUFBTSxDQUFDMUcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkMsSUFBTTJDLEtBQUssR0FBRytELE1BQU0sQ0FBQ0Msc0JBQXNCO0lBQzNDLElBQUloRSxLQUFLLElBQUlBLEtBQUssQ0FBQzlELE9BQU8sQ0FBQytILFFBQVEsS0FBSzlDLFNBQVMsRUFBRTtNQUMvQ25CLEtBQUssQ0FBQ04sS0FBSyxHQUFHTSxLQUFLLENBQUM5RCxPQUFPLENBQUMrSCxRQUFRO01BQ3BDakUsS0FBSyxDQUFDa0UsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvTGF5b3V0L2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0xheW91dC9zd2l0Y2hfbGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL1NlY3VyaXR5L2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvU2VjdXJpdHkvcmVtZW1iZXJfbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvU2VjdXJpdHkvcmVzZXQtYnRuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL3NjcmlwdHMvTGF5b3V0L2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvTGF5b3V0L3N3aXRjaF9sYXlvdXQuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9TZWN1cml0eS9mb3JtLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvU2VjdXJpdHkvcmVtZW1iZXJfbWUuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9TZWN1cml0eS9yZXNldC1idG4uanMnO1xyXG5cclxuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCJmdW5jdGlvbiBhdHRhY2hIb3ZlckRyb3Bkb3duKHRvZ2dsZVNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0b2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgdG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhbGx5SGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlRHJvcGRvd24sIDE1MCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIERlc2t0b3AgOiBob3ZlclxyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xyXG5cclxuICAgICAgICAvLyBNb2JpbGUgOiBjbGljay90b3VjaFxyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRHJvcGRvd24pO1xyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVEcm9wZG93biwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfbWVudVwiKTtcclxuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xyXG5cclxuICAgIGlmICghdG9nZ2xlIHx8ICFuYXZiYXJNZW51IHx8ICFuYXZiYXJDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZWdpb25FbHMgPSBbdG9nZ2xlLCBuYXZiYXJDb250YWluZXIsIGRyb3Bkb3duQ29udGVudF07XHJcblxyXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgIGxldCBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgIGxldCBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBpc0luUmVnaW9uID0gKGVsKSA9PlxyXG4gICAgICAgIHJlZ2lvbkVscy5zb21lKChub2RlKSA9PiBub2RlICYmIG5vZGUuY29udGFpbnMoZWwpKTtcclxuXHJcbiAgICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICBpc09wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlYWxseUhpZGVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaXNDbG9zaW5nID0gdHJ1ZTtcclxuICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcblxyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLXNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTGVhdmVSZWdpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0byA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XHJcbiAgICAgICAgaWYgKHRvICYmIGlzSW5SZWdpb24odG8pKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZUFsbCwgMTUwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERlc2t0b3AgOiBob3ZlclxyXG4gICAgcmVnaW9uRWxzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0FsbCk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgb25MZWF2ZVJlZ2lvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBNb2JpbGUgOiBjbGljay90b3VjaFxyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXZiYXIpO1xyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZU5hdmJhciwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzT3BlbiAmJiAhaXNJblJlZ2lvbihldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzT3BlbiAmJiAhaXNJblJlZ2lvbihldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGF0dGFjaE5hdmJhckRyb3Bkb3duKCk7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIudGhlbWUtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG59KTsiLCJ3aW5kb3cuc3dpdGNoVmlldyA9IGZ1bmN0aW9uKHZpZXdJZCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItdmlldycpLmZvckVhY2godiA9PiB2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlld0lkKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG59OyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFZBTElEQVRJT04gR8OJTsOJUklRVUUgREVTIEZPUk1VTEFJUkVTXHJcbiAgIEVtYWlscyArIE1vdHMgZGUgcGFzc2UgKyBQc2V1ZG9zICsgQ3VzdG9tIHZhbGlkYXRvcnNcclxuICAgQ29tcGF0aWJsZSBTdXBwb3J0IC8gVXNlciAvIExvZ2luIC8gRm9yZ290UGFzc3dvcmRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGb25jdGlvbnMgZCdhcHBhcmVuY2UgZGVzIGlucHV0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0RWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cclxuICAgIC8vIFBvdXIgbGUgcmVzcG9uc2l2ZSBtb2JpbGVcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnc3BhbicpIHx8IGV2LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJsdXIoZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnLCAnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3lzdMOobWUgZGUgdmFsaWRhdGlvbiBnw6luw6lyaXF1ZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCB2YWxpZGF0b3JzID0ge307XHJcbmNvbnN0IHZhbGlkYXRpb25UaW1lcnMgPSB7fTsgLy8gU3RvY2thZ2UgZGVzIHRpbWVyc1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGVGbikge1xyXG4gICAgdmFsaWRhdG9yc1tpbnB1dElkXSA9IHsgZXJyb3JJZCwgdmFsaWRhdGVGbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5WYWxpZGF0b3IoaW5wdXRJZCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdmFsaWRhdG9yc1tpbnB1dElkXTtcclxuICAgIGlmICghY29uZmlnKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZXJyb3JJZCk7XHJcblxyXG4gICAgaWYgKCFpbnB1dCB8fCAhZXJyb3JCb3gpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICdcXHUwMEEwJztcclxuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbmZpZy52YWxpZGF0ZUZuKGlucHV0LnZhbHVlLCBpbnB1dCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hWYWxpZGF0b3IoaW5wdXRJZCwgZXZlbnRUeXBlcyA9IFsnaW5wdXQnLCAnYmx1ciddLCBkZWxheU1zID0gMzAwMCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGlmICghaW5wdXQpIHJldHVybjtcclxuXHJcbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgbCfDqXbDqW5lbWVudCAnaW5wdXQnLCBvbiBham91dGUgdW4gZMOpbGFpIGRlIDMgc2Vjb25kZXNcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXlNcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2hhbmdlJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjaGFuZ2UnLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnYmx1cicsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWpvdXRlciAndG91Y2hlbmQnIHBvdXIgbW9iaWxlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQZXRpdCBkw6lsYWkgcG91ciDDqXZpdGVyIGxlcyBkb3VibGVzIGTDqWNsZW5jaGVtZW50c1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBydW5WYWxpZGF0b3IoaW5wdXRJZCksIDEwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NsaWNrJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBFTUFJTFMgKGfDqW7DqXJpcXVlcyBwb3VyIHRvdXQgbGUgc2l0ZSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRW1haWwoaW5wdXRJZCwgZXJyb3JJZCkge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdlbWFpbF9yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gdCgnZW1haWxfaW52YWxpZCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGVtYWlsRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfZW1haWxcIiwgZXJyb3JJZDogXCJlbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9lbWFpbFwiLCBlcnJvcklkOiBcInVzZXJfZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJuYW1lXCIsIGVycm9ySWQ6IFwidXNlcm5hbWUtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcImZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWxcIiwgZXJyb3JJZDogXCJmb3Jnb3RfZW1haWwtZXJyb3JcIiB9XHJcbl07XHJcblxyXG5lbWFpbEZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJFbWFpbChmLmlucHV0SWQsIGYuZXJyb3JJZCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgUFNFVURPUyAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gdChrZXkpIHtcclxuICAgIHJldHVybiAod2luZG93LmFwcFRyYW5zbGF0aW9ucyAmJiB3aW5kb3cuYXBwVHJhbnNsYXRpb25zW2tleV0pIHx8IGtleTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJQc2V1ZG8oaW5wdXRJZCwgZXJyb3JJZCwgbWluTGVuZ3RoID0gMykge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3BzZXVkb19yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA8IG1pbkxlbmd0aCkgcmV0dXJuIHQoJ3BzZXVkb19taW5fMycpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBzZXVkb0ZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X25hbWVcIiwgZXJyb3JJZDogXCJwc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuXTtcclxuXHJcbnBzZXVkb0ZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJQc2V1ZG8oZi5pbnB1dElkLCBmLmVycm9ySWQsIGYubWluTGVuZ3RoKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBNT1RTIERFIFBBU1NFIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInVzZXJfcGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIHQoJ3Bhc3N3b3JkX2xlbmd0aF84Jyk7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3VwcGVyJyk7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9udW1iZXInKTtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInVzZXJfcGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIHJldHVybiB0KCdwYXNzd29yZF9sZW5ndGhfOCcpO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF91cHBlcicpO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfbnVtYmVyJyk7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9zcGVjaWFsJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBkZSBjb25uZXhpb25cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgXCJvdWJsacOpXCIgKG5vdXZlYXUgbW90IGRlIHBhc3NlLCBzaSB0dSBhcyB1biBjaGFtcHMgZMOpZGnDqSlcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJmb3Jnb3RfcGFzc3dvcmRcIiwgXCJmb3Jnb3RfcGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFNVUFBPUlQgU1VQUEzDiU1FTlRBSVJFUyDihpIgY2F0ZWdvcnkgLyBtZXNzYWdlIC8gaW1hZ2VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9jYXRlZ29yeVwiLCBcInNlbGVjdGUtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3N1cHBvcnRfY2F0ZWdvcnlfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9tZXNzYWdlXCIsIFwidGV4dC1hcmVhLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodi5sZW5ndGggPCAxMCkgcmV0dXJuIHQoJ3N1cHBvcnRfbWVzc2FnZV9taW5fMTAnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIFZBTElEQVRJT04gREUgTOKAmUlNQUdFIChzdXBwb3J0KVxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfaW1hZ2VGaWxlXCIsIFwiaW1hZ2UtZXJyb3JcIiwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG4gICAgaWYgKCFmaWxlKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBhbGxvd2VkID0gW1wiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiLCBcImltYWdlL3BuZ1wiLCBcImltYWdlL3dlYnBcIl07XHJcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XHJcblxyXG4gICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKGZpbGUudHlwZSkpIHJldHVybiB0KCdpbWFnZV90eXBlJyk7XHJcbiAgICBpZiAoZmlsZS5zaXplID4gbWF4KSByZXR1cm4gdCgnaW1hZ2Vfc2l6ZScpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTT1VNSVNTSU9OIERVIEZPUk1VTEFJUkVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBbm51bGVyIHRvdXMgbGVzIHRpbWVycyBlbiBjb3Vyc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdGlvblRpbWVycykuZm9yRWFjaChpbnB1dElkID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgdG91cyBsZXMgdmFsaWRhdGV1cnMgZW5yZWdpc3Ryw6lzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKChpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFydW5WYWxpZGF0b3IoaW5wdXRJZCkpIHtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBsYSB2YWxpZGl0w6kgSFRNTDUgZGVzIGNoYW1wcyBzYW5zIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICBjb25zdCBmb3JtID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVyIGxlcyBjaGFtcHMgcXVpIG9udCBkw6lqw6AgdW4gdmFsaWRhdGV1ciBjdXN0b21cclxuICAgICAgICBpZiAodmFsaWRhdG9yc1tpbnB1dC5pZF0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChoYXNFcnJvcikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUSUFMSVNBVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXNlciBsZXMgaW5wdXRzIGRlIGJhc2VcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGluaXRJbnB1dChpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgc3VwcG9ydFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X25hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfY2F0ZWdvcnknLCBbJ2NoYW5nZScsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X21lc3NhZ2UnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgWydjaGFuZ2UnXSwgMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgdXRpbGlzYXRldXJcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wc2V1ZG8nLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSByZXNldCBwYXNzd29yZFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJuYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdwYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgw6l2ZW50dWVscyBkdSBmb3JtdWxhaXJlIFwibW90IGRlIHBhc3NlIG91Ymxpw6lcIlxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBzdWJtaXRcclxuICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWNvbnNlbnRcIik7XHJcbiAgICBjb25zdCBhY2NlcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWZ1c2UtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlbWVtYmVyQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9yZW1lbWJlcl9tZVwiKTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgcXVlIGxlcyDDqWzDqW1lbnRzIGV4aXN0ZW50XHJcbiAgICBpZiAoIWJveCB8fCAhYWNjZXB0IHx8ICFyZWZ1c2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLDiWzDqW1lbnRzIGNvb2tpZSBub24gdHJvdXbDqXNcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xyXG5cclxuICAgIC8vIEFGRklDSEFHRSBJTklUSUFMXHJcbiAgICBpZiAoIWNvbnNlbnQpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOJU0FDVElWRVIgUkVNRU1CRVIgTUUgU0kgUkVGVVNcclxuICAgIGlmIChjb25zZW50ICE9PSBcImFjY2VwdGVkXCIgJiYgcmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFDQ0VQVEVSXHJcbiAgICBhY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwiYWNjZXB0ZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSRUZVU0VSXHJcbiAgICByZWZ1c2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwicmVmdXNlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcblxyXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIExFIEJPVVRPTiBSw4lEVUlUIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGNvbnN0IGNvbGxhcHNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtZXhwYW5kLWJ0blwiKTtcclxuICAgIGlmIChjb2xsYXBzZUJ0bikge1xyXG4gICAgICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBSRU1FTUJFUiBNRSBBUFLDiFMgVU4gUkVGVVMg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICBjb25zdCByZW1lbWJlckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiX3JlbWVtYmVyX21lXCJdJyk7XHJcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIGlmIChyZW1lbWJlckxhYmVsKSB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LmRhdGFzZXQub3JpZ2luYWw7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2dnbGUiLCJ0YXJnZXRTZWxlY3RvciIsImRhdGFzZXQiLCJkcm9wZG93blRhcmdldCIsImRyb3Bkb3duQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRlVGltZW91dCIsImlzT3BlbiIsInNob3dEcm9wZG93biIsImNsZWFyVGltZW91dCIsInN0eWxlIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlYWxseUhpZGVEcm9wZG93biIsImhhbmRsZXIiLCJldmVudCIsImFuaW1hdGlvbk5hbWUiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVEcm9wZG93biIsInNldFRpbWVvdXQiLCJ0b2dnbGVEcm9wZG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFzc2l2ZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJzaG93QWxsIiwicmVhbGx5SGlkZUFsbCIsIm9uTGVhdmVSZWdpb24iLCJ0byIsInJlbGF0ZWRUYXJnZXQiLCJ0b2dnbGVOYXZiYXIiLCJ3aW5kb3ciLCJzd2l0Y2hWaWV3Iiwidmlld0lkIiwidiIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsInZhbHVlIiwidHJpbSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsImlucHV0IiwibGl2ZVZhbGlkYXRpb24iLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdG9ycyIsInZhbGlkYXRpb25UaW1lcnMiLCJyZWdpc3RlclZhbGlkYXRvciIsImlucHV0SWQiLCJlcnJvcklkIiwidmFsaWRhdGVGbiIsInJ1blZhbGlkYXRvciIsImNvbmZpZyIsImVycm9yQm94IiwidmlzaWJpbGl0eSIsInRleHRDb250ZW50IiwicmVzdWx0IiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJyZWdpc3RlckVtYWlsIiwidCIsImVtYWlsRmllbGRzIiwiZiIsImtleSIsImFwcFRyYW5zbGF0aW9ucyIsInJlZ2lzdGVyUHNldWRvIiwibWluTGVuZ3RoIiwicHNldWRvRmllbGRzIiwidGVzdCIsImZpcnN0IiwiZmlsZSIsImZpbGVzIiwiYWxsb3dlZCIsIm1heCIsImluY2x1ZGVzIiwidHlwZSIsInNpemUiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwibG9naW5Gb3JtIiwidGFnTmFtZSIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJ3YXJuIiwiY29uc2VudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNhYmxlZCIsInNldEl0ZW0iLCJjaGVja2VkIiwiY29sbGFwc2VCdG4iLCJlIiwicmVtZW1iZXJMYWJlbCIsImNsaWNrSGFuZGxlciIsImN1cnJlbnRDb25zZW50IiwiYnV0dG9uIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9yaWdpbmFsIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==