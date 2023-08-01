import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jquery[.-]migrate(?:-([\\d.]+))?(?:\\.min)?\\.js(?:\\?ver=([\\d.]+))?\\;version:\\1?\\1:\\2'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jQuery.migrateVersion'),
    matchRegexInInnerHTML('script', 'jQuery.migrateWarnings'),
    matchRegexInInnerHTML('script', 'jqueryMigrate'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
