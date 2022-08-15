import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-slate-800 h-full min-h-screen py-5'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;