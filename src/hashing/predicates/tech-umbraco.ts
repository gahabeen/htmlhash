import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`script[src*='/UmbracoForms/']`),
    matchSelector(`a[data-udi^='umb://']`),
    // in js
    matchRegexInInnerHTML('script', 'ITEM_INFO_SERVICE'),
    matchRegexInInnerHTML('script', 'UC_IMAGE_SERVICE'),
    matchRegexInInnerHTML('script', 'UC_ITEM_INFO_SERVICE'),
    matchRegexInInnerHTML('script', 'UC_SETTINGS'),
    matchRegexInInnerHTML('script', 'Umbraco'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'umbraco'),
    // in scripts
    matchRegexInInnerHTML('script', '/Umbraco/Api/'),
    // in html

    // in text

    // in css
])
