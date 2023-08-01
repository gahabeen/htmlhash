import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sascdn\\.com/'),
    // in dom
    matchSelector(`img[src*='smartadserver.com/'], link[href*='.smartadserver.com']`),
    // in js
    matchRegexInInnerHTML('script', 'SmartAdServer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
