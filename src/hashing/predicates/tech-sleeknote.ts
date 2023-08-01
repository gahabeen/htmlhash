import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SleekNote.SleekNotes'),
    matchRegexInInnerHTML('script', 'sleeknoteMarketingConsent'),
    matchRegexInInnerHTML('script', 'sleeknoteScriptTag'),
    matchRegexInInnerHTML('script', 'sleeknoteSiteData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
