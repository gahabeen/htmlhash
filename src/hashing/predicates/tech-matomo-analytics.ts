import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'piwik\\.js|piwik\\.php'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Matomo'),
    matchRegexInInnerHTML('script', 'Piwik'),
    matchRegexInInnerHTML('script', '_paq'),
    // in meta
    matchRegexInAttribute('meta', 'apple-itunes-app', 'app-id=737216887'),
    matchRegexInAttribute('meta', 'generator', '(?:Matomo|Piwik) - Open Source Web Analytics'),
    matchRegexInAttribute('meta', 'google-play-app', 'app-id=org\\.piwik\\.mobile2'),
    // in scripts

    // in html

    // in text

    // in css
])
