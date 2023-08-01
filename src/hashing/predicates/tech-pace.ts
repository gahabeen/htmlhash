import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'pay\\.pacenow\\.co'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pacePay'),
    matchRegexInInnerHTML('script', 'rely_month_installment'),
    matchRegexInInnerHTML('script', 'rely_shop_currency'),
    matchRegexInInnerHTML('script', 'rely_shop_money_format'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
