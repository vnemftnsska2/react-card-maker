import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";

// Service PATH
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import CardRepository from "./service/card_repository";

// Components PATH
import ImageFileInput from "./components/image_file_input/image_file_input";

// Service
const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();

// Components
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

// REACT DOM
ReactDOM.render(
  <App
    FileInput={FileInput}
    authService={authService}
    cardRepository={cardRepository}
  />,
  document.getElementById("root")
);
