import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'lodash.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_.VERSION'),
    matchRegexInInnerHTML('script', '_.differenceBy'),
    matchRegexInInnerHTML('script', '_.templateSettings.imports._.templateSettings.imports._.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
