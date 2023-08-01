import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//cdn\\.mobify\\.com/'),
    matchRegexInAttribute('script', 'src', '//a\\.mobify\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Mobify'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
