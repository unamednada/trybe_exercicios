import { NextFunction, Request, Response } from "express";
import StatusCode from "../utils/Status";
import User from "../interfaces/User";
import { readUsers } from "../utils/functions";

const attributes = ['name', 'email', 'password'];

function validateAttributes(user: User): [boolean, string | null] {
  for (let attribute of attributes) {
    if (!Object.prototype.hasOwnProperty.call(user, attribute)) {
      return [false, attribute];
    }
  }
  return [true, null];
};

function validateValues(user: User): [boolean, string | null] {
  const entries = Object.entries(user);
  for (let entry of entries) {
    const [attribute, value] = entry;
    if (!value) return [false, attribute];
  }
  return [true, null];
};

function validatePassword(password: string): boolean {
  return (password.length >= 6 && password.length <= 12);
};

function validateName(name: string): boolean {
  return (name.length >= 3);
};

async function validateEmail(email: string): Promise<boolean> {
  const re: RegExp = /\S+@\S+\.\S+/;

  const users = await readUsers();
  
  for (let user of users) {
    if (user.email === email) return false;
  }
  return re.test(email);
};

async function validateUser(req: Request, res: Response, next: NextFunction) {
  const user: User = req.body;

  let [valid, attribute] = validateAttributes(user);
  if (!valid) return res.status(StatusCode.BAD_REQUEST).send(`The field ${attribute} is mandatory`);

  [valid, attribute] = validateValues(user);
  if (!valid) return res.status(StatusCode.BAD_REQUEST).send(`The field ${attribute} can't be null or empty`);

  valid = validatePassword(user.password);
  if (!valid) return res.status(StatusCode.BAD_REQUEST).send(`Password must contain between 6 and 12 characters`);

  valid = await validateEmail(user.email);
  if (!valid) return res.status(StatusCode.BAD_REQUEST).send(`Email not valid or it already exists`);

  valid = validateName(user.name);
  if (!valid) return res.status(StatusCode.BAD_REQUEST).send(`Name must have at least 3 characters`);

  next();
};

export default validateUser;
