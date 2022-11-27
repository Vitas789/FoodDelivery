import { useState } from 'react';

const Header = () => {
    const [language, setLanguage] = useState('ru');
    const [dropdown, setDropdown] = useState(false);

    return (
        <header className="header">
            <div className="content-wrapper">
                <div className="header__left">
                    <div className="header__logo">
                        <img src={'../images/logo.png'} alt="logo" />
                    </div>
                    <div className="language">
                        <span
                            className="language__selected"
                            onClick={() => setDropdown(!dropdown)}
                        >
                            <img
                                src={`../images/${language}.svg`}
                                alt={language}
                            />
                        </span>
                        {dropdown && (
                            <div className="language__dropdown">
                                <div
                                    className={`language__option ${
                                        language === 'ru'
                                            ? 'language__option_current'
                                            : ''
                                    }`}
                                >
                                    <div
                                        className="language__flag"
                                        onClick={() => {
                                            setLanguage('ru');
                                            setDropdown(false);
                                        }}
                                    >
                                        <img
                                            src={`../images/ru.svg`}
                                            alt="ru"
                                        />
                                    </div>
                                    <p className="language__name">Русский</p>
                                </div>
                                <div className="language__option">
                                    <div
                                        className="language__flag"
                                        onClick={() => {
                                            setLanguage('us');
                                            setDropdown(false);
                                        }}
                                    >
                                        <img
                                            src={`../images/us.svg`}
                                            alt="us"
                                        />
                                    </div>
                                    <p className="language__name">English</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="city">
                        <p>Москва</p>
                    </div>
                </div>
                <div className="header__right"></div>
            </div>
        </header>
    );
};

export default Header;
