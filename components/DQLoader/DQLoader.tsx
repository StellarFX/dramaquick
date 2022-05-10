import { useEffect, useState } from "react";
import { DQLoaderProps } from "../../types/dramaquick/main";
import s from './DQLoader.module.scss';

export default function DQLoader(props: DQLoaderProps) {

    const [display, setDisplay] = useState(props.loading);

    useEffect(() => {
        setTimeout(() => setDisplay(false), 1000);
    }, [props.loading])

    return (
        <div className={`${s.loader} ${display ? "" : s.loader_hidden}`}>
            <span className={s.loading_bar}></span>
            <pre>
██       ██████   █████  ██████  ██ ███    ██  ██████ <br/>
██      ██    ██ ██   ██ ██   ██ ██ ████   ██ ██       <br/>
██      ██    ██ ███████ ██   ██ ██ ██ ██  ██ ██   ███ <br/>
██      ██    ██ ██   ██ ██   ██ ██ ██  ██ ██ ██    ██ <br/>
███████  ██████  ██   ██ ██████  ██ ██   ████  ██████ 
            </pre>
        </div>
    )

}