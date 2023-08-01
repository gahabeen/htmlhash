import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/ewww-image-optimizer/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ewww_webp_supported'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
