import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'zanox\\.com/scripts/zanox\\.js$'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'zanox'),
    // in meta

    // in scripts

    // in html
    matchRegex('<img [^>]*src="[^"]+ad\\.zanox\\.com'),
    // in text

    // in css
])
