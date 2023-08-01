import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jquery\\.fancybox(?:\\.pack|\\.min)?\\.js(?:\\?v=([\\d.]+))?$\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$.fancybox.version'),
    matchRegexInInnerHTML('script', 'Fancybox.version'),
    matchRegexInInnerHTML('script', 'jQuery.fancybox.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
