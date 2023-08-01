import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/bugsnag.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Bugsnag'),
    matchRegexInInnerHTML('script', 'bugsnag'),
    matchRegexInInnerHTML('script', 'bugsnagClient'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
