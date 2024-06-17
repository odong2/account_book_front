import { axiosInstance } from "@/apis/index.js";
import { Constant } from "@/constants/constant.js";

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
        .then(() => {
          // 로그인 후 메인 페이지 이동
          window.location.href = `${Constant.HOST_URL}`;
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    }
    // 회원가입 하지 않은 계정
    else {
      // 소셜 회원 정보
      const signupData = {
        id: resData.data.id,
        nickname: resData.data.name,
        email: resData.data.email,
        token: resData.data.accessToken,
        provider: resData.data.provider,
        profileImage : resData.data.profileImage
      };

      // 회원가입 정보 로컬스토리지에 저장
      localStorage.setItem("signupUser", JSON.stringify(signupData));

      window.location.href = `${Constant.HOST_URL}/auth/social/sign-up`;
    }
  },

  // 소셜 회원가입 요청
  socialSignup(socialFormData) {
    api
      .post("/v1/oauth/social/sign-up", JSON.stringify(socialFormData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        // 로컬 스토리지 초기화
        localStorage.clear("signupUser");
        alert("회원가입을 축하합니다. 로그인페이지로 이동합니다.");
        // 로그인 페이지로 이동 (추후 바로 로그인 처리)
        window.location.href = `${Constant.HOST_URL}/auth/login`;
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  },

  loginKakao: async () => {},
};

export { apiRequest };
