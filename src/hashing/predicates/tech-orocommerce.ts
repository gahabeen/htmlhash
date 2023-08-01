import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'oro\\.min\\.js\\?version=([\\d.]+)\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<script [^>]+data-requiremodule="oro/'),
    matchRegex('<script [^>]+data-requiremodule="oroui/'),
    // in text

    // in css
])
