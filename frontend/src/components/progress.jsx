import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}))

function ProgressBar() {
  const classes = useStyles()
  const [completed, setCompleted] = React.useState(0)

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={completed} />
    </div>
  )
}

export default ProgressBar
