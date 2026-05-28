import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

import './scripts/Layout/dropdown.js';
import './scripts/Layout/switch_layout.js';
import './scripts/Security/form.js';
import './scripts/Security/remember_me.js';
import './scripts/Security/reset-btn.js';

import "leaflet/dist/leaflet.css";

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
