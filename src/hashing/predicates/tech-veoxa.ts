import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tracking\\.veoxa\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'VuVeoxaContent'),
    // in meta

    // in scripts

    // in html
    matchRegex('<img [^>]*src="[^"]+tracking\\.veoxa\\.com'),
    // in text

    // in css
])
