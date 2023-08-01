import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:maps\\.google\\.com/maps\\?file=api(?:&v=([\\d.]+))?|maps\\.google\\.com/maps/api/staticmap)\\;version:API v\\1'),
    matchRegexInAttribute('script', 'src', '//maps\\.google(?:apis)?\\.com/maps/api/js'),
    // in dom
    matchSelector(`iframe[src*='google.com/maps']`),
    // in js
    matchRegexInInnerHTML('script', 'GoogleMap'),
    matchRegexInInnerHTML('script', 'googleMapsConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
