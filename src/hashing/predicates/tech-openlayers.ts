import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'openlayers'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OpenLayers.VERSION_NUMBER'),
    matchRegexInInnerHTML('script', 'ol.CanvasMap'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
