import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tempo/ui/sail-client/embeddedBootstrap\\.nocache\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'APPIAN'),
    matchRegexInInnerHTML('script', 'Appian'),
    matchRegexInInnerHTML('script', '_APPIAN_PROXIES_INITIALIZED'),
    matchRegexInInnerHTML('script', 'webpackJsonpAppian'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
