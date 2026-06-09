import { Controller } from '@hotwired/stimulus'
import htmx from 'htmx.org'

/*
 * HTMX Polling Controller
 *
 * Usage:
 *   <div data-controller="htmx-polling"
 *        data-htmx-polling-url-value="/api/buildings/123/delivery-time/fragment">
 *   </div>
 */
export default class extends Controller {
    connect() {
        const url = this.element.dataset.htmxPollingUrl
        if (!url) return

        // Configuration HTMX pour le polling
        htmx.attr(this.element, 'hx-get', url)
        htmx.attr(this.element, 'hx-trigger', 'every 2s')
        htmx.attr(this.element, 'hx-swap', 'innerHTML')
    }
}