import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'backbone\\.marionette.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Marionette'),
    matchRegexInInnerHTML('script', 'Marionette.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
