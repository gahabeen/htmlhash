import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'rdoc_rel_prefix'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+href="[^"]*rdoc-style\\.css'),
    matchRegex('Generated by <a[^>]+href="https?://rdoc\\.rubyforge\\.org[^>]+>RDoc</a> ([\\d.]*\\d)\\;version:\\1'),
    matchRegex('Generated by <a href="https:\\/\\/ruby\\.github\\.io\\/rdoc\\/">RDoc<\\/a> ([\\d.]*\\d)\\;version:\\1'),
    // in text

    // in css
])
