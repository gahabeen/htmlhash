import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='tachyons.min.css']`),
    // in js
    matchRegexInInnerHTML('script', 'webpackChunkgatsby_starter_blog_tachyons'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
