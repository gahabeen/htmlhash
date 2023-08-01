import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//.*glpi.+common\\.min\\.js\\?v=(\\d+\\.\\d+\\.\\d+)\\;version:\\1'),
    // in dom
    matchSelector(`div[id*='footer-login'] > a`),
    matchSelector(`input[name='_glpi_csrf_token']`),
    // in js
    matchRegexInInnerHTML('script', 'glpiUnsavedFormChanges'),
    // in meta
    matchRegexInAttribute('meta', 'glpi:csrf_token', ''),
    // in scripts

    // in html

    // in text

    // in css
])
