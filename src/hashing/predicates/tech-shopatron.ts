import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mediacdn\\.shopatron\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'shptUrl'),
    // in meta
    matchRegexInAttribute('meta', 'keywords', 'Shopatron'),
    // in scripts

    // in html
    matchRegex('<body class="shopatron'),
    matchRegex('<img[^>]+mediacdn\\.shopatron\\.com\\;confidence'),
    // in text

    // in css
])
