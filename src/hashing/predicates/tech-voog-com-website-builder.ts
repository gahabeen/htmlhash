import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'voog\\.com/tracker\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<script [^>]*src="[^"]*voog\\.com/tracker\\.js'),
    // in text

    // in css
])
