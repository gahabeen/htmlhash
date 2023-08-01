import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.juniphq\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'junipLoaded'),
    matchRegexInInnerHTML('script', 'webpackChunkjunip_scripts'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
