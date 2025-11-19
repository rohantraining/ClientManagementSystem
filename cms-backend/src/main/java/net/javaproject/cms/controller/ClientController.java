package net.javaproject.cms.controller;

import lombok.AllArgsConstructor;
import net.javaproject.cms.dto.ClientDto;
import net.javaproject.cms.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*") //all client can call CLient REST APIs since backend running on port 8080, React running on port 3000
@AllArgsConstructor
@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private ClientService clientService;

    //BUILD Add Client REST API
    @PostMapping
    public ResponseEntity<ClientDto> createClient(@RequestBody ClientDto clientDto){
        ClientDto savedClient =  clientService.createClient(clientDto);
        return new ResponseEntity<>(savedClient, HttpStatus.CREATED);
    }

    //BUILD Get Client by ID REST API -by binding the id
    @GetMapping("{id}")
    public ResponseEntity<ClientDto> getClientbyId(@PathVariable("id") Long clientId){
        ClientDto clientDto =  clientService.getClientbyId(clientId);
        return ResponseEntity.ok(clientDto);
    }

    //BUILD Get All Clients REST API
    @GetMapping
    public ResponseEntity<List<ClientDto>> getAllClients(){
        List< ClientDto> clients =  clientService.getAllClients();
        return ResponseEntity.ok(clients);
    }

    //BUILD Update Client REST API
    @PutMapping("{id}")
    public ResponseEntity<ClientDto> updateClient(@PathVariable("id") Long clientID, @RequestBody ClientDto updatedClient){
        ClientDto clientDto = clientService.updateClient(clientID, updatedClient);
        return  ResponseEntity.ok(clientDto);
    }

    //BUILD Delete Client by Id REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteClient(@PathVariable("id") Long clientId){
        clientService.deleteClient(clientId);
        return  ResponseEntity.ok("Client deleted successfully!");
    }
}
