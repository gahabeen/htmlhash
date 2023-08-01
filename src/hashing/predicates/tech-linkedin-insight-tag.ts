import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'snap\\.licdn\\.com/li\\.lms-analytics/insight\\.min\\.js'),
    matchRegexInAttribute('script', 'src', 'cdn\\.oribi\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ORIBI'),
    matchRegexInInnerHTML('script', '_linkedin_data_partner_id'),
    matchRegexInInnerHTML('script', '_linkedin_partner_id'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '_linkedin_partner_id'),
    // in html

    // in text

    // in css
])
