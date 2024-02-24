import { IUser, IUserDocument, UserModel } from "../models/user";

const UserService = {
  createUser: async (userData: IUser): Promise<IUserDocument> => {
    try {
      const newUser = new UserModel(userData);
      newUser.save();
      return newUser;
    } catch (error: any) {
      throw new Error(`${error.message}`);
    }
  },
  getUsers: async (): Promise<IUser[]> => {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      throw new Error("Error fetching users");
    }
  },
  getUserById: async (userId: string): Promise<IUser | null> => {
    try {
      const user = await UserModel.findById(userId);
      return user;
    } catch (error) {
      throw new Error("Error fetching user by ID");
    }
  },
  updateUserById: async (
    userId: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> => {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, {
        new: true,
      });
      return updatedUser;
    } catch (error) {
      throw new Error("Error updating user by ID");
    }
  },
  deleteUserById: async (userId: string): Promise<IUser | null> => {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(userId);
      return deletedUser;
    } catch (error) {
      throw new Error("Error deleting user by ID");
    }
  },
};

export default UserService;
