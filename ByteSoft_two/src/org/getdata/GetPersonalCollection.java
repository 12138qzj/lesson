package org.getdata;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Gettable;
import net.sf.json.JSONArray;

public class GetPersonalCollection implements Controller{

	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("�����web����,�������");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		JSONArray jsonArr=null;
		
		String Method=request.getMethod();
		/**
		 * ��ȡ������������Żص���ı���
		 */
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		        
		System.out.println("��������ķ�����"+Method);
		
		if(true/*"POST".equals(Method)*/)  {
			System.out.println("------POST�ķ�������------");
			String read=""; //������Json����
			DateBase_Gettable getcollection=new DateBase_Gettable();
			//read=Json.SetJson(request.getReader());
	       // JSONObject json = JSONObject.fromObject(read);
	        //System.out.println("App�˵�Json����"+json);
	        //String num=json.getString("num");
			String userid="18879942330";
	        if(getcollection.getCollection(userid)!=null) {
	        	jsonArr=new JSONArray();
	        	/*
	        	 * ���ػ�ȡ�ĳ�����Ϣ*/
	        	System.out.println("���ݱ��е�����Ϊ:"+getcollection.getCollection(userid));
	        	for(int i=0;i<getcollection.getCollection(userid).size();i++) {
	        		System.out.println("idΪ��"+DateBase_Gettable.getGymnasium(getcollection
	        				.getCollection(userid)
	        				.get(i)
	        				.toString()));
	        		
	        		 jsonArr.add(DateBase_Gettable.getGymnasium(getcollection
		        				.getCollection(userid)
		        				.get(i)
		        				.toString()));
	        	}
	        	
	        }
	        response.getWriter().append(jsonArr.toString());	 
	        
		}else {
			System.out.println("------GET�ķ�������------");
			
		}		
		return null;
	}

}