import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.personaclick\\.com/v([\\d.]+)\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'personaclick'),
    matchRegexInInnerHTML('script', 'personaclick_callback'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
