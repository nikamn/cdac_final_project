package com.acts.dto.checkout;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CheckoutItemDTO {

    private String productName;
    private int  quantity;
    private double price;
    private int productId;
    private int userId;

}
