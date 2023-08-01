import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'xcharts\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'xChart'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]* href="[^"]*xcharts(?:\\.min)?\\.css'),
    // in text

    // in css
])
