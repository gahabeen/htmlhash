import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'plugin\\.skedify\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Skedify.Plugin.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
