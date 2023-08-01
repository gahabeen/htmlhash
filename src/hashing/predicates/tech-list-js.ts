import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'list\\.js/\\;confidence'),
    matchRegexInAttribute('script', 'src', '@([\\d.]+)/(?:/dist)?list\\.(?:min\\.)?js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'List'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
