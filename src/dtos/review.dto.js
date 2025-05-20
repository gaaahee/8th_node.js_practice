// 리뷰 생성 요청 DTO
export const bodyToReview = (body) => ({
  userId: body.userId,
  rating: body.rating,
  comment: body.comment,
  imageUrl: body.imageUrl || null
});

// 리뷰 생성 응답 DTO
export const responseFromReview = (review) => ({
    review_id: review.id,
    shop_id: review.shop.id,
    rating: review.rating,
    comment: review.comment, 
    created_at: review.created_at
});

// 리뷰 생성 응답 DTO
export const responseMyReviews = (reviews) => {
  if (!reviews) return { reviews: [], next_cursor: null };

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

// 상점 리뷰 목록 조회를 위한 DTO
export const responseShopReviewsList = (reviews, takeLimit = 5) => {
  if (!reviews || !Array.isArray(reviews)) {
    return { data: [], pagination: { cursor: null } };
  }

  // 다음 페이지 커서 계산
  const hasMorePotentialItems = reviews.length === takeLimit;
  const nextCursor = hasMorePotentialItems && reviews.length > 0 ? reviews[reviews.length - 1].id : null;

  return {
    data: reviews.map(review => ({
      userId: review.user_id,
      rating: review.rating,
      comment: review.comment,
      imageUrl: review.image_url,
    })),
    pagination: {
      cursor: nextCursor
    }
  };
};