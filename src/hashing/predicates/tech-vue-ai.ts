import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'vuex\\.vue\\.ai'),
    matchRegexInAttribute('script', 'src', 'vue_ai\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'getVueUrlSegments'),
    matchRegexInInnerHTML('script', 'vuex'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
