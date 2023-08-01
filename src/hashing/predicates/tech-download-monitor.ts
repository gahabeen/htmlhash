import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/wp-content/plugins/download-monitor/']`),
    // in js
    matchRegexInInnerHTML('script', 'DLM_XHR_Download'),
    matchRegexInInnerHTML('script', 'dlmXHR.prevent_duplicates'),
    // in meta
    matchRegexInAttribute('meta', 'dlm-version', '^([\\d\\.]+)$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
