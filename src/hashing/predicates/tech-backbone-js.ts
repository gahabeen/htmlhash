import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'backbone.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Backbone'),
    matchRegexInInnerHTML('script', 'Backbone.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
