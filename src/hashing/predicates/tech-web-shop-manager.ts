import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WSM.Tracking'),
    matchRegexInInnerHTML('script', 'WSM_CHART_COLORS_OPAQUE'),
    matchRegexInInnerHTML('script', 'wsmHideHelpBox'),
    matchRegexInInnerHTML('script', 'wsm_catalogTabby'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
