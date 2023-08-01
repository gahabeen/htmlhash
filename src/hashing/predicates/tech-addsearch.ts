import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//addsearch\\.com/js/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AddSearchClient'),
    matchRegexInInnerHTML('script', 'AddSearchUI'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
