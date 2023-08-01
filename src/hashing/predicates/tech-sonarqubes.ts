import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^/js/bundles/sonar\\.js?v=([\\d.]+)$\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SonarMeasures'),
    matchRegexInInnerHTML('script', 'SonarRequest'),
    // in meta
    matchRegexInAttribute('meta', 'application-name', '^SonarQubes$'),
    // in scripts

    // in html
    matchRegex('<link href="/css/sonar\\.css\\?v=([\\d.]+)\\;version:\\1'),
    matchRegex('<title>SonarQube</title>'),
    // in text

    // in css
])
