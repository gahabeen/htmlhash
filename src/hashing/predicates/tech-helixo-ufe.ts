import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ufe.funnelData'),
    matchRegexInInnerHTML('script', 'ufeStore.cartTotal'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
