import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<(?:script|link)[^>]/site/[a-z0-9/._-]+/resourceCached/[a-z0-9/._-]+'),
    matchRegex('<input[^>]+cbi:///cms/'),
    // in text

    // in css
])
