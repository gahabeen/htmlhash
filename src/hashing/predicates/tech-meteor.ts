import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Meteor'),
    matchRegexInInnerHTML('script', 'Meteor.release'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+__meteor-css__'),
    // in text

    // in css
])
