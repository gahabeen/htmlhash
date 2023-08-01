import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/react-redux(@|/)([\\d.]+)(?:/[a-z]+)?/react-redux(?:.min)?\\.js\\;version:\\2'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
