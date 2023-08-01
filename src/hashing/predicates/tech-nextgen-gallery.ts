import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/nextgen-gallery/js/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'nextgen_lightbox_settings.static_path'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- <meta name="NextGEN" version="([\\d.]+)" /> -->\\;version:\\1'),
    // in text

    // in css
])
