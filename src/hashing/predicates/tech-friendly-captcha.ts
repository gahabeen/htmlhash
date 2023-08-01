import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.frc-captcha`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'x-frc-client","js-(\\d+(\\.\\d+)+)\\;version:\\1'),
    // in html

    // in text

    // in css
])
