import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'zoko-shopify-prod\\.web\\.app'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__zoko_app_version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
