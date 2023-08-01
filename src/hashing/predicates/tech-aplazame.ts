import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.aplazame\\.com/aplazame\\.js'),
    matchRegexInAttribute('script', 'src', 'aplazame\\.com/static/aplazame\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'aplazame'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
