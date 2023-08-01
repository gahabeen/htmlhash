import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:typeahead|bloodhound)\\.(?:jquery|bundle)?(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'typeahead'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
