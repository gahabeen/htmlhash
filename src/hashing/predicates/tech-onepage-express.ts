import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/one-page-express(?:-pro)?/'),
    // in dom
    matchSelector(`link#one-page-express-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'one_page_express_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
