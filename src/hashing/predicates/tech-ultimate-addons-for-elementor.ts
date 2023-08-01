import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/wp-content/plugins/ultimate-elementor/']`),
    // in js
    matchRegexInInnerHTML('script', 'uael_particles_script.particles_url'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
