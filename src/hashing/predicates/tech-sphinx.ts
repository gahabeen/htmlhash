import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DOCUMENTATION_OPTIONS'),
    // in meta

    // in scripts

    // in html
    matchRegex('Created using <a href="https?://(?:www\\.)?sphinx-doc\\.org/">Sphinx</a> ([0-9.]+)\\.\\;version:\\1'),
    // in text

    // in css
])
