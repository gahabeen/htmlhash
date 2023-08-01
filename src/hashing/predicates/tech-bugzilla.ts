import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BUGZILLA'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Bugzilla ?([\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('href="enter_bug\\.cgi">'),
    matchRegex('<main id="bugzilla-body"'),
    matchRegex('<a href="https?://www\\.bugzilla\\.org/docs/([0-9.]+)/[^>]+>Help<\\;version:\\1'),
    matchRegex('<span id="information" class="header_addl_info">version ([\\d.]+)<\\;version:\\1'),
    // in text

    // in css
])
