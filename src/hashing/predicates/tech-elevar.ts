import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ElevarGtmSuite'),
    matchRegexInInnerHTML('script', 'elevar_gtm_errors'),
    matchRegexInInnerHTML('script', 'webpackChunkelevar_gtm_suite_scripts'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
