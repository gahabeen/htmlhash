import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'browser\\.plumbr\\.io/pa(?:-early)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PLUMBR._core.selfURL'),
    matchRegexInInnerHTML('script', 'PLUMBR._core.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
