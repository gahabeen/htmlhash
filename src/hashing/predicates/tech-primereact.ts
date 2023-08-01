import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('\\.p-(?:toast|calendar|dialog-mask|menuitem-text)(?:-content)?\\{'),
])
