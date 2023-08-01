import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'KOHA'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Koha ([\\d.]+)$\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<input name="koha_login_context" value="intranet" type="hidden">'),
    matchRegex('<a href="/cgi-bin/koha/'),
    // in text

    // in css
])
