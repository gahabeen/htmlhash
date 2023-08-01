import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'chord\\.us/embeddable/client-([\\d\\.]+)\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CHORDCONNECT'),
    matchRegexInInnerHTML('script', 'ChordConnect.__esModule'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
