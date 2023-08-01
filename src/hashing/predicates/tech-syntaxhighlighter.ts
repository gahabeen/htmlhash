import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SyntaxHighlighter'),
    // in meta

    // in scripts

    // in html
    matchRegex('<(?:script|link)[^>]*sh(?:Core|Brush|ThemeDefault)'),
    // in text

    // in css
])
