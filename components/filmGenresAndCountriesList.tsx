import { Stack, Box  } from "@mui/material";

import MyLink from "./navigation/myLink";

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
      <Stack direction="row" spacing={1} alignItems='center'>
        {elements.map((e: any, index: number) => (
          <>
            <MyLink key={e.id} text={e.nameRu.charAt(0).toUpperCase() + e.nameRu.slice(1)} link="path" fontSize={'15px'} fontWeight={400}/>
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
          </>
        ))}
      </Stack>
    );
  };
  
  export default GenresAndCountriesList;