import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'pixi(?:\\.min|-legacy)?\\.js$'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PIXI'),
    matchRegexInInnerHTML('script', 'PIXI.VERSION'),
    matchRegexInInnerHTML('script', 'PIXI_WEBWORKER_URL'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
