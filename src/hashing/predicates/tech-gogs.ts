import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js/gogs\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'keywords', 'go, git, self-hosted, gogs'),
    // in scripts

    // in html
    matchRegex('<div class="ui left">\\n\\s+© \\d{4} Gogs Version: ([\\d.]+) Page:\\;version:\\1'),
    matchRegex('<button class="ui basic clone button" id="repo-clone-ssh" data-link="gogs@'),
    // in text

    // in css
])
