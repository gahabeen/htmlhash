import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/add-search-to-menu/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'IvorySearchVars'),
    matchRegexInInnerHTML('script', 'ivory_search_analytics'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
