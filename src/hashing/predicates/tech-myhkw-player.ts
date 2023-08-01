import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'myhk_player_songid'),
    matchRegexInInnerHTML('script', 'myhkplayerlist'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
