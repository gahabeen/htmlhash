import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/elementor(?:-pro)?/.+frontend-modules\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/elementor/']`),
    // in js
    matchRegexInInnerHTML('script', 'elementorFrontend.getElements'),
    matchRegexInInnerHTML('script', 'elementorFrontendConfig.version'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Elementor\\s([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
