import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sakai'),
    matchRegexInInnerHTML('script', 'sakaiPortalWindow'),
    matchRegexInInnerHTML('script', 'sakaiTutorialSkin'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
