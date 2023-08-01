import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.at\\.getsocial\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GETSOCIAL_VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
