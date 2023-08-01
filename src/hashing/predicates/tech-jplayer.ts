import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/jquery\\.jplayer\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jPlayerPlaylist'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'jquery\\.jplayer\\.min\\.js'),
    // in html

    // in text

    // in css
])
