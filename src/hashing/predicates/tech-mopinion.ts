import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'deploy\\.mopinion\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Pastease'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
