import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/rokoInstabot\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Instabot'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
