import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.oct8ne\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'oct8ne.agentsAvailable'),
    matchRegexInInnerHTML('script', 'oct8neApi'),
    matchRegexInInnerHTML('script', 'oct8neVars.pluginVersion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
