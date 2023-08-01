import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.cloudfront\\.net/js/friendbuy\\.min\\.js'),
    matchRegexInAttribute('script', 'src', 'static\\.fbot\\.me/friendbuy\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'friendbuy'),
    matchRegexInInnerHTML('script', 'friendbuyAPI.merchantId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
