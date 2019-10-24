import coins from './coin_sample_data.json';
export default {
    
    defaults: {baseURL: ""},
    create: jest.fn(() => ({
            interceptors: {
                response: { use: jest.fn() },
                request: { use: jest.fn() }
            },
            get: jest.fn(() => Promise.resolve({ data: coins }))
        })),
};