import { Grid2, Typography} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDashboard() {

   

    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7} >
               <ActivityList/ >
            </Grid2>
            <Grid2 size={5} >
              Activity filters go here
            </Grid2>
        </Grid2>
    )
}
