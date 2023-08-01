import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.mgid\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MgSensor.mgqWorker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
