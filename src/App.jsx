import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Mail, Github } from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    console.log('Submitted:', { name, email });
    setSubmitted(true);
    // Reset form
    setEmail('');
    setName('');
  };

  const currentApp = {
    title: "Munger.AI",
    status: "In Development",
    description: "Utilize AI to generate investment theses directly from SEC Filings. Save countless hours of research time and gain deeper insights into potential investments by leveraging advanced AI analysis of financial documents.",
    benefits: [
      "Automated analysis of complex SEC filings to identify key investment factors",
      "Generate comprehensive investment theses in minutes instead of hours",
      "Compare your portfolio against legendary investors like Warren Buffett and Charlie Munger",
      "Work through investment thesis inversion questions with AI to stress-test your analysis",
      "Uncover hidden insights and patterns across multiple financial documents"
    ],
    icon: <Zap className="w-6 h-6" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              High ROI Applications for Individuals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A curated ecosystem of applications designed to maximize your personal return on investment.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#signup" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Get Early Access
              </a>
              <a href="#current-app" className="text-sm font-semibold leading-6 text-gray-900">
                View Current App <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Current App Section */}
      <div id="current-app" className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Featured Application</h2>
            <a href="https://github.com/nguyensp/Munger" target="_blank" rel="noopener noreferrer"
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl hover:text-blue-600 transition">
              {currentApp.title}
            </a>

            <p className="mt-2 text-sm text-blue-500">
              {currentApp.status}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-600 text-white">
                  {currentApp.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{currentApp.title}</h3>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {currentApp.description}
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">What's included</h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {currentApp.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-x-3">
                    <CheckCircle className="h-6 w-5 flex-none text-blue-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Email Signup Section */}
      <div id="signup" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get Early Access
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Join our waitlist to be the first to know about new apps and receive exclusive early access.
            </p>
            <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Paul Nguyen"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
            {submitted && (
              <div className="mt-4 text-center text-sm text-green-400">
                Thanks for signing up! We'll be in touch soon.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://github.com/nguyensp/Munger" className="text-gray-400 hover:text-gray-500">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://paulnguyen.dev" className="text-gray-400 hover:text-gray-500">
              Resume
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 NGYN.AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;