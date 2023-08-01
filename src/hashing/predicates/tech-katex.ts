import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'katex(@|/)[0-9.]+(?:/dist)?/katex(?:\\.min)?\\.(mjs|js|css)\\;version:\\1'),
    // in dom
    matchSelector(`link[href*=katex]`),
    // in js
    matchRegexInInnerHTML('script', 'katex'),
    matchRegexInInnerHTML('script', 'katex.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
