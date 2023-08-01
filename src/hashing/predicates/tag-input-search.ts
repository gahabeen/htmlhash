import { anyOf, matchTagAttributesFuzzy } from '../matchers'

export const predicate = anyOf([
    matchTagAttributesFuzzy('input', {
        class: 'search',
    }),
])
