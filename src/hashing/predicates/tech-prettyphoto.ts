import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jquery\\.prettyPhoto\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pp_alreadyInitialized'),
    matchRegexInInnerHTML('script', 'pp_descriptions'),
    matchRegexInInnerHTML('script', 'pp_images'),
    matchRegexInInnerHTML('script', 'pp_titles'),
    // in meta

    // in scripts

    // in html
    matchRegex('(?:<link [^>]*href="[^"]*prettyPhoto(?:\\.min)?\\.css|<a [^>]*rel="prettyPhoto)'),
    // in text

    // in css
])
