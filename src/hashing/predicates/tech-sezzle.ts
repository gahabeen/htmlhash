import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'widget\\.sezzle\\.(?:in|com)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AwesomeSezzle'),
    matchRegexInInnerHTML('script', 'renderSezzleIframe'),
    matchRegexInInnerHTML('script', 'sezzle_footer_images'),
    // in meta
    matchRegexInAttribute('meta', 'sezzle_cid', ''),
    // in scripts

    // in html

    // in text

    // in css
])
