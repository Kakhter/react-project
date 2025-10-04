import React from "react";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Link to="../dml">SQL DB DML</Link>
      <button
        onClick={() => {
          navigate("../contact");
        }}
      >
        Contact
      </button>
      <Link to="../contact">Contact Page</Link>
      <h2> About Page2</h2>
      <ol>
        <li>
          <a href="https://youtu.be/26Q6X8PrxTc" target="_blank">
            MS SQL Activity Monitor{" "}
          </a>
        </li>
        <li>
          SQL Server Tech & Art:
          https://www.youtube.com/channel/UCzrP6bxiZDSbp8bb2iOPVoA
        </li>
        <li>SQL Server Report: https://youtu.be/Cv0QLUuuR1A</li>
        <li>Query Tuning</li>
        <pre>
          <code>
            {`Once you find the queries to be tuned, check if the queries are
following the basic rules for performance:
            
            Use the where condition to limit scanning scope 
            Don’t select everything
            Use inner join instead of correlated subqueries 
            Try to avoid HAVING and use WHERE
            Use inner join instead of two tables in the where clause
            DMF/DMV: https://www.youtube.com/watch?v=NUkYAOqwdpA
            select * from sys.dm_db/ dm_tran / dm_exec / dm_os
            select * from sys.dm_tran_database_transactions

            Extended Events: https://youtu.be/H4pvgXfcBfU

            `}
          </code>
        </pre>
        <li>Execution Flow</li>
        From - Where - Group By - Having - Select - order by - distinct - top
      </ol>
      <hr />
      <img src="./WhereHaving.jpeg" width="80%"></img>
      <hr />
      <li> Azure Service Bus: https://youtu.be/XqhM9vfDmqQ</li>
      <img src="./ServiceBus.jpg" alt="Service Bus" width="90%"></img>
      <br />
      Question: <br />
      1. How to get Deadlock information.<br></br>
      2. SSAS som hand on.: Cube and Dimension
      <br />
      3. Partition
      <br />
      <pre>
        <code>
          {`


JD
Design, implement, and maintain OLTP and OLAP database solutions on Microsoft SQL Server. 
Build complex stored procedures, functions, views, and SQL Server Integration Services (SSIS) packages.
Optimize database performance through indexing strategies, query tuning, partitioning, and statistics management.
Lead schema design reviews, and enforce best practices.
Perform root-cause analysis, and deliver preventive solutions.

Technical proficiency
Expert-level T-SQL with deep understanding of joins, temp tables, execution plans, 
locking, isolation levels, transactions and concurrency control.
Good experience in tuning queries
5+ years hands-on experience with Microsoft SQL Server in enterprise environments
Strong problem-solving, communication, and stakeholder management skills
Tools & ecosystem
Microsoft SQL Server 2016/2017/2019 / Azure SQL
Visual Studio Database Projects, SSDT          
          
          `}
        </code>
      </pre>
      <br></br>
      <pre>
        <code>
          {`
Key Points About DCL:
•	Scope: GRANT and REVOKE commands can be applied to individual users or roles.
A login is at the SQL Server instance level (allows access to the server).
CREATE LOGIN TestLogin WITH PASSWORD = 'StrongP@ssword123!';
if you want to use a Windows user/group:
CREATE LOGIN [DOMAIN\UserName] FROM WINDOWS; 
A user is inside a database and is mapped to a login.
USE YourDatabase;
CREATE USER TestUser FOR LOGIN TestLogin;
Roles are used to group permissions.
CREATE ROLE DataReaders;
Add User to Role
ALTER ROLE DataReaders ADD MEMBER TestUser;
Grant Permissions to Role
GRANT INSERT, UPDATE, DELETE ON SCHEMA :: dbo TO DataReaders;

✅ Summary Workflow:
1.	Create Login (server level) → CREATE LOGIN
2.	Create User (database level) → CREATE USER
3.	Create Role (database level) → CREATE ROLE
4.	Grant permissions to Role → GRANT
5.	Add User to Role → ALTER ROLE ADD MEMBER
    
    `}
        </code>
      </pre>
    </>
  );
};

export default About;
