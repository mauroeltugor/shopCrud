import request from "supertest";
import { app } from "../src/index";

describe("Products API Endpoints", () => {
    // Prueba 1
    test("Deberia traer todos los productos", async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toEqual(200);
    });

    // Prueba 2
    test("Deberia traer un producto por ID", async () => {
        const createdProduct = await request(app).post("/api/products").send({
            nameProduct: "mac book air 2023",
            priceProduct: 10000,
            desc: "ram 16 gb 512gb ssd"
        });

        const res = await request(app).get(
            `/api/products/${createdProduct.body._id}`
        );
        expect(res.statusCode).toEqual(200);
    });

    // Prueba 3
    test("Deberia crear un nuevo producto", async () => {
        const res = await request(app).post("/api/products").send({
            nameProduct: "mac book pro 2023",
            priceProduct: 10000,
            desc: "ram 32 gb 1tb ssd"
        });
        expect(res.statusCode).toEqual(200);
    });
});
