import { Drawer } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import s from "./Header.module.scss";
import { Squash as Hamburger } from 'hamburger-react';
import Play from '../../public/icons/jouer.svg';
import Leave from '../../public/icons/deconnexion.svg';
import Home from '../../public/icons/maison.svg';

export default function Header() {

    const router = useRouter();

    return (
        <div className={s.header}>
            <div className={s.title}>
                <Link href="/">DramaQuick</Link>
            </div>

            <div className={s.header_content}>
                <div className={s.links}>
                    <div className={router.pathname.startsWith("/") ? s.link_active : s.link}>
                        <Link href="/">
                            Accueil
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/session") ? s.link_active : s.link}>
                        <Link href="/session">
                            Rejoindre une session
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("https://dramaquiz.fr") ? s.link_active : s.link}>
                        <Link href="https://dramaquiz.fr">
                            Retourner sur DramaQuiz
                        </Link>
                    </div>
                </div>
            </div>

            <BurgerMenu />
        </div>
    )
}

function BurgerMenu() {

    const [open, setOpen] = useState(false);

    const router = useRouter();

    return (
        <>
            <Drawer
                opened={open}
                onClose={() => setOpen(false)}
                title="Menu"
                padding="0"
                size="xl"
                position="right"
                classNames={{
                    drawer: s.d,
                    header: s.d_header,
                    title: s.d_header_title
                }}
            >
                <div className={s.d_content}>
                    <div className={router.pathname.startsWith("/") ? s.h_link_active : s.h_link}>
                        <Home />
                        <Link href="/">
                            Accueil
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("/session") ? s.h_link_active : s.h_link}>
                        <Play />
                        <Link href="/session">
                            Rejoindre une session
                        </Link>
                    </div>
                    <div className={router.pathname.startsWith("https://dramaquiz.fr") ? s.h_link_active : s.h_link}>
                        <Leave />
                        <Link href="https://dramaquiz.fr">
                            Retourner sur DramaQuiz
                        </Link>
                    </div>
                </div>

            </Drawer>

            <div className={s.header_hamburger}>
                <Hamburger
                    toggled={open}
                    toggle={setOpen}
                />
            </div>

        </>
    )

}