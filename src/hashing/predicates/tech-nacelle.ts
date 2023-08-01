import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[class*='nacelle']`),
    // in js
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.page.nacelleEntryId'),
    matchRegexInInnerHTML('script', 'nacelleEventData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
