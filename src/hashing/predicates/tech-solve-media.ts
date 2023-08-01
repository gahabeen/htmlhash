import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://api\\.solvemedia\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ACPuzzle'),
    matchRegexInInnerHTML('script', '_ACPuzzle'),
    matchRegexInInnerHTML('script', '_adcopy-puzzle-image-image'),
    matchRegexInInnerHTML('script', 'adcopy-puzzle-image-image'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
