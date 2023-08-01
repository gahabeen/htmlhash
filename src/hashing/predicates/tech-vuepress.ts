import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__VUEPRESS__.version'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^VuePress(?: ([0-9.]+)(-[a-z]+.[0-9]+)?)?$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
