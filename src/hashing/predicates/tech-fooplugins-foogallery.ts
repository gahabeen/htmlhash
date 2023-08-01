import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/wp-content/plugins/foogallery/']`),
    // in js
    matchRegexInInnerHTML('script', 'FooGallery'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
