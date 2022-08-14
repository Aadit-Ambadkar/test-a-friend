import Head from 'next/head';
import Form from '../components/Form';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [link, setLink] = useState("");
  return (
    <div className="flex flex-col max-w-3xl m-auto">
      <Head>
        <title>Test a Friend!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white mt-10 py-3">
        <div className="max-w-2xl px-6 text-center mx-auto">
          <h2 className="text-3xl font-semibold text-slate-800">Test A Friend!</h2>
          <p className='text-slate-800'>
            Simply Input Your Name, A Question about you, and the correct answer into the form below! Then, copy the provided link, and send it
            to your friend!
          </p>
        </div>
      </section>

      <Form setLink={setLink} />
      {
        link !== "" ?
          <div className='flex flex-1 bg-white cursor-pointer' onClick={() => {navigator.clipboard.writeText(`${window.location.origin.toString()}/quiz/${link}`)}}>
            <p className='text-slate-800  p-4 mx-auto flex'>
              {`Here's your`}&nbsp;<Link href={`/quiz/${link}`}><a className='bg-indigo-600 text-white rounded px-1 cursor-default'>link</a></Link>{`! Click anywhere to copy.`}
            </p>
          </div>
          :
          ""
      }

      <footer className="bg-white mt-3">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-slate-600">&copy; Aadit Ambadkar</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}