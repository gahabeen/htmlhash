import { anyOf, matchTagAttributesFuzzy } from '../matchers'

export const predicate = anyOf([matchTagAttributesFuzzy('link', { href: 'mailto:' })])

export const tests = {
    success: ['<a  href="mailto:example@domain.com">Email me</a>'],
    failure: [],
}
