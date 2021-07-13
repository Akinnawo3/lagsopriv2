/**
 * Helpers Functions
 */
import moment from 'moment';

/**
 * Function to convert hex to rgba
 */
export function hexToRgbA(hex, alpha) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    throw new Error('Bad Hex');
}

/**
 * Text Truncate
 */
export function textTruncate(str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}

/**
 * Get Date
 */
export function getTheDate(timestamp, format) {
    let time = timestamp * 1000;
    let formatDate = format ? format : 'MM-DD-YYYY';
    return moment(time).format(formatDate);
}

/**
 * Convert Date To Timestamp
*/
export function convertDateToTimeStamp(date, format) {
    let formatDate = format ? format : 'YYYY-MM-DD';
    return moment(date, formatDate).unix();
}

/**
 * Function to return current app layout
 */
export function getAppLayout(url) {
    let location = url.pathname;
    let path = location.split('/');
    return path[1];
}

export function getStatus(status) {
    if(status === 0) {
        return  'Pending'
    }else if(status === 1) {
        return 'Accepted'
    } else if (status === 2){
        return 'Approved'
    }else {
        return 'Inactive'
    }
}

export function getStatusColor(status) {
    if(status === 0) {
        return  'warning'
    }else if(status === 1) {
        return 'primary'
    } else if (status === 2){
        return 'success'
    }else {
        return 'danger'
    }
}


let timeZone = (date) => {
    var dbDate = new Date(date);
    var timeOffsetInMS = dbDate.getTimezoneOffset() * 60000;
    dbDate.setTime(dbDate.getTime() - timeOffsetInMS);
    return date;
};

let MonthDays = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];
export const calculatePostDate = (date) => {
    if (!date) {
        return;
    }
    let DateNow = new Date(); // current date
    let postedDate = new Date(timeZone(date.replace(' ', 'T'))); // date posted
    let postedTime =
        date.indexOf('T') > -1 ? date.substr(date.indexOf('T') + 1, 5) : ''; //get the time
    let postedMnth = MonthDays[postedDate.getMonth()]; //get the month
    let postedYear = postedDate.getFullYear(); //get the year
    let postedDay = postedDate.getDate(); //get the date of the month
    let rDate = null;
    let sDate = (DateNow - postedDate) / 1000; //get the seconds of in the date
    let outputDate = null;
    if (sDate >= 86400) {
        // if days
        rDate = parseInt(Math.round(sDate / 86400));
        outputDate =
            rDate === 1
                ? 'Yesterday ' + postedTime
                : `${postedMnth} ${postedDay}, ${postedYear} ${postedTime}`;
    } else if (sDate >= 3600) {
        //if hours
        rDate = parseInt(Math.round(sDate / 3600));
        outputDate = rDate + ' hr ago';
    } else if (sDate >= 60) {
        //if minuntes
        rDate = parseInt(Math.round(sDate / 60));
        outputDate = rDate + ' min ago';
    } else {
        //if seconds
        rDate = Math.ceil(sDate);
        outputDate = sDate < 1 ? '1 sec ago' : rDate + ' sec ago';
    }
    return outputDate;
};

export const formatTime = (timestamp) => {
    if(!timestamp && timestamp !== 0) {
        return
    }
    var hours = Math.floor(timestamp / 60 / 60);
    var minutes = Math.floor(timestamp / 60) - (hours * 60);
    var seconds = timestamp % 60;
    var formatted = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

    return formatted
}

export const getFirstDayOfMonth = () => {
    const date = new Date()
    let firstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    const month = firstDay.getMonth().toString().length === 1 ? '0' + firstDay.getMonth() : firstDay.getMonth()
    const day = firstDay.getDate().toString().length === 1 ? '0' + firstDay.getDate() : firstDay.getDate()
    const year = firstDay.getFullYear()
    return `${year}-${month}-${day}`
}

export const getLastDayOfMonth = () => {
    const date = new Date()
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);
    const month = lastDay.getMonth().toString().length === 1 ? '0' + lastDay.getMonth() : lastDay.getMonth()
    const day = lastDay.getDate().toString().length === 1 ? '0' + lastDay.getDate() : lastDay.getDate()
    const year = lastDay.getFullYear()
    return `${year}-${month}-${day}`
}

export const getTodayDate = () => {
    const date = new Date()
    const month = date.getMonth().toString().length === 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    const day = date.getDate().toString().length === 1 ? '0' + date.getDate() : date.getDate()
    const year = date.getFullYear()
    return `${year}-${month}-${day}`
}

