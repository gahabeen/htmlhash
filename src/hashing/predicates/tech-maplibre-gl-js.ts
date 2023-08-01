import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'maplibre-gl@([\\d\\.]+)/dist/maplibre-gl\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'apex.libVersions.maplibre'),
    matchRegexInInnerHTML('script', 'maplibregl'),
    matchRegexInInnerHTML('script', 'rmap2.maplibreglCompare'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
