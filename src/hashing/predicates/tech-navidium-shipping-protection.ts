import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^.*/navidium-extension-checker\\.js$'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'nvdShop'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
