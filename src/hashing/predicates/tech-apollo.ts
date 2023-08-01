import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`script#__APOLLO_STATE__`),
    // in js
    matchRegexInInnerHTML('script', '__APOLLO_CLIENT__'),
    matchRegexInInnerHTML('script', '__APOLLO_CLIENT__.version'),
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.__APOLLO_STATE__'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
