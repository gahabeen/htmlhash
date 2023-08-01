import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'lightbox(?:-plus-jquery)?.{0,32}\\.js'),
    // in dom
    matchSelector(`link[href*='lightbox']`),
    // in js
    matchRegexInInnerHTML('script', 'Lightbox.activeImage'),
    matchRegexInInnerHTML('script', 'lightbox.$lightbox'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
