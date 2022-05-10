import { Modal } from '@mantine/core';
import { useState } from 'react';
import { DQModalProps } from '../../types/dramaquick/main';
import { createPortal } from 'react-dom';
import s from './DQModal.module.scss';

export default function DQModal(props: DQModalProps) {
    
    const [open, setOpen] = useState(props.opened)

    return (
        <Modal
            opened={open}
            onClose={() => props.setOpened ? props.setOpened(false) : setOpen(false)}
            title={props.title}
        >
            {props.children}
        </Modal>
    )

}

export function createModal(props: DQModalProps): void {

    console.log(document.getElementsByTagName("main")[0]);

    return createPortal(
        <DQModal {...props}/>,
        document.getElementsByTagName("main")[0]
    )

}