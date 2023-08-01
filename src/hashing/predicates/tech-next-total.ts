import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.nextdirect\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'NextBasket.NextUnlimited'),
    matchRegexInInnerHTML('script', 'NextFavourites.Busy'),
    matchRegexInInnerHTML('script', 'NextFavourites.Data.ShoppingLists'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
