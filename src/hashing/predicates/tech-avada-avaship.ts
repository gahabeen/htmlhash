import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'freeshippingbar\\.apps\\.avada\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AVADA_FSB.bars'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
