import { useState } from "react";
import "./Footer.css";
import Popup from "../Popup/Popup";
import { useDispatch } from "react-redux";
import {
  changePopup,
  getSubscribe,
  error,
  clearPopup,
} from "../../store/subscribeSlice";
import phoneContactIcon from "../../assets/images/footer/phone.png";
import emailContactIcon from "../../assets/images/footer/mail.png";
import skypeContactIcon from "../../assets/images/footer/skype.png";
import locationContactIcon from "../../assets/images/footer/location.png";

const ContactItem = ({ icon, alt, text }) => {
  return (
    <li className="footer__contact-item">
      <span className="footer__contact-link">
        <img src={icon} alt={alt} className="footer__contact-icon" />
      </span>
      <span className="footer__contact-link">
        <p className="footer__contact-text">{text}</p>
      </span>
    </li>
  );
};

const SocialLink = ({ name }) => {
  return (
    <li className="footer__social-item">
      <span className="footer__social-link">
        <div className={`footer__social-icon footer__social-icon--${name}`}></div>
      </span>
    </li>
  );
};

const Footer = () => {
  const [mail, setMail] = useState("");
  const dispatch = useDispatch();

  const validateMail = (mail) => {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(mail);
  };

  const onChange = (e) => {
    setMail(e.target.value);
  };

  const onClick = () => {
    if (validateMail(mail)) {
      dispatch(getSubscribe(mail));
      dispatch(changePopup("Подписка успешно оформлена"));
    } else {
      dispatch(error("Неверный адрес электронной почты"));
    }
    setMail("");
    setTimeout(() => dispatch(clearPopup()), 5 * 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer" id="footer">
      <Popup />
      <div className="footer__container">
        <div className="footer__content footer__content--top">
          <div className="footer__block footer__block--left">
            <h3 className="footer__title">Свяжитесь с нами</h3>
            <ul className="footer__contact-list">
              <ContactItem 
                icon={phoneContactIcon} 
                alt="Телефон" 
                text="8 (800) 000 00 00" 
              />
              <ContactItem 
                icon={emailContactIcon} 
                alt="Email" 
                text="inbox@mail.ru" 
              />
              <ContactItem 
                icon={skypeContactIcon} 
                alt="Skype" 
                text="tu.train.tickets" 
              />
              <ContactItem
                icon={locationContactIcon}
                alt="Адрес"
                text={
                  <>
                    г. Москва <br />
                    ул. Московская 27-35 555 555
                  </>
                }
              />
            </ul>
          </div>
          <div className="footer__block footer__block--right">
            <h3 className="footer__title">Подписка</h3>
            <div className="footer__subscribe">
              <h4 className="footer__subtitle">Будьте в курсе событий</h4>
              <div className="footer__form">
                <input
                  type="text"
                  className="footer__input"
                  placeholder="e-mail"
                  onChange={onChange}
                />
                <button className="footer__button" onClick={onClick}>
                  Отправить
                </button>
              </div>
            </div>
            <div className="footer__social">
              <h4 className="footer__title footer__title--social">
                Подписывайтесь на нас
              </h4>
              <ul className="footer__social-list">
                <SocialLink name="youtube" />
                <SocialLink name="linkedin" />
                <SocialLink name="gmail" />
                <SocialLink name="facebook" />
                <SocialLink name="twitter" />
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__content footer__content--bottom">
          <div className="footer__block footer__block--bottom">
            <span className="footer__link footer__link--logo">
              <p className="footer__text footer__text--logo">Лого</p>
            </span>
            <button 
              className="footer__scroll-top" 
              onClick={scrollToTop}
              aria-label="Прокрутить страницу вверх"
            >
              <span className="footer__scroll-arrow"></span>
            </button>
            <p className="footer__text">2018 WEB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
