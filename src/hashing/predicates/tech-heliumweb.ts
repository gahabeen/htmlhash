import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'helium/src/helium.js/helium_web.js'),
    matchRegexInAttribute('script', 'src', 'http://maven.enriquitomcfh.ml/helium.js/helium_web.js'),
    matchRegexInAttribute('script', 'src', 'http://maven.enriquitomcfh.ml/helium.js/helium_web.min.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'helium.js'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
