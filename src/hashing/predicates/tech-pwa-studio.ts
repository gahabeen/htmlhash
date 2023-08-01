import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__fetchLocaleData__'),
    matchRegexInInnerHTML('script', 'fetchRootComponent'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'RootCmp_CMS_PAGE'),
    // in html

    // in text

    // in css
])
