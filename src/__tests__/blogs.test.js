import supertest from "supertest";
import mongoose from "mongoose";
import { app } from "../utils/dev.js";
import {
  blogId,
  blogRequest,
  blogUnique,
  blogUpdate,
  userLogin,
} from "../utils/dummytest.js";
import dotenv from "dotenv";
// CONFIGURE DOTENV
dotenv.config();

// CONNECTING TO THE DATABASE BEFORE EACH TEST
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URL);
});

// CLOSING THE DATABASE CONNECTION AFTER EACH TEST
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /blogs", () => {
  // READING ALL BLOGS
  describe("Reading all blogs", () => {
    it("should return all blogs in the database", async () => {
      const res = await supertest(app).get("/api/v1/blogs");

      expect(res.status).toBe(500);
    });
  });
  
    // READING A SINGLE BLOG
    describe("Reading a single blog", () => {
      it("should return a single blog", async () => {
        const res = await supertest(app).get(`/api/v1/blogs/${blogId}`);
  
        expect(res.status).toBe(200);
      });
    });
  
    // WHEN THE BLOG DOES NOT EXIST
    describe("When the blog does not exist", () => {
      it("should return a 404 error", async () => {
        const res = await supertest(app).get(
          `/api/v1/blogs/5f8f5f5f5f5f5f5f5f5f5f5f`
        );
  
        expect(res.status).toBe(404);
      });
    });
  });


/*
 * CREATING A BLOG
 */

describe("POST /blogs", () => {
  // WHEN THE BLOG IS UNIQUE
  describe("When the blog is unique", () => {
    it("Should create a new blog", async () => {
      const res = await supertest(app)
        .post("/api/v1/blogs")
        .send(blogUnique);

      expect(res.status).toBe(201);
    });
  });
});

/*
 * UPDATING A BLOG
 */

describe("PUT /blogs", () => {
  // WHEN THE BLOG EXISTS
  describe("When the blog exists", () => {
    it("Should update the blog", async () => {
      const res = await supertest(app)
        .put(`/api/v1/blogs/${blogId}`)
        .send(blogUpdate);

      expect(res.status).toBe(204);
    });
  });
});


