import React from "react";
import CreateCommentForm from "../components/Comments/CreateCommentForm";

/**
 * Comment Screen which provides input components
 * to add new comment on a file
 */
const GoogleFileCommentScreen = ({ match }) => {
  const id = match.params.id;
  return <CreateCommentForm id={id} />;
};

export default GoogleFileCommentScreen;
