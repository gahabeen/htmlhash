import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/axios(@|/)([\\d.]+)(?:/[a-z]+)?/axios(?:.min)?\\.js\\;version:\\2'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'axios.get'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
