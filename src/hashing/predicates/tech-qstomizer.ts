import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/qsmz-scripttag/qstomizer_st(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jQueryQSMZ'),
    matchRegexInInnerHTML('script', 'loadScript_qsmz'),
    matchRegexInInnerHTML('script', 'qstomizer_script'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
