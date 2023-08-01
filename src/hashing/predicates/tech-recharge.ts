import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'rechargeassets-bootstrapheroes-rechargeapps\\.netdna-ssl\\.com'),
    matchRegexInAttribute('script', 'src', '\\.rechargecdn\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ReChargeWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
