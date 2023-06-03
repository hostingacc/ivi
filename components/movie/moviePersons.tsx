import { Box, Stack, Button} from "@mui/material";
import Link from "next/link";

import Image from "next/image";
import MyText from "../content/myText";
import MyTitle from "../content/myTitle";

import { observer } from "mobx-react-lite";
import { modalStore } from "@/store/modalStore";
import { Person } from "../interfaces/persons";


interface moviePersonsProps {
    persons: Person[];
    nameRu: string;
    nameEn: string;
    year: number;
    countries: string[];
    comments: Comment[];
    id: number;
    width?:number;
}

const moviePersons = observer(({persons, width}:moviePersonsProps) => {

    const openModal = () => {
        modalStore.showCreators()
        modalStore.openModal();
    }

    const personsToDisplay = width && width <= 1231 ? Math.max(1, 10 - Math.floor((1331 - width) / 100)) : 10;

    console.log(width)

    return (
        <Box>
            <MyTitle text={"Актёры и создатели"} isButton={true} onClick={openModal}/>
            <Stack direction='row' 
            sx={{

                mt:'2rem',
                mb:'2rem',
                flexDirection: 'row', flexWrap: 'wrap', justifyContent: personsToDisplay < 4 ? 'flex-start' : 'space-around'
            }}>
            {persons?.slice(0, personsToDisplay).map((person) => {
                return(
                    <Box key={person.id} sx={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                        <Link
                            href={{
                            pathname: `/personPage/${person.id}`,
                            query: {
                            id:person.id,
                            },
                            }}>
                            <Box sx={{width:'88px', height:'88px', borderRadius:'50%', overflow:'hidden' ,display:'flex', alignItems:'center'}}>
                                <Image 
                                    className="coverImage"
                                    width={88}
                                    height={88}
                                    alt="фото актера"
                                    src={person.posterUrl}
                                    >
                                    </Image>
                            </Box>
                            <Box sx={{width:'77px'}}>
                                <MyText  text={person.nameRu} align="left" color='rgba(255,255,255,0.89)'/>
                            </Box>
                        </Link>
                    </Box>
            )
        })}
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Button sx={{width:'88px', height:'88px', borderRadius:'50%', backgroundColor:'#1f1b2e', color:'#fff', textTransform:'uppercase'}} onClick={openModal}>Еще</Button>
        </Box>

        
   
        </Stack>

        </Box>
    );
});

export default moviePersons;