import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'yelp\\.com/biz_badge_js'),
    // in dom
    matchSelector(`img[src*='dyn.yelpcdn.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
