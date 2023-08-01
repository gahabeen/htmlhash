import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/web/js/(?:web\\.assets_common/|website\\.assets_frontend/)\\;confidence'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'odoo.session_info'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Odoo'),
    // in scripts

    // in html
    matchRegex('<link[^>]* href=[^>]+/web/css/(?:web\\.assets_common/|website\\.assets_frontend/)\\;confidence'),
    // in text

    // in css
])
