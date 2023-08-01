import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'thebase\\.in/js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BASE_API.shop_id'),
    matchRegexInInnerHTML('script', 'Base.App.open_nav'),
    // in meta
    matchRegexInAttribute('meta', 'base-theme-name', '\\;confidence'),
    matchRegexInAttribute('meta', 'base-theme-version', '\\d+\\;confidence'),
    // in scripts

    // in html

    // in text

    // in css
])
