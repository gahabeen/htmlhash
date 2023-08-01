import { anyOf, matchTagAttributesFuzzy } from '../matchers'

export const predicate = anyOf([
    matchTagAttributesFuzzy('link', {
        rel: 'sponsored',
    }),
])

export const tests = {
    success: ['<a rel="sponsored" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>'],
    failure: [],
}
