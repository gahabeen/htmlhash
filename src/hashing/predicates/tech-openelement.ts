import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OE.GETools'),
    matchRegexInInnerHTML('script', 'OEConfWEMenu'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'openElement\\s\\(([\\d\\.]+)\\)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
