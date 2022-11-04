import axios from 'axios';

import config from '@/config';

/**
 * Update Current User Socket ID
 * @returns
 */
export const updateUserSocketId = async (socketId: string) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error(
      'Unauthorized called to update accessToken, please login first!'
    );
  }

  await axios.patch(
    `${config.endpoint.banhmi}/api/users/socketId`,
    {
      socketId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};