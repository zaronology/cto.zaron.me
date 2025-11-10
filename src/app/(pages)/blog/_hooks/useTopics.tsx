import { Topic } from "@/lib/Models/Entities/Topic";
import React from "react";

export default function useTopics() {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState<Topic[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handler = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/blog/topics?search=${search}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()) as {
          data: Topic[];
          meta: {
            pagination: {
              page: number;
              pageSize: number;
              pageCount: number;
              total: number;
            };
          };
        };
        setResults(data?.data || []);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 500); // debounce delay in milliseconds

    return () => clearTimeout(handler);
  }, [search]);

  return { results, loading, error, search, setSearch };
}
