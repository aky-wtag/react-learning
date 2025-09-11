// src/useFetch.ts
import { useState, useEffect } from "react";

// 1. Make the hook generic with <T>
export default function useFetch<T>(url: string) {
  // 2. Tell useState it can hold type T or null
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  // It's also good practice to type your error state
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // The result from .json() is initially 'any'
        const result = await response.json();
        setData(result as T); // Assert that the result is of type T
        setError(null);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}