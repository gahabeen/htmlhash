import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jenkinsCIGlobal'),
    matchRegexInInnerHTML('script', 'jenkinsRules'),
    // in meta

    // in scripts

    // in html
    matchRegex('<span class="jenkins_ver"><a href="https://jenkins\\.io/">Jenkins ver\\. ([\\d.]+)\\;version:\\1'),
    // in text

    // in css
])
