import { auth } from 'express-oauth2-jwt-bearer';
import CONFIG from '../config/config'; 

export const checkJwtMiddleware = auth({
    audience: CONFIG.auth0?.audience || "http://localhost:4001" ,
    issuerBaseURL: CONFIG.auth0?.issuer || "https://dev-xfo2c0urdyg1hcao.us.auth0.com/"
});
