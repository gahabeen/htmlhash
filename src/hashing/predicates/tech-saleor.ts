import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='saleor'], img[srcset*='saleor'], link[imagesrcset*='saleor']`),
    // in js
    matchRegexInInnerHTML('script', '__NEXT_DATA__.runtimeConfig.SALEOR'),
    matchRegexInInnerHTML('script', '___NEXT_DATA__.runtimeConfig.SALEOR'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
