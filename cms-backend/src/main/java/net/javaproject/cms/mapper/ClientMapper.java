package net.javaproject.cms.mapper;

import net.javaproject.cms.dto.ClientDto;
import net.javaproject.cms.entity.Client;

public class ClientMapper {

    // Map to transfer data from Entity → DTO
    public static ClientDto mapToClientDto(Client client) {
        return new ClientDto(
                client.getId(),
                client.getFirstName(),
                client.getLastName(),
                client.getEmail()
        );
    }

    // Map to transfer data from DTO → Entity
    public static Client mapToClient(ClientDto clientDto) {
        return new Client(
                clientDto.getId(),
                clientDto.getFirstName(),
                clientDto.getLastName(),
                clientDto.getEmail()
        );
    }
}
