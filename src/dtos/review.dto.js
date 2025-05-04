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