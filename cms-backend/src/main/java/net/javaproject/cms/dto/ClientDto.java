package net.javaproject.cms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

//dto class used to transfer data between client and service - response for REST APIs
public class ClientDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
