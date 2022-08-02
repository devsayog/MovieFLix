function debounce<T extends (...args: any[]) => unknown>(fn: T, delay = 400) {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => fn(...args), delay)
  }
}

export default debounce
