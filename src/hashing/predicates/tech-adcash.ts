import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^[^\\/]*//(?:[^\\/]+\\.)?adcash\\.com/(?:script|ad)/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SuLoaded'),
    matchRegexInInnerHTML('script', 'SuUrl'),
    matchRegexInInnerHTML('script', 'ac_bgclick_URL'),
    matchRegexInInnerHTML('script', 'ct_nOpp'),
    matchRegexInInnerHTML('script', 'ct_nSuUrl'),
    matchRegexInInnerHTML('script', 'ct_siteunder'),
    matchRegexInInnerHTML('script', 'ct_tag'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
