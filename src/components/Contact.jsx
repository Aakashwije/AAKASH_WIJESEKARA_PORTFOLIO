import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // ✅ Simple validation UI
    if (!name || !email || !message) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_p6rpuyf",       // ✅ Service ID
        "template_8rjkagi",      // ✅ Template ID
        form.current,
        "YiMktA5jPUax2Zztr"      // ✅ Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message!");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-[#2b2f36] relative">
      <Toaster position="top-right" />

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center md:text-left">
          Contact <span className="text-yellow-400">Me</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-5 py-4 rounded-md bg-[#1f2329] text-white outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-5 py-4 rounded-md bg-[#1f2329] text-white outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            className="w-full px-5 py-4 rounded-md bg-[#1f2329] text-white outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="border-2 border-yellow-400 text-yellow-400 px-4 sm:px-10 py-3 sm:py-4 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-3 disabled:opacity-60 w-full sm:w-auto justify-center"
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
}

export { Contact };
export default Contact;
