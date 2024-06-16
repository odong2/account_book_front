import { axiosInstance, HOST_URL } from "@/apis/index.js";

const api = axiosInstance;

const apiRequest = {
  // 카카오 회원 정보 요청(로그인)
  loginFromKakao: async (code) => {
    let socialData = {};

    // 소셜 회원 정보 요청
    const response = await api.get(`/v1/oauth/info/kakao?code=${code}`);
    const resData = response.data;

    if (resData.data.isExistMember === true) {
      // 이미 회원가입한 계정 로그인 처리
      localStorage.clear(); // 로컬스토리지 정보 초기화
      socialData = {
        id: resData.data.id,
        provider: resData.data.provider,
        accessToken: resData.data.accessToken,
      };
      // 로그인
      await api
        .post("/v1/login/social", JSON.stringify(socialData), {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          // 로그인 후 메인 페이지 이동
          window.location.href = HOST_URL;
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    }
    // 회원가입 하지 않은 계정
    else {
      // 회원가입 하지 않은 계정 처리
      const signupData = {
        id: resData.data.id,
        nickname: resData.data.name,
        email: resData.data.email,
        token: resData.data.accessToken,
        provider: resData.data.provider,
      };

      // 회원가입 정보 로컬스토리지에 저장
      localStorage.setItem("signupUser", JSON.stringify(signupData));

      window.location.href = `${HOST_URL}/auth/social/sign-up`;
    }
  },

  // 회원가입 요청
  signup(formData) {
    api
      .post("/v1/oauth/social/sign-up", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  },

  loginKakao: async () => {},
};

export { apiRequest };
