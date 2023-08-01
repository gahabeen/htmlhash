import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:\\.cloudfront\\.net/assets/javascripts/(?:v2/)?|/sas)squatch\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SAASQUATCH_TENANT_ALIAS'),
    matchRegexInInnerHTML('script', 'squatch.CtaWidget'),
    matchRegexInInnerHTML('script', 'squatchQuery'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
