import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/responsive-lightbox/.+front\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'rlArgs.activeGalleries'),
    matchRegexInInnerHTML('script', 'rl_hide_image'),
    matchRegexInInnerHTML('script', 'rl_view_image'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
