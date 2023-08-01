import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/_nuxt/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$nuxt'),
    // in meta

    // in scripts

    // in html
    matchRegex('<div [^>]*id="__nuxt"'),
    matchRegex('<script [^>]*>window\\.__NUXT__'),
    // in text

    // in css
])
