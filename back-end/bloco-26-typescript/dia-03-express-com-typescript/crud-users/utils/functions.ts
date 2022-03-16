import fs from 'fs/promises';
import User from '../interfaces/User';

async function readUsers(): Promise<User[]> {
  const data = await fs.readFile('./data/users.json', 'utf-8');

  const users: User[] = JSON.parse(data);

  return users;
};

async function writeUsers(data: User[]): Promise<void> {
  await fs.writeFile('./data/users.json', JSON.stringify(data));
}

export {
  readUsers,
  writeUsers,
};
