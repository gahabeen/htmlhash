import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/twentytwentyone/'),
    // in dom
    matchSelector(`link#twenty-twenty-one-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'twentytwentyoneCollapseMenuOnClickOutside'),
    matchRegexInInnerHTML('script', 'twentytwentyoneResponsiveEmbeds'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
