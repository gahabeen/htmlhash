import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ALGOLIA_INSIGHTS_SRC'),
    matchRegexInInnerHTML('script', 'AlgoliaSearch'),
    matchRegexInInnerHTML('script', '__GLOBAL__.algolia'),
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.appSettings.ALGOLIA_APP_ID'),
    matchRegexInInnerHTML('script', '__algolia'),
    matchRegexInInnerHTML('script', '__algolia.algoliasearch.version'),
    matchRegexInInnerHTML('script', 'algoliasearch.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
