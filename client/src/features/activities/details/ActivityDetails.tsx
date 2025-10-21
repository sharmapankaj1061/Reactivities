import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activitiy : Activity
    cancelSelectActivity: () => void
    openForm:(id: string) => void
}

export default function ActivityDetails({activitiy,cancelSelectActivity, openForm}: Props) {
  return (
    <Card sx={{borderRadius: 3 }}>
        <CardMedia
            component= 'img'
            src= {`/images/categoryImages/${activitiy.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5">{activitiy.title}</Typography>
            <Typography variant="subtitle1" fontWeight='light'>{activitiy.date}</Typography>
            <Typography variant="body1">{activitiy.description}</Typography>
        </CardContent>
        <CardActions>
            <Button color="primary" onClick={()=> openForm(activitiy.id)}>Edit</Button>
            <Button color="inherit" onClick={cancelSelectActivity}>Cancel</Button>
        </CardActions>
        
    </Card>
  )
}
