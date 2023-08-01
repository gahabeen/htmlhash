import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'eomportal-id', '\\d+'),
    matchRegexInAttribute('meta', 'eomportal-instanceid', '\\d+'),
    matchRegexInAttribute('meta', 'eomportal-lastUpdate', ''),
    matchRegexInAttribute('meta', 'eomportal-loid', '[\\d.]+'),
    matchRegexInAttribute('meta', 'eomportal-uuid', '[a-f\\d]+'),
    // in scripts

    // in html
    matchRegex('<!-- Methode uuid: "[a-f\\d]+" ?-->'),
    // in text

    // in css
])
