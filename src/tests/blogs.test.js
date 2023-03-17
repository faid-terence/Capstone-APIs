import app from "../server.js"
import mongoose from "mongoose";
import chai from "chai";
import chaiHttp from "chai-http";
import Blog from "../models/Blog.js";
const should = chai.should();

chai.use(chaiHttp);

describe("CRUD Test", () => {
    describe("METHODS ON BLOGS", ()=> {
        it("Should return all blogs on GET", (done) => {
            chai.
            request(app)
            .get('/api/v1/blogs')
            .end((err,res) => {
                if (err) done(err)
                else {
                    res.should.have.status(200)
                    done()
                }
            })
        });
        it("Should create a new POST", (done) => {
            chai.
            request(app)
            .post('/api/v1/blogs')
            .send({
                title: "Arificial Intelligence Test Integration",
                body: "At its simplest form, artificial intelligence is a field, which combines computer science and robust datasets, to enable problem-solving.",
                icon: "fa fa-robot"
            })
            .end((err,res) => {
                if (err) done(err)
                else {
                    res.should.have.status(500);
                    done()
                }
            })
        });
        it("Should return a specific POST ", (done) => {
            chai.
            request(app)
            .get('/api/v1/blogs/6410e5de5493297eb48ab327')
            .end((err,res) => {
                if(err) done(err)
                else{
                    res.should.have.status(200)
                    done()
                }
            })
        });
        it("Should Update a specific POST", (done) => {
            chai.
            request(app)
            .put('/api/v1/blogs/6410e1e85493297eb48ab322')
            .end((err,res) => {
                if(err) done(err)
                else {
                    res.should.have.status(401);
                    done()
                }
            })

        });
        it("Should Delete a Specific POST", (done) => {
            chai.
            request(app)
            .delete('/api/v1/blogs/6410e1e85493297eb48ab322')
            .end((err, res) => {
                if(err) done(err)
                else {
                    res.should.have.status(401);
                    done()
                }
            })
        })
    })
})