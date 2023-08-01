import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='vimeo.com'],embed[src*='vimeo.com']`),
    // in js
    matchRegexInInnerHTML('script', 'Vimeo.Player'),
    matchRegexInInnerHTML('script', 'VimeoPlayer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
