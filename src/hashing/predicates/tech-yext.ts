import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`form.yxt-SearchBar-form`),
    // in js
    matchRegexInInnerHTML('script', 'ANSWERS._analyticsReporterService._baseUrl'),
    matchRegexInInnerHTML('script', 'Yext.BaseUrl'),
    matchRegexInInnerHTML('script', 'YextAnalyticsObject'),
    matchRegexInInnerHTML('script', 'yext.analytics'),
    matchRegexInInnerHTML('script', 'yextAnalyticsEnabled'),
    matchRegexInInnerHTML('script', 'yext_analytics'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
