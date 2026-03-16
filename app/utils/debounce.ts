export function debounce(fn: Function, delayMs: number) {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const debounced = function (...args: any[]) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn(...args), delayMs)
    }

    debounced.cancel = () => {
        if (timeoutId) {
            clearTimeout(timeoutId)
            timeoutId = undefined
        }
    }

    return debounced
}