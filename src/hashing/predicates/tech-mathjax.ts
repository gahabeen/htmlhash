import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '([\\d.]+)?/mathjax\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MathJax'),
    matchRegexInInnerHTML('script', 'MathJax.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
