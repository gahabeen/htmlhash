import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/auth0(?:-js)?/([\\d.]+)/auth0(?:.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/auth0-js@([\\d.]+)/([a-z]+)/auth0\\.min\\.js\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='cdn.auth0.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
