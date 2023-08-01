import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.mapbox\\.com/mapbox\\.js/v([\\d\\.]+)/\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='api.mapbox.com/']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'api\\.mapbox\\.com/mapbox\\.js/v([\\d\\.]+)/\\;version:\\1'),
    // in html

    // in text

    // in css
])
