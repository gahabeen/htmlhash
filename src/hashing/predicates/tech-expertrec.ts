import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'expertrec\\.com/api/js/ci_common\\.js\\?id=.*'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_er_config'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
