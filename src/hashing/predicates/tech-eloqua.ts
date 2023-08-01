import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'elqCfg\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_elq'),
    matchRegexInInnerHTML('script', '_elqQ'),
    matchRegexInInnerHTML('script', 'eloqContactData'),
    matchRegexInInnerHTML('script', 'eloquaActionSettings'),
    matchRegexInInnerHTML('script', 'elqCookieValue'),
    matchRegexInInnerHTML('script', 'elqCurESite'),
    matchRegexInInnerHTML('script', 'elqLoad'),
    matchRegexInInnerHTML('script', 'elqSiteID'),
    matchRegexInInnerHTML('script', 'elq_global'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
