export const bodyToShop = (body) => ({
  name: body.name,
  address: body.address,
});

export const responseFromReviews = (reviews) => {
  return {
    data: reviews,
    pagination: {
      cursor: reviews.length ? reviews[reviews.length - 1].id : null,
    },
  };
};