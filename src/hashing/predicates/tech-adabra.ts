import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'track\\.adabra\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'adabraPreview'),
    matchRegexInInnerHTML('script', 'adabra_version_panel'),
    matchRegexInInnerHTML('script', 'adabra_version_track'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
