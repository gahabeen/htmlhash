import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/ml-slider(?:-pro)?/'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/ml-slider/'], link#metaslider-pro-public-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
