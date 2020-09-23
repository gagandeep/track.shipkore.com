import axios from 'axios';

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
    baseURL: 'https://graph.innerkore.com/v1/', // it's not recommended to have this info here.
});

// implement a method to execute all the request from here.
const apiRequest = (url, request) => {
    const headers = {
        authorization: '',
    };
    //using the axios instance to perform the request that received from each http method
    return axiosAPI({
        method: 'POST',
        url: url,
        data: request,
        headers: headers,
    });
};

export const TrackRequest = async (provider, waybill) => {

    let request = {
        query: `mutation Track($provider: String!, $waybill: String!) {
            track(provider: $provider, waybill: $waybill) {
              address
              checkpoints
              city
              destination_country_name
              origin_country_name
              origin_courier_name
              product
              provider
              status
              scheduled_delivery_date
              waybill
              shipment_type
              id
              status
            }
          }`,
        variables: { provider: provider, waybill: waybill },
        operationName: 'Track',
    };
    try {
        let resp = await apiRequest('graphql', request);
        return { result: resp.data.data.track };
    } catch (error) {
        console.log(error);
    }
};

export const GetAllProviders = async () => {
    let request = {
        query: `query AllProviders {
                    bareship_provider {
                        logo
                        name
                        slug
                    }
                }
                `,
        operationName: 'AllProviders',
    };
    try {
        let resp = await apiRequest('graphql', request);
        return resp.data.data.bareship_provider;
    } catch (error) {
        console.log(error);
    }
};
