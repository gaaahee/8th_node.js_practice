export const bodyToReview = (body) => ({
  userId: body.userId,
  rating: body.rating,
  comment: body.comment,
  imageUrl: body.imageUrl || null
});

export const responseFromReview = (review) => ({
  id: review.id,
  shopId: review.shop_id,
  userId: review.user_id,
  rating: review.rating,
  comment: review.comment,
  imageUrl: review.image_url,
  createdAt: review.created_at
});

export const responseMyReviews = (reviews) => {
  if (!reviews) return { reviews: [], next_cursor: null }; // reviews가 null이나 undefined일 경우 빈 배열과 null 반환

  return {
    reviews: reviews.map(review => ({
      review_id: review.id,
      shop_id: review.shop.id,
      rating: review.rating,
      comment: review.comment,
      created_at: review.created_at,
    })),
    next_cursor: reviews.length === 5 ? reviews[reviews.length - 1].id : null,
  };
};