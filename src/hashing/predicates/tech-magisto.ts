import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.magisto\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MagistoPlayerFrame'),
    matchRegexInInnerHTML('script', 'magisto_server'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
