import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.syteapi\\.com/'),
    // in dom
    matchSelector(`img[src*='cdn.syteapi.com']`),
    // in js
    matchRegexInInnerHTML('script', 'SyteApi.getBinImageBB'),
    matchRegexInInnerHTML('script', 'SyteApp.Analytics'),
    matchRegexInInnerHTML('script', 'SytePixel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
