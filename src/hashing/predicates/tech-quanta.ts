import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.quanta\\.io/(?:.+/quanta-rum-v([\\d\\.]+)\\.min\\.js)?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'QUANTA.app_id'),
    matchRegexInInnerHTML('script', 'QuantaTagRUMSpeedIndex'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
