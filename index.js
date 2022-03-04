/* Your Code Here */

const arr = ['Kadeem','Beckford','Mr.', 30]
function createEmployeeRecord(arr){
   const employeeObj = {
            firstName : arr[0],
            familyName: arr[1],
            title: arr[2],
            payPerHour: arr[3],
            timeInEvents: [],
            timeOutEvents: []
   }
   return employeeObj
}

function createEmployeeRecords(arrOfArrays){
    const newArray = []
    for ( const element of arrOfArrays){
       newArray.push(createEmployeeRecord(element))
    }
    return newArray

}

function createTimeInEvent(employeeObj, dateStamp){

    const date = dateStamp.substr(0,10);
    const hour = dateStamp.substr(11, 14);
    const numberedHour = parseInt(hour, 10)

    const subObject = {
        type : "TimeIn",
        hour : numberedHour,
        date : date
    }
    
     employeeObj.timeInEvents.push(subObject)
     return employeeObj
}

function createTimeOutEvent(employeeObj, dateStamp){

    const date = dateStamp.substr(0,10);
        const hour = dateStamp.substr(11, 14);
        const numberedHour = parseInt(hour, 10)

        const timeOutObj = {
            type : "TimeOut",
            hour : numberedHour,
            date : date
        }

        employeeObj.timeOutEvents.push(timeOutObj)
         return employeeObj

}

function hoursWorkedOnDate(employeeObj, dateStamp){
    console.log(dateStamp, "stamp") //
    //if employeeObj.timeInEvents[0].hour == date
    //run: 
    if(employeeObj.timeInEvents[0].date == dateStamp){
         const employeeTimeIn = employeeObj.timeInEvents[0].hour / 100
         const employeeTimeOut = employeeObj.timeOutEvents[0].hour / 100

         const totalHoursWorked =  employeeTimeOut - employeeTimeIn
         return totalHoursWorked
    }
     
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

