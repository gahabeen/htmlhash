import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.nsw-container, .nsw-header, .nsw-icon, link[href*='nsw-design-system']`),
    // in js
    matchRegexInInnerHTML('script', 'NSW.initSite'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
