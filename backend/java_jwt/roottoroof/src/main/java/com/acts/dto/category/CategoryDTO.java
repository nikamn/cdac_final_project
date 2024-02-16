package com.acts.dto.category;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDTO {
    
    private Integer id;
    @NotBlank
    private String categoryName;
    @NotBlank
    private String description;
    
}
