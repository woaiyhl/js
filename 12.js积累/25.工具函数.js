// 判断安卓还是IOS
const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
const isAndroid = navigator.userAgent.includes('Android') || navigator.userAgent.includes('Adr')