jQuery.cookie=function(m,l,h){if(arguments.length>1&&(l===null||typeof l!=="object")){h=jQuery.extend({},h);if(l===null){h.expires=-1}if(typeof h.expires==="number"){var j=h.expires,n=h.expires=new Date();n.setDate(n.getDate()+j)}return(document.cookie=[encodeURIComponent(m),"=",h.raw?String(l):encodeURIComponent(String(l)),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join(""))}h=l||{};var i,k=h.raw?function(a){return a}:decodeURIComponent;return(i=new RegExp("(?:^|; )"+encodeURIComponent(m)+"=([^;]*)").exec(document.cookie))?k(i[1]):null};