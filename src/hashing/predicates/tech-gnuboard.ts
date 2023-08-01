import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='board.php']`),
    matchSelector(`link[href*='/gnuboard/style.css']`),
    // in js
    matchRegexInInnerHTML('script', 'g4_bbs_img'),
    matchRegexInInnerHTML('script', 'g4_is_admin'),
    matchRegexInInnerHTML('script', 'g5_is_admin'),
    matchRegexInInnerHTML('script', 'g5_js_ver'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
