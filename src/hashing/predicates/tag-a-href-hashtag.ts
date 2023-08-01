import { anyOf, matchTagAttributesFuzzy } from '../matchers'

export const predicate = anyOf([matchTagAttributesFuzzy('link', { href: '#' })])

export const tests = {
    success: ['<a href="#">To top</a>'],
    failure: [],
}
