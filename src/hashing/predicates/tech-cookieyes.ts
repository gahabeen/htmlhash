import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.cookieyes\\.com/client_data/'),
    matchRegexInAttribute('script', 'src', 'cdn-cookieyes\\.com/client_data/'),
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/cookie-law-info/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`#cookie-law-info-bar`),
    matchSelector(`link[href*='/wp-content/plugins/cookie-law-info/']`),
    // in js
    matchRegexInInnerHTML('script', 'cookieYes'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
