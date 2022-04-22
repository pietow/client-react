/** @format */

;(function () {
    'use strict'

    module.exports = {
        dateArr: dateArr,
    }

    function dateArr(startDate = '1900-01-01') {
        const dateMove = new Date(startDate)
        const endDate = new Date()
        const listDate = []

        //CONVERT TO STRING
        let dateStr = convertDateToString(dateMove)
        const endDateStr = convertDateToString(endDate)

        listDate.push(convertDateToObject(dateMove))
        while (dateStr !== endDateStr) {
            //INCREMENT BY ONE DAY
            dateMove.setDate(dateMove.getDate() + 1)
            listDate.push(convertDateToObject(dateMove))

            dateStr = convertDateToString(dateMove)
        }
        return listDate
    }

    function convertDateToString(d) {
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    }

    function convertDateToObject(d) {
        return {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            day: d.getDate(),
        }
    }
})()
