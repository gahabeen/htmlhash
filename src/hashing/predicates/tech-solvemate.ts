import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.solvemate.com']`),
    // in js
    matchRegexInInnerHTML('script', 'solvemate.config.solvemateCDN'),
    matchRegexInInnerHTML('script', 'solvemateCli'),
    matchRegexInInnerHTML('script', 'solvemateConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
