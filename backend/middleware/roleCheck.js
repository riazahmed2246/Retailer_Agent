export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      // Ensure the user is authenticated and has the required role
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden: You do not have the required role' });
      }
      next();
    };
  };
  