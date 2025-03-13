import AuthService from "./AuthService";

// fetch all reviews
export const fetchAllReviews = async () => {
  try {
    const response = await AuthService.get("/reviews");
    (response) => response.json;
    return response.data;
  } catch (error) {}
};

// fetch a single review by id
export const fetchReview = async (id) => {
  const response = await AuthService.get(`/reviews/${id}`);
  return response.data;
};

// create a new review (available only to admin)
export const createReview = async (reviewData) => {
  const response = await AuthService.post("/reviews", reviewData);
  return response.data;
};

// update an existing service (available only to admin)
export const updateReview = async (id, reviewData) => {
  const response = await AuthService.put(`/reviews/${id}`, reviewData);
  return response.data;
};

// delete an existing service (available only to admin)
export const deleteReview = async (id) => {
  await AuthService.delete(`/reviews/${id}`);
};
