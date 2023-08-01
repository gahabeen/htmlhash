import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'underscore.*\\.js(?:\\?ver=([\\d.]+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_.VERSION'),
    matchRegexInInnerHTML('script', '_.restArguments'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
