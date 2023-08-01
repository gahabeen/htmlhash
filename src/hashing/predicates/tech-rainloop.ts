import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^rainloop/v/([0-9.]+)/\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'rainloop'),
    matchRegexInInnerHTML('script', 'rainloopI18N'),
    // in meta
    matchRegexInAttribute('meta', 'rlAppVersion', '^([0-9.]+)$\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<link[^>]href="rainloop/v/([0-9.]+)/static/apple-touch-icon\\.png/>\\;version:\\1'),
    // in text

    // in css
])
