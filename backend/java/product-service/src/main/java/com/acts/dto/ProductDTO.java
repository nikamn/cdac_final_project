package com.acts.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Integer productId;

    private String productName;

    private double price;

    private String imagePath;

    private int quantity;

    private String description;

    private int categoryId;

}
