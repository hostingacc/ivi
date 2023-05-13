import { Stack, Box  } from "@mui/material";
import React from "react";

import MyLink from "../navigation/myLink";

interface GenresAndCountriesListProps{
    genres: string[];
    countries:string[];
}

const GenresAndCountriesList = ({
    genres,
    countries,
  }:GenresAndCountriesListProps) => {
    const elements = [...genres, ...countries];
  
    return (
      <Stack direction="row" sx={{ justifyContent: "center", mt:'0.5rem' }} spacing={1} alignItems='center'>
        {elements.map((e: any, index: number) => (
          <React.Fragment key={e.nameRu}>
            <MyLink color="rgba(255,255,255,.72)" content={e.nameRu.charAt(0).toUpperCase() + e.nameRu.slice(1)} link={`/movies/${e.nameRu}`} fontSize={'15px'} fontWeight={400}/>
            {index < elements.length - 1 && (
                <Box
                sx={{
                  width: '1px',
                  height: '1px',
                  backgroundColor: 'rgba(255,255,255,.48)',
                  alignSelf: 'center',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Stack>
    );
  };
  
  export default GenresAndCountriesList;