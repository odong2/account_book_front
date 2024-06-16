import { axiosInstance, HOST_URL } from "@/apis/index.js";

const api = axiosInstance;

const apiRequest = {

  // 카카오 회원 정보 요청(로그인)
  loginFromKakao(code) {
    // axios 에서는 API 서버 api로 호출
    api
      .get("/v1/oauth/info/kakao?code=" + code)
      .then((res) => {
        let obj = res.data;

        // 이미 회원가입한 계정 로그인 처리
        if (obj.data.existMember === true) {
          localStorage.clear; // 로컬스토리지 정보 초기화
          localStorage.setItem('loginUser', JSON.stringify(obj.data));
          window.location.href = HOST_URL;
        }

        // 회원가입 하지 않은 계정
        else {
          const data = {
            id: obj.data.id,
            nickname: obj.data.name,
            email: obj.data.eamil,
            token: obj.data.accessToken,
            provider: obj.data.provider
          };
          const signupUser = JSON.stringify(data);
          localStorage.setItem("signupUser", signupUser);

          window.location.href = HOST_URL + '/auth/social/sign-up';
        }
      }).catch((err) => {
        console.log(err);
      });
  },

  // 회원가입 요청
  signup(formData) {
    api
      .post("/v1/oauth/social/sign-up", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json", // 올바른 Content-Type 설정
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }
};
export { apiRequest };
