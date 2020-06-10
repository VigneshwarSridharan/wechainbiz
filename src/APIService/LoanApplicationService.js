import request from './request';

export default {
    getList: () => request.get('/borrower')
}