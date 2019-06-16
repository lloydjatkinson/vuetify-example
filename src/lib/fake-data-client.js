import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const getComments = async (maximumComments) => {
    try {
        const comments = (await axios
            .get(`${baseUrl}/comments`))
            .data
            .slice(0, maximumComments);

        return {
            success: true,
            comments,
        };
    } catch (error) {
        debugger;
        return {
            success: false,
            error,
        };
    }
};

const getTodos = async (maximumComments) => {
    try {
        const comments = await axios
            .get(`${baseUrl}/todos`)
            .data
            .slice(maximumComments);

        return {
            success: true,
            comments,
        };
    } catch (error) {
        return {
            success: false,
            error,
        };
    }
};

export {
    getComments,
    getTodos,
};