import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.branch\\.io'),
    matchRegexInAttribute('script', 'src', 'app\\.link/_r\\?sdk=web([\\d.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'branch.setBranchViewData'),
    matchRegexInInnerHTML('script', 'branch_callback__0'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
