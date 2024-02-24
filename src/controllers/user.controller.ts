import { Request, Response } from "express";
import { IUser } from "../models/user";
import UserService from "../services/user.service";

const UserController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const { username, email } = req.body;
      const userData: IUser = {
        username: username,
        email: email,
      };
      const newUser = await UserService.createUser(userData);
      if (newUser) {
        res.status(201).json(newUser);
      } else {
        res.status(404).json({ error: "Erroe Hapen" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
  getUsers: async (req: Request, res: Response) => {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getUserById: async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
      const user = await UserService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateUserById: async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const userData = req.body;

    try {
      const updatedUser = await UserService.updateUserById(userId, userData);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating user by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  deleteUserById: async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
      const deletedUser = await UserService.deleteUserById(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(deletedUser);
    } catch (error) {
      console.error("Error deleting user by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default UserController;
