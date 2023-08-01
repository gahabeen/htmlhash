import { anyOf, matchRegexInInnerHTML } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'siteInfo.host'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
