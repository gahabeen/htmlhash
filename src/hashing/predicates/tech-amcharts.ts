import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'amcharts.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AmCharts'),
    // in meta

    // in scripts

    // in html
    matchRegex('<svg[^>]*><desc>JavaScript chart by amCharts ([\\d.]*)\\;version:\\1'),
    // in text

    // in css
])
