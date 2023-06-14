import { Button, Grid, Box } from "@mui/material";
/* import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; */
import { observer } from "mobx-react-lite";
import MyText from "../../content/myText";
import { Filter } from "../../../interfaces/filter";
import { cutText } from "../../../functions/cutText";
import { toJS } from "mobx";

interface DropDownButtonProps {
  name: string;
  filters?: Filter[];
  isOpen: boolean;
  onClick: any;
  isTransparent?: boolean;
  isUnderTextNeed?: boolean;
}

const DropDownButton = observer(
  ({
    name,
    filters,
    isOpen,
    onClick,
    isTransparent = false,
    isUnderTextNeed = true,
  }: DropDownButtonProps) => {
    let filterString;
    if (Array.isArray(filters)) {
      filterString = filters?.map((e) => e.name).join(", ");
    }
    let cutted;
    if (filterString) {
      cutted = cutText(filterString, 14, false);
    }

    return (
      <Box
        id={name}
        onClick={onClick}
        sx={{
          height: "56px",
          pl: "1rem",
          width: "14.18rem",
          textTransform: "capitalize",
          backgroundColor: isTransparent ? "transparent" : "#312b45",
          display: "flex",
          alignItems: "center",

          "@media (max-width:876px)": {
            width: "100%",
            height: "6rem",
          },
        }}
      >
        <Grid
          container
          sx={{ height: cutted ? "unset" : "100%", alignItems: "center" }}
        >
          <Grid item xs={10}>
            <Grid container direction="column" justifyContent="center">
              <Grid item>
                <MyText color="#fff" text={name} size="16px" align="left" />
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    "@media (max-width:927px)": {
                      mt: "1rem",
                    },
                  }}
                >
                  {isUnderTextNeed ? (
                    <MyText text={cutted} size="16px" align="left" />
                  ) : null}
                </Box>
              </Grid>
            </Grid>
          </Grid>
{/*           <Grid item xs={2}>
            {isOpen ? (
              <ExpandLessIcon fontSize="large" sx={{ color: "#fff" }} />
            ) : (
              <ExpandMoreIcon fontSize="large" sx={{ color: "#fff" }} />
            )}
          </Grid> */}
        </Grid>
      </Box>
    );
  }
);

export default DropDownButton;
