package org.test;


import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.sql.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;
import org.util.DatebaseConnt;

import DateBase.Icon_up;
import net.sf.json.JSONObject;

import org.Json.*;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.ov.HibernateSessionFactory;

//import org.ov.Login;

public class Login_test implements Controller {
	private String read=null;
	public Login_test(){}
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		/**
		 * �鿴ͷ�����Ϣ
		 */
		System.out.println("�����web����,����ͷ��");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		/**
		 * ��ȡ������������Żص���ı���
		 */
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		        
		System.out.println("��������ķ�����"+Method);
		if("POST".equals(Method))  {
			read=Json.SetJson(request.getReader());
			System.out.println("����qww"+read);
		}
		return null;
	}

}
