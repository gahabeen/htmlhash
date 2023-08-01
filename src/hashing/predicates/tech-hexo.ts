import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Hexo(?: v?([\\d.]+))?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('Powered by <a href="https?://hexo\\.io/?"[^>]*>Hexo</'),
    // in text

    // in css
])
