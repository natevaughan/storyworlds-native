export default interface Navigation {
    navigate: (route: string) => void
    addListener: () => void
    canGoBack: () => void
    dangerouslyGetParent: () => void
    dangerouslyGetState: () => void
    dispatch: () => void
    goBack: () => void
    isFocused: () => void
    pop: () => void
    popToTop: () => void
    push: () => void
    removeListener: () => void
    replace: () => void
    reset: () => void
    setOptions: () => void
    setParams: () => void
}