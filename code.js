function timeConversions(s){
    let split = s.split('')
    let zero = split[0]
    let one = split[1]
    let two = split[2]
    let three = split[3]
    let four = split[4]
    let five = split[5]
    let six = split[6]
    let seven = split[7]
    let eight = split[8]
    let nine = split[9]
  
    let sum = zero + one
    let totalSum = two + three + four + five + six + seven

   
    if((zero <= '1') && (eight === "A") && (nine === "M")){
        return sum + totalSum
    } else if((eight === '1') && (nine === '2')){
      sum = "00"
       return sum + totalSum
    } else if((zero === '1') && (one === '2')){
        sum = "12"
         return sum + totalSum
    }
    else {
        return parseInt(sum) + parseInt(12) + totalSum
    }
    
  }

  console.log(timeConversions("12:05:45AM"))
  console.log(timeConversions("01:05:45AM"))
  console.log(timeConversions("02:05:45AM"))
  console.log(timeConversions("03:05:45AM"))
  console.log(timeConversions("04:05:45AM"))
  console.log(timeConversions("05:05:45AM"))
  console.log(timeConversions("06:05:45AM"))
  console.log(timeConversions("07:05:45AM"))
  console.log(timeConversions("08:05:45AM"))
  console.log(timeConversions("09:05:45AM"))
  console.log(timeConversions("10:05:45AM"))
  console.log(timeConversions("11:05:45AM"))
  console.log(timeConversions("12:05:45PM"))
  console.log(timeConversions("01:05:45PM"))
  console.log(timeConversions("02:05:45PM"))
  console.log(timeConversions("03:05:45PM"))
  console.log(timeConversions("04:05:45PM"))
  console.log(timeConversions("05:05:45PM"))
  console.log(timeConversions("06:05:45PM"))
  console.log(timeConversions("07:05:45PM"))
  console.log(timeConversions("08:05:45PM"))
  console.log(timeConversions("09:05:45PM"))
  console.log(timeConversions("10:05:45PM"))
  console.log(timeConversions("11:05:45PM"))