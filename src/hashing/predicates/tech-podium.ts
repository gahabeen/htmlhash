import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.podium\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PodiumWebChat'),
    matchRegexInInnerHTML('script', 'podiumWebsiteWidgetLoaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
