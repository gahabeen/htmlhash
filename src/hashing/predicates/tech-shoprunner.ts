import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/shoprunner/shoprunner_init\\.js'),
    // in dom
    matchSelector(`link[href*='content.shoprunner.com']`),
    // in js
    matchRegexInInnerHTML('script', '_shoprunner_com'),
    matchRegexInInnerHTML('script', '_shoprunner_com.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
