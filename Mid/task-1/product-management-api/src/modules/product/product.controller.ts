import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    ValidationPipe,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

const bodyPipe = new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true });

@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    async createProduct(@Body(bodyPipe) dto: CreateProductDto) {
        return await this.productService.createProduct(dto);
    }

    @Get()
    async getProducts() {
        return await this.productService.getProducts();
    }

    @Get(":id")
    async getProduct(@Param("id", ParseIntPipe) id: number) {
        return await this.productService.getProduct(id);
    }

    @Patch(":id")
    async updateProduct(
        @Param("id", ParseIntPipe) id: number,
        @Body(bodyPipe) dto: UpdateProductDto,
    ) {
        return await this.productService.updateProduct(id, dto);
    }

    @Delete(":id")
    async deleteProduct(@Param("id", ParseIntPipe) id: number) {
        return await this.productService.deleteProduct(id);
    }
}