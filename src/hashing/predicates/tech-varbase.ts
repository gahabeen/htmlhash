import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`meta[content='Varbase'],div[class*='varbase_'],div[class*='_varbase'],div[class*='varbase-'],div[class*='block-varbase'],div[class*='blockvarbase']`),
    // in js
    matchRegexInInnerHTML('script', 'drupalSettings.ajaxPageState.libraries'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
