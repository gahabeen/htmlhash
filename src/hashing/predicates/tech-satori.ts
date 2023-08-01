import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'satori\\.segs\\.jp/'),
    // in dom
    matchSelector(`iframe[src*='satori.segs.jp/']`),
    // in js
    matchRegexInInnerHTML('script', 'SatoriForm'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
