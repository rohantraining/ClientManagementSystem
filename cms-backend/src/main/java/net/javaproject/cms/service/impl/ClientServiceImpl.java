package net.javaproject.cms.service.impl;

import lombok.AllArgsConstructor;
import net.javaproject.cms.dto.ClientDto;
import net.javaproject.cms.entity.Client;
import net.javaproject.cms.exception.ResourceNotFoundException;
import net.javaproject.cms.mapper.ClientMapper;
import net.javaproject.cms.repository.ClientRepository;
import net.javaproject.cms.service.ClientService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

//@service-tells springcontainer to create spring bean for this class
@Service
@AllArgsConstructor
public class ClientServiceImpl implements ClientService {
    private ClientRepository clientRepository;

    //create client method
    @Override
    public ClientDto createClient(ClientDto clientDto) {

        Client client = ClientMapper.mapToClient(clientDto);
        Client savedClient = clientRepository.save(client);
        return ClientMapper.mapToClientDto(savedClient);
    }

    //search client by ID-
    //if that client is not found, throw exception
    //using lambda expression
    @Override
    public ClientDto getClientbyId(Long clientId) {
        Client client = clientRepository.findById(clientId).orElseThrow(() -> new ResourceNotFoundException("Employee doesn't exist with given ID: " + clientId));
        return ClientMapper.mapToClientDto(client);
    }

    //get all clients method
    @Override
    public List<ClientDto> getAllClients() {
        List <Client> clients = clientRepository.findAll();
        return clients.stream().map((client -> ClientMapper.mapToClientDto(client))).collect(Collectors.toList());
    }

    //update Client
    //if that client with given Id is not present in DB, then throw Exception
    @Override
    public ClientDto updateClient(Long clientId, ClientDto updatedClient) {
        Client client =  clientRepository.findById(clientId).orElseThrow(() -> new ResourceNotFoundException("Employee doesn't exist with given id: " + clientId));
        client.setFirstName(updatedClient.getFirstName());
        client.setLastName(updatedClient.getLastName());
        client.setEmail(updatedClient.getEmail());

        Client updatedClientObj = clientRepository.save(client); //save method=save and update operation
        return ClientMapper.mapToClientDto(updatedClientObj);
    }
}
