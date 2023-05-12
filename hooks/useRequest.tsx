import { useEffect, useState } from "react";
import { FilmProps } from "@/pages/filmPage/[id]";


const useRequest = (url: string | undefined, method: string = 'GET', body: any = null) => {
  const [data, setData] = useState<any | null>(null);


  useEffect(() => {
    if (!url) {
      return;
    }


    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: body ? JSON.stringify(body) : null
        });
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          // handle error
        }
      } catch (err) {
        console.log(err)
        // handle error
      }
    };

    fetchData();
  }, [url, method, body]);

  return data;
};

export default useRequest;