import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'common\\.js\\?plesk'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Plesk.Form'),
    // in meta
    matchRegexInAttribute('meta', 'plesk-build', ''),
    // in scripts

    // in html

    // in text

    // in css
])
