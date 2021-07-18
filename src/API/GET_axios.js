import axios from 'axios';

// const ERR_OK = 0;

// 函数柯里化
// 我们可以先固化这个url
export function Getaxios(url) {
    return function (params) {
        return axios.get(url, { params: params })
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    }

}