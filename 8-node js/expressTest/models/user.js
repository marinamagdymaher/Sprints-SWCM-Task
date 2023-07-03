import Joi from "joi";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { createHash } from "crypto";

const hash = (password) =>
  createHash("sha256").update(password, "utf-8").digest("hex");

const allUsers = [
  {
    email: "test@gmail.com",
    password: hash("123456789@"),
  },
];

export const registerModel = async (req, res) => {
  const { email, password, repeat_password } = req.body;
  const { error, value } = registerValidation.validate(
    { email, password, repeat_password },
    {
      abortEarly: false,
    }
  );
  if (error) {
    console.log(error.message);
    return res.status(404).send({message: "Invalid Request", error: error.message});
  }
  const hashedPassword = hash(password);
  allUsers.push({
    email: email,
    password: hashedPassword,
  });

  const findUser = allUsers.find((user) => user.email == email);
  console.log(findUser);

  if (findUser) {
    const token = jwt.sign({ findUser }, process.env.JWT_SECRET);
    return res
      .status(200)
      .json({ message: "Register Successfully", email: findUser.email, token });
  }
  return res.status(404).json({ error: "Authentication Failed" });
};

export const loginModel = (req, res) => {
  const { email, password } = req.body;
  const { error, value } = loginValidation.validate(
    { email, password },
    {
      abortEarly: false,
    }
  );
  if (error) {
    return res.send("Invalid Request: " + JSON.stringify(error));
  }

  const findUser = allUsers.find((user) => user.email == email);

  if (findUser && findUser.password === hash(password)) {
    const token = jwt.sign({ findUser }, process.env.JWT_SECRET);
    return res.status(200).json({ email: findUser.email, token });
  }
  return res.status(404).json({ error: "Authentication Failed" });
  // return token;
};

export const verifyToken = (req, res, next) => {
  try {
    const [_, token] = req.headers.authorization?.split(" ");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ status: "error", message: "Unauthenticated" });
  }
};

export const loginValidation = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .min(8)
    .regex(/[ -~]*(?=[ -~])[^0-9a-zA-Z][ -~]*/)
    .required(),
});

export const registerValidation = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .email()
    .options({ messages: { "any.only": "{{#label}} is not valid," } }),
  password: Joi.string()
    .min(8)
    .regex(/[ -~]*(?=[ -~])[^0-9a-zA-Z][ -~]*/)
    .required()
    .options({ messages: { "any.only": "{{#label}} is not valid," } }),
  repeat_password: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .options({
      messages: { "any.only": "{{#label}} does not match Password" },
    }),
});
