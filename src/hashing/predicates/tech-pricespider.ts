import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.pricespider\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PriceSpider.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
