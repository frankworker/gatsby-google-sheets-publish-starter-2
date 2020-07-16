import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/layout';
import SEO from '@/components/seo';

import ItemCard from '@/components/ItemCard';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    margin: 10,
    width: 70,
    height: 70,
  },
  ListItemParentDiv: {
    display: 'flex',
  },
  flexBoxParentDiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    '&::after': {
      content: '',
      flex: 'auto',
    },
  },
});

const ItemPage = props => {
  const { data, classes } = props;

  const item = data.item;

  return (
    <>
      <SEO title="item" />
      <div className={classes.root}>
        <div className={classes.flexBoxParentDiv}>
          <ItemCard key={item.id} item={item} />
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(ItemPage);

export const ItemPageQuery = graphql`
  query ItemDetails($itemId: String!) {
    item(id: { eq: $itemId }) {
      id
      title_en
      title_zh
      description_en
      description_zh
      detail_en
      detail_zh
      date
      productImage {
        publicURL
      }
    }
  }
`;
