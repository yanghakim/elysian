const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/hello", (req, res) => {
    res.send("hello");
  });

  /**
   * LOGIN/REGISTER GOOGLE STRATEGY
   **/
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: "select_account"
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/"
    }),
    (req, res) => {
      return res.redirect("/menu");
    }
  );

  /**
   * LOGIN LOCAL STRATEGY
   **/
  async function handleLogin(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;

    if (!email) {
      res.send({ success: false, message: "Email is required." });
      return next();
    } else if (!password) {
      return res.send({ success: false, message: "Password is required." });
    }

    email = email.toLowerCase();
    email = email.trim();

    const existingUser = await User.findOne({ email: email });

    if (existingUser == null) {
      return res.send({
        success: false,
        message: "User with email does not exist."
      });
    } else if (!existingUser.validPassword(password, existingUser.password)) {
      return res.send({ success: false, message: "Incorrect password!" });
    } else if (existingUser) {
      return next();
    }
  }

  app.post(
    "/api/login",
    handleLogin,
    passport.authenticate("local", {
      failureRedirect: "/"
    }),
    (req, res) => {
      return res.send({ success: true, user: req.user });
    }
  );

  // REGISTER LOCAL STRATEGY
  async function handleRegister(req, res, next) {
    let { email, password, vpassword } = req.body;

    if (!email) {
      return res.send({ success: false, message: "Email is required." });
    } else if (email.includes("@gmail.com")) {
      return res.send({ success: false, message: "<- Login with Google." });
    } else if (!password || !vpassword) {
      return res.send({ success: false, message: "Password is required." });
    } else if (password !== vpassword) {
      return res.send({ success: false, message: "Mismatching passwords." });
    } else if (password.length < 6) {
      return res.send({
        success: false,
        message: "Password should be at least 6 characters."
      });
    }

    email = email.toLowerCase();
    email = email.trim();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.send({ success: false, message: "Email already in use." });
    }

    const user = await new User();
    user.email = email;
    user.password = user.generateHash(password);
    user.save((err, user) => {
      if (err) {
        return console.log(err);
      }
      return next();
    });
  }

  app.post(
    "/api/register",
    handleRegister,
    passport.authenticate("local", {
      failureRedirect: "/"
    }),
    (req, res) => {
      return res.send({ success: true, user: req.user });
    }
  );

  app.post("/api/new_user", async (req, res, next) => {
    let { firstName, lastName, church, acronym, gender, email } = req.body;

    if (!firstName) {
      return res.send({ success: false, message: "First name is required." });
    } else if (!lastName) {
      return res.send({ success: false, message: "Last name is required." });
    } else if (!gender) {
      return res.send({
        success: false,
        message: "Gender selection is required."
      });
    } else if (!acronym) {
      return res.send({ success: false, message: "User acronym is required." });
    }

    const checkAcronym = await User.findOne({ acronym });

    if (checkAcronym) {
      return res.send({ success: false, message: "User acronym is taken." });
    }

    const user = await User.findOne({ email });
    user.firstName = firstName;
    user.lastName = lastName;
    user.fullName = firstName + " " + lastName;
    user.acronym = acronym;
    user.gender = gender;
    user.church = church;
    user.newUser = false;
    user.save((err, user) => {
      if (err) {
        return err;
      }
      res.send({ success: true, message: "Updating..." });
    });
  });

  /*
      LOGOUT USER
  */
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send("logout");
  });
};
