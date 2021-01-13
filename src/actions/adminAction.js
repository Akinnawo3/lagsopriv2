import axios from "axios"
import {ADMINS, ADMINS_LOADING} from './types'

const header = {
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNjEwNTQyMDM2LCJleHAiOjE2MTA3MTQ4MzYsImp0aSI6IjEtMTYxMDU0MjAzNiIsImFkbWluIjoxfQ.iAaRMVS5SENBk8DvxUtlgt3FunAwgYyW5wullo8dElvyX9yBVotMFZL8GDUq5gcoJhYeehC3X1PAq7i4p2T9UM5qzap9CWq3Cxpa35uH8dhIzywkmr3h010Pd1H63-qgw5euBiovTUawUTYAml4-Tb8vKydMDxKicFVVyC99lTh4Y10KP8a5nlX-Mw_m0KbQwR8tTALSnB1T4XnJMd2pbRf6ZxcsWiC7eiYFvCCh3oLl6DI869GIEDcNnHwpld-ntadLLpgtbpoMKWOGe1Gefww2LvwRoKT-C5A1NF99yDPfsCkr-B9cUjYnJCn05EcAuNmZsA0E6Ok1pxjM3w0olQ'
  }
}

  export const getAdmins = () => async dispatch => {
  dispatch(isLoading())
  try {
    const res = await axios.get('http://165.22.116.11:8090/api/admin/', header)
    console.log(res.data, 'pppppppppppp')
    dispatch({
      type: ADMINS,
      payload: res.data
    });
    dispatch(isLoading())
  }catch (e) {
    dispatch(isLoading())
  }

};


export const isLoading = () => async dispatch => {
  dispatch({
    type: ADMINS_LOADING
  });

};


