import Head from "next/head";
import DateTime from "../components/date-time/date-time";
import Weather from "../components/weather/weather";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Smart Mirror</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <DateTime />
        <Weather />
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }
        .row {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: black;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .fill {
          width: 100%;
          height: 100%;
        }

        .widget {
          font-size: 1rem;
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );
}
