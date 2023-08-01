import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.nagich\\.co(?:m|\\.il)/core/([\\d.]+)/accessibility\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'interdeal.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
