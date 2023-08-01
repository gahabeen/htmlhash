import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/ashe(?:-pro-premium)?/'),
    // in dom
    matchSelector(`link#ashe-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'ashePreloader'),
    matchRegexInInnerHTML('script', 'asheStickySidebar'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
