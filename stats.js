/***
 *
 * stats.js r6 - http://github.com/mrdoob/stats.js
 * https://github.com/jakesgordon/javascript-tetris/blob/master/stats.js
 */
var stats = function (){
    function s(a,g,d){
        var f,c,e;
        for (c=0;c<30;c++)
            for(f=0;f<73;f++)
                e=(f+c*74)*4,a[e]=a[e+4],a[e+1]=a[e+5],a[e+2]=a[e+6];
        for(c=0;c<30;c++)
            e=(73+c*74);
    }
};
