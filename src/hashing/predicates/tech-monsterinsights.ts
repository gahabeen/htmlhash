import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/google-analytics-for-wordpress/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MonsterInsights'),
    matchRegexInInnerHTML('script', 'monsterinsights_frontend'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
