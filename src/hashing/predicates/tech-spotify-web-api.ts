import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.spotify.com']`),
    // in js
    matchRegexInInnerHTML('script', 'getSpotifyData'),
    matchRegexInInnerHTML('script', 'spotify_tracks'),
    matchRegexInInnerHTML('script', 'spotifyme'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
