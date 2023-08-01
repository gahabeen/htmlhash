import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ak\\.sail-horizon\\.com'),
    // in dom
    matchSelector(`link[href*='ak.sail-horizon.com'],link[href*='api.sail-personalize.com'],link[href*='api.sail-track.com']`),
    // in js
    matchRegexInInnerHTML('script', 'Sailthru'),
    matchRegexInInnerHTML('script', 'sailthruIdentify'),
    matchRegexInInnerHTML('script', 'sailthruNewsletterRegistration'),
    matchRegexInInnerHTML('script', 'trackSailthruUser'),
    // in meta
    matchRegexInAttribute('meta', 'sailthru.image.full', ''),
    matchRegexInAttribute('meta', 'sailthru.title', ''),
    // in scripts

    // in html

    // in text

    // in css
])
