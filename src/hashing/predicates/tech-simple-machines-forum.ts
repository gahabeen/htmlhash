import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`li > span > a[title='Simple Machines Forum']`),
    // in js
    matchRegexInInnerHTML('script', 'smf_avatarResize'),
    matchRegexInInnerHTML('script', 'smf_default_theme_url'),
    matchRegexInInnerHTML('script', 'smf_theme_url'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
