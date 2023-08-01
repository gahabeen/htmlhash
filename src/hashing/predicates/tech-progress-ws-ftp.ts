import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/ThinClient/(?:WTM|WebResource)(?:\\.axd|/public)\\;confidence'),
    // in dom
    matchSelector(`form[name='formLogin'][action='login.aspx' i][id='formLogin']\;confidence`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
