import { useEffect, useState } from "react";
import { fetchAllEntriesfromDatabase } from "./api/config";
import { Entry } from "./interfaces/Entry";
import "./App.css";

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const retrieveEntries = async () => {
      const promise = await fetchAllEntriesfromDatabase();
      setEntries(promise.data);
    };

    retrieveEntries();
  }, []);

  return (
    <>
      {entries.map((entry) => (
        <div key={entry._id}>
          <h1>{entry.title}</h1>
        </div>
      ))}
    </>
  );
};

export default App;
