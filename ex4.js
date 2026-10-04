// Write isValidOctet(x) so it returns true only for whole numbers from 0 to 255. 
// Then write isValidIP(str), which checks that the string has exactly 4 parts and 
// that every part is a valid octet. Test it with "10.0.0.256", "1.2.3" and "abc.1.1.1".

function isValidOctet(x){
    const num = Number(x);
    return p !== "" && Number.isInteger(num) && num >= 0 && num <= 255 ;
}


function isValidIP(str){
    const parts = str.split(".");

    if (parts.length != 4){
        return false;
    }

    for(const p of parts){
        const num = Number(p);

       if (p === "" || !Number.isInteger(num) || num < 0 || num > 255){
            return false;      // one bad part means the whole IP is bad
        }
    }
    return true;
}





console.log(isValidIP("192.168.a.2"));
console.log(isValidIP("192.168.1.20"));  // should be true
console.log(isValidIP("10.0.0.256"));    // should be false
console.log(isValidIP("1.2.3"));         // should be false: only 3 parts
console.log(isValidIP("1..2.3"));        // should be false: "" >= 0 is true in JS!
console.log(isValidIP("1.2.3.4.5"));     // should be false: 5 parts