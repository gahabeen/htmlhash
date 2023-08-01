import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:\\.|plugins/)?bigcommerce(?:\\.com)?/(?:assets)?'),
    // in dom
    matchSelector(`img[data-src*='.bigcommerce.com'], img[src*='.bigcommerce.com'], link[href*='.bigcommerce.com']`),
    // in js
    matchRegexInInnerHTML('script', 'bigcommerce_config'),
    matchRegexInInnerHTML('script', 'bigcommerce_i18n'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'bigcommerceProductId'),
    // in html

    // in text

    // in css
])
