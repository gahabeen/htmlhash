import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'frosmo\\.easy\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_frosmo'),
    matchRegexInInnerHTML('script', 'frosmo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
