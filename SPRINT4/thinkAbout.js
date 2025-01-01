import axios from "axios";  // axios 모듈을 불러옵니다.

axios.defaults.baseURL = global.productURL;  // axios의 기본 baseURL을 설정합니다. (global.productURL에 있는 값을 사용)

const requestInterceptor = (axiosInstance) => {  // axios 인스턴스를 받아서 요청 인터셉터를 설정하는 함수
    axiosInstance.interceptors.request.use(() => {  // 요청이 보내지기 전에 실행되는 함수
        console.log("909");  // 요청 전 로그 출력
    }, (err) => {  // 에러가 발생하면 실행되는 함수
        console.log(err);  // 에러 출력
    });
}

const responseInterceptor = (axiosInstance) => {  // axios 인스턴스를 받아서 응답 인터셉터를 설정하는 함수
    axiosInstance.interceptors.response.use((res) => {  // 응답을 받으면 실행되는 함수
        console.log("909A");  // 응답 후 로그 출력
        return res;  // 응답을 그대로 반환
    }, (err) => {  // 에러가 발생하면 실행되는 함수
        console.log(err);  // 에러 출력
    });
}

// 싱글톤 패턴을 구현하는 부분
const instance = {};  // 이미 생성된 axios 인스턴스를 저장할 객체

// AxiosDefault 함수: baseURL에 따라 axios 인스턴스를 생성하고 캐시하는 함수
const AxiosDefault = (baseURL) => {
    if (!instance[baseURL]) {  // baseURL에 해당하는 인스턴스가 없으면 새로 생성
        const axiosInstance = createAxiosInstance(baseURL);  // 새로운 axios 인스턴스 생성
        requestInterceptor(axiosInstance);  // 요청 인터셉터 설정
        instance[baseURL] = axiosInstance;  // 생성된 인스턴스를 객체에 저장
    }
    return instance[baseURL];  // 이미 생성된 인스턴스를 반환
}

// axios 인스턴스를 생성하는 함수
const createAxiosInstance = (baseURL) => {
    return axios.create({
        baseURL,  // baseURL을 설정
        headers: {
            "Content-Type": "application/json",  // 기본 헤더 설정
        },
    });
}

// 글로벌 설정된 productURL을 사용해 axiosClient를 생성
const axiosClient = AxiosDefault(global.productURL);
