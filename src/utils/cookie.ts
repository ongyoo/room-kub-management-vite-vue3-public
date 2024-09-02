import Cookies from 'js-cookie'

export function setAuthToken(token: string) {
  Cookies.set('RK_AuthToken', token, { expires: 7 }) // Set the cookie to expire in 7 days
}

export function getAuthToken() {
  return Cookies.get('RK_AuthToken')
}

export function removeAuthToken() {
  Cookies.remove('RK_AuthToken')
}

// export function isAuthTokenExpired() {
//   const token = getAuthToken();
//   if (token) {
//     // Extract expiration date from the token or obtain it from your authentication server
//     // For example, if the token is a JWT, you can decode it to get the expiration date
//     const expirationDate = new Date(/* Extract from token or obtain from server */);

//     // Compare the expiration date with the current date
//     return expirationDate < new Date();
//   }
//   return true; // Token doesn't exist, so consider it as expired
// }
