import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`span.meilisearch-autocomplete`),
    // in js
    matchRegexInInnerHTML('script', 'MeiliSearch'),
    matchRegexInInnerHTML('script', 'MeiliSearchApiError'),
    matchRegexInInnerHTML('script', 'MeiliSearchTimeOutError'),
    matchRegexInInnerHTML('script', 'ac_apsulis_meilisearch'),
    matchRegexInInnerHTML('script', 'instantMeiliSearch'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
