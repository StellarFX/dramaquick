// Ici, on peut rajouter des types éventuels pour structurer un peu tout mdr
import React from "react"

interface Session {
    id: number,
    author: string?,
    authorId: string?,
    startingAt: Date,
    duration: number
}

interface DQButtonProps {
    content: string,
    style: 'filled' | 'outline',
    onClick(): void,
    className?: string,
    type?: 'button' | 'submit' | 'reset'
}

interface DQLoaderProps {
    loading: boolean
}

interface DQModalProps {
    title: string,
    children: React.ReactNode,
    opened?: boolean,
    setOpened?(val: boolean): void
}

export declare function DQButton(props: DQButtonProps): JSX.Element;
export declare function DQLoader(props: DQLoaderProps): JSX.Element;
export declare function DQModal(props: DQModalProps): JSX.Element;
export declare function createModal(props: DQModalProps): void;

// Comme ça si tu veux créer un objet session tu peux faire :

// const test: Session = {
//     ...
// }

// où

// class test2 implements Session {
//     ...
// }