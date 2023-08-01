import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'q4App.a11yAnnouncement'),
    matchRegexInInnerHTML('script', 'q4Defaults.fancySignup'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
