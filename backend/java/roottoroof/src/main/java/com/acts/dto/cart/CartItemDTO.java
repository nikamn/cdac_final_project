package com.acts.dto.cart;

import javax.validation.constraints.NotNull;

import com.acts.model.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDTO {
    
    private Integer id;
    private @NotNull Integer quantity;
    private @NotNull Product product;
}
