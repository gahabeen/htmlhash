import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/shapely/'),
    // in dom
    matchSelector(`link#shapely-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'ShapelyAdminObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
