import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.returnly.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'Returnly.ContainerSwitcher'),
    matchRegexInInnerHTML('script', 'Returnly.InternalEventTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
