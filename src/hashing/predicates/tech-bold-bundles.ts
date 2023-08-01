import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'bundles\\.boldapps\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BOLD.bundles'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
