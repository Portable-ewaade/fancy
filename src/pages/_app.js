import "@/styles/globals.css";
import localFont from "next/font/local";

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

export default function App({ Component, pageProps }) {
  return (
    <main style={myFont.style}>
      <Component {...pageProps} />
    </main>
  );
}
