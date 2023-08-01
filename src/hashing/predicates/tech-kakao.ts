import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.kakao\\.com/'),
    // in dom
    matchSelector(`a[href*='.kakao.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'Kakao.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
