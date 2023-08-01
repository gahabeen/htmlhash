import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:\\.|\\-)launchdarkly(?:\\.com/|\\-sdk\\.)'),
    // in dom
    matchSelector(`link[href*='.launchdarkly.com']`),
    // in js
    matchRegexInInnerHTML('script', 'DDC.WS.state'),
    matchRegexInInnerHTML('script', 'launchDarkly'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
