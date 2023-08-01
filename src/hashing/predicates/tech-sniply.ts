import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'gosniply\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sniply.create_sniply_bar'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
