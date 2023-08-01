import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.searchspring\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SearchSpring'),
    matchRegexInInnerHTML('script', 'SearchSpringConf'),
    matchRegexInInnerHTML('script', 'SearchSpringInit'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
