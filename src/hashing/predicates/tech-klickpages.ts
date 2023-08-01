import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.klickpages\\.com\\.br/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'klickart.analytics'),
    // in meta
    matchRegexInAttribute('meta', 'klickart:url', ''),
    // in scripts

    // in html

    // in text

    // in css
])
