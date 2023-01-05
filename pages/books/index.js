import supabase from "../../helpers/supabase";
import Head from "next/head";
import AdvancedSearch from "../../components/AdvancedSearch/AdvancedSearch";
import BooksTable from "../../components/BooksTable/BooksTable";

export default function Browse(props) {
    return (
        <>
            <Head>
                <title>PaperText | Browse Novels</title>
            </Head>
            <main className="max-w-screen-xl mx-auto space-y-4 mt-10 mb-20">
                <AdvancedSearch />
                <BooksTable booksList={props.booksList}></BooksTable>
            </main>
        </>
    );
}

export const getStaticProps = async () => {
    const { data } = await supabase.rpc("get_books");
    return {
        props: {
            booksList: data,
        },
        revalidate: 5,
    };
};
