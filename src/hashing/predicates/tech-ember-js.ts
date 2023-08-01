import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Ember'),
    matchRegexInInnerHTML('script', 'Ember.VERSION'),
    matchRegexInInnerHTML('script', 'EmberENV'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '@overview\\s+Ember -[\\s\\S]+@version\\s+(.+)\\;version:\\1'),
    // in html

    // in text

    // in css
])
