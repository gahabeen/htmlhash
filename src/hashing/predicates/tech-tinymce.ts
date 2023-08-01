import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/tiny_?mce(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'tinyMCE.majorVersion'),
    matchRegexInInnerHTML('script', 'tinymce'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
