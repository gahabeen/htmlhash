import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'filepond.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FilePond'),
    matchRegexInInnerHTML('script', 'FilePond.create'),
    matchRegexInInnerHTML('script', 'FilePond.setOptions'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
