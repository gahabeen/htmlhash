import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.marketingautomation\\.services.+(?:ver=)([\\d.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sharpspring_tracking_installed'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
