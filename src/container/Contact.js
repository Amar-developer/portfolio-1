import React, { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";
import Alert from "./Alert";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });

  const handleTextCange = (e) => {
    const { name, value } = e.target;

    // update the state value corresponding input values
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = async () => {
    if (data.email === "" || data.email === null) {
      // throe an alert
      setAlert({
        isAlert: true,
        message: "Required fields cannot be empty",
        status: "warning",
      });
      setInterval(() => {
        setAlert({
          isAlert: false,
          message: "",
          status: null,
        });
      }, 4000);
    } else {
      await addDoc(collection(db, "messages"), { ...data })
        .then(() => {
          // throw an alert
          setData({ firstName: "", lastName: "", email: "", message: "" });
          setAlert({
            isAlert: true,
            message: "Thanks for contacting me",
            status: "success",
          });
          setInterval(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        })
        .catch((err) => {
          // throw alert message
          setAlert({
            isAlert: true,
            message: `${err.message}`,
            status: "danger",
          });
          setInterval(() => {
            setAlert({
              isAlert: false,
              message: "",
              status: null,
            });
          }, 4000);
        });
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-12 relative my-12"
    >
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>
      {/* title */}

      <div className="flex w-full items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} alt="" className="w-6 h-auto object-contain" />
          <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Contact Me
          </p>
          <img src={Leaf2} alt="" className="w-6 h-auto object-contain" />
        </motion.div>
      </div>

      {/* main content */}
      <div className=" w-full flex flex-col items-center justify-start gap-24">
        <div className="w-full lg:w-[600px] p-2 gap-4 flex flex-col items-center justify-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {/* name field */}
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleTextCange}
              placeholder="First Name"
              className="w-full px-4 py-3 bg-transparent  focus:bg-white
               focus:text-black outline-none border rounded-md border-[rgba(255,255,255,0.3)] text-textlight"
              required
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleTextCange}
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-transparent  focus:bg-white
               focus:text-black outline-none border rounded-md border-[rgba(255,255,255,0.3)] text-white"
              required
            />
          </div>
          {/* email feild */}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleTextCange}
            placeholder="Email"
            className="w-full px-4 py-3 bg-transparent  focus:bg-white
             focus:text-black outline-none border rounded-md border-[rgba(255,255,255,0.3)] text-white"
            required
          />

          {/* message */}
          <textarea
            type="text"
            id=""
            name="message"
            rows="10"
            cols="0"
            value={data.message}
            onChange={handleTextCange}
            placeholder="Message here.."
            className="w-full px-4 py-3 bg-transparent focus:border-primary outline-none border rounded-md border-[rgba(255,255,255,0.3)] text-white"
            required
          ></textarea>
          <div className="w-full flex items-center justify-center lg:justify-end">
            <button
              className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary "
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
