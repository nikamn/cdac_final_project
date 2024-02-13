package com.acts.dto.order;

import javax.validation.constraints.NotNull;

import com.acts.model.Order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {

    private Integer id;
    private @NotNull Integer userId;

    public OrderDTO(Order order) {
        this.setId(order.getId());
        //this.setUserId(order.getUserId());
    }
   
}
