import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';

import { useTranslation } from 'react-i18next';
import { withLanguage } from '@/utils/i18n';
import _get from 'lodash.get';

const styles = () => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  avatar: {
    backgroundColor: red[500],
  },
});
function ItemCard(props) {
  const { classes, item, locale, ssr } = props;
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);
  // since ssr does not have useEffect.
  // a little bit hacky but welcome for a better solution
  if (ssr && i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  const title = withLanguage(i18n, _get(item, 'node', {}), 'title');
  const detail = withLanguage(i18n, _get(item, 'node', {}), 'detail');

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
        title={`${title}`}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={`${item.node.productImage.publicURL}`}
        title={`${title}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${detail}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${item.node.id}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(ItemCard);
