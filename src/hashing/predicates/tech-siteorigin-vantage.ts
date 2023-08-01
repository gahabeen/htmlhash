import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/vantage/'),
    // in dom
    matchSelector(`style#vantage-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
