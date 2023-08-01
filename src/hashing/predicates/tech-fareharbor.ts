import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'fareharbor\\.com/embeds/api/'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<iframe[^>]+fareharbor'),
    // in text

    // in css
])
