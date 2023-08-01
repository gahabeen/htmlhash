import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'builder\\.launchrock\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'lrIgnition'),
    matchRegexInInnerHTML('script', 'lrLoadedJs'),
    matchRegexInInnerHTML('script', 'lrSiteRenderingData.apiEndpoint'),
    matchRegexInInnerHTML('script', 'lrSiteSettingAsBoolean'),
    matchRegexInInnerHTML('script', 'lrignition'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
