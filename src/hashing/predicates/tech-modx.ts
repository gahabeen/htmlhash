import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/assets/components/templates/\\;confidence'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MODX'),
    matchRegexInInnerHTML('script', 'MODX_MEDIA_PATH'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'MODX[^\\d.]*([\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<a[^>]+>Powered by MODX</a>'),
    matchRegex('<!-- Modx process time debug info -->'),
    matchRegex('<(?:link|script)[^>]+assets/snippets/\\;confidence'),
    matchRegex('<form[^>]+id="ajaxSearch_form\\;confidence'),
    matchRegex('<input[^>]+id="ajaxSearch_input\\;confidence'),
    // in text

    // in css
])
