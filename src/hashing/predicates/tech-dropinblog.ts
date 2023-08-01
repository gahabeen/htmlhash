import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.dropinblog\\.com/'),
    // in dom
    matchSelector(`link[href*='.dropinblog.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
