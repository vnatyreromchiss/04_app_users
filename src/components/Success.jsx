import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>A request was sent to all {count} users.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Come back</button>
    </div>
  );
};
