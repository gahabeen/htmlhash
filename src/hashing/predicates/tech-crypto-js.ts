import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/([\\d\\.-]+))?/crypto-js(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CryptoJS.Rabbit'),
    matchRegexInInnerHTML('script', 'CryptoJS.algo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
