import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '../../components/buttons/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
    margin: 40,
    minHeight: 420
  },
  minHeight: {
    minHeight: 75
  }
});

type Card = {
  id: string,
  title: string,
  price: string,
  btnText: string,
  period: string,
  text: string,
  bestValue: boolean
}

export default function MediaCard(props: { card: Card }) {
  const classes = useStyles();
  const { card } = props;

  return (
    <Card className={classes.card}>

        { card.bestValue? (
        <>
          <div className="best-value">
            <Typography gutterBottom variant="overline" component="h5">
                Best Value
            </Typography>
          </div>
        </>
        ) : null }
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            {card.price}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            {card.period}
          </Typography>
          <br/>
          <Divider variant="middle" />
          <br/>

          { card.bestValue? (
            <Button color="primary" variant="outlined" text={card.btnText} />
          ) : (
            <Button color="primary" variant="outlined" text={card.btnText} />
          )}
          
          <br/>
          <Divider variant="middle" />
          <br/>
          <Typography className={classes.minHeight} variant="body2" color="textSecondary" component="p">
            {card.text}
          </Typography>
        </CardContent>
    </Card>
  );
}