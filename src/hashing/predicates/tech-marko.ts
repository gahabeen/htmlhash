import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#data-marko-key, html[data-framework='marko']`),
    // in js
    matchRegexInInnerHTML('script', 'markoComponent'),
    matchRegexInInnerHTML('script', 'markoSections'),
    matchRegexInInnerHTML('script', 'markoVars'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '\\.marko(\\.js)?'),
    // in html

    // in text

    // in css
])
