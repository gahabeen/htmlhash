import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='//a.storyblok.com/'], img[srcset*='a.storyblok.com']`),
    // in js
    matchRegexInInnerHTML('script', 'StoryblokBridge'),
    matchRegexInInnerHTML('script', 'storyblokRegisterEvent'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
