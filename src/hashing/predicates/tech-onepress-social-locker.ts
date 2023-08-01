import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/social-?locker(?:-next-premium)?/bizpanda/assets/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__pandalockers'),
    matchRegexInInnerHTML('script', 'bizpanda'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
