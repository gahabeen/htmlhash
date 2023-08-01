import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.richpanel\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Richpanel.PLUGIN_API_URL'),
    matchRegexInInnerHTML('script', 'RichpanelAppProxy'),
    matchRegexInInnerHTML('script', 'richpanel_messenger_url'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
