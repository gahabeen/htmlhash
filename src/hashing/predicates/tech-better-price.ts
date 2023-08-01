import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/shopify-apps//js/betterprice/betterprice\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'fc_metafield_betterprice.betterpricesuccess'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
