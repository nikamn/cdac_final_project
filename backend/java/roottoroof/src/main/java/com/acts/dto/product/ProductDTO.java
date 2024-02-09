package com.acts.dto.product;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Integer id;

    private @NotNull String productName;

    private @NotNull double price;

    private @NotNull String imageUrl;

    private @NotNull int quantity;

    private @NotNull String description;

    private @NotNull int categoryId;

}
