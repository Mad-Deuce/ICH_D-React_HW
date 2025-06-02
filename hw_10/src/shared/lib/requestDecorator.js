export const requestDecorator = (request) => {
    return async (payload) => {
        try {
            const { data } = await request(payload);
            return { data: data[0], error: null };
        } catch (error) {
            return { data: null, error: error };
        }
    }
}