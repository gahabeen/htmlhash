import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/zakra/'),
    // in dom
    matchSelector(`link#zakra-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'zakraFrontend'),
    matchRegexInInnerHTML('script', 'zakraNavHelper.dimension'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
