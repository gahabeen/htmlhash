import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.mxpnl\\.com/libs/mixpanel\\-([0-9.]+)\\.min\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'api\\.mixpanel\\.com/track'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mixpanel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
