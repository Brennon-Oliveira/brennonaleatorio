import { useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import style from "../styles/components/Link.module.scss";

export default function A(props) {
    const [page, setPage] = useState(
        props.page === undefined || props.page === "home" ? "" : props.page
    );
    const [element, setElement] = useState(props.to || "Home");
    const [duration, setDuration] = useState(props.duration || 500);
    const [smooth, setSmooth] = useState(props.smooth || true);
    const [offset, setOffset] = useState(props.offset || -30);
    const [canToggleMenu, setCanToggleMenu] = useState(
        props.canToggleMenu || false
    );

    const { changeRoute } = useContext(AppContext);
    function toggleMenu(e) {
        if (e?.type === "touchstart") e.preventDefault();
        let menu = document.querySelector("#menu");
        let btn = document.querySelector("#menuButton");
        let body = document.querySelector("body");
        menu.classList.toggle("active");
        btn.classList.toggle("active");
        body.classList.toggle("menu");
    }

    async function pre() {
        changeRoute(page);
        if (canToggleMenu) {
            toggleMenu();
        }
        await scroll();
    }

    async function scroll() {
        await setTimeout(() => {}, 3000);
        Scroll.scroller.scrollTo(element, {
            duration,
            smooth,
            offset,
        });
    }

    return (
        <Link
            class={style.link}
            to={page}
            className={props.className}
            onClick={pre}
        >
            {props.children || "Link"}
        </Link>
    );
}
