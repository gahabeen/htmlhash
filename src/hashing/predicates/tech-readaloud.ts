import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div#ra-player, div[data-skin*='assets\.sitespeaker\.link/embed/skins']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
