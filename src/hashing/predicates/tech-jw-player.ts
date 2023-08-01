import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.jwplayer\\.com'),
    matchRegexInAttribute('script', 'src', '\\.jwpcdn\\.com'),
    // in dom
    matchSelector(`div[data-video-provider*=jwplayer]`),
    // in js
    matchRegexInInnerHTML('script', 'jwDefaults'),
    matchRegexInInnerHTML('script', 'jwplayer'),
    matchRegexInInnerHTML('script', 'jwplayerApiUrl'),
    matchRegexInInnerHTML('script', 'webpackJsonpjwplayer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
