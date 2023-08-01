import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/ef(?:-core)?(?:\\.min|\\.dev)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ef.version'),
    matchRegexInInnerHTML('script', 'efCore'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
