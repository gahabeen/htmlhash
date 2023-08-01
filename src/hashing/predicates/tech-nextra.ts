import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.nextra-container`),
    matchSelector(`div.nextra-nav-container`),
    matchSelector(`div.nextra-sidebar-container`),
    // in js
    matchRegexInInnerHTML('script', '__nextra_internal__'),
    matchRegexInInnerHTML('script', '__nextra_pageContext__'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
