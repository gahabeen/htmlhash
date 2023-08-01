import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='js.financeads.net'], link[href*='js.financeads.com'], a[href*='www.financeads.net/tc.php']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
