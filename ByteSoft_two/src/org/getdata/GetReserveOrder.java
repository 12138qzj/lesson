package org.getdata;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.hibernate.Query;
import org.hibernate.Session;
import org.ov.HibernateSessionFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;
import org.table.Gorder;
import org.table.Gymnasium;

import DateBase.DateBase_Gettable;
import net.sf.json.JSONObject;

public  class GetReserveOrder implements Controller {

	public Gorder gorder;
	String userid;
	
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		System.out.println("��������ķ�����"+Method);
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		//String userid=request.getReader().toString();
		
		//String userid="18879942330";		
		JSONObject json=null;
		String read=Json.SetJson(request.getReader());
		try {
			
		      json = JSONObject.fromObject(read);
		      System.out.println("App�˵�Json����"+json);
		      userid=json.getString("content");
		}catch (Exception e) {
			e.printStackTrace();
		}
        
		if(true/*"POST".equals(Method)*/) {	
			System.out.println("---POST��������---");
			if(userid!=null) {
				DateBase_Gettable gettable=new DateBase_Gettable();	
				String string=gettable.getReserveOrder(userid);
				System.out.println("�������Ϊ:"+string);
				response.getWriter().append(gettable.getReserveOrder(userid));
			}
			else {
				response.getWriter().append(null);
			}
		}else {
			System.out.println("---GET��������---");
		}		
		return null;
	}
}
