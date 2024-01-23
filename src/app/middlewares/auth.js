import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

export default (request, response, next) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: "Token not provided." });
  }

  const token = authToken.split(" ")[1];
  console.log(token);

  try {
    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        throw new Error();
      }

      console.log(decoded);
      request.userID = decoded.id;
      return next();
    });
  } catch {
    return response.status(401).json({ error: "Token is invalid" });
  }
};
