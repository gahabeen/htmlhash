import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'zbxCallPostScripts'),
    // in meta
    matchRegexInAttribute('meta', 'Author', 'ZABBIX SIA\\;confidence'),
    // in scripts

    // in html
    matchRegex('<body[^>]+zbxCallPostScripts'),
    // in text

    // in css
])
