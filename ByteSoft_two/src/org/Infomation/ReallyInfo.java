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

public class ReallyInfo implements Controller {
	private String ReallyName=null;
	private String Reallycard=null;
	private String read=null;
	private String code=null;
	public ReallyInfo() {}

	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("");
		System.out.println("�����web����,��ȡ��Ϣ����");
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
	        String account=json.getString("Username");
			Userinfo userinfo=DateBaseInfomation.getMoreInfomation(account);
			System.out.println("��ѯ�ɹ�");
			ReallyName=userinfo.getReallyName();
			Reallycard=userinfo.getNetBanking();
			if(ReallyName!=null&&Reallycard!=null) {
				code="200";
			}
			else {
				code="500";
			}
			userinfo=null;
		}
		else {
			ReallyName=null;
			Reallycard=null;
			code="500";
		}
		System.out.println("��ʵ����"+ReallyName+"��"+Reallycard);
		JSONObject jsonObj2 = new JSONObject();
	    jsonObj2.put("ReallyName",ReallyName );
	    jsonObj2.put("Reallycard",Reallycard );
	    jsonObj2.put("code", code);
	    response.getWriter().append(jsonObj2.toString());
		return null;
	}
	
}
