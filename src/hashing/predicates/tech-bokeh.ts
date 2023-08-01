import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'bokeh.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Bokeh'),
    matchRegexInInnerHTML('script', 'Bokeh.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
