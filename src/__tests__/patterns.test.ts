import { expect, test } from 'bun:test'
import {
    keyPattern,
    tagAttributesLoosePattern,
    tagAttributesPattern,
    tagKeyPattern,
    tagKeyValueLoosePattern,
    tagKeyValuePattern,
    tagPattern,
    tagTextPattern,
} from '../hashing/patterns'

test('tagPattern', () => {
    const html = `<script>console.log('hello world'); this.call()</script>`
    const pattern = tagPattern('script')
    const matched = !!html.match(pattern)
    expect(matched).toBe(true)
})

test('tagTextPattern', () => {
    const html = `<script>console.log('hello world'); this.call()</script>`
    const pattern = tagTextPattern('script', '.call(')
    const matched = !!html.match(pattern)
    expect(matched).toBe(true)
})

test('tagKeyPattern', () => {
    const html = `<meta name="site" content="google.com">`
    const pattern = tagKeyPattern('meta', 'name')
    const matched = !!html.match(pattern)
    expect(matched).toBe(true)
})

test('keyPattern', () => {
    const html = `<meta name="site" content="google.com">`
    const pattern = keyPattern('name')
    const matched = !!html.match(pattern)
    expect(matched).toBe(true)
})

test('tagKeyValuePattern', () => {
    {
        const html = `<meta name="site" content="google.com">`
        const pattern = tagKeyValuePattern('meta', 'name', 'site')
        const matched = !!html.match(pattern)
        expect(matched).toBe(true)
    }

    {
        const html = `<meta name="site" content="http://google.com">`
        const pattern = tagKeyValuePattern('meta', 'content', 'http://google.com')
        const matched = !!html.match(pattern)
        expect(matched).toBe(true)
    }
})

test('tagKeyValueLoosePattern', () => {
    {
        const html = `<meta name="site" content="google.com">`
        const pattern = tagKeyValueLoosePattern('meta', 'name', 'sit')
        const matched = !!html.match(pattern)
        expect(matched).toBe(true)
    }

    {
        const html = `<meta name="site" content="http://google.com">`
        const pattern = tagKeyValueLoosePattern('meta', 'content', 'google')
        const matched = !!html.match(pattern)
        expect(matched).toBe(true)
    }
})

test('tagAttributesPattern', () => {
    {
        const html = `<meta name="site" content="google.com">`
        const pattern = tagAttributesPattern('meta', {
            name: 'site',
        })
        const matched = !!html.match(pattern)
        expect(matched).toBe(true)
    }
})

test('tagAttributesLoosePattern', () => {
    {
        const html = `<meta name="site" content="google.com">`
        const pattern = tagAttributesLoosePattern('meta', {
            name: 'site',
            content: 'google',
        })
        const matched = !!html.match(pattern)
        expect(matched).toBe(true)
    }
})
