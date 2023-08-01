import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='main.takedropstorage.com']`),
    // in js
    matchRegexInInnerHTML('script', 'webpackJsonptakedrop-react'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
