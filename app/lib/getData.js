import supabaseDb from "./supabaseClient";

export default async function getData() {
    const data = await supabaseDb();
    const tableData = await data.from("Questions").select("*");

    return <pre>{tableData}</pre>;
}