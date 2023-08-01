import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FusionCharts'),
    matchRegexInInnerHTML('script', 'FusionChartsDataFormats'),
    matchRegexInInnerHTML('script', 'FusionMaps'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
