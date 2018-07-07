import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
export default {
    /**
     * 对ajax请求的封装
     */
    ajax(obj) {
        return new Promise((resolve, reject) => {
            axios({
                method: obj.method || 'GET',
                url: obj.method === 'GET' ? obj.url + '?' + qs.stringify(obj.data) : obj.url,
                data: obj.data,
                transformRequest: [
                    function(data) {
                        // Do whatever you want to transform the data
                        return qs.stringify(data);
                        // return data
                    },
                ],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then(res => {
                if (res.data.code === 1003) {
                    window.location.href =
                        window.location.origin +
                        '/#/login?redirect=' +
                        encodeURIComponent(window.location.href);
                    return;
                }
                if (res.data.code === 1000) {
                    resolve(res.data);
                } else {
                    Message.error(res.data.desc);
                    resolve(res.data);
                }
            });
        });
    },
    /**
     * 基本方法的封装
     */
    trim: function(str) {
        return String(str).replace(/^\s*|\s*$/g, '');
    },
    isEmpty: function(str) {
        return this.trim(str) === '';
    },
    isPassword: function(str) {
        return /^[a-zA-Z0-9]{6,16}$/.test(str);
    },
    isEmail: function(str) {
        return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(str);
    },
    isMobile: function(str) {
        return /^((13[0-9])|(1[478][0-9])|(15[^4\D]))\d{8}$/.test(str);
    },
    isHKMobile: function(str) {
        return /^[0-9]{8}$/.test(str);
    },
    isCode: function(str) {
        return /^[0-9]{6}$/.test(str);
    },
    isDate: function(str) {
        // 匹配 YYYY-MM-DD 或 YYYY/MM/DD
        return /^(\d{4})(\-|\/)(\d{0,2})(\-|\/)(\d{0,2})$/.test(str);
    },
};