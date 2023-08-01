import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/hueman/.+scripts\\.min\\.js(?:\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/themes/hueman/']`),
    // in js
    matchRegexInInnerHTML('script', 'HUParams'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
