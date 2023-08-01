import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.krxd\\.net/'),
    // in dom
    matchSelector(`link[href*='.krxd.net']`),
    // in js
    matchRegexInInnerHTML('script', 'Krux'),
    matchRegexInInnerHTML('script', 'updateKruxCookie'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
