import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'docfx:navrel', 'toc.html'),
    matchRegexInAttribute('meta', 'docfx:tocrel', 'toc.html'),
    matchRegexInAttribute('meta', 'generator', 'docfx\\s([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
