import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.embluemail\\.com/(?:library/([\\d.]+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'emblueOnSiteApp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
