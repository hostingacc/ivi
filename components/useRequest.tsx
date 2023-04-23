import { useEffect, useState } from "react";
import { FilmProps } from "@/pages/filmCard/[id]";


const useRequest = (url:string) => {
  const [data, setData] = useState<FilmProps | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const result = await response.json();
  
          if (response.ok) {
  
            setData(result);
          } else {

          }
        } catch (err) {
        }
      };
  
      fetchData();
    }, []);
  
    return data;
  };
  
  export default useRequest;