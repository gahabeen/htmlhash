import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.sitevibes\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SiteVibesManager'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
