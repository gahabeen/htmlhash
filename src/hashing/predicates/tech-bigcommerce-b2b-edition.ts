import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.bundleb2b\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bundleB2BFeatureFlags'),
    matchRegexInInnerHTML('script', 'bundleb2b.text.tpa'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
