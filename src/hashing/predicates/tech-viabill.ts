import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.viabill\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'viabillOptions.state.subscriptions'),
    matchRegexInInnerHTML('script', 'viabillPricetagInternal.conf.productsByLocale'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
