import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form submission (e.g., send email or store in a database)
    console.log(formData);
  };


  return (
    <section id="contact" className=" py-16 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-300">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600">
          Feel free to reach out to discuss your projects, collaborations, or any inquiries. I&apos;m always open to new opportunities and tech discussions!
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full md:w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full md:w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
          />
          <button
            type="submit"
            className="inline-flex justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
