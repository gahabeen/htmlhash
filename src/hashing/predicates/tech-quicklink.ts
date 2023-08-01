import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'quicklink@([\\d.]+)/dist/quicklink.*\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'drupalSettings.quicklink'),
    matchRegexInInnerHTML('script', 'quicklink'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
