export const delay_prom = function(ms) { 
    return new Promise( function(resolve, reject) {
        setTimeout( resolve , ms);
        }
    )
};


