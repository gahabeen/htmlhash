import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<a id="tracpowered'),
    matchRegex('Powered by <a href="[^"]*"><strong>Trac(?:[ /]([\\d.]+))?\\;version:\\1'),
    // in text

    // in css
])
