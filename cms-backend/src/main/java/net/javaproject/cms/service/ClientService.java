package net.javaproject.cms.service;

import net.javaproject.cms.dto.ClientDto;

import java.util.List;

public interface ClientService {
    ClientDto createClient(ClientDto clientDto);

    ClientDto getClientbyId(Long clientId);

    List<ClientDto> getAllClients();

    ClientDto updateClient(Long clientId, ClientDto updatedClient);

    void deleteClient(Long clientId);
}
