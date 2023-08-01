import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/chevereto\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CHEVERETO.version'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Chevereto\\s(?:[\\d\\.]+)'),
    // in scripts

    // in html

    // in text

    // in css
])
