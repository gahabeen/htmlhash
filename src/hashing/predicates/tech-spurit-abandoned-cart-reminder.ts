import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn-spurit\\.com/shopify-apps/abandoned-cart-reminder/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ACR_SPURIT_Params.folderCss'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
