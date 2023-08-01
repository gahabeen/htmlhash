import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wp-content/plugins/zoodpay/(?:.+\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`img[src*='zoodpay']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
