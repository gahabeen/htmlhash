import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mapbox-gl\\.js'),
    // in dom
    matchSelector(`link[href*='mapbox-gl.css'], div.mapboxgl-map`),
    // in js
    matchRegexInInnerHTML('script', 'mapboxgl.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
