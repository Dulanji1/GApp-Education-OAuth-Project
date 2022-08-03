import React from "react";

const RedirectScreen = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const code = params.get("code");
  localStorage.setItem("code", code);

  return <div></div>;
};

export default RedirectScreen;
