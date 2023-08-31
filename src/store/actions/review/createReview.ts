import { createReviewApi } from 'store/api/reviews';
import {
  CREATE_REVIEW_FAILURE,
  CREATE_REVIEW_SUCCESS
} from 'store/constants/reviewConstants';
import { CREATED } from 'store/constants/statusCodes';

import { IReview } from 'types/Review';

const success = (review: IReview) => ({
  type: CREATE_REVIEW_SUCCESS,
  review,
});

const failure = (error: any) => ({
  type: CREATE_REVIEW_FAILURE,
  error,
});

export const createReview = (
  agentId: any,
  review: IReview, 
  setLoader: any, 
  setShowReviewModal: any,
  toast: any
  ) => (dispatch: any) => {
  createReviewApi(agentId, review)
    .then((response) => {
      const { data } = response;
      if (response.status === CREATED) {
        dispatch(success(data.review));
        toast.success(data.message);
      } else {
        dispatch(failure(response));
        toast.error(data.error)
      }
    })
    .catch((err) => {
      dispatch(failure(err));
    }).finally(() => {
      setLoader(false);
      setShowReviewModal(false);
    });
};
