import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.americommerce\\.com/'),
    // in dom
    matchSelector(`p.AmeriCommerce-powered-by-link > a[href*='.americommerce.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'AC.storeDomain'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
