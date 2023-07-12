import { defineStore } from 'pinia'
import { merge } from 'lodash-es'
// import { AuthApi } from '@/server/api/admin/Auth'
import { Local } from '@/utils/storage'

// import { Session } from '/@/utils/storage'

export const adminTokenKey = 'admin-token'

/**
 * 用户信息
 * @methods setUserInfos 设置用户信息
 */
export const useUserInfo = defineStore('userInfo', {
  state: (): UserInfosState => ({
    userInfos: {
      token: Local.get(adminTokenKey) || '',
      userName: '',
      photo: '',
      time: 0,
      roles: [],
      authBtnList: [],
    },
  }),
  actions: {
    async setUserInfos() {
      const userInfos = <UserInfos> await this.getApiUserInfo().catch(() => {})
      merge(this.userInfos, userInfos)
    },
    setUserName(userName: string) {
      this.userInfos.userName = userName
    },
    setPhoto(photo: string) {
      this.userInfos.photo = photo
    },
    setToken(token: string) {
      this.userInfos.token = token
      Local.set(adminTokenKey, token)
    },
    getToken() {
      const token = Local.get(adminTokenKey)
      this.userInfos.token = token
      return token
    },
    removeToken() {
      this.userInfos.token = ''
      Local.remove(adminTokenKey)
    },
    clear() {
      this.userInfos.token = ''
      Local.remove(adminTokenKey)
      window.requests = []
      window.location.reload()
    },
    // 查询用户信息
    async getApiUserInfo() {
      return new Promise((resolve, reject) => {
        // new AuthApi()
        //   .getUserPermissions()
        //   .then((res) => {
        //     if (res?.success) {
        //       const user = res.data?.user
        //       const userInfos = {
        //         userName: user?.nickName || user?.name,
        //         photo: user?.avatar ? user?.avatar : '',
        //         time: new Date().getTime(),
        //         roles: [],
        //         authBtnList: res.data?.permissions,
        //       }
        //       // Session.set('userInfo', userInfos)
        //       resolve(userInfos)
        //     }
        //     else {
        //       this.clear()
        //     }
        //   })
        //   .catch((err) => {
        //     reject(err)
        //   })
      })
    },
  },
})
