import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import React from 'react'
import {useform}  from 'react-hook-form'
import PortableText from "react-portable-text"
// import myConfiguredSanityClient from './sanityClient'


import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar';

export default function Home({ blogs, profile, form }) {
  const client = createClient({
    "projectId": "myjzyy1q",
    dataset: "production",
    useCdn: false
  }); 0
  const builder = imageUrlBuilder(client)
  //   profile = {
  //   title: "CODEWITHABDUR",
  //   name: "Abdur",
  //   image: "https://insanebiography.com/wp-content/uploads/codewithharry_108099807_133124151765153_6863548870509034899_n-min-edited.jpg",
  //   fbLink: "https://www.facebook.com/profile.php?id=100064823755797",
  //   twitterLink: "https://twitter.com/CodeWithAbdur",
  //   instagramLink: "https://www.instagram.com/codewithabdur/",
  // }


  return (
    <><>
      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport" />

        <title>{profile.title} - Developer | Coder | Animator</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//" />

        <meta
          property="og:url"
          content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet" />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet" />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head>
      <NavBar profile={profile} />
      <div className="w-full z-50 top-0 py-3 sm:py-5  absolute ">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
             <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              <li className="group pl-6">

                <a href='#about'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
               
              <a href='#services'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#portfolio'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#clients'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#work'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#statistics'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#blog'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href="https://codewithabdur.github.io/Form/" target="_blank"><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span></a>
              </li>

            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
      <div className="hidden absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
        <button className="absolute top-0 right-0 mt-4 mr-4">
          <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
        </button>

        <ul className="mt-8 flex flex-col">

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">Contact</span>

          </li>

        </ul>
      </div>
    </><><div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
        <div
          className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
        </div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img src={builder.image(profile.image).width(200).url()} className="h-48 rounded-full sm:h-56" alt="author" />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm {profile.name}!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">Let's connect</p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href="https://www.facebook.com/profile.php?id=100064823755797" target="_blank" className="pl-4">
                    <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a href="https://twitter.com/CodeWithAbdur" target="_blank" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a href="https://www.youtube.com/c/lucygamer01" target="_blank" className="pl-4">
                    <i className="bx bxl-youtube text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ark-gamerz-857150244/" target="_blank" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </a>
                  <a href="https://www.instagram.com/codewithabdur/" target="_blank" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                  </a>
                </div>
              </div>
              <Link href={'/blogs'}><div className="buttons text-center md:text-left">
                <button className='bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl'>All Blogs</button>
              </div></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Abdur, a Web Designer & Animator.
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Node.js, Go or Java in the server, and http for communications between client and server. A web developer may specialize in client-side applications (front-end developer), server-side applications (back-end developer), or both (full-stack developer).
              An animator is an artist who creates multiple images, known as frames, which give an illusion of movement called animation when displayed in rapid sequence. Animators can work in a variety of fields including film, television, and video games.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href="https://www.facebook.com/profile.php?id=100064823755797" target="_blank" className="pl-4" >
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://twitter.com/CodeWithAbdur" target="_blank" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.youtube.com/c/lucygamer01" target="_blank" className="pl-4">
                  <i className="bx bxl-youtube text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.linkedin.com/in/ark-gamerz-857150244/" target="_blank" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.instagram.com/codewithabdur/" target="_blank" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  HTML & CSS
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "85%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "70%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Javascript
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "98%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Figma</h4>
                <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services I  offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-development-white.svg" alt="development icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-development-black.svg" alt="development icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Technical Writing
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Technical writing is writing or drafting technical communication used in technical and occupational fields.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Mobile App Development
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Mobile app development is the act or process by which a mobile app is developed for mobile devices.
              </p>
            </div>
          </div>
          {/* <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Email Development
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Electronic mail (email or e-mail) is a method of exchanging messages ("mail") between people using electronic devices.
              </p>
            </div>
          </div> */}
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Graphic Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Web design encompasses many different skills and disciplines in the production and maintenance of websites.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a href="https://codewithabdur.github.io/CodeWithAbdur/" target="_blank" 
          className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/portfolio-apple.png" className="w-full shadow" alt="portfolio image" />
          </a>
          <a href="https://codewithabdur.github.io/CodeWithAbdur_Particle/"  target ="_blank" 
          className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/portfolio-stripe.jpeg" className="w-full shadow" alt="portfolio image" />
          </a>
          <a href="https://codewithabdur.github.io/CodeWithAbdur/" target="_blank" 
          className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/portfolio-fedex.jpeg" className="w-full shadow" alt="portfolio image" />
          </a>
          <a href="https://codewithabdur.github.io/CodeWithAbdur_Particle/"  target ="_blank" 
          className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/portfolio-microsoft.jpeg" className="w-full shadow" alt="portfolio image" />
          </a>
        </div>
      </div>

      <div className="bg-grey-50" id="clients">
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My latest clients
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <img src="/assets/img/logo-coca-cola.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>
              <span className="m-8 block">
                <img src="/assets/img/logo-apple.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="/assets/img/logo-netflix.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="/assets/img/logo-amazon.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <img src="/assets/img/logo-stripe.svg" alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I did before freelancing
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/logo-spotify.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Apr 2015 - Mar 2018</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Frontend
                      Developer</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">Frontend and Backend (or sometimes referred to as back end or back-end) refer to the separation of concerns between the presentation layer (frontend)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/logo-microsoft.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Mar 2018 - September 2019</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Software
                      Engineer</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software. The term programmer is sometimes used as a synonym, but may also lack connotations of engineering education or skills.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/logo-fedex.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">October 2019 - Feb 2021</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">DevOps
                      Engineer</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">Sep., 1993. Mezak, Steve (25 January 2018). "The Origins of DevOps: What's in a Name?". devops.com. Retrieved 6 May 2019. Debois, Patrick (9 October 2008).</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
        style={{ "backgroundImage": "url(/assets/img/experience-figure.png)" }} id="statistics">
        <div className="container">
          <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <img src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    15
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Finished Projects
                  </h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <img src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    5
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Awards Won
                  </h4>
                </div>
              </div>

              <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <img src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20"
                    alt="icon happy clients" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    10
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Happy Clients
                  </h4>
                </div>
              </div>

              <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <img src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    99.9%
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Bugs Fixed
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {blogs.map((item) => {
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
                <div><div style={{ "backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})` }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                  <span
                    className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span
                    className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                    More</span>
                </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                    <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
                  </div></div>
              </Link>
            })}
            {/* <a href="/post" className="shadow">
              <div style={{"backgroundImage": "url(/assets/img/post-02.png)"}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">My personal productivity system</span>
                <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </a>
            <a href="/post" className="shadow">
              <div style={{"backgroundImage": "url(/assets/img/post-03.png)"}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">My year in review 2020</span>
                <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </a> */}
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="contact">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <strong className="font-body text-grey-10">
             If you intrested and want to make your own website then click on Send button (Given Below). It will Open
            form page for you go there and fill the form. 
            </strong>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">If Send button is not working then please try to click on the send text in button.</h3>
        </div>
{/* =========================================================================================================================        */}
        <form className="mx-auto w-full pt-10 sm:w-3/4">
          <div className="flex flex-col md:flex-row">
            <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Name" type="name" id="name" />
            <input
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="email" type="email" id="email" />
          </div>
          <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
            placeholder="message" id="message" cols="30" rows="10"></textarea>
          
          <button
            className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"><a href="https://codewithabdur.github.io/Form/" target="_blank">Send</a>
            <a href='https://codewithabdur.github.io/Form/'></a>
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
        </form>
           
{/* ========================================================================================================================= */}

        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Phone
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              (+91) 6234467836
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Email
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              CodeWithAbdur@gmail.com
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              123 Raza Bazar, Samanpura Patna, Bihar, India
            </p>
          </div>
        </div>
      </div>

      <div className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
        style={{ "backgroundImage": "url(/assets/img/map.png)" }}></div>

      <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
        style={{ "backgroundImage": "url(/assets/img/bg-cta.jpg)" }}>
        <div className="container relative z-30">
          <h3
            className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Join <span className="font-bold"> My team</span> <br />
            for Website Design.
          </h3>
          <form className="mt-6 flex flex-col justify-center sm:flex-row">
            <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="text"
              id="email" placeholder="Give me your Email" />
            <button
              className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
              <a href="https://rzp.io/l/AmHxSSwy" target="_blank">JOIN ME</a>
            </button>
          </form>
        </div>
      </div>
    </div><div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, CODEWITHABDUR.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href="https://www.facebook.com/profile.php?id=100064823755797" target="_blank">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="https://twitter.com/CodeWithAbdur" target="_blank" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="https://www.youtube.com/c/lucygamer01" target="_blank" className="pl-4">
                <i className="bx bxl-youtube text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="https://www.linkedin.com/in/ark-gamerz-857150244/" target="_blank" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href="https://www.instagram.com/codewithabdur/" target="_blank" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div></></>

    // <div className="home mx-8">
    //   <h1>{blogs[0].title}</h1>
    //   <div className="mx-8">

    //   <PortableText
    //   // Pass in block content straight from Sanity.io
    //   content={blogs[0].content}
    //   projectId ="myjzyy1q"
    // dataset = "production"
    //   // Optionally override marks, decorators, blocks, etc. in a flat
    //   // structure without doing any gymnastics
    //   serializers={{
    //     h1: (props) => <h1 style={{ color: "red" }} {...props} />,
    //     li: ({ children }) => <li className="special-list-item">{children}</li>,
    //   }}
    // />
    //   </div>
    //   <span>I am homepage</span>
    // </div>
  )
}


export async function getServerSideProps(context) {
  const client = createClient({
    "projectId": "myjzyy1q",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  console.log(blogs.length)

  return {
    props: {
      blogs,
      profile
    }
  }
}