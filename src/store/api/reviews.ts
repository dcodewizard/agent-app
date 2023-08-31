import { IReview } from 'types/Review';
import { get, post } from '../axios';

const endpointURL = process.env.REACT_APP_BASE_URL;

export function createReviewApi(agentId: number, body: IReview) {
  return post(`${endpointURL}/rate-agent/${agentId}`, body);
}

export function listReviewsApi(page: number) {
  return get(`${endpointURL}/reviews?page=${page}`);
}
