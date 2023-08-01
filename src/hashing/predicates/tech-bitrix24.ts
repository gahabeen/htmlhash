import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.bitrix24\\.com'),
    matchRegexInAttribute('script', 'src', '\\.bitrix24\\..+/bitrix/js/crm/form_loader\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Bitrix24FormLoader'),
    matchRegexInInnerHTML('script', 'Bitrix24FormObject'),
    matchRegexInInnerHTML('script', 'b24Tracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
