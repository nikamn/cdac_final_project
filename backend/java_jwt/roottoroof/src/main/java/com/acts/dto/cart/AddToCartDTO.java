package com.acts.dto.cart;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AddToCartDTO {
    private Integer id;
    private @NotNull Integer productId;
    private @NotNull Integer quantity;
}
