import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { Reader } from "@/data/projects/types";

const storageKey = "fitcheck-reader";

const readSaved = () => {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
};

const save = (id: string) => {
  try {
    localStorage.setItem(storageKey, id);
  } catch {
    return;
  }
};

// The page is pre-rendered for the fallback reader, so ?for= and the saved choice are read after it loads
const useReader = (readers: Reader[], fallback: Reader) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reader, setReader] = useState(fallback);

  useEffect(() => {
    const id = searchParams.get("for") ?? readSaved();
    const found = readers.find((r) => r.id === id);
    if (found) setReader(found);
  }, [readers, searchParams]);

  const pick = (next: Reader) => {
    setReader(next);
    save(next.id);
    setSearchParams(
      { for: next.id },
      { replace: true, preventScrollReset: true },
    );
  };

  return [reader, pick] as const;
};

export default useReader;
