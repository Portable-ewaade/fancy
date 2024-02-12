// import "@/styles/globals.css";
// import localFont from "next/font/local";
// import "animate.css";

// const myFont = localFont({
//   src: [
//     {
//       path: "../../fonts/myfont_a.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../fonts/myfont_bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <main style={myFont.style}>
//       <Component {...pageProps} />
//     </main>
//   );
// }



// _app.js (or _app.tsx for TypeScript)
import "@/styles/globals.css";
import localFont from "next/font/local";
import "animate.css";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
// import { useEffect } from 'react';
import * as gtag from "../components/common/analytics"
import { initGA, logPageView } from '../components/common/analytics'; // Import the utility you created  

const myFont = localFont({
  src: [
    {
      path: "../../fonts/myfont_a.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/myfont_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   initGA(); // Initialize Google Analytics
  //   logPageView(); // Log the initial page view

  //   // Add additional tracking logic as needed
  // }, []);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <main style={myFont.style}>
      <>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script id="google-analytics-script" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
          });
    `}
        </Script>
      </>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
