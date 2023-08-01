import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'drupal\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Drupal'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Drupal(?:\\s([\\d.]+))?\\;version:\\1'),
    // in scripts
    matchRegexInInnerHTML('script', 'drupal_internal__nid'),
    // in html
    matchRegex('<(?:link|style)[^>]+"/sites/(?:default|all)/(?:themes|modules)/'),
    // in text

    // in css
])
