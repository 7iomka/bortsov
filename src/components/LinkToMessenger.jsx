import React from "react";

const messengerUrls = {
  Viber: "viber://chat?number=%2B0660776326",
  Telegram: "https://t.me/barskij_dvor"
};

export const LinkToMessenger = ({ url, children }) => {
  const href = url || messengerUrls[children] || "#";

  const redirectToMessanger = (event) => {
    event.preventDefault();
    window.open(href);
  };

  return (
    <a href={href} onClick={redirectToMessanger}>
      {children}
    </a>
  );
};
