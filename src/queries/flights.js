import { toast } from 'react-toastify';

import rethinkAPI from '~/services/rethinkAPI';

export const searchFlights = async (flightInfo) => {
  try {
    const response = await rethinkAPI.get('/search', {
      params: {
        ...flightInfo,
      },
    });
    return response.data.requestedFlightSegmentList[0].flightList;
  } catch (err) {
    toast.error('Não foi possível encontrar passagens!');
  }
};

export const checkout = async (flightInfo) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));

    if (token) {
      await rethinkAPI.post(
        '/checkout',
        {
          ...flightInfo,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      toast.success('Compra realizada com sucesso!');
    }
  } catch (err) {
    toast.error('Não foi possível realizar a compra!');
  }
};

export const getMyFlights = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));

    if (token) {
      const response = await rethinkAPI.get('/my-flights', {
        headers: {
          Authorization: `${token}`,
        },
      });
      return response.data.myFlights;
    }
  } catch (err) {
    toast.error('Não foi possível realizar a busca dos seus vôos!');
  }
};
