1)spring.jpa.hibernate.ddl-auto=update
means automatically creates/updates db

2)Default Hikari pool connections are as below-
10 max connections (default)
10 min idle connections
reasonable timeouts
auto-recovery
auto connection checking


hikari pool size=10 means if 20 users click Get All Employees at the same instant,
only 10 requests will use DB connections.

3)ClientDto class-
dto class used to transfer data between client and service - response for REST APIs

4)ClientRepository-
@Repository means
passing two params- entity type, primary key type-Long id

5)ClientMapper class - 
used to map cliententity to client dto and clientdto to cliententityy(JPA entity)