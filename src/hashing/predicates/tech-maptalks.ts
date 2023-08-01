import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.maptalks-wrapper`),
    // in js
    matchRegexInInnerHTML('script', 'map._eventMap'),
    matchRegexInInnerHTML('script', 'maptalks.GeoJSON'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
