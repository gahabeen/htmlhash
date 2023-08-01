import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'browser\\.sentry\\-cdn\\.com/([0-9.]+)/bundle(?:\\.tracing)?(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Raven.config'),
    matchRegexInInnerHTML('script', 'Sentry'),
    matchRegexInInnerHTML('script', 'Sentry.SDK_VERSION'),
    matchRegexInInnerHTML('script', '__SENTRY__'),
    matchRegexInInnerHTML('script', 'ravenOptions.whitelistUrls'),
    // in meta

    // in scripts

    // in html
    matchRegex("<script[^>]*>\\s*Raven\\.config\\('[^']*', \\{\\s+release: '([0-9\\.]+)'\\;version:\\1"),
    matchRegex('<script[^>]*src="[^"]*browser\\.sentry\\-cdn\\.com/([0-9.]+)/bundle(?:\\.tracing)?(?:\\.min)?\\.js\\;version:\\1'),
    // in text

    // in css
])
