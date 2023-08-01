import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='/modules/prestablog/themes/'], img[data-src*='/modules/prestablog/themes/']`),
    // in js
    matchRegexInInnerHTML('script', 'freeProductTranslation'),
    matchRegexInInnerHTML('script', 'prestashop'),
    matchRegexInInnerHTML('script', 'priceDisplayMethod'),
    matchRegexInInnerHTML('script', 'priceDisplayPrecision'),
    matchRegexInInnerHTML('script', 'rcAnalyticsEvents.eventPrestashopCheckout'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'PrestaShop'),
    // in scripts

    // in html
    matchRegex('Powered by <a\\s+[^>]+>PrestaShop'),
    matchRegex('<!-- /Block [a-z ]+ module (?:HEADER|TOP)?\\s?-->'),
    matchRegex('<!-- /Module Block [a-z ]+ -->'),
    // in text

    // in css
])
