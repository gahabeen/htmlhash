import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'clr-angular(?:\\.umd)?(?:\\.min)?\\.js'),
    // in dom
    matchSelector(`link[href*='clr-ui'], clr-main-container`),
    // in js
    matchRegexInInnerHTML('script', 'ClarityIcons'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
