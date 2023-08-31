import { Dispatch, SetStateAction } from "react";
import { IAgent } from "./Agent";

export interface IReview {
    id?: number;
    rating: number;
    comment: string;
  }

export interface ReviewFormProps {
  agent: IAgent;
  setShowReviewModal: Dispatch<SetStateAction<boolean>>;
  setLoader: Dispatch<SetStateAction<boolean>>;
}
