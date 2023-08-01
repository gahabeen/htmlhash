import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/(?:scriptaculous|protoaculous)(?:\\.js|/)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Scriptaculous.Version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
