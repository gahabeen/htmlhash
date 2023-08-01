import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'var/cache/misc/assets/js/tygh/scripts-(?:[\\d\\w]+)\\.js'),
    // in dom
    matchSelector(`a[href*='.cs-cart.com'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'fn_buy_together_apply_discount'),
    matchRegexInInnerHTML('script', 'fn_calculate_total_shipping'),
    matchRegexInInnerHTML('script', 'fn_compare_strings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
