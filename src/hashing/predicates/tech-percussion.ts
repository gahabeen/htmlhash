import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '(?:Percussion|Rhythmyx)'),
    // in scripts

    // in html
    matchRegex('<[^>]+class="perc-region"'),
    // in text

    // in css
])
