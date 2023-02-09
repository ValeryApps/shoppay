import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: "User name is required",
    },
    email: {
      type: String,
      require: "Email is required",
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: "Password is required",
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default:
        "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPayment: {
      type: String,
      default: "",
    },

    address: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        zipCode: {
          type: String,
        },
        country: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
      },
    ],
  },
  { timeStamps: true }
);

module.exports =
  mongoose.model.AppUser || mongoose.model("AppUser", userSchema);
