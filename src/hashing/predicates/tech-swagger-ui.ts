import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/([\\d.]+))?/swagger-ui-bundle\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SwaggerUIBundle'),
    matchRegexInInnerHTML('script', 'SwaggerUIStandalonePreset'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
