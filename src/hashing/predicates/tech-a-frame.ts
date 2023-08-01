import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/?([\\d.]+)?/aframe(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AFRAME.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<a-scene[^<>]*>'),
    // in text

    // in css
])
