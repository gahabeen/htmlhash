import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'scripts/OutSystems(?:[\\w]+)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OutSystemsDebugger'),
    matchRegexInInnerHTML('script', 'outsystems'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
