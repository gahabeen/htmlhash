import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sitecontent-menufycom\\.netdna-ssl\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Views_Website_Layouts_Footer_Menufy'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
