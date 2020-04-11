package org.getdata;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Gettable;
import net.sf.json.JSONObject;

public class Getgamedetails implements Controller{

	String gamedetailsid=null;
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub


		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		String read=""; //������Json����	
		JSONObject json=null;
		read=Json.SetJson(request.getReader());
		try {
			
		      json = JSONObject.fromObject(read);
		      System.out.println("App�˵�Json����"+json);
		      gamedetailsid=json.getString("gamedetailsid");
		}catch (Exception e) {
			e.printStackTrace();
		}
		String Method=request.getMethod();
		/**
		 * ��ȡ������������Żص���ı���
		 */
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		        
		System.out.println("��������ķ�����"+Method);
		
		if(true/*"POST".equals(Method)*/)  {
			System.out.println("------POST�ķ�������------");
			
	        if(DateBase_Gettable.gameDetailsid(gamedetailsid)!=null) {
	        	/*
	        	 * ���ػ�ȡ�ĳ�����Ϣ*/
	        	System.out.println("�������е�����Ϊ:"+DateBase_Gettable.gameDetailsid(gamedetailsid));
	        	response.getWriter().append(DateBase_Gettable.gameDetailsid(gamedetailsid).toString());	
	        }
	        
	        
		}else {
			System.out.println("------GET�ķ�������------");
			
		}		
		return null;
	}
}
