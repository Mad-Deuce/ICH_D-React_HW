import { useState, useEffect } from "react";

export default function PostsPage(request) {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await request();
      setLoading(false);
      if (data) return setState(data);
      setError(error);
    };

    fetchData();
  }, []);

  return { state, setState, loading, setLoading, error, setError };
}
