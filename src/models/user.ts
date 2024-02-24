import mongoose, { Model, Schema } from "mongoose";

interface IUser {
  //defines the structure of user object & ensuring that any object labeled as IUser must have both username and email properties
  username: string;
  email: string;
}

interface IUserDocument extends IUser, Document {
  id: string;
}

const userSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
      },
    },
    timestamps: true,
  }
);

const UserModel: Model<IUserDocument> = mongoose.model<IUserDocument>(
  "User", //model name set im mongoose
  userSchema
);

export { IUser, IUserDocument, UserModel };
