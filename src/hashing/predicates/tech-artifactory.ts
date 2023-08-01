import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wicket/resource/org\\.artifactory\\.'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ArtifactoryUpdates'),
    // in meta

    // in scripts

    // in html
    matchRegex('<span class="version">Artifactory(?: Pro)?(?: Power Pack)?(?: ([\\d.]+))?\\;version:\\1'),
    // in text

    // in css
])
