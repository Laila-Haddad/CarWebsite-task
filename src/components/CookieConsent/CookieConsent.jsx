import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./CookieConsent.module.css";
import { useTheme } from "../../contexts/ThemeProvider";



const CookieConsent = () => {
  const {theme } = useTheme();

  const [cookies, setCookies] = useCookies(["consent"]);
  const [banner, setBanner] = useState(true);

  const [show, setConsent] = useState(false);

  const giveCookieConsent = () => {
    setCookies("consent", true, { path: "/" });
    setBanner((prev) => !prev);
  };
  const refuseCookies = () => {
    setConsent(true);

    setBanner((prev) => !prev);
    setTimeout(() => {
      setBanner((prev) => !prev);
    }, 800);
  };

  let isClosed = banner ? styles.cookieConsent : styles.closed;
  let style = theme =='dark'? styles.dark :""
  return (
    <>
      {cookies.consent == null ? (
        <><div className={`${isClosed} ${style}` }>
          {show == false ? (
            <>
              <p>
                Our website uses cookies to personalize your experience, and
                store the data you enter on our website. By continuing to use
                our site, you consent to our use of cookies. For more
                information, including how to manage your cookie preferences,
                please refer to our
                <a href={"/privacy-policy"}>Privacy Policy</a>.
              </p>
              <button className="filled-btn" onClick={giveCookieConsent}>
                Accept All
              </button>
              <button className="bordered-btn" onClick={refuseCookies}>
                Reject All
              </button>
            </>
          ) : (
            <>
              <p>
                Cookies will not be saved. But be careful, the data you enter
                will not presist after refreshing/closing the browser, such as
                the items you add to your cart. Handle your data at your own
                risk.
              </p>
              <button
                className={styles.close}
                onClick={() => {
                  setBanner((prev) => !prev);
                  setCookies("consent", false, { path: "/" });
                } }
              >
                ×
              </button>
            </>
          )}
        </div>
        <div className={styles.overla}></div>
        
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CookieConsent;
