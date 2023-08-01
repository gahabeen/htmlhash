import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jira-issue-collector-plugin'),
    matchRegexInAttribute('script', 'src', 'atlassian\\.jira\\.collector\\.plugin'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
