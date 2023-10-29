import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { ListItem, ListItemText, List, ListItemIcon, createStyles, makeStyles, Theme } from '@material-ui/core'
import BulletIcon from '@material-ui/icons/FiberManualRecord'
import { useSelector } from 'react-redux'

import DateRange from './DateRange'
import SectionHeading from './SectionHeading'
import { RootState } from '../store'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smallIcon: { fontSize: '0.75rem', color: theme.palette.common.black },
    noPadding: { padding: 0 }
  })
)

const Experiences = () => {
  const classes = useStyles()
  const { experiences } = useSelector((state: RootState) => state.app.resume)

  return (
    <>
      <SectionHeading>Experience</SectionHeading>
      {experiences.map(({ title, company, dateRange, location, aboutCompany, summary }) => (
        <Grid container spacing={0} key={title}>
          <Grid item xs={12}>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='subtitle2' style={{ fontWeight: 'bold' }} color='primary'>
              {company}
            </Typography>
          </Grid>
          <Grid item xs={12} container alignItems='center'>
            <DateRange range={dateRange} location={location} />
          </Grid>
          {aboutCompany && (
            <Grid item>
              <Typography variant='body1' gutterBottom>
                {aboutCompany}
              </Typography>
            </Grid>
          )}
          {summary && (
            <Grid item>
              <Typography variant='subtitle2'>{summary.title}</Typography>
              <List dense>
                {summary.actions.map((action: string, i: number) => (
                  <ListItem className={classes.noPadding} key={i}>
                    <ListItemIcon style={{ minWidth: '1.2rem' }}>
                      <BulletIcon color='disabled' className={classes.smallIcon} />
                    </ListItemIcon>
                    <ListItemText primary={action} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          )}
        </Grid>
      ))}
    </>
  )
}

export default Experiences
