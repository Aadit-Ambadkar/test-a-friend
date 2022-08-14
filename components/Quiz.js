import { useState } from "react";


export default function Quiz(props) {
    const { name, question, slug } = props;
    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(false);
    return (
        <>
        {correct ? "" : 
        <form className="my-4 p-4 bg-white">
            <div className="mb-6">
                <p className="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-600">Your Friend's Name</p>
                <p className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-700">{name}</p>
            </div>

            <div className="mb-6">
                <p className="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-600">The Question</p>
                <p className="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-700">{question}</p>
            </div>


            <div className="mb-6">
                <label htmlFor="answer" className="block mb-2 text-sm font-bold text-slate-900 dark:text-slate-600">Your Answer</label>
                <input onChange={(event) => {
                    setAnswer(event.target.value);
                }} type="text" id="answer" className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={async (event) => {
                    event.preventDefault();
                    alert('L+ratio, not implemented yet')
                }}
            >Submit</button>
        </form>
        }
        </>
    )
}