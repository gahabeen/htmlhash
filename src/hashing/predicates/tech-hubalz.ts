import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Hubalz.getClickDetails'),
    matchRegexInInnerHTML('script', 'hubalz_script.noInputTracking'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
