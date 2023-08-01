import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'fingerprint(?:/fp)?(\\d)?(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'fingerprintjs(?:\\-pro|2)?(?:@|/)(\\d.*?)?/\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Fingerprint'),
    matchRegexInInnerHTML('script', 'Fingerprint2'),
    matchRegexInInnerHTML('script', 'Fingerprint2.VERSION'),
    matchRegexInInnerHTML('script', 'FingerprintJS'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
