import { anyOf, matchTagAttributesFuzzy } from '../matchers'

export const predicate = anyOf([
    matchTagAttributesFuzzy('link', {
        rel: 'ugc',
    }),
])

export const tests = {
    success: ['<a rel="ugc" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>'],
    failure: [],
}
