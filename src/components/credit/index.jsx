import React from "react";
import iconGithub from "./../../assets/images/icon-github.svg";
import css from "./style.module.scss";

const Credit = () => {
    return (
        <div className={css.footerContainer}>
            <a
                href='https://github.com/NicolasJacquet/Rock-Paper-Scissors'
                target='_blank'
                rel='noopener noreferrer'
                className={css.link}
            >
                View the source code of this website on Github.{" "}
                <img src={iconGithub} alt='Github' className={css.icon} />
            </a>
        </div>
    );
};

export default Credit;
