import Head from 'next/head';
import { useEffect, useContext, useState } from 'react';
import Quiz from '../../components/Quiz';

function View({ name, question, slug }) {
  console.log(slug);
  return (
    <div className="flex flex-col max-w-3xl m-auto">
      <Head>
        <title>Test a Friend!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white mt-10 py-3">
        <div className="max-w-2xl px-6 text-center mx-auto">
          <h2 className="text-3xl font-semibold text-slate-800">You have been challenged to a quiz!</h2>
          <p className='text-slate-800'>
            The name of your friend, and question they challenge you to answer, are provided below. Provide the answer you feel is correct. See if you truly know your friend.
          </p>
        </div>
      </section>

      <Quiz name={name} question={question} />

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
  )
}

export async function getServerSideProps({ params }) {
  let requestOptions = {
    method: 'POST',
    body: JSON.stringify({ "id": params.slug }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let req = await fetch("/api/getRow", requestOptions);
  let body = await req.json();
  return {
    props: {
      name: body['name'],
      question: body['question'],
      slug: params.slug
    }
  }
}

export default View;