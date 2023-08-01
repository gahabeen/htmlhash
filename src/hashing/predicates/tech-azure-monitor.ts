import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.monitor\\.azure\\.com/'),
    // in dom
    matchSelector(`link[href*='js.monitor.azure.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
