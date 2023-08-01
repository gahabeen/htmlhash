import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'grafana\\..+\\.com/public/build/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__grafana_public_path__'),
    // in meta

    // in scripts
    // matchRegexInInnerHTML('script', '.+latestVersion":"[\\d\\.\\w\\-]+"\\,"version":"([\\d\\.]+)\\;version:\\1\\;confidence'),
    // in html

    // in text

    // in css
])
