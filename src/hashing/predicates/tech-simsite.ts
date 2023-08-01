import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/sim(?:site|core)/js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'SIM.medium', ''),
    // in scripts

    // in html

    // in text

    // in css
])
