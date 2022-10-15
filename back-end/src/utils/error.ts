const NotFound = (message: string) => { throw { status: 404, message } };
const Bad = (message: string) => { throw { status: 400, message } };
const Conflict = (message: string) => { throw { status: 409, message } };
const Unauthorized = (message: string) => { throw { status: 401, message } };

const errors = {

    NotFound,
    Bad,
    Conflict,
    Unauthorized
};

export default errors;