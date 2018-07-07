export default {
    toDate(value) {
        var date = new Date(value);
        var Y = date.getFullYear(),
            m = (date.getMonth() + 1).toString().padStart(2, '0'),
            d = date
            .getDate()
            .toString()
            .padStart(2, '0'),
            H = date
            .getHours()
            .toString()
            .padStart(2, '0'),
            i = date
            .getMinutes()
            .toString()
            .padStart(2, '0'),
            s = date
            .getSeconds()
            .toString()
            .padStart(2, '0');
        var t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
        return t;
    },
};