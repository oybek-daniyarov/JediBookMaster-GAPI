import { useFetchAllBooksQuery } from "@/modules/book/bookApi.ts";

function App() {
  const { data } = useFetchAllBooksQuery();
  console.log(data);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
