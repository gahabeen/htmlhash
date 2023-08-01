import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'shuttle(?:-assets-new|-storage)\\.s3\\.amazonaws\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Shuttle.FrontApp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
