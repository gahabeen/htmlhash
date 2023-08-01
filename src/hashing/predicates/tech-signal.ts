import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//s\\.btstatic\\.com/tag\\.js'),
    matchRegexInAttribute('script', 'src', '//s\\.thebrighttag\\.com/iframe\\?'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'signalData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
