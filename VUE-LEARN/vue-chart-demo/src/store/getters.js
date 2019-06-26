const getters = {  // 对已有的数据状态进行修饰
  token: state => state.user.token,
  avatar: state => state.user.avatar
}

export default getters;