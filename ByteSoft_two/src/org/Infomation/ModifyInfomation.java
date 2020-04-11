package org.Infomation;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;
import org.table.Userinfo;

import DateBase.DateBaseInfomation;
import net.sf.json.JSONObject;

public class ModifyInfomation implements Controller {
	private String read=null;
	private String code=null;
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		System.out.println("��������ķ�����"+Method);
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		if("POST".equals(Method))  {
			read=Json.SetJson(request.getReader());
	        System.out.println("��ӡread"+read);
	        JSONObject json = JSONObject.fromObject(read);
	        System.out.println("�����json"+json);
	        String name=json.getString("Username");
	        String mode=json.getString("mode");
	        String context=json.getString("info");
	        if(DateBaseInfomation.ModifyInfomation(name, mode, context)) {
	        	code="200";
	        }
	        else {
	        	code="500";
	        }
		}
		else {
			
		}
		JSONObject jsonObj2 = new JSONObject();
		System.out.println("���صı��ģ�״̬"+code);
	        jsonObj2.put("code",code );
	        response.getWriter().append(jsonObj2.toString());
		return null;
	}

}
