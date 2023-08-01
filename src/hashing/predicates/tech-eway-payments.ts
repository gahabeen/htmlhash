import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'secure\\.ewaypayments\\.com'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<img [^>]*src="[^/]*//[^/]*eway\\.com'),
    // in text

    // in css
])
