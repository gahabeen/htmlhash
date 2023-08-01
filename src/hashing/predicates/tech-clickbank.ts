import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'r\\.wdfl\\.co'),
    // in dom
    matchSelector(`a[href*='pay.clickbank.net?cbfid'], img[width='1'][src*='hop.clickbank.net?affiliate']`),
    // in js
    matchRegexInInnerHTML('script', 'cbtb'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
