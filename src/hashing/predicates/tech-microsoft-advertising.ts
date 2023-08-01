import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'bat\\.bing\\.com/bat\\.js'),
    // in dom
    matchSelector(`link[href*='.bing.com']`),
    // in js
    matchRegexInInnerHTML('script', 'UET'),
    matchRegexInInnerHTML('script', 'uetq'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
