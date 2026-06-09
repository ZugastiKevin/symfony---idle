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
/* harmony import */ var _scripts_Game_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/Game/faction-game-choice.js */ "./assets/scripts/Game/faction-game-choice.js");
/* harmony import */ var _scripts_Game_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_Game_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");


/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */







// Game-specific scripts (only loaded on game pages)

// Note: deliveryTimer.js est importé dans game-main.js pour être sûr que HTMX est chargé


console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ },

/***/ "./assets/scripts/Game/faction-game-choice.js"
/*!****************************************************!*\
  !*** ./assets/scripts/Game/faction-game-choice.js ***!
  \****************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/**
 * Gestion de la sélection visuelle des games et factions
 */

function initSelection() {
  // Gérer la sélection des games
  document.querySelectorAll('.game-card').forEach(function (card) {
    var radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', function () {
        document.querySelectorAll('.game-card').forEach(function (c) {
          return c.classList.remove('selected');
        });
        if (this.checked) {
          card.classList.add('selected');
        }
      });
    }
  });

  // Gérer la sélection des factions
  document.querySelectorAll('.faction-card').forEach(function (card) {
    var radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', function () {
        document.querySelectorAll('.faction-card').forEach(function (c) {
          return c.classList.remove('selected');
        });
        if (this.checked) {
          card.classList.add('selected');
        }
      });
    }
  });

  // Au chargement, sélectionner la carte déjà cochée (si elle existe)
  document.querySelectorAll('input[type="radio"]:checked').forEach(function (radio) {
    var card = radio.closest('.game-card, .faction-card');
    if (card) {
      card.classList.add('selected');
    }
  });
}

// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSelection);
} else {
  initSelection();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9mYWN0aW9uLWdhbWUtY2hvaWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0xheW91dC9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9MYXlvdXQvc3dpdGNoX2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9TZWN1cml0eS9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL1NlY3VyaXR5L3JlbWVtYmVyX21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL1NlY3VyaXR5L3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG5pbXBvcnQgJy4vc2NyaXB0cy9MYXlvdXQvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9MYXlvdXQvc3dpdGNoX2xheW91dC5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL1NlY3VyaXR5L2Zvcm0uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9TZWN1cml0eS9yZW1lbWJlcl9tZS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL1NlY3VyaXR5L3Jlc2V0LWJ0bi5qcyc7XHJcblxyXG4vLyBHYW1lLXNwZWNpZmljIHNjcmlwdHMgKG9ubHkgbG9hZGVkIG9uIGdhbWUgcGFnZXMpXHJcbmltcG9ydCAnLi9zY3JpcHRzL0dhbWUvZmFjdGlvbi1nYW1lLWNob2ljZS5qcyc7XHJcbi8vIE5vdGU6IGRlbGl2ZXJ5VGltZXIuanMgZXN0IGltcG9ydMOpIGRhbnMgZ2FtZS1tYWluLmpzIHBvdXIgw6p0cmUgc8O7ciBxdWUgSFRNWCBlc3QgY2hhcmfDqVxyXG5cclxuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCIvKipcbiAqIEdlc3Rpb24gZGUgbGEgc8OpbGVjdGlvbiB2aXN1ZWxsZSBkZXMgZ2FtZXMgZXQgZmFjdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xuXG4gICAgLy8gR8OpcmVyIGxhIHPDqWxlY3Rpb24gZGVzIGdhbWVzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY2FyZCcpLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgICAgaWYgKHJhZGlvKSB7XG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY2FyZCcpLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBHw6lyZXIgbGEgc8OpbGVjdGlvbiBkZXMgZmFjdGlvbnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFjdGlvbi1jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW8gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICBpZiAocmFkaW8pIHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFjdGlvbi1jYXJkJykuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEF1IGNoYXJnZW1lbnQsIHPDqWxlY3Rpb25uZXIgbGEgY2FydGUgZMOpasOgIGNvY2jDqWUgKHNpIGVsbGUgZXhpc3RlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSByYWRpby5jbG9zZXN0KCcuZ2FtZS1jYXJkLCAuZmFjdGlvbi1jYXJkJyk7XG4gICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gQXR0ZW5kcmUgcXVlIGxlIERPTSBzb2l0IHByw6p0XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRTZWxlY3Rpb24pO1xufSBlbHNlIHtcbiAgICBpbml0U2VsZWN0aW9uKCk7XG59IiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWxseUhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2YmFyKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7Iiwid2luZG93LnN3aXRjaFZpZXcgPSBmdW5jdGlvbih2aWV3SWQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXZpZXcnKS5mb3JFYWNoKHYgPT4gdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXdJZCkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufTsiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBWQUxJREFUSU9OIEfDiU7DiVJJUVVFIERFUyBGT1JNVUxBSVJFU1xyXG4gICBFbWFpbHMgKyBNb3RzIGRlIHBhc3NlICsgUHNldWRvcyArIEN1c3RvbSB2YWxpZGF0b3JzXHJcbiAgIENvbXBhdGlibGUgU3VwcG9ydCAvIFVzZXIgLyBMb2dpbiAvIEZvcmdvdFBhc3N3b3JkXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5jb25zdCBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sIHNlbGVjdCwgdGV4dGFyZWEnO1xyXG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRm9uY3Rpb25zIGQnYXBwYXJlbmNlIGRlcyBpbnB1dHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dEVsLmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dEVsLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMpO1xyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHJcbiAgICAvLyBQb3VyIGxlIHJlc3BvbnNpdmUgbW9iaWxlXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25CbHVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Gb2N1cyhldikge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBldi50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25CbHVyKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJywgJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXZlVmFsaWRhdGlvbihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN5c3TDqG1lIGRlIHZhbGlkYXRpb24gZ8OpbsOpcmlxdWVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xyXG5jb25zdCB2YWxpZGF0aW9uVGltZXJzID0ge307IC8vIFN0b2NrYWdlIGRlcyB0aW1lcnNcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsIHZhbGlkYXRlRm4pIHtcclxuICAgIHZhbGlkYXRvcnNbaW5wdXRJZF0gPSB7IGVycm9ySWQsIHZhbGlkYXRlRm4gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuVmFsaWRhdG9yKGlucHV0SWQpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRvcnNbaW5wdXRJZF07XHJcbiAgICBpZiAoIWNvbmZpZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmVycm9ySWQpO1xyXG5cclxuICAgIGlmICghaW5wdXQgfHwgIWVycm9yQm94KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSAnXFx1MDBBMCc7XHJcbiAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBjb25maWcudmFsaWRhdGVGbihpbnB1dC52YWx1ZSwgaW5wdXQpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcclxuICAgICAgICBlcnJvckJveC50ZXh0Q29udGVudCA9IHJlc3VsdDtcclxuICAgICAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoVmFsaWRhdG9yKGlucHV0SWQsIGV2ZW50VHlwZXMgPSBbJ2lucHV0JywgJ2JsdXInXSwgZGVsYXlNcyA9IDMwMDApIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XHJcblxyXG4gICAgZXZlbnRUeXBlcy5mb3JFYWNoKGV2ZW50VHlwZSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgICAgICAvLyBQb3VyIGwnw6l2w6luZW1lbnQgJ2lucHV0Jywgb24gYWpvdXRlIHVuIGTDqWxhaSBkZSAzIHNlY29uZGVzXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgICAgIH0sIGRlbGF5TXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NoYW5nZScpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2hhbmdlJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2JsdXInKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2JsdXInLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgJ3RvdWNoZW5kJyBwb3VyIG1vYmlsZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gUGV0aXQgZMOpbGFpIHBvdXIgw6l2aXRlciBsZXMgZG91YmxlcyBkw6ljbGVuY2hlbWVudHNcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcnVuVmFsaWRhdG9yKGlucHV0SWQpLCAxMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjbGljaycsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgRU1BSUxTIChnw6luw6lyaXF1ZXMgcG91ciB0b3V0IGxlIHNpdGUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckVtYWlsKGlucHV0SWQsIGVycm9ySWQpIHtcclxuICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgnZW1haWxfcmVxdWlyZWQnKTtcclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIHQoJ2VtYWlsX2ludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBlbWFpbEZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X2VtYWlsXCIsIGVycm9ySWQ6IFwiZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJfZW1haWxcIiwgZXJyb3JJZDogXCJ1c2VyX2VtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VybmFtZVwiLCBlcnJvcklkOiBcInVzZXJuYW1lLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsXCIsIGVycm9ySWQ6IFwiZm9yZ290X2VtYWlsLWVycm9yXCIgfVxyXG5dO1xyXG5cclxuZW1haWxGaWVsZHMuZm9yRWFjaChmID0+IHJlZ2lzdGVyRW1haWwoZi5pbnB1dElkLCBmLmVycm9ySWQpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFBTRVVET1MgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHQoa2V5KSB7XHJcbiAgICByZXR1cm4gKHdpbmRvdy5hcHBUcmFuc2xhdGlvbnMgJiYgd2luZG93LmFwcFRyYW5zbGF0aW9uc1trZXldKSB8fCBrZXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyUHNldWRvKGlucHV0SWQsIGVycm9ySWQsIG1pbkxlbmd0aCA9IDMpIHtcclxuICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwc2V1ZG9fcmVxdWlyZWQnKTtcclxuICAgICAgICBpZiAodi5sZW5ndGggPCBtaW5MZW5ndGgpIHJldHVybiB0KCdwc2V1ZG9fbWluXzMnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwc2V1ZG9GaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9uYW1lXCIsIGVycm9ySWQ6IFwicHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMyB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJfcHNldWRvXCIsIGVycm9ySWQ6IFwidXNlcl9wc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzIH0sXHJcbl07XHJcblxyXG5wc2V1ZG9GaWVsZHMuZm9yRWFjaChmID0+IHJlZ2lzdGVyUHNldWRvKGYuaW5wdXRJZCwgZi5lcnJvcklkLCBmLm1pbkxlbmd0aCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgTU9UUyBERSBQQVNTRSAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJ1c2VyX3Bhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIHJldHVybiB0KCdwYXNzd29yZF9sZW5ndGhfOCcpO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF91cHBlcicpO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfbnVtYmVyJyk7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9zcGVjaWFsJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJ1c2VyX3Bhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XHJcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfY29uZmlybV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX21pc21hdGNoJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gdCgncGFzc3dvcmRfbGVuZ3RoXzgnKTtcclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfdXBwZXInKTtcclxuICAgIGlmICghL1xcZC8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX251bWJlcicpO1xyXG4gICAgaWYgKCEvW1xcV19dLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfc3BlY2lhbCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XHJcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfY29uZmlybV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX21pc21hdGNoJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicGFzc3dvcmRcIiwgXCJwYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIFwib3VibGnDqVwiIChub3V2ZWF1IG1vdCBkZSBwYXNzZSwgc2kgdHUgYXMgdW4gY2hhbXBzIGTDqWRpw6kpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwiZm9yZ290X3Bhc3N3b3JkXCIsIFwiZm9yZ290X3Bhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBTVVBQT1JUIFNVUFBMw4lNRU5UQUlSRVMg4oaSIGNhdGVnb3J5IC8gbWVzc2FnZSAvIGltYWdlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfY2F0ZWdvcnlcIiwgXCJzZWxlY3RlLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X2NhdGVnb3J5X3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfbWVzc2FnZVwiLCBcInRleHQtYXJlYS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3N1cHBvcnRfbWVzc2FnZV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgMTApIHJldHVybiB0KCdzdXBwb3J0X21lc3NhZ2VfbWluXzEwJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBWQUxJREFUSU9OIERFIEzigJlJTUFHRSAoc3VwcG9ydClcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2ltYWdlRmlsZVwiLCBcImltYWdlLWVycm9yXCIsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgIGlmICghZmlsZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgYWxsb3dlZCA9IFtcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIiwgXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS93ZWJwXCJdO1xyXG4gICAgY29uc3QgbWF4ID0gMiAqIDEwMjQgKiAxMDI0O1xyXG5cclxuICAgIGlmICghYWxsb3dlZC5pbmNsdWRlcyhmaWxlLnR5cGUpKSByZXR1cm4gdCgnaW1hZ2VfdHlwZScpO1xyXG4gICAgaWYgKGZpbGUuc2l6ZSA+IG1heCkgcmV0dXJuIHQoJ2ltYWdlX3NpemUnKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU09VTUlTU0lPTiBEVSBGT1JNVUxBSVJFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBvblN1Ym1pdChldikge1xyXG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQW5udWxlciB0b3VzIGxlcyB0aW1lcnMgZW4gY291cnNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb25UaW1lcnMpLmZvckVhY2goaW5wdXRJZCA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHRvdXMgbGVzIHZhbGlkYXRldXJzIGVucmVnaXN0csOpc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xyXG4gICAgICAgIGlmICghcnVuVmFsaWRhdG9yKGlucHV0SWQpKSB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgbGEgdmFsaWRpdMOpIEhUTUw1IGRlcyBjaGFtcHMgc2FucyB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlciBsZXMgY2hhbXBzIHF1aSBvbnQgZMOpasOgIHVuIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICAgICAgaWYgKHZhbGlkYXRvcnNbaW5wdXQuaWRdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVElBTElTQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZXIgbGVzIGlucHV0cyBkZSBiYXNlXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbml0SW5wdXQoaW5wdXQpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIHN1cHBvcnRcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9uYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2NhdGVnb3J5JywgWydjaGFuZ2UnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9tZXNzYWdlJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2ltYWdlRmlsZScsIFsnY2hhbmdlJ10sIDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHV0aWxpc2F0ZXVyXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgcmVzZXQgcGFzc3dvcmRcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VybmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIMOpdmVudHVlbHMgZHUgZm9ybXVsYWlyZSBcIm1vdCBkZSBwYXNzZSBvdWJsacOpXCJcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgc3VibWl0XHJcbiAgICBpZiAoZm9ybSkge1xyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGlmIChsb2dpbkZvcm0pIHtcclxuICAgICAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG59KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1jb25zZW50XCIpO1xyXG4gICAgY29uc3QgYWNjZXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlZnVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVmdXNlLWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZW1lbWJlckNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfcmVtZW1iZXJfbWVcIik7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHF1ZSBsZXMgw6lsw6ltZW50cyBleGlzdGVudFxyXG4gICAgaWYgKCFib3ggfHwgIWFjY2VwdCB8fCAhcmVmdXNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiw4lsw6ltZW50cyBjb29raWUgbm9uIHRyb3V2w6lzXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAvLyBBRkZJQ0hBR0UgSU5JVElBTFxyXG4gICAgaWYgKCFjb25zZW50KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgfSBlbHNlIGlmIChjb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIETDiVNBQ1RJVkVSIFJFTUVNQkVSIE1FIFNJIFJFRlVTXHJcbiAgICBpZiAoY29uc2VudCAhPT0gXCJhY2NlcHRlZFwiICYmIHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBQ0NFUFRFUlxyXG4gICAgYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcImFjY2VwdGVkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUkVGVVNFUlxyXG4gICAgcmVmdXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcInJlZnVzZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBMRSBCT1VUT04gUsOJRFVJVCDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBjb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWV4cGFuZC1idG5cIik7XHJcbiAgICBpZiAoY29sbGFwc2VCdG4pIHtcclxuICAgICAgICBjb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgUkVNRU1CRVIgTUUgQVBSw4hTIFVOIFJFRlVTIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgY29uc3QgcmVtZW1iZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIl9yZW1lbWJlcl9tZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJMYWJlbCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImluaXRTZWxlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2FyZCIsInJhZGlvIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY2hlY2tlZCIsImFkZCIsImNsb3Nlc3QiLCJyZWFkeVN0YXRlIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsInRvZ2dsZSIsInRhcmdldFNlbGVjdG9yIiwiZGF0YXNldCIsImRyb3Bkb3duVGFyZ2V0IiwiZHJvcGRvd25Db250ZW50IiwiaGlkZVRpbWVvdXQiLCJpc09wZW4iLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVEcm9wZG93biIsInNldFRpbWVvdXQiLCJ0b2dnbGVEcm9wZG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFzc2l2ZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJzaG93QWxsIiwicmVhbGx5SGlkZUFsbCIsIm9uTGVhdmVSZWdpb24iLCJ0byIsInJlbGF0ZWRUYXJnZXQiLCJ0b2dnbGVOYXZiYXIiLCJ3aW5kb3ciLCJzd2l0Y2hWaWV3Iiwidmlld0lkIiwidiIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJwYXJlbnRFbGVtZW50IiwidmFsdWUiLCJ0cmltIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwiaW5wdXQiLCJsaXZlVmFsaWRhdGlvbiIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0b3JzIiwidmFsaWRhdGlvblRpbWVycyIsInJlZ2lzdGVyVmFsaWRhdG9yIiwiaW5wdXRJZCIsImVycm9ySWQiLCJ2YWxpZGF0ZUZuIiwicnVuVmFsaWRhdG9yIiwiY29uZmlnIiwiZXJyb3JCb3giLCJ2aXNpYmlsaXR5IiwidGV4dENvbnRlbnQiLCJyZXN1bHQiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsInJlZ2lzdGVyRW1haWwiLCJ0IiwiZW1haWxGaWVsZHMiLCJmIiwia2V5IiwiYXBwVHJhbnNsYXRpb25zIiwicmVnaXN0ZXJQc2V1ZG8iLCJtaW5MZW5ndGgiLCJwc2V1ZG9GaWVsZHMiLCJ0ZXN0IiwiZmlyc3QiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwibWF4IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsIm9uU3VibWl0IiwiaGFzRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJsb2dpbkZvcm0iLCJ0YWdOYW1lIiwiYm94IiwiYWNjZXB0IiwicmVmdXNlIiwicmVtZW1iZXJDaGVja2JveCIsIndhcm4iLCJjb25zZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpc2FibGVkIiwic2V0SXRlbSIsImNvbGxhcHNlQnRuIiwiZSIsInJlbWVtYmVyTGFiZWwiLCJjbGlja0hhbmRsZXIiLCJjdXJyZW50Q29uc2VudCIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=