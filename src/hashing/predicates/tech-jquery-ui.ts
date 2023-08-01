import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jquery-ui[.-]([\\d.]*\\d)[^/]*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '([\\d.]+)/jquery-ui(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'jquery-ui.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jQuery.ui.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
