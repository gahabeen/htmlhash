import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'squirrelmail_loginpage_onload'),
    // in meta

    // in scripts

    // in html
    matchRegex('<small>SquirrelMail version ([.\\d]+)[^<]*<br \\;version:\\1'),
    // in text

    // in css
])
