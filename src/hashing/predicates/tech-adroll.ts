import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:a|s)\\.adroll\\.com'),
    // in dom
    matchSelector(`link[href*='.adroll.com']`),
    // in js
    matchRegexInInnerHTML('script', 'adroll_adv_id'),
    matchRegexInInnerHTML('script', 'adroll_pix_id'),
    matchRegexInInnerHTML('script', 'adroll_version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
