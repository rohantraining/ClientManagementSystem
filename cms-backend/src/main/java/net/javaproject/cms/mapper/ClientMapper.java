package net.javaproject.cms.mapper;

import net.javaproject.cms.dto.ClientDto;
import net.javaproject.cms.entity.Client;

public class ClientMapper {

    // Map from Entity → DTO
    public static ClientDto mapToClientDto(Client client) {
        if(client == null) return null; // optional null check
        return new ClientDto(
                client.getId(),
                client.getFirstName(),
                client.getLastName(),
                client.getEmail()
        );
    }

    // Map from DTO → Entity
    public static Client mapToClientEntity(ClientDto clientDto) {
        if(clientDto == null) return null;
        Client client = new Client();
        client.setId(clientDto.getId());
        client.setFirstName(clientDto.getFirstName());
        client.setLastName(clientDto.getLastName());
        client.setEmail(clientDto.getEmail());
        return client;
    }
}
