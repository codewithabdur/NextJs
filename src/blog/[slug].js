import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import NavBar from '../../components/navbar'
import Link from 'next/link';

const Post = ({ blog, profile }) => {
  const router = useRouter()

  return <><>
    <Head>
      <meta charset="utf-8" />

      <meta content="IE=edge,chrome=1" https-equiv="X-UA-Compatible" />

      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

      <title>{blog.title}</title>

      <meta property="og:title" content="How to become a frontend developer | Atom Template" />

      <meta property="og:locale" content="en_US" />

      <link rel="canonical" href="//post" />

      <meta property="og:url" content="//post" />

      <meta name="description"
        content="This is the blog part of my Website." />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />

      <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

      <link as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="preload" />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet" />

      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

      <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />

      <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>

      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css" />



    </Head>
    <NavBar profile={profile} />

    <div>
      <div class="container py-6 md:py-10">
        <div class="mx-auto max-w-4xl">
          <div class="">
            <h1
              class="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              {blog.title}
            </h1>
            <div class="flex items-center pt-5 md:pt-10">
              <div>
                <img src="/assets/img/blog-author.png"
                  class="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                  alt="author image" />
              </div>
              <div class="pl-5">
                <span class="block font-body text-xl font-bold text-grey-10">By CodeWithAbdur</span>
                <span class="block pt-1 font-body text-xl font-bold text-grey-30">July 01 2002,
                  2022</span>
              </div>
            </div>
          </div>
          <div class="prose max-w-none pt-8">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={blog.content}
              projectId="myjzyy1q"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li class="special-list-item">{children}</li>,
              }}
            />

          </div>
          <div class="mt-10 flex justify-between border-t border-lila py-12">
            <a href="/" class="flex items-center">
              <i class="bx bx-left-arrow-alt text-2xl text-primary"></i>
              <span
                class="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous
                Post</span>
            </a>
            <a href="/" class="flex items-center">
              <span class="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next
                Post</span>
              <i class="bx bx-right-arrow-alt text-2xl text-primary"></i>
            </a>
          </div>
          <div
            className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
            <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
              <img src="/assets/img/blog-author.png" class="rounded-full shadow" alt="author image" />
            </div>
            <div class="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
              <h3 class="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                CODEWITHABDUR
              </h3>
              <p
                class="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                If you read this then it means you must intrested in my site if you want to make your site please
                Contact me through Contact form given in homepage.

              </p>
              <div class="flex items-center justify-center pt-5 md:justify-start">
                <a href="https://www.facebook.com/profile.php?id=100064823755797" target="_blank">
                  <i class="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://twitter.com/CodeWithAbdur" target="_blank" class="pl-4">
                  <i class="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.youtube.com/c/lucygamer01" target="_blank" class="pl-4">
                  <i class="bx bxl-youtube text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.linkedin.com/in/ark-gamerz-857150244/" target="_blank" class="pl-4">
                  <i class="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.instagram.com/codewithabdur/" target="_blank" class="pl-4">
                  <i class="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary">
      <div class="container flex flex-col justify-between py-6 sm:flex-row">
        <p class="text-center font-body text-white md:text-left">
          © Copyright 2022. All right reserved, CODEWITHABDUR.
        </p>
        <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <a href="https://www.facebook.com/profile.php?id=100064823755797" target="_blank">
            <i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
          </a>
          <a href="https://twitter.com/CodeWithAbdur" target="_blank" class="pl-4">
            <i class="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
          </a>
          <a href="https://www.youtube.com/c/lucygamer01" target="_blank" class="pl-4">
            <i class="bx bxl-youtube text-2xl text-white hover:text-yellow"></i>
          </a>
          <a href="https://www.linkedin.com/in/ark-gamerz-857150244/" target="_blank" class="pl-4">
            <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
          </a>
          <a href="https://www.instagram.com/codewithabdur/" target="_blank" class="pl-4">
            <i class="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
          </a>
        </div>
      </div>
    </div>

  </> </>
}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    "projectId": "myjzyy1q",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog, profile
    }
  }
}