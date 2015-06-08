var string_timers=[false,false,false,false,false,false];if(typeof(MIDI)==="undefined"){var MIDI={}}if(typeof(MIDI.Soundfont)==="undefined"){MIDI.Soundfont={}}if(typeof(MIDI.isSupported)==="undefined"){MIDI.isSupported=false}if(typeof(MIDI.sfLoading)==="undefined"){MIDI.sfLoading=false}if(window.Audio){(function(){MIDI.isSupported=true;MIDI.loadFont=function(m){MIDI.sfLoading=true;var l=i["audio/ogg"]?"ogg":"mp3";var k=SF_PATH+"/"+SOUNDFONT_NAME+l+"_"+SOUNDFONT_VERSION+".js";MIDI.soundfondLoadCallback=m;var j=document.createElement("script");j.src=k;document.getElementsByTagName("head")[0].appendChild(j)};var g=MIDI.HTML5={};var b=1;var e=-1;var f={};var c=[];for(var a=0;a<6;a++){c[a]=new Audio()}var d=function(o,l){if(l===undefined){l={}}var j=o;if(!j){return}var n=(e+1)%c.length;var m=(new Date()).getTime();var k=c[n];f[o]=k;k.src=MIDI.Soundfont[o];k.volume=b;k.play();e=n};MIDI.playChannel=function(k,j){d(k,j)};g.programChange=function(){};g.setVolume=function(j){b=j};g.noteOn=function(o,l,n,k,m){if(k){var j=window.setTimeout(function(){d(l,m)},k*1000);return j}else{d(l,m)}};g.noteOff=function(l,k,j){};g.chordOn=function(n,p,m,k,j){if(j===undefined){j={}}var o=50;if($.isFunction(j.playStarted)){j.playStarted()}if($.isFunction(j.playFinished)){setTimeout(j.playFinished,2000)}for(var l=0;l<p.length;l++){var q=p[l];if(l==0){d(q)}else{(function(s,r){string_timers[r]=setTimeout(function(){if(string_timers[r]){string_timers[r]=false;MIDI.playChannel(s)}},o*r)})(q,l)}}};g.chordOff=function(k,l,j){};g.stopAllNotes=function(){for(var j=0;j<c.length;j++){if(string_timers[j]){string_timers[j]=false;clearTimeout(string_timers[j])}c[j].pause()}};g.connect=function(j){MIDI.lang="HTML5";MIDI.setVolume=g.setVolume;MIDI.programChange=g.programChange;MIDI.noteOn=g.noteOn;MIDI.noteOff=g.noteOff;MIDI.chordOn=g.chordOn;MIDI.chordOff=g.chordOff;MIDI.stopAllNotes=g.stopAllNotes;if(j){j()}};var i={};var h=function(l){var j=new Audio();var k=l.split(";")[0];j.id="audio";j.setAttribute("preload","auto");j.setAttribute("audiobuffer",true);i[k]=true;document.body.appendChild(j)};MIDI.audioDetect=function(o){if(typeof(Audio)==="undefined"){return o({})}var l=new Audio();if(typeof(l.canPlayType)==="undefined"){return o(i)}var n=l.canPlayType('audio/ogg; codecs="vorbis"');n=(n==="probably"||n==="maybe");var k=l.canPlayType("audio/mpeg");k=(k==="probably"||k==="maybe");if(!n&&!k){o(i);return}if(n){h("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=")}if(k){h("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")}var m=(new Date()).getTime();var j=window.setInterval(function(){for(var q in i){}var p=(new Date()).getTime();var r=p-m>5000;if(q||r){window.clearInterval(j);o(i)}},1)}})()}else{MIDI.audioDetect=function(a){return false}}MIDI.channels=(function(){var a={};for(var b=0;b<6;b++){a[b]={instrument:0,mute:false,mono:false,omni:false,solo:false}}return a})();function soundfondLoadCallback(a){MIDI.Soundfont=a;if(MIDI.soundfondLoadCallback){MIDI.soundfondLoadCallback()}}var SOUNDFONT_NAME="soundfont-nylon-";var SOUNDFONT_VERSION=2;$(function(){MIDI.audioDetect(function(a){if(!$.isEmptyObject(a)){isAudioSupported=true;audioDetected(a);showPlayer()}})});function playChord(b,a){if(a===undefined){a={}}if(isAudioSupported){if(MIDI.sfLoading){return false}if($.isEmptyObject(MIDI.Soundfont)){if($.isFunction(a.beforeFontLoad)){a.beforeFontLoad()}MIDI.loadFont(function(){if($.isFunction(a.afterFontLoad)){MIDI.sfLoading=false;a.afterFontLoad()}_playChord(b,a)})}else{_playChord(b,a)}}}function stopChord(){if(isAudioSupported){MIDI.HTML5.stopAllNotes()}}function _playChord(b,a){MIDI.HTML5.chordOn(0,b,127,0,a)};