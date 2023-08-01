import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'template-assets\\.iluria\\.com/commons/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Iluria'),
    matchRegexInInnerHTML('script', 'iluriaShowPagination'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
