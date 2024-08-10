import jwt from 'jsonwebtoken';

const JWT_SECRET = 'user'; // Use a secure key in production

export const authenticate = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Assumes token is sent as "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.user = decoded; // Add user data to the request object
    next();
  });
};
