import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='www.nuvemshop.com.br'][title*='Nuvemshop'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'LS.store.url'),
    matchRegexInInnerHTML('script', 'nuvemShopIdProduct'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
