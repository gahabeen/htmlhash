import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://cdn\\.myshoptet\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'shoptet'),
    // in meta
    matchRegexInAttribute('meta', 'web_author', '^Shoptet'),
    // in scripts

    // in html
    matchRegex('<link [^>]*href="https?://cdn\\.myshoptet\\.com/'),
    // in text

    // in css
])
