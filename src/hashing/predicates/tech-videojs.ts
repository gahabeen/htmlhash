import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'zencdn\\.net/c/video\\.js'),
    matchRegexInAttribute('script', 'src', 'cdnjs\\.cloudflare\\.com\\/ajax\\/libs\\/video\\.js\\/([\\d\\.]+)\\/\\;version:\\1'),
    // in dom
    matchSelector(`div.video-js`),
    // in js
    matchRegexInInnerHTML('script', 'VideoJS'),
    matchRegexInInnerHTML('script', 'videojs'),
    matchRegexInInnerHTML('script', 'videojs.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('\\.video-js\\;confidence'),
    matchRegex('\\.vjs-big-play-button\\;confidence'),
])
