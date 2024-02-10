package com.acts.dto.service;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class ServiceDTO {
    private Integer id;

    private @NotNull String serviceName;

    private @NotNull double price;

    private @NotNull String imageUrl;

    private @NotNull String description;

    private int userId;

}
