import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.kartra\\.com'),
    // in dom
    matchSelector(`form[action*='app.kartra.com']`),
    // in js
    matchRegexInInnerHTML('script', 'init_kartra_tracking'),
    matchRegexInInnerHTML('script', 'kartra_tracking_loaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
