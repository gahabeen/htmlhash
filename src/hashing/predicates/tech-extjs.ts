import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ext-base\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Ext'),
    matchRegexInInnerHTML('script', 'Ext.version'),
    matchRegexInInnerHTML('script', 'Ext.versions.extjs.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
