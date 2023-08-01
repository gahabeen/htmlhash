import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'three(?:\\.min)?\\.js'),
    // in dom
    matchSelector(`canvas[data-engine*='three.js']`),
    // in js
    matchRegexInInnerHTML('script', 'THREE.REVISION'),
    matchRegexInInnerHTML('script', '__THREE__'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
