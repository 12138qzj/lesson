package org.adddata;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Addtable;
import net.sf.json.JSONObject;

public class AddJoinGame implements Controller {
	
	
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		System.out.println("��������ķ�����"+Method);
		PrintWriter out = response.getWriter(); // ��ȡ response �������	
		JSONObject json=null;
		String read=Json.SetJson(request.getReader());
		try {			
		      json = JSONObject.fromObject(read);
		      System.out.println("App�˵�Json����"+json);
		}catch (Exception e) {
			e.printStackTrace();
		}
        
		if("POST".equals(Method)) {	
			System.out.println("---POST��������---");
			if(json!=null) {
				DateBase_Addtable Addtable=new DateBase_Addtable();	
				int result=Addtable.AddJoinGame(json);
				if(result==1) {
					System.out.println("��ӳɹ�");
					response.getWriter().append("SUCCEED");
				}else if(result==0){
					System.out.println("���ʧ��");
					response.getWriter().append("EXIST");
				}else if(result==2) {
					System.out.println("���ʧ��");
					response.getWriter().append("ERROR");
				}
			}
			else {
				response.getWriter().append("ERROR");
			}
		}else {
			System.out.println("---GET��������---");
		}		
		return null;
	}
}
