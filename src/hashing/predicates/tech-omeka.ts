import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[rel*='stylesheet'][href*='css/myomeka.css'], link[rel*='stylesheet'][href*='/omeka/plugins/'], footer > p > a[href*='//omeka.org']`),
    // in js
    matchRegexInInnerHTML('script', 'Omeka'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
