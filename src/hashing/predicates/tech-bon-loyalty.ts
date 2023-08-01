import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.bonloyalty\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bonShopInfo.appearance'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
