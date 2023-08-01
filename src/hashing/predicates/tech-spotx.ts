import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.spotx\\.tv'),
    // in dom
    matchSelector(`link[href*='.spotxchange.com']`),
    // in js
    matchRegexInInnerHTML('script', 'SpotX.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
