import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/(?:([\\d.]+)/)?firebase(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/firebasejs/([\\d.]+)/firebase\\;version:\\1'),
    // in dom
    matchSelector(`iframe[src*='.firebaseapp.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'firebase.SDK_VERSION'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '\\.gstatic\\.com/firebasejs/([\\d\\.]+)/\\;version:\\1'),
    matchRegexInInnerHTML('script', 'firebase(?:Config|io\\.com)'),
    // in html

    // in text

    // in css
])
