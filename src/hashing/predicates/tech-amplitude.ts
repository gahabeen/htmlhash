import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.(?:segment.+)?amplitude(?:\\.com|-plugins)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AMPLITUDE_KEY'),
    matchRegexInInnerHTML('script', '__AMPLITUDE__'),
    matchRegexInInnerHTML('script', 'amplitudeClient'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
