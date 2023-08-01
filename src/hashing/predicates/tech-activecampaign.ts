import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'plugins/activecampaign-subscription-forms/site_tracking\\.js'),
    matchRegexInAttribute('script', 'src', '\\.activehosted\\.com'),
    matchRegexInAttribute('script', 'src', '\\.app-us1\\.com'),
    matchRegexInAttribute('script', 'src', '\\.ac-page\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'acEnableTracking'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
