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

import { useEffect } from 'react';
import { initGA, logPageView } from '../../analytics'; // Import the utility you created  

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
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view

    // Add additional tracking logic as needed
  }, []);

  return  <main style={myFont.style}>
      <Component {...pageProps} />
    </main>;
}

export default MyApp;
