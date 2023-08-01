import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'leaflet.{0,32}\\.js(?!.+shopify)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'L.DistanceGrid'),
    matchRegexInInnerHTML('script', 'L.PosAnimation'),
    matchRegexInInnerHTML('script', 'L.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
