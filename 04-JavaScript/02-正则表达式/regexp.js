var patt = /\w+@\w+\.(com|cn)/ig

// email
var patt = /\w+(\.|-)?\w+@\w+-?\w+(\.\w+){1,2}/ig


// 手机号 

var patt = /\d{11}/ig
// 11位数手机号码

var patt = /^1[3456789]\d{9}$/igm
var patt = /(\(?\+86\)? ?)?1[3456789]\d{9}$/igm
// 加上 +86






var email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/gim
var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/igm
// 错误的
var phone = /^(13[0-9]|14[57]|15[012356789]|16[7]|17[1]|18[012356789])\d{8}$/igm
// 修正的
