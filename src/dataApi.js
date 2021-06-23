import axios from 'axios';
const api_key = require("../config/keys").API_KEY

export const getData = (start = '2021-01-01', end = '2021-01-30', code = 'CO') => {
    axios.request({
        method: 'GET',
        url: 'https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSHistoricalDataBetweenDatesForState',
        params: { end_date: end, start_date: start, statecode: code },
        headers: {
            'x-rapidapi-key': api_key,
            'x-rapidapi-host': 'covid-19-usa-data-by-zt.p.rapidapi.com'
        }
    }).then(res => {
        let count = 0
        res.data.records.forEach(day => {
            count += parseInt(day.cases.dailyconfirmed)
        });
        console.log(count)
    })

        .catch(function (error) {
            console.error(error);
        });
}