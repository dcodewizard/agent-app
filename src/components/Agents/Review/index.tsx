import React from 'react';
import { IAgent } from 'types/Agent';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography, Paper } from '@mui/material';

const Review: React.FC<{ agent: IAgent }> = ({ agent }) => {
  return (
    <div className='row review-row text-center d-flex align-items-stretch'>
      {agent.Reviews && agent.Reviews.length > 0 && (
        <>
          <h3>Reviews</h3>
          {agent.Reviews.map((review, index) => (
            <div className='card testimonial-card' key={index}>
              <div className='card-up'></div>
              <div className='avatar bg-white'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp'
                  className='rounded-circle shadow-1-strong'
                  width='100'
                  height='100'
                  alt='Avatar'
                />
              </div>
              <div className='card-body'>
                <Paper>
                  <Typography variant='h5' component='div'>
                    {review.comment}
                  </Typography>
                  <div className='list-unstyled d-flex justify-content-center text-warning mb-0'>
                    <Stack spacing={1}>
                      <Rating
                        name='rating'
                        precision={0.5}
                        value={parseFloat(review.rating.toString())}
                        readOnly
                      />
                    </Stack>
                  </div>
                </Paper>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Review;
