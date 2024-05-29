// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [toName, setToName] = useState('');
  const [fromName, setFromName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    emailjs.send('service_16nqe4s', 'template_nomkzqv', {
      to_name: toName,
      from_name: fromName,
      user_email: email,
      subject,
      message,
    }, 'q9Z0eqlKA1C7RGSk6')
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setToName('');
        setFromName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setError('Failed to send message. Please try again.');
        setIsSending(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'toName') {
      setToName(value);
    } else if (name === 'fromName') {
      setFromName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'subject') {
      setSubject(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  return (
    <section className="bg-124e57-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">If you are facing any problem or if you have any queries, let us know.</p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-8">  
          <div>
            <label htmlFor="toName" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">Recipient&apos;s Name</label>
            <input
              type="text"
              id="toName"
              name="toName"
              value={toName}
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-70 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Recipient's name"
              required
            />
          </div>
          <div>
            <label htmlFor="fromName" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">Your Name</label>
            <input
              type="text"
              id="fromName"
              name="fromName"
              value={fromName}
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleInputChange}
              className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-100">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={message}
              onChange={handleInputChange}
              className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-bold text-center text-white rounded-lg bg-black sm:w-fit hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-primary-800"
            disabled={isSending || isSent}
          >
            {isSending ? 'Sending...' : isSent ? 'Sent!' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export { Contact };
