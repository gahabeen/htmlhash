import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/(?:\\.)?(?:dart)(?:\\.js)?/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$__dart_deferred_initializers__'),
    matchRegexInInnerHTML('script', '___dart__$dart_dartObject_ZxYxX_0_'),
    matchRegexInInnerHTML('script', '___dart_dispatch_record_ZxYxX_0_'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
