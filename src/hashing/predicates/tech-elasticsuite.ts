import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/Smile_ElasticsuiteTracker/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'smileTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
