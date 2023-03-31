/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare interface AtypicalComponent {
    setProperty?: <T>(key: T, value: string | null) => void
}

declare type DButtonProperty =
    | '--color'
    | '--borderColor'
    | '--bg'
    | '--glitchColor'
    | '--glitchText'
    | '--top'
    | '--left'

declare interface AtypicalDButton {
    setProperty: ((key: DButtonProperty, value: string | null | number) => void) | undefined
}
