import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cgi-bin\\/UCJavaScript\\?'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ucCatalog'),
    // in meta

    // in scripts

    // in html
    matchRegex('<form [^>]*action="[^"]*\\/cgi-bin\\/UCEditor\\?(?:[^"]*&)?merchantId=[^"]'),
    // in text

    // in css
])
