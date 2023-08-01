import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/particles(?:\\.min)?\\.js'),
    // in dom
    matchSelector(`div#particles-js`),
    // in js
    matchRegexInInnerHTML('script', 'particlesJS'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
