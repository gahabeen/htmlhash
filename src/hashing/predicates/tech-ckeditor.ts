import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CKEDITOR'),
    matchRegexInInnerHTML('script', 'CKEDITOR.version'),
    matchRegexInInnerHTML('script', 'CKEDITOR_BASEPATH'),
    matchRegexInInnerHTML('script', 'CKEDITOR_VERSION'),
    matchRegexInInnerHTML('script', 'apex.libVersions.ckeditor5'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
