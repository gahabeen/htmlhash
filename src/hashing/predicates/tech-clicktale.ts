import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.clicktale\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ClickTale'),
    matchRegexInInnerHTML('script', 'ClickTaleEvent'),
    matchRegexInInnerHTML('script', 'ClickTaleGlobal'),
    matchRegexInInnerHTML('script', 'clickTaleStartEventSignal'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
