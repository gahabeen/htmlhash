import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.upserve\\.com/'),
    // in dom
    matchSelector(`a[href*='app.upserve.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
