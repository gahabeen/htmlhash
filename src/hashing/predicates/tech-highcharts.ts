import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'highcharts.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Highcharts'),
    matchRegexInInnerHTML('script', 'Highcharts.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<svg[^>]*><desc>Created with Highcharts ([\\d.]*)\\;version:\\1'),
    // in text

    // in css
])
