import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { cn } from "../utils/cn";
import { Label } from "./ui/input/label";
import { Input } from "./ui/input/input";
import { Textarea } from "./ui/input/textarea";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      throw new Error("Please enter all details!");
    }

    emailjs
      .send(
        "service_88mn4zh",
        "template_njrveyh",
        {
          from_name: form.name,
          to_name: "Tauseef",
          from_email: form.email,
          to_email: "tauseef242003@gmail.com",
          message: form.message,
        },
        "rWtxtKTjgdaLoaG5X"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank You, I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);

        toast.error("Something went wrong: ", error);
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 sm:p-8 p-4 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="sm:mt-12 mt-6 flex flex-col sm:gap-8 gap-4"
        >
          <LabelInputContainer>
            <Label className="text-white font-medium mb-2">Your Name</Label>
            <Input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </LabelInputContainer>
          <LabelInputContainer className="flex flex-col">
            <Label className="text-white font-medium mb-2">Your Email</Label>
            <Input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </LabelInputContainer>
          <LabelInputContainer className="flex flex-col">
            <Label className="text-white font-medium mb-2">Your Message</Label>
            <Textarea
              rows="7"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </LabelInputContainer>
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px]"
            disabled={loading}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-tertiary px-3 py-1 text-sm font-bold text-white backdrop-blur-3xl">
              {loading ? "Sending..." : "Send"}
            </span>
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
