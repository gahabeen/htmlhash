import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'gdpr\\.privacymanager\\.io'),
    // in dom
    matchSelector(`iframe[src*='gdpr-consent-tool\.privacymanager\.io']`),
    // in js
    matchRegexInInnerHTML('script', 'wpJsonpLiverampGdprCmp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
