import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/payitlater-gateway-for-woocommerce/(?:.+\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`a[href*='.payitlater.com.au'][target='_blank'], img[src*='PayItLater'][alt='PayItLater']`),
    // in js
    matchRegexInInnerHTML('script', 'payitlater'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
