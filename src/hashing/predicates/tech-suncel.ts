import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[srcset*='assets.suncel.io']`),
    // in js
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.suncel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
