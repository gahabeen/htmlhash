import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.connectif\\.cloud/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'connectif.version'),
    matchRegexInInnerHTML('script', 'connectifInfo.store'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
