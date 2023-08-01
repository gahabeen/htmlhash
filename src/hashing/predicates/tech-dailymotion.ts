import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[data-src*='.dailymotion.com/'], iframe[scr*='.dailymotion.com/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'name', 'dailymotion-domain-verification'),
    // in scripts

    // in html

    // in text

    // in css
])
