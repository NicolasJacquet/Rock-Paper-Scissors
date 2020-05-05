// @flow
import React, { Fragment, useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import rulesIllustration from "./../../assets/images/image-rules.svg";
import closeIcon from "./../../assets/images/icon-close.svg";
import useOnClickOutside from "./../../effects/use-on-click-outside.js";
import css from "./style.module.scss";

const Rules = () => {
    const ref = useRef();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useOnClickOutside(ref, () => setModalIsOpen(false));

    const handleOpenClick = (e) => {
        e.currentTarget.blur();
        setModalIsOpen(true);
    };

    const handleCloseClick = () => {
        setModalIsOpen(false);
    };

    return (
        <Fragment>
            <div className={css.btnContainer}>
                <button className={css.openBtn} onClick={handleOpenClick}>
                    RULES
                </button>
            </div>
            <Fade when={modalIsOpen}>
                {modalIsOpen && (
                    <div className={css.modal}>
                        <Fade top duration={700} delay={300}>
                            <div className={css.dialog}>
                                <div className={css.dialogContent} ref={ref}>
                                    <div className={css.dialogHeader}>
                                        <h2 className={css.dialogTitle}>
                                            RULES
                                        </h2>
                                        <button
                                            onClick={handleCloseClick}
                                            className={css.dialogClose}
                                            title='Close'
                                        >
                                            <img src={closeIcon} alt='Close' />
                                        </button>
                                    </div>
                                    <img src={rulesIllustration} alt='Rules' />
                                </div>
                            </div>
                        </Fade>
                    </div>
                )}
            </Fade>
        </Fragment>
    );
};

export default Rules;
