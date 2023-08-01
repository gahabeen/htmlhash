import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.useinsider\\.\\w+/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Insider'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
