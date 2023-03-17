import request from 'supertest';
import app from '../server.js';
import Blog from '../models/Blog.js';



describe('Testing the Blog Controller', () => {
    describe('Given the blog exists', () => {
        it('it should return the blog', async() => {
            const response = await request(app).get(`/api/v1/blogs/640dc171805368ffa5aedf6e`);
            try {
                expect(response.status).toBe(200);

                
            } catch (error) {
                
                expect(response.status).toBe(404);
            }
        });
    });
    describe('Given the blog does not exist', () =>
    {
        const blogId= '640dc171805368ffa5aedf6r';
        await(app).post(`api/v1/blogs{blogid}`).expect(404);
    });
});