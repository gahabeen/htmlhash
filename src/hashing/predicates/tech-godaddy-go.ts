import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/go/.+frontend\\.min\\.js(?:.+ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link#go-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'goFrontend.openMenuOnHover'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
