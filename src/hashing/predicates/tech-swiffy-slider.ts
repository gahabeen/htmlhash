import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/npm/swiffy-slider@([\\d\\.]+)/\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/swiffy-slider.min.css']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
