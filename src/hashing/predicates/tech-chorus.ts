import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Chorus.AddScript'),
    matchRegexInInnerHTML('script', 'ChorusAds.beforeAdsRequested'),
    matchRegexInInnerHTML('script', 'ChorusCampaigns.recordClickUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
