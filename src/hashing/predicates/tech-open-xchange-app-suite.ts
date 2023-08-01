import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#io-ox-core, form > input[value='open-xchange-appsuite']`),
    // in js
    matchRegexInInnerHTML('script', 'ox.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
