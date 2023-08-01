import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'Copyright', '^Copyright &copy; \\d{4} OpenLink Software'),
    matchRegexInAttribute('meta', 'Keywords', '^OpenLink Virtuoso Sparql'),
    // in scripts

    // in html

    // in text

    // in css
])
