import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.fourthwall\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FourthwallAnalytics'),
    matchRegexInInnerHTML('script', 'fourthwallTheme'),
    // in meta
    matchRegexInAttribute('meta', 'version', '^(.+)$\\;version:\\1\\;confidence'),
    // in scripts

    // in html

    // in text

    // in css
])
