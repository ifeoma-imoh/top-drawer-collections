import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import useStyles from '../../utils/styles';

function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Bact to products</Link>
        </NextLink>
      </div>
    </Layout>
  );
}

export default ProductScreen;
