package lk.ijse.gdse68.studentmanagementprotal.dao;

import lk.ijse.gdse68.studentmanagementprotal.dto.StudentDTO;

import java.sql.Connection;
import java.sql.SQLException;

public sealed interface StudentDAO permits StudentDAOImpl{
    String saveStudent(StudentDTO student, Connection connection);
    StudentDTO updateStudent(String id, StudentDTO student, Connection connection);
    StudentDTO getStudent(String id, Connection connection) throws SQLException;
    boolean deleteStudent(String id,Connection connection);

}
