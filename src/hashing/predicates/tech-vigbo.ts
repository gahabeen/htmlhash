import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:\\.vigbo\\.com|\\.gophotoweb\\.com)'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]* href=[^>]+(?:\\.vigbo\\.com|\\.gophotoweb\\.com)'),
    // in text

    // in css
])
