import { Grid, makeStyles } from '@material-ui/core'
import StatusCard from 'components/StatusCard/StatusCard'
import React from 'react'
import {useUsers, useResources} from 'hooks'

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
  });

const StatusCards = () => {
    const classes = useStyles()
    const {data :users} = useUsers()
    const {data: resources} = useResources()
    const userCount = users?.total
    const resourcesCount = resources?.total
    return (
        <Grid container spacing={2} className={classes.root}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <StatusCard color="#263806" count={userCount} type="Users"/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <StatusCard color="#538b48" count={resourcesCount} type="Resources"/>
                </Grid>
        </Grid>
    )
}

export default StatusCards
