/**
 * Created by ken.xu on 14-1-27.
 */
module.exports = function(root){
    return{
        date:require(root+'/function/date'),
        encode:require(root+'/function/encode'),
        page:require(root+'/function/page'),
        html:require(root+'/function/htmlformat'),
    }
}