import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/awesomplete\\.js(?:$|\\?)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'awesomplete'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+href="[^>]*awesomplete(?:\\.min)?\\.css'),
    // in text

    // in css
])
