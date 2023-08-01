import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[scr*='//go.arena.im/']`),
    // in js
    matchRegexInInnerHTML('script', 'arenaHub.arenaIdentify'),
    matchRegexInInnerHTML('script', 'arenaLiveblog'),
    matchRegexInInnerHTML('script', 'arenaim.initializeLiveblog'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
