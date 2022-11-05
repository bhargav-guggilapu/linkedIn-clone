import React, { useRef, useState } from "react";
import "./Login.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Store/userSlice";

function Login() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const photoUrlRef = useRef();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState(true);

  const footerOptions = [
    {
      path: "https://www.linkedin.com/legal/user-agreement?trk=d_checkpoint_lg_consumerLogin_ft_user_agreement",
      label: "User Agreement",
    },
    {
      path: "https://www.linkedin.com/legal/privacy-policy?trk=d_checkpoint_lg_consumerLogin_ft_privacy_policy",
      label: "Privacy Policy",
    },
    {
      path: "https://www.linkedin.com/help/linkedin/answer/34593?lang=en&trk=d_checkpoint_lg_consumerLogin_ft_community_guidelines",
      label: "Community Guidelines",
    },
    {
      path: "https://www.linkedin.com/legal/cookie-policy?trk=d_checkpoint_lg_consumerLogin_ft_cookie_policy",
      label: "Cookie Policy",
    },
    {
      path: "https://www.linkedin.com/legal/copyright-policy?trk=d_checkpoint_lg_consumerLogin_ft_copyright_policy",
      label: "Copyright Policy",
    },
    {
      path: "https://www.linkedin.com/help/linkedin?trk=d_checkpoint_lg_consumerLogin_ft_send_feedback&lang=en",
      label: "Send Feedback",
    },
    {
      path: null,
      label: "Language",
    },
  ];

  const onLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let url;
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDmuCstK64hHyTx4QfMhIRnydsj1VCgX5U";
    } else {
      if (!nameRef.current.value) {
        alert("Please Enter Your Name.");
        setIsLoading(false);
        return;
      }
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmuCstK64hHyTx4QfMhIRnydsj1VCgX5U";
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(async (data) => {
          const url =
            "https://linkin-46671-default-rtdb.firebaseio.com/users.json";
          if (login) {
            const response = await fetch(url);
            const userData = await response.json();
            for (const key in userData) {
              if (data.localId === userData[key].localId) {
                dispatch(
                  loginUser({
                    name: userData[key].name,
                    photoUrl: userData[key].photoUrl,
                    email: userData[key].email,
                    profileView: userData[key].profileView,
                    postView: userData[key].postView,
                    connections: userData[key].connections,
                  })
                );
              }
            }
          } else {
            const obj = {
              email: data.email,
              name: nameRef.current.value,
              photoUrl: photoUrlRef.current.value
                ? photoUrlRef.current.value
                : "",
              profileView: Math.floor(Math.random() * 100 + 1),
              postView: Math.floor(Math.random() * 100 + 1),
              connections: Math.floor(Math.random() * 1000 + 1),
            };
            await fetch(url, {
              method: "POST",
              body: JSON.stringify({
                localId: data.localId,
                ...obj,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            dispatch(loginUser(obj));
          }
          setIsLoading(false);
          history.push("/linkin/feed");
        });
      } else {
        res.json().then((data) => {
          alert(data.error.message);
          setIsLoading(false);
        });
      }
    });
  };

  return (
    <div className="login_container">
      <div>
        <img
          src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png"
          alt="logo"
          style={{ height: "70px", objectFit: "contain" }}
        />
      </div>
      <div className="login_form_container">
        <div className="login_form">
          <h2 style={{ fontSize: "32px", paddingBottom: "5px" }}>
            Sign {login ? "in" : "up"}
          </h2>
          <p style={{ fontSize: "14px", marginBottom: "30px" }}>
            Stay updated on your professional world
          </p>
          <form>
            {!login && (
              <input type="text" placeholder="Full Name" ref={nameRef} />
            )}
            {!login && (
              <input
                type="text"
                placeholder="Profile Pic URL (optional)"
                ref={photoUrlRef}
              />
            )}
            <input type="email" placeholder="Email" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button type="submit" onClick={onLogin} disabled={isLoading}>
              {isLoading
                ? "Contacting To Server"
                : login
                ? "Sign In"
                : "Sign Up"}
            </button>
          </form>
          <p style={{ textAlign: "center" }}>
            {(!login ? "Existing" : "Not a") + " member? "}
            <span
              style={{ cursor: "pointer", color: "#0177b7" }}
              onClick={() => setLogin((state) => (state = !state))}
            >
              {!login ? "Sign In" : "Register Now!"}
            </span>
          </p>
        </div>
      </div>
      <div className="login_footer">
        <ul>
          <li>
            <img
              src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png"
              alt="logo"
              style={{ height: "40px", objectFit: "contain" }}
            />{" "}
            © 2022
          </li>
          {footerOptions.map((option, i) => (
            <li key={i}>
              {option.path ? (
                <a href={option.path} target="_blank" rel="noreferrer">
                  {option.label}
                </a>
              ) : (
                <button>
                  Language <KeyboardArrowDownIcon />
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Login;
