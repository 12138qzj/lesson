package org.getdata;


/*
 * δʹ�ô˹���
 * */
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Gettable;
import DateBase.DateBase_Login;
import net.sf.json.JSONObject;

public class Getgymnasium implements Controller{

	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("�����web����,�������");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		/**
		 * ��ȡ������������Żص���ı���
		 */
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		        
		System.out.println("��������ķ�����"+Method);
		
		if("POST".equals(Method.toString()))  {
			System.out.println("------POST�ķ�������------");
			String read=""; //������Json����
			//DateBase_Gettable gymnasium=new DateBase_Gettable();
//			read=Json.SetJson(request.getReader());
//	        JSONObject json = JSONObject.fromObject(read);
//	        System.out.println("App�˵�Json����"+json);
//	        String num=json.getString("userid");
	        String num="201720180321";
	        //if(num!=null) {
	    	   if(DateBase_Gettable.getGymnasium(num)!=null) {
		        	/*
		        	 * ���ػ�ȡ�ĳ�����Ϣ*/
		        	System.out.println("���ݱ��е�����Ϊ:"+DateBase_Gettable.getGymnasium(num));
		        	response.getWriter().append(DateBase_Gettable.getGymnasium(num).toString());	
		        }
	        //}
	        
	        
		}else {
			System.out.println("------GET�ķ�������------");
			
			
		}		
		return null;
	}

}
