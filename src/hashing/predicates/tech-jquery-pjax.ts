import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jquery[.-]pjax(?:-([\\d.]))?(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?\\;version:\\1?\\1:\\2'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jQuery.pjax'),
    // in meta
    matchRegexInAttribute('meta', 'pjax-push', ''),
    matchRegexInAttribute('meta', 'pjax-replace', ''),
    matchRegexInAttribute('meta', 'pjax-timeout', ''),
    // in scripts

    // in html
    matchRegex('<div[^>]+data-pjax-container'),
    // in text

    // in css
])
