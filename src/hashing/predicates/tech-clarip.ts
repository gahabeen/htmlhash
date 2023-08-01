import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//cdn\\.clarip\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'claripCdnHost'),
    matchRegexInInnerHTML('script', 'claripHost'),
    matchRegexInInnerHTML('script', 'pageData.claripConsentJSUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
