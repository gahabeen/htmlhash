import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'strn\\.rise-ai\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Rise.shop'),
    matchRegexInInnerHTML('script', 'RiseStoreFront'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
