import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.chakra-ui\\.'),
    // in dom
    matchSelector(`html[style*='chakra-ui-color-mode'], body.chakra-ui-dark, body.chakra-ui-light, div.chakra-portal`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
