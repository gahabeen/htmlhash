import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'application-name', 'TeamCity'),
    // in scripts

    // in html
    matchRegex('<span class="versionTag"><span class="vWord">Version</span> ([\\d\\.]+)\\;version:\\1'),
    // in text

    // in css
])
