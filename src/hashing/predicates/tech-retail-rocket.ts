import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.retailrocket\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'retailrocket'),
    matchRegexInInnerHTML('script', 'rrAddToBasket'),
    matchRegexInInnerHTML('script', 'rrApiOnReady'),
    matchRegexInInnerHTML('script', 'rrLibrary'),
    matchRegexInInnerHTML('script', 'rrPartnerId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
