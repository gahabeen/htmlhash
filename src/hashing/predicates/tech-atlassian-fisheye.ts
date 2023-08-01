import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<title>(?:Log in to )?FishEye (?:and Crucible )?([\\d.]+)?</title>\\;version:\\1'),
    // in text

    // in css
])
