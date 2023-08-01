import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'google-analytics\\.com/(?:ga|urchin|analytics)\\.js'),
    matchRegexInAttribute('script', 'src', 'googletagmanager\\.com/gtag/js'),
    // in dom
    matchSelector(`amp-analytics[type*=googleanalytics]`),
    matchSelector(`[href*=google-analytics.com]`),
    // in js
    matchRegexInInnerHTML('script', 'GoogleAnalyticsObject'),
    matchRegexInInnerHTML('script', 'gaGlobal'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', "gtag\\([^)]+'(UA-)\\;version:\\1?UA:"),
    matchRegexInInnerHTML('script', "gtag\\([^)]+'(G-)\\;version:\\1?GA4:"),
    // in html

    // in text

    // in css
])
