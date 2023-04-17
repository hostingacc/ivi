import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function () {
    const { query } = useRouter()

    return (
        <Typography variant="h1" sx={{ color: "white" }}>{query.id}</Typography>
    )
}