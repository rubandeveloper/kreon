const { v4: uuidv4 } = require('uuid')
const XLSX = require('xlsx')
const XlsxPopulate = require('xlsx-populate/browser/xlsx-populate')

let ratio;
let utils = {

    aerialHeight: 20,
    unitDirection: {
        MAXDISTANCE: 500, // in meters
        MINDISTANCE: 10,
        MODDISTANCE: 50
    },
    numberOnly(value) {

        return value.replace(/[^0-9.]/g, '');
    },

    getHeader(method, isdefault = true) {

        if (method != 'POST') return {}

        let header = {}

        if (isdefault) {
            header['Content-Type'] = 'application/json'
            header['Accept'] = 'application/json'
        } else if (isdefault == 'formdata') {
            header['Content-Type'] = 'multipart/form-data';
        }

        let x_access_token = localStorage.getItem('x-access-token')

        if (x_access_token == undefined || x_access_token == "") return false

        header['x-access-token'] = x_access_token


        return header

    },
    getInnerTextFromHTML(htmlString) {
        // Create a temporary element (a div) to hold the HTML string
        var tempElement = document.createElement('div');
        tempElement.innerHTML = htmlString;

        // Extract inner text from the temporary element
        var innerText = tempElement.innerText;

        // Remove the temporary element from the document
        tempElement.remove();

        // Return the inner text
        return innerText;
    },
    urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;

    },
    lerp: (x, y, a) => x * (1 - a) + y * a,
    // Slerp: (x, y, a) => (y * math.inv(x)) ** a * x,
    clamp: (a, min = 0, max = 1) => Math.min(max, Math.max(min, a)),
    invlerp: (x, y, a) => utils.clamp((a - x) / (y - x)),

    sleep: async function (time) {

        return new Promise(resolve => setTimeout(resolve, time))

    },
    getLocalFullDate_reverse(ms) {

        if (!ms) ms = new Date().getTime()

        let data = new Date(ms)
        let yyyy = data.getFullYear();
        let mm = data.getMonth() + 1;
        let dd = data.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const D = [yyyy, mm, dd].join('-')

        return D;
    },
    getLocalFullDate(ms, seperator = '/') {

        if (!ms) ms = new Date().getTime()

        let data = new Date(ms)
        const yyyy = data.getFullYear();
        let mm = data.getMonth() + 1;
        let dd = data.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const D = dd + seperator + mm + seperator + yyyy;

        return D;
    },
    getLocalFullDateBYFormat(ms, seperator = '/', format = 'DD/MM/YYYY') {

        if (!ms) ms = new Date().getTime()

        let data = new Date(ms)
        const yyyy = data.getFullYear();
        let mm = data.getMonth() + 1;
        let dd = data.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        if (format == 'DD/MM/YYYY') return dd + seperator + mm + seperator + yyyy;
        else if (format == 'MM/DD/YYYY') return mm + seperator + dd + seperator + yyyy;
        else if (format == 'YYYY/MM/DD') return yyyy + seperator + mm + seperator + dd;
        else return dd + seperator + mm + seperator + yyyy;
    },

    getDuration(start, end, format = 'D:H:M') {
        // Calculate the time difference in milliseconds
        const timeDiff = Math.abs(end - start);

        // Calculate days, hours, and minutes
        const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));

        if (format == 'D:H:M') return `${days}D:${hours}H:${minutes}M`;
        else if (format == 'H:M') return `${hours}H:${minutes}M`;
        else if (format == 'days') return days;
        else if (format == 'hours') return hours;
        else if (format == 'minutes') return minutes;

    },
    getDateFromStartAndDaysDuration(date, durationDays, action = '+') {
        // Clone the start date to avoid modifying the original date object
        let startDate = new Date(date);
        const endDate = new Date(date);

        console.log(startDate.getDate(), durationDays, 'startDate');
        // Calculate the end date by adding the duration in days

        let duration = action == '+' ? startDate.getDate() + durationDays : startDate.getDate() - durationDays

        endDate.setDate(duration);

        return endDate;
    },
    shorternNumber(value) {
        console.log(value, 'value1');

        value = parseInt(value)

        if (value >= 10000000) return (value / 10000000).toFixed(2) + 'Cr';
        else if (value >= 100000) return (value / 100000).toFixed(2) + 'L';
        else if (value >= 1000) return (value / 1000).toFixed(2) + 'K';

        return value.toString();

    },

    getDurationFromDates(start, end, format = 'D:H:M') {

        start = new Date(start || new Date().getTime()).getTime()
        end = new Date(end || new Date().getTime()).getTime()

        const timeDiff = Math.abs(end - start);

        // Calculate days, hours, and minutes
        const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));

        if (format == 'D:H:M') return `${days}D:${hours}H:${minutes}M`;
        else if (format == 'H:M') return `${hours}H:${minutes}M`;
        else if (format == 'days') return days;
        else if (format == 'hours') return hours;
        else if (format == 'minutes') return minutes;

    },
    formateDateLabel: (ms, isDate = true, isTime = true, hideWeek = false) => {

        if (!ms) return ''

        const date = new Date(ms);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const weekday = weekdays[date.getUTCDay()]
        const day = String(date.getUTCDate()).padStart(2, '0')
        const month = months[date.getUTCMonth()]
        const year = String(date.getUTCFullYear()).slice(-2)

        let hours = date.getUTCHours()
        const minutes = String(date.getUTCMinutes()).padStart(2, '0')
        const ampm = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12 || 12

        if (isDate && isTime) return `${hideWeek ? '' : `${weekday},`} ${day} ${month} ${year} | ${hours}:${minutes} ${ampm}`
        else if (isDate) return `${hideWeek ? '' : `${weekday},`} ${day} ${month} ${year}`
        else if (isTime) return `${hours}:${minutes} ${ampm}`
    },

    getEasyDate(duration) {

        let [start, end] = [undefined, undefined]

        // "2022-11-06T10:15"

        if (duration == 'tomorrow') {

            let date_Obj = new Date()
            let yyyy = date_Obj.getFullYear();
            let mm = date_Obj.getMonth() + 1;
            let dd = date_Obj.getDate() + 1;

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            start = ([yyyy, mm, dd].join('-')) + 'T00:00'
            end = ([yyyy, mm, dd].join('-')) + 'T23:59'
        }
        else if (duration == 'today') {

            let date_Obj = new Date()
            let yyyy = date_Obj.getFullYear();
            let mm = date_Obj.getMonth() + 1;
            let dd = date_Obj.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            start = ([yyyy, mm, dd].join('-')) + 'T00:00'
            end = ([yyyy, mm, dd].join('-')) + 'T23:59'
        }
        else if (duration == 'yesterday') {

            let date_Obj = new Date()
            let yyyy = date_Obj.getFullYear();
            let mm = date_Obj.getMonth() + 1;
            let dd = date_Obj.getDate() - 1;

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            start = ([yyyy, mm, dd].join('-')) + 'T00:00'
            end = ([yyyy, mm, dd].join('-')) + 'T23:59'
        }
        else if (duration == 'week') {

            let date_Obj = new Date
            let first = date_Obj.getDate() - date_Obj.getDay();
            let last = first + 6;

            let firstday = new Date(date_Obj.setDate(first))
            let lastday = new Date(date_Obj.setDate(last))


            {
                let yyyy = firstday.getFullYear();
                let mm = firstday.getMonth() + 1;
                let dd = firstday.getDate();

                if (dd < 10) dd = '0' + dd;
                if (mm < 10) mm = '0' + mm;

                start = ([yyyy, mm, dd].join('-')) + 'T00:00'

            }
            {
                let yyyy = lastday.getFullYear();
                let mm = lastday.getMonth() + 1;
                let dd = lastday.getDate();

                if (dd < 10) dd = '0' + dd;
                if (mm < 10) mm = '0' + mm;

                end = ([yyyy, mm, dd].join('-')) + 'T23:59'

            }
        }

        return { start, end }
    },
    getCustomFullDate(formate, type) {

        let date = new Date(),
            current_year = date.getFullYear(),
            current_day = date.getDate(),
            current_month = date.getMonth();

        let stack = []

        if (formate == 'day') {

            for (let i = 0; i < current_day; i++) {

                let start = new Date(current_year, current_month, i)
                let end = new Date(current_year, current_month, i)

                start.setHours(0, 0, 0, 0);
                end.setHours(23, 59, 59, 999);

                if (type == 'office-ride') {
                    stack.push({ index: i, start, end })
                }
                else {
                    stack.push({ index: i, start: JSON.stringify(start), end: JSON.stringify(end) })
                }
            }
        }
        else if (formate == 'month') {


            for (let i = 0; i <= current_month; i++) {

                let start = new Date(current_year, i, 1)
                let end = new Date(current_year, i, 31)

                end = i == current_month ? new Date() : end;

                start.setHours(0, 0, 0, 0);
                end.setHours(23, 59, 59, 999);

                if (type == 'office-ride') {
                    stack.push({ index: i, start, end })
                }
                else {
                    stack.push({ index: i, start: JSON.stringify(start), end: JSON.stringify(end) })
                }
            }
        }
        else if (formate == 'week') {

            const weeks = [],
                firstDate = new Date(current_year, current_month, 1),
                lastDate = new Date(current_year, current_month + 1, 0),
                numDays = lastDate.getDate();

            let dayOfWeekCounter = firstDate.getDay();

            for (let date = 1; date <= numDays; date++) {

                if (date > current_day) break;

                if (dayOfWeekCounter === 0 || weeks.length === 0) {
                    weeks.push([]);
                }
                weeks[weeks.length - 1].push(date);
                dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
            }

            weeks
                .filter((w) => !!w.length)
                .map((w, i) => {


                    let start = new Date(current_year, current_month, (w[0] - 1))
                    let end = new Date(current_year, current_month, (w[w.length - 1] - 1))

                    start.setHours(0, 0, 0, 0);
                    end.setHours(23, 59, 59, 999);

                    if (type == 'office-ride') {
                        stack.push({ index: i, start, end })
                    }
                    else {
                        stack.push({ index: i, start: JSON.stringify(start), end: JSON.stringify(end) })
                    }
                });
        }

        return stack
    },

    getCurrent_Day(type) {

        let start = new Date();
        start.setHours(0, 0, 0, 0);
        let end = new Date();
        end.setHours(23, 59, 59, 999);

        if (type == 'office-ride') {
            return { start: start, end: end }
        }
        else {
            return { start: JSON.stringify(start), end: JSON.stringify(end) }
        }
    },
    getCurrentTime(format = "HH:MM AMPM", type = '12') {

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let ampm = hours >= 12 ? 'PM' : 'AM';

        if (type == '12') {
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
        }
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        if (format == "HH:MM") return `${hours}:${minutes}`;
        else if (format == "HH:MM:SS") return `${hours}:${minutes}:${seconds}`;
        else if (format == "HH:MM:SS AMPM") return `${hours}:${minutes}:${seconds} ${ampm}`;
        else if (format == "HH:MM AMPM") return `${hours}:${minutes} ${ampm}`;
    },
    getCurrent_Week(type) {

        let curr = new Date();
        let first = curr.getDate() - curr.getDay();
        let last = first + 6;
        let start = new Date(curr.setDate(first))
        let end = new Date(curr.setDate(last))

        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);

        if (type == 'office-ride') {
            return { start: start, end: end }
        }
        else {
            return { start: JSON.stringify(start), end: JSON.stringify(end) }
        }
    },
    getCurrent_Month(type) {

        let date = new Date(), y = date.getFullYear(), m = date.getMonth();
        let start = new Date(y, m, 1)
        let end = new Date(y, m + 1, 0)

        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);


        if (type == 'office-ride') {
            return { start: start, end: end }
        }
        else {
            return { start: JSON.stringify(start), end: JSON.stringify(end) }
        }
    },
    getCurrent_year(type) {

        let currentYear = new Date().getFullYear();
        let start = new Date(currentYear, 0, 1);
        let end = new Date(currentYear, 11, 31);

        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);


        if (type == 'office-ride') {
            return { start: start, end: end }
        }
        else {
            return { start: JSON.stringify(start), end: JSON.stringify(end) }
        }
    },
    synchronousLoop(data, processData, done) {

        if (data.length > 0) {

            let loop = (data, i, processData, done) => {

                processData(data[i], i, () => {

                    if (++i < data.length) setTimeout(() => loop(data, i, processData, done), 0)
                    else {
                        return done();
                    }
                })

            }

            loop(data, 0, processData, done)

        } else return done()

    },
    isDateCompare: function (date1, date2, condition = '>=') {

        date1 = new Date(`${date1}T00:00:00`).getTime()
        date2 = new Date(`${date2}T00:00:00`).getTime()

        if (condition == '>=') return date1 >= date2
        else if (condition == '<=') return date1 <= date2
        else if (condition == '>') return date1 > date2
        else if (condition == '<') return date1 < date2
        else return date1 == date2

    },
    getDaysBeforeDate(startdate, days = 1) {

        if (!startdate) startdate = new Date().getTime()

        let date = new Date(startdate)
        let y = date.getFullYear(), m = date.getMonth(), d = date.getDate();

        let start = new Date(y, m, d - days)
        let end = new Date(y, m, d)

        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);

        return this._getLocalDate(start)
    },

    _getLocalDate(ms) {

        ms = ms || new Date().getTime()

        let data = new Date(ms)
        let yyyy = data.getFullYear();
        let mm = data.getMonth() + 1;
        let dd = data.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const D = [yyyy, mm, dd].join('-')

        return D;
    },

    getLightBgFromColor(color, alpha = 0.5) {

        if (!color) return undefined

        let { r, g, b } = this.hexToRgb(color)

        // let _r = r + (255 - r) * alpha
        // let _g = g + (255 - g) * alpha
        // let _b = b + (255 - b) * alpha

        // let _color = this.rgbToHex(_r, _g, _b)

        // console.log(_color, '_colors');


        return `rgba(${r}, ${g}, ${b}, ${alpha})`

    },
    _getLocalFullDate(ms) {

        if (!ms) return ''

        let data = new Date(ms)
        let yyyy = data.getFullYear();
        let mm = data.getMonth() + 1;
        let dd = data.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;


        let hours = data.getHours();
        let minutes = data.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        const D = [yyyy, mm, dd].join('-') + "T" + `${hours}:${minutes}`

        return D;
    },
    getLocalFullDateLabel(ms, seperator = '/') {

        ms = ms || new Date().getTime()

        let data = new Date(ms)
        let yyyy = data.getFullYear();
        let mm = data.getMonth() + 1;
        let dd = data.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;


        let hours = data.getHours();
        let minutes = data.getMinutes();

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        const D = `${hours}:${minutes}` + ', ' + [dd, mm, yyyy].join(seperator || '-')

        return D;
    },
    processData(TableHeader, Tabledata) {
        let dataStruct = {};
        const csvData = [];



        for (let i = 0; i < Tabledata.length; i += 1) {
            for (let j = 0; j < TableHeader.length; j += 1) {
                const { label, id } = TableHeader[j];

                if (label.toLowerCase() != 'id') {

                    if (Array.isArray(Tabledata[i][id])) {
                        dataStruct[label] = Tabledata[i][id].join(',');
                    } else {

                        let _numbers = [
                            'tolls', 'toll_cost', 'distance', 'diesels', 'diesel_cost',
                            'fare', 'passenger_count', 'duetopay', 'amount_to_pay',
                            'diesel_deduction', 'toll_amount', 'escort', 'escort_amount', 'distance'
                        ]

                        let getNumber = (value) => {

                            if (_numbers.includes(id)) return isNaN(Number(Tabledata[i][id])) ? 0 : parseFloat(Number(Tabledata[i][id]).toFixed(2))
                            else return String(value || '')
                        }

                        dataStruct[label] = getNumber(Tabledata[i][id])
                    }
                }
            }
            csvData.push(dataStruct);
            dataStruct = {};
        }
        return csvData;
    },


    async exportEstimateToExcel(TableHeader, Tabledata, file_name) {

        const workbook2blob = (workbook) => {
            const wopts = {
                bookType: "xlsx",
                bookSST: false,
                type: "binary",
            };

            const wbout = XLSX.write(workbook, wopts);

            // The application/octet-stream MIME type is used for unknown binary files.
            // It preserves the file contents, but requires the receiver to determine file type,
            // for example, from the filename extension.
            const blob = new Blob([s2ab(wbout)], {
                type: "application/octet-stream",
            });

            return blob;
        };

        const s2ab = (s) => {
            // The ArrayBuffer() constructor is used to create ArrayBuffer objects.
            // create an ArrayBuffer with a size in bytes
            const buf = new ArrayBuffer(s.length);

            //create a 8 bit integer array
            const view = new Uint8Array(buf);
            //charCodeAt The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code
            for (let i = 0; i !== s.length; ++i) {
                view[i] = s.charCodeAt(i);
            }

            return buf;
        };

        const csvData = this.processData(TableHeader, Tabledata);
        const wb = XLSX.utils.book_new();

        const sheet = XLSX.utils.json_to_sheet(csvData);

        XLSX.utils.book_append_sheet(wb, sheet, file_name);

        const workbookBlob = workbook2blob(wb);

        const addStyle = (workbookBlob) => {
            return XlsxPopulate.fromDataAsync(workbookBlob).then((workbook) => {

                workbook.sheets().forEach((sheet) => {

                    let range = sheet.usedRange()
                    if (range) {
                        range.style({
                            fontFamily: "Open Sans",
                            verticalAlignment: "center",
                        })
                    }

                    sheet.column("A").width(15);
                    sheet.column("B").width(15);
                    sheet.column("C").width(15);
                    sheet.column("D").width(15);
                    sheet.column("E").width(15);
                    sheet.column("G").width(15);
                    sheet.column("H").width(15);
                    sheet.column("I").width(15);
                    sheet.column("J").width(15);
                    sheet.column("K").width(15);
                    sheet.column("L").width(15);
                    sheet.column("M").width(15);
                    sheet.column("N").width(15);
                    sheet.column("O").width(15);
                    sheet.column("P").width(15);

                    sheet.range("A1:Z1").style({
                        bold: true,
                        horizontalAlignment: "center",
                        verticalAlignment: "center",
                    });

                });

                return workbook
                    .outputAsync()
                    .then((workbookBlob) => URL.createObjectURL(workbookBlob));
            });
        };

        const url = await addStyle(workbookBlob)

        const downloadAnchorNode = document.createElement("a");
        downloadAnchorNode.setAttribute("href", url);
        downloadAnchorNode.setAttribute("download", `${file_name}.xlsx`);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    },
    Slerp: function ({ time, location, movement, }) {

        const TRACK = movement.track;

        if (time) {

            let { startTime, endTime, hoverTime } = time;
            let duration = endTime - startTime;
            let cursorTime = hoverTime - startTime;

            let interol = cursorTime / duration * 100;
            let _totalDistance = 0

            TRACK.forEach((ar, i) => {
                if (i != TRACK.length - 1)
                    _totalDistance += this.calculateDistanceBetwwenPoints(TRACK[i][0], TRACK[i][1], TRACK[i + 1][0], TRACK[i + 1][1])
            })

            let distance = interol * _totalDistance / 100
            let _per_d = 0;
            let latlng = []

            for (let _i = 0; _i < TRACK.length; _i++) {

                if (_i == TRACK.length - 1) return
                _per_d += this.calculateDistanceBetwwenPoints(TRACK[_i][0], TRACK[_i][1], TRACK[_i + 1][0], TRACK[_i + 1][1])
                if (_per_d > distance) {
                    let interpolationValue = (_per_d - distance) / _totalDistance;
                    interpolationValue = interpolationValue > 1 ? 1 : interpolationValue
                    interpolationValue = interpolationValue < 0 ? 0 : interpolationValue
                    let lat = this.lerp(TRACK[_i][0], TRACK[_i + 1][0], interpolationValue)
                    let lng = this.lerp(TRACK[_i][1], TRACK[_i + 1][1], interpolationValue)
                    latlng = [lat, lng];
                    break;
                }
            }

            return latlng;

        }
        else if (location) {

            let _totalDistance = 0
            let _per_d = []
            let __per_d = 0
            const _lDis = []

            TRACK.forEach((ar, i) => {
                if (i == TRACK.length - 1) return;

                let mlatlng = [(TRACK[i][0] + TRACK[i + 1][0]) / 2, (TRACK[i][1] + TRACK[i + 1][1]) / 2]

                _totalDistance += this.calculateDistanceBetwwenPoints(TRACK[i][0], TRACK[i][1], TRACK[i + 1][0], TRACK[i + 1][1]);
                _lDis.push(this.calculateDistanceBetwwenPoints(mlatlng[0], mlatlng[1], location[0], location[1]))
                __per_d += this.calculateDistanceBetwwenPoints(TRACK[i][0], TRACK[i][1], TRACK[i + 1][0], TRACK[i + 1][1])
                _per_d.push(__per_d)
            })

            let li = _lDis.indexOf(Math.min(..._lDis))
            let dPer = ((_per_d[li == 0 ? li : li - 1] + Math.min(..._lDis)) / _totalDistance) * 100
            let time = movement.startTime + ((dPer * (movement.endTime - movement.startTime)) / 100)

            return time;
        }

    },
    getCirclePoints: function (centre, rad, angle) {
        // Formula for calculate points => Math.cos and sin functions take radians..so, convert angle
        // into radians and apply it

        let point_x = centre[0] + rad * window.Math.cos(angle * (window.Math.PI / 180))
        let point_y = centre[1] + rad * window.Math.sin(angle * (window.Math.PI / 180))

        return [point_x, point_y];
    }
    ,

    rotatePoint: function (origin, coord, angle) {

        let [cx, cy] = origin
        let [x, y] = coord

        let radians = (Math.PI / 180) * angle

        let cos = Math.cos(radians)
        let sin = Math.sin(radians)

        let nx = (cos * (x - cx)) + (sin * (y - cy)) + cx
        let ny = (cos * (y - cy)) - (sin * (x - cx)) + cy

        return [nx, ny];
    },

    isObject: function (obj) {

        if (obj.constructor === Object && Object.keys(obj).length > 0) {
            return true
        } else {
            return false
        }
    },


    rotatePointArray: function (origin, coords, angle) {
        let points = []
        coords.forEach(coord => {

            let point = utils.rotatePoint(origin, coord, angle)
            points.push(point)

        })

        return points
    },

    rotatePositionArray: function (origin, coords, angle) {

        let points = []

        for (let i = 0; i < coords.length; i += 2) {

            let lon = coords[i]
            let lat = coords[i + 1]

            let point = utils.rotatePoint(origin, [lon, lat], angle)
            points.push(...point)

        }

        return points
    },

    calculateSlope: function (p1, p2) {

        let yDiff = p2[1] - p1[1]
        let xDiff = p2[0] - p1[0]


        return yDiff / xDiff

    },

    calculatePointBetwwenTwoPointsAtaDistance: function (lon1, lat1, lon2, lat2, distance) {

        let totalDistance = this.calculateDistanceBetwwenPoints(lon1, lat1, lon2, lat2)
        let distanceRatio = distance / totalDistance
        let point = [(1 - distanceRatio) * lon1 + distanceRatio * lon2, (1 - distanceRatio) * lat1 + distanceRatio * lat2]
        return point
    },

    calculateDistanceBetwwenPoints: function (lon1, lat1, lon2, lat2) {

        function toRad(Value) {
            return Value * Math.PI / 180;
        }

        var R = 6371; // km
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lon2 - lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d * 1000;
    },

    hexToRgb: function (hex) {

        if (!hex) return undefined

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },

    componentToHex: function (c) {

        let hex = c.toString(16);

        return hex.length == 1 ? "0" + hex : hex;
    },

    rgbToHex: function (r, g, b) {

        return "#" + utils.componentToHex(r) + utils.componentToHex(g) + utils.componentToHex(b);
    },

    getMidpoint: function (p1, p2) {

        return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]

    },

    getMidPointWithHeight: function (p1, p2, p1Height, p2Height) {

        return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, (p1Height + p2Height) / 2]
    },

    multiplyMatrix: function (m1, m2) {
        let result = [];

        for (let i = 0; i < m1.length; i++) {

            result[i] = [];

            for (let j = 0; j < m2[0].length; j++) {
                let sum = 0;

                for (let k = 0; k < m1[0].length; k++) {
                    sum += m1[i][k] * m2[k][j];
                }

                result[i][j] = sum;

            }
        }

        return result;
    },

    getUniqueId: function () {

        return String(uuidv4())
    },
    searchInArray: (searhVal, array, column) => {
        const matches = [];

        for (let i = 0; i < array.length; i++) {

            if (array[i][column].toLowerCase().includes(searhVal.toLowerCase())) {
                matches.push(array[i]);
            }
        }

        return matches;
    },
    dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = window.atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    },

    getFileExtension: function (url) {

        return url.split('.').pop().split(/\#|\?/)[0];
    },
    getFileSizeFromBytes(bytes) {

        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

        if (bytes == 0) return '0 Byte';

        let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));

        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
    async urlToFile(url, filename) {

        const response = await fetch(url);
        const mimeType = response.headers.get('content-type');
        const blob = await response.blob();
        return new File([blob], filename, { type: mimeType });
    },

    getTextImg: function (text, fontSize, cheight, cwidth, bgColor, textColor, x, y) {
        let img = document.createElement("img");
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');
        canvas.width = cwidth;
        canvas.height = cheight;
        /// lets save current state as we make a lot of changes        
        ctx.save();

        /// set font
        ctx.font = fontSize;

        /// draw text from top - makes life easier at the moment
        ctx.textBaseline = 'top';

        /// color for background
        ctx.fillStyle = bgColor;

        /// get width of text
        let width = ctx.measureText(text).width;
        //let height = ctx.measureText(text).height;

        /// draw background rect assuming height of fontSize
        ctx.fillRect(x, y, width, parseInt(fontSize, 10));

        /// text color
        ctx.fillStyle = textColor;

        /// draw text on top
        ctx.fillText(text, x, y);

        /// restore original state
        ctx.restore();
        img.src = canvas.toDataURL();
        return img
    },

    getRatioBetweenNumbers(num_1, num_2) {
        for (let num = num_2; num > 1; num--) {
            if ((num_1 % num) == 0 && (num_2 % num) == 0) {
                num_1 = num_1 / num;
                num_2 = num_2 / num;
            }
        }
        ratio = [num_1, num_2];
        //ratio = num_1+":"+num_2;

        return ratio;
    },


    findAngleBetweenThreePoints(A, B, C) {
        let AB = Math.sqrt(Math.pow(B[0] - A[0], 2) + Math.pow(B[1] - A[1], 2));
        let BC = Math.sqrt(Math.pow(B[0] - C[0], 2) + Math.pow(B[1] - C[1], 2));
        let AC = Math.sqrt(Math.pow(C[0] - A[0], 2) + Math.pow(C[1] - A[1], 2));
        return Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB)) * 57.2958;
    },

    radiansToDegrees(radians) {
        var pi = window.Math.PI;
        return radians * (180 / pi);
    },

    findPointSide(linePA, linePB, point) {

        return ((linePB[0] - linePA[0]) * (point[1] - linePA[1]) - (linePB[1] - linePA[1]) * (point[0] - linePA[0])) > 0;
    },

    findDistanceBetweenPointAndLine(point, linePA, linePB) {

        let slope = (linePB[1] - linePA[1]) / (linePB[0] - linePA[0])
        let intercept = linePB[1] - slope * linePB[0]

        let a = 1; let b = -slope; let c = -intercept

        let distance = window.Math.abs(a * point[0] + b * point[1] + c) / window.Math.sqrt(a * a + b * b)
        return distance

    },

    getPolygonBoundary(points) {

        let latMin, latMax, lonMin, lonMax

        for (let i = 0; i < points.length; i += 2) {

            let lon = points[i]
            let lat = points[i + 1]

            if (!latMin || lat < latMin) latMin = lat;
            if (!latMax || lat > latMax) latMax = lat;
            if (!lonMax || lon > lonMax) lonMax = lon;
            if (!lonMin || lon < lonMin) lonMin = lon;

        }

        return [lonMin, latMax, lonMax, latMax, lonMax, latMin, lonMin, latMin, lonMin, latMax]


    },

    getRectangeleCenter(points) {

        let [lonMin, latMax, _, __, lonMax, latMin, ____, ___, ..._____] = points;

        let center = utils.getMidpoint([lonMin, latMax], [lonMax, latMin])

        return center

    },

    getRandomColor() {
        var letters = '0123456789ABCDEF',
            color = '#';

        for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];

        return color;
    },
    getNameInitials(name) {
        if (!name) return ''

        let initials = name.match(/\b\w/g) || []

        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()

        return initials
    },

    getClickableItem(items) {

        if (!items.length) return

        for (let i = 0; i < items.length; i++) {

            let item = items[i];

            if (item.id.name == 'viewShedRegionWithOutline') continue

            return item

        }



    },

    minToTimeInDays: (minutes) => {
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let date = new Date()
        date.setDate(date.getDate() + (parseInt(minutes / 60 / 24)));
        return `${parseInt(minutes / 60 / 24) ? (date.getDate()) + "-" + months[date.getMonth()] + "-" + date.getFullYear() + " " : ""}${("0" + (parseInt(minutes / 60) - parseInt(minutes / 60 / 24) * 24)).slice(-2)}:${("0" + parseInt(minutes - (parseInt(minutes / 60) * 60))).slice(-2)}`;
    },
    startDateAndMinToTimeInDays: (startDate, minutes) => {
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let date = new Date(startDate)
        date.setDate(date.getDate() + (parseInt(minutes / 60 / 24)));
        return `${parseInt(minutes / 60 / 24) ? (date.getDate()) + "-" + months[date.getMonth()] + "-" + date.getFullYear() + " " : ""}${("0" + (parseInt(minutes / 60) - parseInt(minutes / 60 / 24) * 24)).slice(-2)}:${("0" + parseInt(minutes - (parseInt(minutes / 60) * 60))).slice(-2)}`;
    },
    minToHrs: (minutes) => {
        return `${("0" + parseInt(minutes / 60)).slice(-2)}:${("0" + parseInt(minutes - (parseInt(minutes / 60) * 60))).slice(-2)}`
    },
    minToHrsWithLabel: (minutes) => {
        // console.log(minutes,(minutes / 60) - parseInt(minutes / 60 / 24))
        return (
            (parseInt(minutes / 60 / 24) ? (`${parseInt(minutes / 60 / 24)} ` + (((parseInt(minutes / 60 / 24) > 1) ? '<span style="color:#707174">days</span>' : '<span style="color:#707174">day</span>') + ` `)) : '') +
            (((minutes / 60 % 24) >= 1) ? (parseInt(minutes - (parseInt(minutes / 60) * 60)) ? (`${("0" + parseInt((minutes / 60) - parseInt(minutes / 60 / 24) * 24)).slice(-2)} ` + ((parseInt(minutes / 60 % 24) > 1) ? '<span style="color:#707174">hours</span>' : '<span style="color:#707174">hour</span>') + ` : `) : (`${("0" + parseInt((minutes / 60) - parseInt(minutes / 60 / 24) * 24)).slice(-2)} ` + ((parseInt(minutes / 60 % 24) > 1) ? '<span style="color:#707174">hours</span>' : '<span style="color:#707174">hour</span>'))) : '') +
            (parseInt(minutes - (parseInt(minutes / 60) * 60)) ? `${("0" + parseInt(minutes - (parseInt(minutes / 60) * 60))).slice(-2)} ` + ((parseInt(minutes - (parseInt(minutes / 60) * 60)) > 1) ? '<span style="color:#707174">minutes</span>' : '<span style="color:#707174">minute</span>') : ''));
    },
    minToHrsWithHrsMinLabel: (minutes) => {
        return ((parseInt(minutes / 60) ? (parseInt(minutes - (parseInt(minutes / 60) * 60)) ? (`${("0" + parseInt(minutes / 60)).slice(-2)} ` + ((parseInt(minutes / 60) > 1) ? '<span style="color:#707174">hours</span>' : '<span style="color:#707174">hour</span>') + ` : `) : (`${("0" + parseInt(minutes / 60)).slice(-2)} ` + ((parseInt(minutes / 60) > 1) ? '<span style="color:#707174">hours</span>' : '<span style="color:#707174">hour</span>'))) : '') + (parseInt(minutes - (parseInt(minutes / 60) * 60)) ? `${("0" + parseInt(minutes - (parseInt(minutes / 60) * 60))).slice(-2)} ` + ((parseInt(minutes - (parseInt(minutes / 60) * 60)) > 1) ? '<span style="color:#707174">minutes</span>' : '<span style="color:#707174">minute</span>') : ''));
    },
    ReverseGeo: async (lat, lng, globalStore) => {

        let details = await globalStore.reverseGeoCode.getPlaceDetails({ location: [lat, lng] })
        let Address = ""

        if (details != undefined) {
            let { name, country, state, city } = details.properties;
            let address = (country || '')

            address += state ? ', ' + state : ''
            Address = name + ',' + city + ',' + state + ',' + country
            return Address;

            //   document.getElementById(`${clickedbtn}latlng-${activetab}`).value = name + ',' + city + ',' + state + ',' + country
        } else {
            //   document.getElementById(`${clickedbtn}latlng-${activetab}`).value = `${lat},${lng}`
            return `${lat} , ${lng}`;

        }
    },

    BasicReverseGeo: async (lat, lng, globalStore) => {

        let details = null;
        try {
            details = await globalStore.reverseGeoCode.getPlaceDetails({ location: [lat, lng] })
        } catch {
            details = undefined;
        }
        let Address = ""

        if (details != undefined) {
            let { name, country, state, city, postcode } = details.properties;
            // console.log(details.properties)
            let address = (country || '')
            let tempName = (name != undefined) ? `${name}, ` : ``
            let tempCity = (city != undefined) ? `${city}, ` : ``
            let tempCountry = (country != undefined) ? `${country}, ` : ``
            let tempState = (state != undefined) ? `${state}, ` : ``

            address += state ? ', ' + state : ''
            Address = tempName + tempCity + tempState + tempCountry + postcode
            return Address;

            //   document.getElementById(`${clickedbtn}latlng-${activetab}`).value = name + ',' + city + ',' + state + ',' + country
        } else {
            //   document.getElementById(`${clickedbtn}latlng-${activetab}`).value = `${lat},${lng}`
            return `${lat} , ${lng}`;

        }
    },
    paginator: (instance, params) => {

        if (instance.current === undefined) {
            let param = new URLSearchParams(window.location.search);
            instance.current = param.has("pg") ? Number.parseInt(param.get("pg")) : 1;
        }
        if (instance.adj === undefined) { instance.adj = 2; }
        if (instance.adj <= 0) { instance.adj = 1; }
        if (instance.current <= 0) { instance.current = 1; }
        if (instance.current > instance.total) { instance.current = instance.total; }

        // (B) URL STRING ONLY - DEAL WITH QUERY STRING & APPEND PG=N
        const jsmode = typeof instance.click == "function";
        if (jsmode == false) {
            if (instance.click.indexOf("?") == -1) { instance.click += "?pg="; }
            else { instance.click += "&pg="; }
        }

        // (C) HTML PAGINATION WRAPPER
        instance.target.innerHTML = "Page(s) : &nbsp;";
        instance.target.classList.add("paginate");

        // (D) DRAW PAGINATION SQUARES
        // (D1) HELPER FUNCTION TO DRAW PAGINATION SQUARE
        const square = (txt, pg, css) => {
            let el = document.createElement("a");
            el.innerHTML = txt;
            if (css) { el.className = css; }
            if (jsmode) { el.onclick = () => { instance.click(pg, params); }; }
            else { el.href = instance.click + pg; }
            instance.target.appendChild(el);
            if (pg == 0) {
                instance.target.innerHTML = "";
            }
        };
        // (D2) BACK TO FIRST PAGE (DRAW ONLY IF SUFFICIENT SQUARES)
        if (instance.current - instance.adj > 1) { square("&#10218;", 1, "first"); }

        // (D3) ADJACENT SQUARES BEFORE CURRENT PAGE
        let temp;
        if (instance.current > 1) {
            temp = instance.current - instance.adj;
            if (temp <= 0) { temp = 1; }
            for (let i = temp; i < instance.current; i++) { square(i, i); }
        }

        // (D4) CURRENT PAGE
        square(instance.current, instance.current, "current");

        // (D5) ADJACENT SQUARES AFTER CURRENT PAGE
        if (instance.current < instance.total) {
            temp = instance.current + instance.adj;
            if (temp > instance.total) { temp = instance.total; }
            for (let i = instance.current + 1; i <= temp; i++) { square(i, i); }
        }

        // (D6) SKIP TO LAST PAGE (DRAW ONLY IF SUFFICIENT SQUARES)
        if (instance.current <= instance.total - instance.adj - 1) {
            square("&#10219;", instance.total, "last");
        }
    },
    ischeckObjKeyandValues: (obj, keys) => {

    },
    base64_text_encode: function (text) {
        let Buff = Buffer.from(text);

        return Buff.toString('base64');
    },
    base64_text_decode: function (base64) {
        var text = Buffer.from(base64, 'base64')
        return text.toString()
    }

}
export default utils;