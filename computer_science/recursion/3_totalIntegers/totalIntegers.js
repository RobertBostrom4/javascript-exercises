const totalIntegers = function(input) {

    if (!(typeof input === 'object')) {
        return undefined;
    }
    
    let intCount = 0;
    
    const helper = (input) => {
        
        if (typeof input === 'object' && input !== null) {
            
            for (const [key, value] of Object.entries(input)) {

                 if (typeof value === 'object') {
                        helper(value);
                    }

                if (!Number.isInteger(value)) {
                    continue;
                }
                
                intCount++;
                
            }
            
        } 

    }

    helper(input);
    return intCount;
};
  
// Do not edit below this line
module.exports = totalIntegers;
