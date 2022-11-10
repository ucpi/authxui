import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import abi from "./abi/abi.json";
import Web3 from "web3";
import "./index.css";
import { ethers, providers, Contract } from "ethers";
import { init, getproof, autologin, nodecount } from "@ucpi/authx";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import './Machine.css'
const Machine = () => {
  const SC_ADDRESS = "0xdCFbBec5f22b22ACE035C588Bec740185f7cfD3B";
  const sm = "0x4091c90f4F22F1563a264FE5bE7AAfB97BD87EB4";
  const web3 = new Web3("https://api.s0.ps.hmny.io");
  const aud =
    "200258434787-u82a51f1huvslf3m8dcnh5gq8uolsjko.apps.googleusercontent.com";
  const ucpism = new web3.eth.Contract(abi, SC_ADDRESS);
  let { sc_address, tracker } = useParams();
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#1cc4d4");
  const provider = new providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return (
    <>
      {loading == true ? (
        <div className="loadr">
          <ClipLoader
            loading={loading}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div
          className="App"
          style={{
            height: "200vh",
            marginTop: "20%",
            marginLeft: "40%",
            marginRight: "50%",
          }}
        >
          <GoogleOAuthProvider clientId="200258434787-u82a51f1huvslf3m8dcnh5gq8uolsjko.apps.googleusercontent.com">
            <GoogleLogin
              uxMode="popup"
              theme="dark"
              onSuccess={(credentialResponse) => {
                // setLoading(true);
                console.log(credentialResponse.credential);
                const JWThash = Web3.utils.sha3(credentialResponse.credential);
                async function inito() {
                  setLoading(true);
                  window.ethereum
                    .request({ method: "eth_requestAccounts" })
                    .then((e) => {
                      const contract = new Contract(SC_ADDRESS, abi, signer);
                      contract.authxlogin(JWThash, sc_address).then((e) => {
                        getproof(
                          aud,
                          credentialResponse.credential,
                          tracker
                        ).then((e) => {});
                      });
                    });
                }

                inito();
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      )}
    </>
  );
};
export default Machine;
