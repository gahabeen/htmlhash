import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\/(?:coinhive|(authedmine))(?:\\.min)?\\.js\\;version:\\1?opt-in:'),
    matchRegexInAttribute('script', 'src', 'coinhive\\.com/lib'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CoinHive'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
