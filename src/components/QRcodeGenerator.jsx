import React from "react";
import { QRCode } from "react-qrcode-logo";
import WootlabLogo from "../assets/wootlab.png";

function QRcodeGenerator() {
  return (
    <QRCode
      value="https://github.com/gcoro/react-qrcode-logo"
      size={200}
      fgColor="#00a1e2"
      qrStyle="squares"
    />
  );
}

export default QRcodeGenerator;
