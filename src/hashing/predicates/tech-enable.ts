import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.enable\\.co\\.il/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'enable_toolbar.is_premium'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
