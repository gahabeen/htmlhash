import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/woostify/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'woostifyConditionScrolling'),
    matchRegexInInnerHTML('script', 'woostify_woocommerce_general'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
