import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.squarespace\\.\\w+/universal/scripts-compressed/commerce-\\w+-min\\.[\\w+\\-]+\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SQUARESPACE_ROLLUPS.squarespace-commerce'),
    matchRegexInInnerHTML('script', 'Static.SQUARESPACE_CONTEXT.templateVersion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
