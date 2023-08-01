import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//globalshopex\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GSXMiniCheckout'),
    matchRegexInInnerHTML('script', 'GSXPreviewCheckout'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
