import { Stack, Box  } from "@mui/material";
import React from "react";
import MyLink from "../navigation/myLink";
import { GenresAndCountries } from "../interfaces/genresAndCountries";
import MyText from "../content/myText";
import { capitalizeFirstLetter } from "@/functions/capitalizeFirstLetter";

interface GenresAndCountriesListProps {
  genres: GenresAndCountries[];
  countries: GenresAndCountries[];
  showOnlyFirst?: boolean;
}

const GenresAndCountriesList = ({
  genres,
  countries,
  showOnlyFirst = false,
}: GenresAndCountriesListProps) => {
  const elements = showOnlyFirst ? [genres[0], countries[0]] : [...genres, ...countries];

  return (
    <Stack
      direction="row"
      flexWrap='wrap'
      sx={{ 
        justifyContent: showOnlyFirst ? "flex-start" : "center",
        mt: showOnlyFirst ? 0 : "0.5rem",
      }}
      spacing={showOnlyFirst ? 0 : 1}
      alignItems="center"
    >
      {elements.map((e: GenresAndCountries, index: number) => (
        <React.Fragment key={e.nameRu}>
          {showOnlyFirst ? (
          <MyText
            color="rgba(255,255,255,0.85)"
            text={capitalizeFirstLetter(e.nameRu)}
            size={'16px'}
          />
          ) : (
          <MyLink
            color="rgba(255,255,255,.72)"
            content={capitalizeFirstLetter(e.nameRu)}
            link={`/movies/${e.nameRu}`}
            fontSize="16px"
            fontWeight={400}
            
          />
          )}
          {index < elements.length - 1 && (
          <>
          {showOnlyFirst ? (
          <MyText color="rgba(255,255,255,0.85)" text={','}   size={'16px'}/>
          ) : (
          <Box
            sx={{
            width: "1px",
            height: "1px",
            backgroundColor: "rgba(255,255,255,.48)",
            alignSelf: "center",
          }}
          />
          )}
          </>
        )}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default GenresAndCountriesList;