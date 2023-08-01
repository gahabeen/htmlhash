import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.revy\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'RevyApp'),
    matchRegexInInnerHTML('script', 'RevyBundle'),
    matchRegexInInnerHTML('script', 'RevyUpsell'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
