import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'betterdocs.FEEDBACK'),
    matchRegexInInnerHTML('script', 'betterdocs_pro.FEEDBACK'),
    matchRegexInInnerHTML('script', 'betterdocspublic.post_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
