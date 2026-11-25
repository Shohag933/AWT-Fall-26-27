import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async createProduct(dto: CreateProductDto) {
        try {
            const product = this.productRepository.create(dto);
            return await this.productRepository.save(product);
        } catch (error) {
            throw error;
        }
    }

    async getProducts() {
        try {
            return await this.productRepository.find({ order: { id: "ASC" } });
        } catch (error) {
            throw error;
        }
    }

    async getProduct(id: number) {
        try {
            const product = await this.productRepository.findOne({ where: { id } });
            if (!product) {
                throw new NotFoundException("Product not found");
            }
            return product;
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(id: number, dto: UpdateProductDto) {
        try {
            const product = await this.getProduct(id);
            Object.assign(product, dto);
            return await this.productRepository.save(product);
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(id: number) {
        try {
            const product = await this.getProduct(id);
            await this.productRepository.remove(product);
            return { message: "Product deleted" };
        } catch (error) {
            throw error;
        }
    }
}