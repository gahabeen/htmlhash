import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:\\.)?audioeye\\.com/(?:ae\\.js)?'),
    // in dom
    matchSelector(`iframe[scr*='.audioeye.com/']`),
    // in js
    matchRegexInInnerHTML('script', '$ae.attrHooks'),
    matchRegexInInnerHTML('script', 'window.AudioEye.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
