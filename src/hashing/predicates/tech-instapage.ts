import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.instapagemetrics\\.com'),
    matchRegexInAttribute('script', 'src', 'heatmap-events-collector\\.instapage\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_instapageSnowplow'),
    matchRegexInInnerHTML('script', 'instapageSp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
