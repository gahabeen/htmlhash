import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'arc\\.io/widget\\.js'),
    // in dom
    matchSelector(`#arc-widget`),
    // in js
    matchRegexInInnerHTML('script', 'arc.p2pClient'),
    matchRegexInInnerHTML('script', 'arcWidgetJsonp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
