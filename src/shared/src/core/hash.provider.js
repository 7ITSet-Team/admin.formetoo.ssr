import sha256 from 'js-sha256'
import md5 from 'md5'

export default class Hash {
  static getHash(text) {
	  const salt1 = 'AQRp;S~G=&rG!>}rso!A3<B-[j?uO5f/--Z5v8Af=Qo+L?=Xe8=i[wyNBFn!HyB'
	  const salt2 = '#!cgW0mbPC&r*_m>Kozn{.H=)W^3YB>_5i@>_{f_tV+m*l\'}Ff/&r3\'kx!9NlX)'
	  const salt3 = '4PH}d9wj=cl-RzQ\'YUvezTwzGv0a+*Qt@`2H.Gh;e$}jJu9>UxSY5f<kX@$gNU~'
	  return sha256(md5(salt1 + text + salt2) + salt3)
  }
}
