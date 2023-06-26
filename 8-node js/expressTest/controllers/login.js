//For Register Page
export const registerView = (req, res) => {
  res.send("register");
  res.render("register", {
  } );
};
// For View
export const loginView = (req, res) => {
  res.render("login", {
  } );
};
