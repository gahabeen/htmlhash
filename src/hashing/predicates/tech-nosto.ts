import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'connect\\.nosto\\.\\w+/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'nosto'),
    matchRegexInInnerHTML('script', 'nostojs'),
    // in meta
    matchRegexInAttribute('meta', 'nosto-version', '([\\d.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
