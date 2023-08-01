import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://edge\\.avangate\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AvaCart.version'),
    matchRegexInInnerHTML('script', '__avng8_callbacks'),
    matchRegexInInnerHTML('script', 'avaSlugify'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
