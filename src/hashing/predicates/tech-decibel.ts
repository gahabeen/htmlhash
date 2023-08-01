import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.decibelinsight\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'decibelInsight'),
    matchRegexInInnerHTML('script', 'decibelInsightLayer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
