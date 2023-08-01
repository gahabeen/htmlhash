import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'vaadinBootstrap\\.js(?:\\?v=([\\d.]+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'vaadin'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
