import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__DOCUSAURUS_INSERT_BASEURL_BANNER'),
    matchRegexInInnerHTML('script', 'docusaurus'),
    matchRegexInInnerHTML('script', 'search.indexName'),
    // in meta
    matchRegexInAttribute('meta', 'docusaurus_locale', ''),
    matchRegexInAttribute('meta', 'docusaurus_tag', ''),
    matchRegexInAttribute('meta', 'generator', '^Docusaurus(?: v(.+))?$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
