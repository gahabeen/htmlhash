import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#jira`),
    // in js
    matchRegexInInnerHTML('script', 'jira.id'),
    // in meta
    matchRegexInAttribute('meta', 'application-name', 'JIRA'),
    matchRegexInAttribute('meta', 'data-version', '([\\d.]+)\\;version:\\1\\;confidence'),
    // in scripts

    // in html

    // in text

    // in css
])
