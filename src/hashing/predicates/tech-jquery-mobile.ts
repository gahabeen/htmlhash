import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jquery[.-]mobile(?:-([\\d.]))?(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?\\;version:\\1?\\1:\\2'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jQuery.mobile.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
