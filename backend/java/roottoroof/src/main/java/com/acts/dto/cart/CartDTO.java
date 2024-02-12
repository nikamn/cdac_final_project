package com.acts.dto.cart;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO {
    
    private List<CartItemDTO> cartItems;
    private double totalCost;
}
