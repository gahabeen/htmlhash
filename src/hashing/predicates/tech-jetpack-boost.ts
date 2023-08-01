import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/jetpack-boost/'),
    // in dom
    matchSelector(`style[id='jetpack-boost-critical-css']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
