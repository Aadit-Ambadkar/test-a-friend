import { useState } from "react";


export default function Form(props) {
    const { setLink } = props

    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    return (
        <form className="my-4 p-4 bg-white">
            <div className="mb-6">
                <label for="name" className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-600">Your Name</label>
                <input onChange={(event) => {
                    setName(event.target.value);
                }} type="text" id="name" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div className="mb-6">
                <label for="question" className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-600">The Question</label>
                <input onChange={(event) => {
                    setQuestion(event.target.value);
                }} type="text" id="question" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>


            <div className="mb-6">
                <label for="answer" className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-600">The Answer</label>
                <input onChange={(event) => {
                    setAnswer(event.target.value);
                }} type="text" id="answer" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={async (event) => {
                    event.preventDefault();

                    let requestOptions = {
                        method: 'POST',
                        body: JSON.stringify({ "name": name, "question": question, "answer": answer }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    };
                    let req = await fetch("http://localhost:3000/api/addRow", requestOptions);
                    let body = await req.json();
                    
                    setLink(body);
                }}
            >Submit</button>
        </form>
    )
}