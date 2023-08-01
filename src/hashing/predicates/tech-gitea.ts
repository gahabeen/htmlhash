import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'keywords', '^go,git,self-hosted,gitea$'),
    // in scripts

    // in html
    matchRegex('<div class="ui left">\\n\\s+© Gitea Version: ([\\d.]+)\\;version:\\1'),
    // in text

    // in css
])
