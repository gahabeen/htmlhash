import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/colibri-page-builder.+\\.js(?:.+ver=([\\d\\.\\-\\w]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/colibri-page-builder']`),
    // in js
    matchRegexInInnerHTML('script', 'Colibri'),
    matchRegexInInnerHTML('script', 'colibriData'),
    matchRegexInInnerHTML('script', 'colibriFrontendData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
