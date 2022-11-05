import React from "react";
import "./Login.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Login() {
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
          <h2 style={{ fontSize: "32px", paddingBottom: "5px" }}>Sign in</h2>
          <p style={{ fontSize: "14px", marginBottom: "30px" }}>
            Stay updated on your professional world
          </p>
          <form>
            <input
              type="text"
              placeholder="Full Name (required if registering)"
            />
            <input type="text" placeholder="Profile Pic URL (optional)" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
          <p style={{ textAlign: "center" }}>
            Not a member?{" "}
            <span style={{ cursor: "pointer", color: "#0177b7" }}>
              Register Now!
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
