import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//appsolve\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'VITALS'),
    matchRegexInInnerHTML('script', 'vitals_app_cache_keys_v1'),
    matchRegexInInnerHTML('script', 'vitals_country_code'),
    matchRegexInInnerHTML('script', 'vitals_product_data'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
