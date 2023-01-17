import Head from "next/head"
import TextEditor from "../../components/TextEditor/TextEditor"

export default function texteditor(){

    return(
        <>
        <Head>
            <title>PaperText | TextEditor</title>
        </Head>
        <main className='max-w-screen-xl space-y-4 mt-10 mb-20'>
            <TextEditor />
            </main>
    </>
    )
}