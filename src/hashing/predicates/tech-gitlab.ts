import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GitLab'),
    matchRegexInInnerHTML('script', 'gl.dashboardOptions'),
    // in meta
    matchRegexInAttribute('meta', 'og:site_name', '^GitLab$'),
    // in scripts

    // in html
    matchRegex('<meta content="https?://[^/]+/assets/gitlab_logo-'),
    matchRegex('<header class="navbar navbar-fixed-top navbar-gitlab with-horizontal-nav">'),
    // in text

    // in css
])
