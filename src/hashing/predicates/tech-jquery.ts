import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jquery'),
    matchRegexInAttribute('script', 'src', '/jquery(?:-(\\d+\\.\\d+\\.\\d+))[/.-]\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/(\\d+\\.\\d+\\.\\d+)/jquery[/.-][^u]\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$.fn.jquery'),
    matchRegexInInnerHTML('script', 'jQuery.fn.jquery'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
