import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'c\\.tvpixel\\.com/js/current/dpm_pixel_min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'dpmComscoreVars'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
