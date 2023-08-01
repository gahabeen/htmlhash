import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.trychameleon\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'chmln.Snippet.urls.fast'),
    matchRegexInInnerHTML('script', 'chmlnData.organizationAttributes'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
