import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'marketo\\.\\w+/js/forms(?:[\\d.]+)/js/forms([\\d.]+)\\.min\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'v([\\d.]+)/js/marketo-alt-form\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'formatMarketoForm'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
