package org.getdata;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Gettable;

public class Getgame implements Controller{

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
		
		if(true/*"POST".equals(Method)*/)  {
			System.out.println("------POST�ķ�������------");
			
	        if(DateBase_Gettable.getGame()!=null) {
	        	/*
	        	 * ���ػ�ȡ�ĳ�����Ϣ*/
	        	System.out.println("�������е�����Ϊ:"+DateBase_Gettable.getGame());
	        	response.getWriter().append(DateBase_Gettable.getGame().toString());	
	        }
	        
	        
		}else {
			System.out.println("------GET�ķ�������------");
			
		}		
		return null;
	}

}
