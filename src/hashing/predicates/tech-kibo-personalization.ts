import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.baynote\\.net'),
    matchRegexInAttribute('script', 'src', '\\.certona\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BaynoteAPI'),
    matchRegexInInnerHTML('script', 'BaynoteJSVersion'),
    matchRegexInInnerHTML('script', 'certona.recommendations'),
    matchRegexInInnerHTML('script', 'certonaRecommendations'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
