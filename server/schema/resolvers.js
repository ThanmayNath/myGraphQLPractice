const { db } = require("../db/config.js");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const q = "SELECT * FROM user_profile";
        const data = await new Promise((resolve, reject) => {
          db.query(q, (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });
        const formattedData = data.map((user) => ({
          id: user.user_id,
          name: user.u_name,
          password: user.password,
          email: user.email_address,
        }));
        return formattedData;
      } catch (error) {
        console.error("Error retrieving users:", error);
        throw new Error("Failed to retrieve users.");
      }
    },
    user: async (parent, { id }) => {
      try {
        const q = "SELECT * FROM user_profile WHERE user_id = ?";
        const data = await new Promise((resolve, reject) => {
          db.query(q, [id], (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });
        if (data.length === 0) {
          return null; // Return null if user with the provided ID is not found
        }
        const user = data[0];
        const formattedUser = {
          id: user.user_id,
          name: user.u_name,
          password: user.password,
          email: user.email_address,
        };
        return formattedUser;
      } catch (error) {
        console.error("Error retrieving user:", error);
        throw new Error("Failed to retrieve user.");
      }
    },
    posts: async () => {
      try {
        const q = "SELECT * FROM user_post";
        const data = await new Promise((resolve, reject) => {
          db.query(q, (err, data) => {
            if (err) reject(err);
            resolve(data);
          });
        });
        const formattedData = data.map((post) => ({
          id: post.id,
          userID: post.u_id,
          title: post.title,
          description: post.desc,
          path: post.file_id,
        }));
        return formattedData;
      } catch (error) {
        console.error("Error retrieving posts:", error);
        throw new Error("Failed to retrieve user posts.");
      }
    },
  },
};

module.exports = { resolvers };
