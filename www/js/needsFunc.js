kakaoAuthHost = "https://kauth.kakao.com";
serverHost = "http://172.19.8.34:8000";
// serverHost = "http://192.168.1.30:8000";

// js get parameter 받아오기 - https://www.bada-ie.com/board/view/?page=1&uid=1811&category_code=62&code=all&key=&keyfield=
var getParameters = function (paramName) {
    // 리턴값을 위한 변수 선언
    let returnValue;

    // 현재 URL 가져오기
    let url = location.href;

    // get 파라미터 값을 가져올 수 있는 ? 를 기점으로 slice 한 후 split 으로 나눔
    let parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');

    // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
    for (var i = 0; i < parameters.length; i++) {
        let parameter = parameters[i].split('=');
        let varName = parameter[0]
        if (varName.toUpperCase() == paramName.toUpperCase()) {
            returnValue = parameter[1];

            return decodeURIComponent(returnValue);
        }
    }

    return null;
};