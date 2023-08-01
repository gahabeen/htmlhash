import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GomageNavigation'),
    matchRegexInInnerHTML('script', 'GomageNavigationClass'),
    matchRegexInInnerHTML('script', 'gomageSpinnerModal'),
    matchRegexInInnerHTML('script', 'gomage_navigation_loadinfo_text'),
    matchRegexInInnerHTML('script', 'gomage_navigation_urlhash'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
