import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn.cxc.scorpion.direct'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Process.UserData'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+id="HSScorpion'),
    // in text

    // in css
])
