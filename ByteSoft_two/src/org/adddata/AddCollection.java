package org.adddata;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.altertable.DeleteColllectionData;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Addtable;
import net.sf.json.JSONObject;

public class AddCollection implements Controller {
	
	
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("登入的web服务,更换信息");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		System.out.println("数据请求的方法："+Method);
		PrintWriter out = response.getWriter(); // 获取 response 的输出流	
		JSONObject json=null;
		String read=Json.SetJson(request.getReader());
		try {			
		      json = JSONObject.fromObject(read);
		      System.out.println("App端的Json数据"+json);
		}catch (Exception e) {
			e.printStackTrace();
		}
        
		if("POST".equals(Method)) {	
			System.out.println("---POST方法进入---");
			if(json!=null) {
				DateBase_Addtable Addtable=new DateBase_Addtable();	
				Boolean result=false;
				if(json.getString("code").equals("1")){
					result=Addtable.AddCollection(json);
				}
				if(json.getString("code").equals("0")) {
					result=DeleteColllectionData.DeleteColllectionData(json);
				}
				if(json.getString("code").equals("2")) {
					result=Addtable.AddCollection(json);
				}
				if(result) {
					System.out.println("添加成功");
					response.getWriter().append("true");
				}else {
					System.out.println("添加失败");
					response.getWriter().append("false");
				}
			}
			else {
				response.getWriter().append("false");
			}
		}else {
			System.out.println("---GET方法进入---");
		}		
		return null;
	}
}
