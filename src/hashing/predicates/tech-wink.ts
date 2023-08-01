import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:_base/js/base|wink).*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'wink.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
