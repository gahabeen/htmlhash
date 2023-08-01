import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '([\\d\\.]+)?(?:/dist)?/email\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'emailjs.sendForm'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
