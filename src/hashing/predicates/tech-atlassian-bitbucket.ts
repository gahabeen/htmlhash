import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bitbucket'),
    // in meta
    matchRegexInAttribute('meta', 'application-name', 'Bitbucket'),
    // in scripts

    // in html
    matchRegex('<li>Atlassian Bitbucket <span title="[a-z0-9]+" id="product-version" data-commitid="[a-z0-9]+" data-system-build-number="[a-z0-9]+"> v([\\d.]+)<\\;version:\\1'),
    // in text

    // in css
])
