import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ledeChartbeatViews'),
    matchRegexInInnerHTML('script', 'ledeEngagement'),
    matchRegexInInnerHTML('script', 'ledeEngagementReset'),
    // in meta
    matchRegexInAttribute('meta', 'og:image', 'https?\\:\\/\\/lede-admin'),
    // in scripts

    // in html
    matchRegex('<a [^>]*href="[^"]+joinlede.com'),
    // in text

    // in css
])
