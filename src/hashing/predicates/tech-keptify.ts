import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.keptify\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'KEPTIFY_BASE_URL'),
    matchRegexInInnerHTML('script', '_keptify.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
