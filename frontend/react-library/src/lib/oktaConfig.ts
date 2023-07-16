export const oktaConfig = {
    clientId: '0oa9v69rtbkUqbp3i5d7',
    issuer: 'https://dev-21401540.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}