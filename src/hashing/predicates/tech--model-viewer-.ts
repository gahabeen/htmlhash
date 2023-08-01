import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/model-viewer/dist/model-viewer\\.min\\.js'),
    // in dom
    matchSelector(`model-viewer`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
