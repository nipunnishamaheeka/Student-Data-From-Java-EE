package lk.ijse.gdse68.studentmanagementprotal.controller;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lk.ijse.gdse68.studentmanagementprotal.dto.StudentDTO;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet(urlPatterns = "/demo")
public class Demo extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Jsonb jsonb = JsonbBuilder.create();
        List<StudentDTO> o = jsonb.fromJson(req.getReader(),
                new ArrayList<StudentDTO>(){}.getClass().getGenericSuperclass());

        o.forEach(System.out::println);
    }
}
