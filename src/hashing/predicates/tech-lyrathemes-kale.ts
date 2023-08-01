import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/kale(?:-pro)?/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'kale_responsive_videos'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
