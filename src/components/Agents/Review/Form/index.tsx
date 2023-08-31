import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IReview, ReviewFormProps } from 'types/Review';
import AgentInfo from 'components/Agents/Details';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { createReview } from 'store/actions/review/createReview';
import { toast } from 'react-toastify';

const ReviewForm: React.FC<ReviewFormProps> = ({
  agent,
  setLoader,
  setShowReviewModal,
}) => {
  const initialValues = {
    rating: 0.0,
    comment: '',
  };

  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = (values: any) => {
    if (values.comment && values.rating) {
      setLoader(true);
      const rating = values.rating || 0;
      const payload: IReview = {
        rating: parseFloat(rating.toString()),
        comment: values.comment,
      };
      dispatch(createReview(
        agent.id,
        payload,
        setLoader,
        setShowReviewModal,
        toast)
      );
    }
  };

  const validationSchema = Yup.object().shape({
    rating: Yup.number().required('Rating is required'),
    comment: Yup.string().required('Comment is required'),
  });

  const validateRating = (value: any) =>{
      let error;
      if (!value || value === 0) {
          error = 'Required';
      }
      return error;
  }
  return (
    <div className='container'>
      <div className='row-container'>
        <AgentInfo agent={agent} title='Review Form'/>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, handleChange }) => (
            <Form>
              <div className='mb-3'>
                <label htmlFor='rating' className='form-label'>
                  Rating
                </label>
                <Field name="rating" id="rating" validate={validateRating}>
                  {( field: any ) => (
                    <div>
                      <Stack spacing={1}>
                        <Rating
                          name="rating"
                          defaultValue={0}
                          precision={0.5}
                          value={parseFloat(values.rating.toString())}
                          onChange={handleChange}
                          />
                      </Stack>
                    </div>
                    )}
                </Field>
                <ErrorMessage
                  name='rating'
                  component='div'
                  className='error-message'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='comment' className='form-label'>
                  Comment
                </label>
                <Field
                  id='comment'
                  name='comment'
                  as='textarea'
                  className='form-control'
                />
                <ErrorMessage
                  name='comment'
                  component='div'
                  className='error-message'
                />
              </div>

              <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ReviewForm;
