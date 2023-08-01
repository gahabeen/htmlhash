import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.umso.co/'], img[src*='.umso.co/'], video[poster*='.umso.co/']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'isPriorBlockingEnabled\\;confidence'),
    // in html

    // in text

    // in css
])
