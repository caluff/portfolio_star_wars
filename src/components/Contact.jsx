import {useState, useRef} from "react";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from "../styles";
import {SectionWrapper} from '../hoc';
import {slideIn} from "../utils/motion";
import {EarthCanvas} from './canvas';
import {toast} from "sonner";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailApp = import.meta.env.VITE_APP_EMAIL;
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(serviceId,
      templateId,
      {
        from_name: form.name,
        to_name: 'Daniel Caluff',
        from_email: form.email,
        to_email: emailApp,
        message: form.message,
      },
      publicKey)
      .then(() => {
        setLoading(false);
        toast.custom((t) => (
          <div className="bg-tertiary py-3 px-6 border-none flex items-start gap-4 w-full rounded-md">
            <div className="flex-1 text-left">
              <h1 className="text-emerald-500 font-bold mb-1">Email sent</h1>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <p className="text-white text-sm mb-2 md:mb-0 md:mr-4">
                  Thank you. I will get back to you as soon as possible.
                </p>
                <button
                  className="text-sm text-blue-400 whitespace-nowrap"
                  onClick={() => toast.dismiss(t)}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        ));
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        toast.custom((t) => (
          <div className="bg-red-900 py-3 px-6 border-none flex items-start gap-4 w-full rounded-md">
            <div className="flex-1 text-left">
              <h1 className="text-white font-bold mb-1">Error Occurred</h1>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <p className="text-white text-sm mb-2 md:mb-0 md:mr-4">
                  {error.text || 'There was an error processing your request. Please try again later.'}
                </p>
                <button
                  className="text-sm text-red-300 whitespace-nowrap"
                  onClick={() => toast.dismiss(t)}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        ));
      })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
                  className="flex-[0.75] bg-black-100/70 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8">
          {/*nombre*/}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text"
                   name="name"
                   value={form.name}
                   onChange={handleChange}
                   placeholder="What's your name?"
                   className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          {/*email*/}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email"
                   name="email"
                   value={form.email}
                   onChange={handleChange}
                   placeholder="What's your email?"
                   className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          {/*message*/}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            aria-label={'Send email'}
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}
export default SectionWrapper(Contact, "contact")