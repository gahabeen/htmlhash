import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/umi(\\.[\\w\\d]{8})?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'g_umi.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
