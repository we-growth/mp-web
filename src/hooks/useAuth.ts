export default function useAuth() {
  const token = localStorage.getItem('Token');
  //  获取登录状态
  return {
    isLogin: token != null,
  };
}
