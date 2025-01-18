export const setLastVisit = (req, res, next) => {
  //Check if the cookie is set. Then add a local variable  lastVisit to the cookies
  if (req.cookies.lastVisit) {
    res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
  }

  //else we need to add a new variable called lastVisit to the client's cookie everytime the client revisits the website so that we can update the last visit time.
  res.cookie("lastVisit", new Date().toISOString(), {
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
  //call the next middleware in pipeline.
  next();
};
 