// 이 파일은 설정용 파일입니다.
//const API_HOST = "localhost";  // 호스트 컴퓨터 이름(127.0.0.1)
// const API_HOST = "43.203.83.182" // EC2 공인 IP 주소
const API_HOST = "ugcadman.shop" // 로드 밸런스 사용시 나의 도메인 정보

const API_PORT = "9000"; // 스프링 부트 포트 번호

// export 키워드를 적어 주어야 외부에서 접근 가능합니다.
export const API_BASE_URL = `http://${API_HOST}:${API_PORT}`;
