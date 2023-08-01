import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.getyourguide\\.com/'),
    // in dom
    matchSelector(`a[href*='.getyourguide.']`),
    matchSelector(`img[src*='cdn.getyourguide.com/']`),
    matchSelector(`link[href*='cdn.getyourguide.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
