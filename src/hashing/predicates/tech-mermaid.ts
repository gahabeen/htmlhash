import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/mermaid(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mermaid'),
    // in meta

    // in scripts

    // in html
    matchRegex('<div [^>]*class=["\']mermaid["\']>\\;confidence'),
    // in text

    // in css
])
