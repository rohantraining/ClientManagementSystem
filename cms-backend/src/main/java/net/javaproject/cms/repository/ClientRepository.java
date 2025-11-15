package net.javaproject.cms.repository;

import net.javaproject.cms.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//passing two params- entity type, primary key type-Long id
@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {
}
