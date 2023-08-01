import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.formulaire_spip`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '(?:^|\\s)SPIP(?:\\s([\\d.]+(?:\\s\\[\\d+\\])?))?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
