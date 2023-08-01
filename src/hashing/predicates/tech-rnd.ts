import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/Scripts/plugins/rnd-mobilemenu/'),
    // in dom
    matchSelector(`div#rnd-mobile-menu, a[href*='www.rnd.com.tr/?utm_source='][target='_blank']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
