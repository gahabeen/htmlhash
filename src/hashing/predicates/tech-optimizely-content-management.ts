import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.episerver.net/'),
    // in dom
    matchSelector(`link[href*='/EPiServer.Forms/']`),
    // in js
    matchRegexInInnerHTML('script', 'epi.EPiServer'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'EPiServer'),
    // in scripts

    // in html

    // in text

    // in css
])
