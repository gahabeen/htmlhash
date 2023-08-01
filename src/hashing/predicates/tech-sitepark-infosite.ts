import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^InfoSite\\s([\\d\\.]+)\\s-\\sSitepark\\sInformation\\sEnterprise\\sServer$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
