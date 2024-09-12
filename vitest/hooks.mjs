import { createVitest } from 'vitest/node'

export async function initialize(data) {
    await createVitest('test', {})
    // Receives data from `register`.
}

export async function resolve(specifier, context, nextResolve) {
    // Take an `import` or `require` specifier and resolve it to a URL.    
    return nextResolve(specifier === "node:test" ? 'vitest' : specifier);
}

export async function load(url, context, nextLoad) {
    return nextLoad(url);
} 