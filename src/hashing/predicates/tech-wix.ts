import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.parastorage\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'wixBiSession'),
    matchRegexInInnerHTML('script', 'wixPerformanceMeasurements'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Wix\\.com Website Builder'),
    // in scripts

    // in html

    // in text

    // in css
])
