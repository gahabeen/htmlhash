import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.helpscout\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__onBeaconDestroy'),
    matchRegexInInnerHTML('script', 'beaconStore'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
