import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'scripts\\.chitika\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ch_client'),
    matchRegexInInnerHTML('script', 'ch_color_site_link'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
