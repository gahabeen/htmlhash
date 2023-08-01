import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.langshop\\.app/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LangShop'),
    matchRegexInInnerHTML('script', 'LangShopConfig'),
    matchRegexInInnerHTML('script', 'LangShopSDK'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
