import { DQButtonProps } from '../../types/dramaquick/main';
import s from './DQButton.module.scss';

const styles = {
    'filled': s.dqbutton_filled,
    'outline': s.dqbutton_outline
}

export default function DQButton(props: DQButtonProps) {

    return (
        <button className={`${s.dqbutton} ${props.className} ${styles[props.style] ?? styles["filled"]}`} type={props.type ?? "button"} onClick={props.onClick}>
            {props.content}
        </button>
    )

}