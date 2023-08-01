import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/octopress\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Octopress'),
    // in scripts

    // in html
    matchRegex('Powered by <a href="http://octopress\\.org">'),
    // in text

    // in css
])
